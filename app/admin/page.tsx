// app/admin/page.tsx
import { cookies } from "next/headers";
import { supabaseServer } from "@/lib/supabaseServer";

// ShadCN UI components
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

import DeleteButton from "./DeleteButton";

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

  // Query the database for all RSVP records
  const { data: rsvps, error } = await supabaseServer.from("rsvp").select("*");

  if (error) {
    // Handle any error from Supabase
    console.error(error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Error fetching RSVPs</h1>
      </div>
    );
  }

  // Compute the total unique attending guests
  const uniqueGuests = new Set<string>();

  rsvps?.forEach((rsvp) => {
    if (rsvp.attendance === "yes") {
      uniqueGuests.add(rsvp.fullName);
      if (rsvp.additionalGuests) {
        // rsvp.additionalGuests should be an array if stored as JSON
        rsvp.additionalGuests.forEach((guest: string) => {
          uniqueGuests.add(guest);
        });
      }
    }
  });

  const totalUniqueGuests = uniqueGuests.size;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
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
                {rsvps?.map((rsvp) => (
                  <TableRow key={rsvp.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{rsvp.fullName}</div>
                        {rsvp.additionalGuests &&
                          rsvp.additionalGuests.length > 0 && (
                            <ul className="ml-4 mt-1 list-disc text-sm text-gray-600">
                              {rsvp.additionalGuests.map(
                                (guest: string, idx: number) => (
                                  <li key={idx}>{guest}</li>
                                )
                              )}
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
