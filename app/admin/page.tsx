// app/admin/page.tsx
import React from "react";
import db from "../../lib/db";
import { cookies } from "next/headers";

// Import ShadCN UI components
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Import the client-side DeleteButton component
import DeleteButton from "./DeleteButton";

// Define an interface for RSVP records
interface RSVP {
  id: number;
  fullName: string;
  attendance: "yes" | "no";
  additionalGuests: string | null;
}

export default async function AdminPage() {
  // PRIVATE ROUTE: Check for an admin authentication cookie.
  const cookieStore = await cookies();
  const adminAuth = cookieStore.get("admin-auth")?.value;
  if (adminAuth !== process.env.ADMIN_SECRET) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Not Authorized</h1>
      </div>
    );
  }

  // Query the database for all RSVP records (both yes and no)
  const rsvps: RSVP[] = await new Promise<RSVP[]>((resolve, reject) => {
    db.all("SELECT * FROM rsvp", [], (err: Error | null, rows: RSVP[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });

  // Process RSVP records to compute the total unique attending guests.
  const uniqueGuests = new Set<string>();
  rsvps.forEach((rsvp) => {
    if (rsvp.attendance === "yes") {
      uniqueGuests.add(rsvp.fullName);
      if (rsvp.additionalGuests) {
        try {
          const additional: string[] = JSON.parse(rsvp.additionalGuests);
          if (Array.isArray(additional)) {
            additional.forEach((guest) => uniqueGuests.add(guest));
          }
        } catch {
          return null;
        }
      }
    }
  });
  const totalUniqueGuests = uniqueGuests.size;

  return (
    <div className="min-h-screen pt-24 pb-8 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Dashboard Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">RSVP Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Total Unique Attending Guests:{" "}
              <span className="font-bold">{totalUniqueGuests}</span>
            </p>
          </CardContent>
        </Card>

        {/* RSVP Details Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              RSVP Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rsvps.map((rsvp) => (
                  <TableRow key={rsvp.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{rsvp.fullName}</div>
                        {rsvp.additionalGuests &&
                          rsvp.additionalGuests !== "null" && (
                            <ul className="ml-4 mt-1 list-disc text-sm text-gray-600">
                              {(() => {
                                try {
                                  const additional: string[] = JSON.parse(
                                    rsvp.additionalGuests
                                  );
                                  return additional.map((guest, idx) => (
                                    <li key={idx}>{guest}</li>
                                  ));
                                } catch {
                                  return null;
                                }
                              })()}
                            </ul>
                          )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {rsvp.attendance === "yes" ? (
                        <Badge variant="default">Attending</Badge>
                      ) : (
                        <Badge variant="destructive">Not Attending</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <DeleteButton id={rsvp.id} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
