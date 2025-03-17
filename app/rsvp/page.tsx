"use client";

import React from "react";
import { useForm, useWatch, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Import the toast function from your ShadCN UI hook
import { toast } from "@/hooks/use-toast";

// Import icons for the new additional guest UI
import { PlusCircle, Trash2 } from "lucide-react";

// ─── 1. Define the Zod Schema ─────────────────────────────────────────────
const rsvpSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required." }),
  attending: z.enum(["yes", "no"], {
    required_error: "Please select your attendance status.",
  }),
  additionalGuestNames: z
    .array(z.string().min(1, { message: "Guest name is required." }))
    .optional(),
});

// Infer the form's types from the schema
type RSVPFormValues = z.infer<typeof rsvpSchema>;

// ─── 2. Create the New Additional Guests Input Component ──────────────────
interface AdditionalGuestsInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
}

const AdditionalGuestsInput: React.FC<AdditionalGuestsInputProps> = ({
  value,
  onChange,
  error,
}) => {
  return (
    <div className="space-y-4">
      {value.map((guest, index) => (
        <div key={index} className="space-y-2 p-4 border rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              Additional Guest {index + 1}
            </h3>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => {
                const updatedGuests = value.filter((_, i) => i !== index);
                onChange(updatedGuests);
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor={`guest-name-${index}`}>Name</Label>
            <Input
              id={`guest-name-${index}`}
              placeholder="Enter guest's name"
              value={guest}
              onChange={(e) => {
                const updatedGuests = [...value];
                updatedGuests[index] = e.target.value;
                onChange(updatedGuests);
              }}
              required
            />
          </div>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        onClick={() => onChange([...value, ""])}
        className="w-full"
      >
        <PlusCircle className="mr-2 h-4 w-4" /> Add Additional Guest
      </Button>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

// ─── 3. The Updated RSVPPage Component ─────────────────────────────────────
export default function RSVPPage() {
  const form = useForm<RSVPFormValues>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      fullName: "",
      attending: "yes",
      additionalGuestNames: [],
    },
  });

  // Watch the "attending" field so we conditionally render the additional guests input.
  const attendingValue = useWatch({ control: form.control, name: "attending" });

  const onSubmit: SubmitHandler<RSVPFormValues> = async (data) => {
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        // If an error occurs (e.g. duplicate submission), show an error toast
        toast({
          title: "Error",
          description: result.error || "RSVP submission failed",
          variant: "destructive",
        });
        return;
      }

      // On success, show a success toast
      toast({
        title: "Success",
        description: result.message || "RSVP submitted successfully!",
        variant: "default",
      });
      form.reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="h-full flex items-center justify-center px-4 py-36">
      <div className="rounded-lg shadow-lg p-8 max-w-md w-full bg-[#FEFEFE] border border-[#BF9D3E]">
        <h1 className="text-2xl font-bold mb-4 text-center text-[#BF9D3E]">
          Wedding RSVP
        </h1>
        <p className="text-center text-[#A3B899] mb-6">
          Kindly fill out the form below to let us know if you&apos;ll be
          joining us!
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name Field */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#BF9D3E]">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First and Last Name"
                      {...field}
                      className="border border-[#BF9D3E] focus:ring-2 focus:ring-[#A3B899]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Attending Radio Group */}
            <FormField
              control={form.control}
              name="attending"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#BF9D3E]">
                    Will you be attending?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex space-x-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="yes"
                          id="attending-yes"
                          className="border border-[#BF9D3E] focus:ring-2 focus:ring-[#A3B899]"
                        />
                        <Label
                          htmlFor="attending-yes"
                          className="text-[#BF9D3E]"
                        >
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="no"
                          id="attending-no"
                          className="border border-[#BF9D3E] focus:ring-2 focus:ring-[#A3B899]"
                        />
                        <Label
                          htmlFor="attending-no"
                          className="text-[#BF9D3E]"
                        >
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Additional Guests Input (only if attending) */}
            {attendingValue === "yes" && (
              <FormField
                control={form.control}
                name="additionalGuestNames"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-[#BF9D3E]">
                      Additional Guest Names (if you&apos;re bringing any)
                    </FormLabel>
                    <FormControl>
                      <AdditionalGuestsInput
                        value={field.value || []}
                        onChange={field.onChange}
                        error={fieldState.error?.message}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <Button
              type="submit"
              className="w-full bg-[#A3B899] text-[#FEFEFE] hover:bg-[#8fa67d]"
            >
              Submit RSVP
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
