// app/api/rsvp/route.ts
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  try {
    const { fullName, attending, additionalGuestNames } = await req.json();

    // 1. Check if an RSVP already exists for this guest.
    const { data: existing, error: existingError } = await supabaseServer
      .from("rsvp")
      .select("id")
      .eq("fullname", fullName) // use lowercase if your table was created unquoted
      .maybeSingle();

    if (existingError) {
      throw existingError;
    }
    if (existing) {
      return NextResponse.json(
        { error: "RSVP already exists for this guest." },
        { status: 400 }
      );
    }

    // 2. Insert the main RSVP row
    const { error: mainInsertError } = await supabaseServer
      .from("rsvp")
      .insert({
        fullname: fullName,
        attendance: attending, // expecting "yes" or "no"
        additionalguests: additionalGuestNames || [],
      });

    if (mainInsertError) {
      throw mainInsertError;
    }

    // 3. If additional guests are provided, insert each as its own row
    if (additionalGuestNames && additionalGuestNames.length > 0) {

      // Option B: Insert all additional guests in one call (more efficient)
      const additionalRows = additionalGuestNames.map((guestName: string) => ({
        fullname: guestName,
        attendance: "yes", // mark as attending
        additionalguests: [], // leave this empty for additional guest rows
      }));

      const { error: additionalInsertError } = await supabaseServer
        .from("rsvp")
        .insert(additionalRows);

      if (additionalInsertError) {
        throw additionalInsertError;
      }
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

// DELETE route remains the same...
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json(
        { error: "RSVP id is required" },
        { status: 400 }
      );
    }

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
