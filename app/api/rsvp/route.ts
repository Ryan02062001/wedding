// app/api/rsvp/route.ts
import { NextResponse } from "next/server";
import db from "../../../lib/db";

// POST: Create a new RSVP (with duplicate prevention)
export async function POST(req: Request) {
  try {
    const { fullName, attending, additionalGuestNames } = await req.json();

    // Check if an RSVP already exists for this guest.
    const existing = await new Promise<{ id: number } | undefined>((resolve, reject) => {
      db.get(
        "SELECT id FROM rsvp WHERE fullName = ?",
        [fullName],
        (err: Error | null, row: { id: number } | undefined) => {
          if (err) {
            reject(err);
          } else {
            resolve(row);
          }
        }
      );
    });

    if (existing) {
      return NextResponse.json(
        { error: "RSVP already exists for this guest." },
        { status: 400 }
      );
    }

    const query =
      "INSERT INTO rsvp (fullName, attendance, additionalGuests) VALUES (?, ?, ?)";
    const guestsJSON = JSON.stringify(additionalGuestNames);

    await new Promise<void>((resolve, reject) => {
      db.run(query, [fullName, attending, guestsJSON], function (err: Error | null) {
        if (err) {
          console.error("SQLite Error:", err);
          reject(err);
        } else {
          resolve();
        }
      });
    });

    return NextResponse.json({ message: "RSVP recorded!" }, { status: 201 });
  } catch (error: unknown) {
    console.error("API POST Error: ", error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: "Internal error" },
        { status: 500 }
      );
    }
  }
}

// DELETE: Remove an RSVP by its id
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json(
        { error: "RSVP id is required" },
        { status: 400 }
      );
    }
    await new Promise<void>((resolve, reject) => {
      db.run("DELETE FROM rsvp WHERE id = ?", [id], function (err: Error | null) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
    return NextResponse.json({ message: "RSVP removed" });
  } catch (error: unknown) {
    console.error("API DELETE Error: ", error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: "Internal error" },
        { status: 500 }
      );
    }
  }
}

