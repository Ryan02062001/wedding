// app/api/rsvp/route.ts
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  try {
    const { fullName, attending, additionalGuestNames, songRequest } = await req.json();

    // 1. Check if an RSVP already exists for this guest.
    const { data: existing, error: existingError } = await supabaseServer
      .from("rsvp")
      .select("id")
      .eq("fullname", fullName)
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
        attendance: attending,
        additionalguests: additionalGuestNames || [],
        songrequest: songRequest || null, // <--- NEW FIELD
      });

    if (mainInsertError) {
      throw mainInsertError;
    }

    // 3. If additional guests are provided, insert each as its own row
    if (additionalGuestNames && additionalGuestNames.length > 0) {
      const additionalRows = additionalGuestNames.map((guestName: string) => ({
        fullname: guestName,
        attendance: "yes",
        additionalguests: [],
        // no songrequest for additional guests
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