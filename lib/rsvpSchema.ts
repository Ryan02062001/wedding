import * as z from "zod";

export const rsvpSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required." }),
  attending: z.enum(["yes", "no"], {
    required_error: "Please select your attendance status.",
  }),
  additionalGuestNames: z
    .array(z.string().min(1, { message: "Guest name is required." }))
    .optional(),
  // NEW FIELD
  songRequest: z.string().optional(), // Make it required if you want
});

export type RSVPFormValues = z.infer<typeof rsvpSchema>;
