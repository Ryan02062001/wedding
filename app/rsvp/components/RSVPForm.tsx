"use client";
import React from "react";
import { useForm, useWatch, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { rsvpSchema, RSVPFormValues } from "@/lib/rsvpSchema";

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
import AdditionalGuestsInput from "./AdditionalGuestsInput";
import { toast } from "@/hooks/use-toast";

const RSVPForm: React.FC = () => {
  const form = useForm<RSVPFormValues>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      fullName: "",
      attending: "yes",
      additionalGuestNames: [],
    },
  });

  // Watch the "attending" field to conditionally render additional guest input
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
        toast({
          title: "Error",
          description: result.error || "RSVP submission failed",
          variant: "destructive",
        });
        return;
      }

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
                    <Label htmlFor="attending-yes" className="text-[#BF9D3E]">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="no"
                      id="attending-no"
                      className="border border-[#BF9D3E] focus:ring-2 focus:ring-[#A3B899]"
                    />
                    <Label htmlFor="attending-no" className="text-[#BF9D3E]">
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
  );
};

export default RSVPForm;
