// app/api/rsvp/route.ts
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

// POST: Create a new RSVP (with duplicate prevention)
export async function POST(req: Request) {
  try {
    const { fullName, attending, additionalGuestNames } = await req.json();

    // 1) Check if an RSVP already exists for this guest.
    //    If you have 'fullName' set to UNIQUE in your DB, you can also rely on the DB error.
    //    But let's do a quick check in code:
    const { data: existing, error: existingError } = await supabaseServer
    .from("rsvp")
    .select("id")
    .eq("fullname", fullName)  // use "fullname" (all lowercase)
    .maybeSingle();

    if (existingError) {
      // If there's an error with the check, handle it (e.g., table not found, etc.)
      throw existingError;
    }
    if (existing) {
      return NextResponse.json(
        { error: "RSVP already exists for this guest." },
        { status: 400 }
      );
    }

    // 2) Insert the new RSVP
    const { error: insertError } = await supabaseServer
    .from("rsvp")
    .insert({
      fullname: fullName,
      attendance: attending, // assuming your column name is attendance
      additionalguests: additionalGuestNames || [], // likewise here
    });

    if (insertError) {
      throw insertError;
    }

    return NextResponse.json({ message: "RSVP recorded!" }, { status: 201 });
  } catch (error: unknown) {
    console.error("API POST Error: ", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal error" },
      { status: 500 }
    );
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

    // 3) Delete from Supabase
    const { error: deleteError } = await supabaseServer
      .from("rsvp")
      .delete()
      .eq("id", id);

    if (deleteError) {
      throw deleteError;
    }

    return NextResponse.json({ message: "RSVP removed" });
  } catch (error: unknown) {
    console.error("API DELETE Error: ", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal error" },
      { status: 500 }
    );
  }
}
