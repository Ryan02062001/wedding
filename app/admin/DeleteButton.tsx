// app/admin/DeleteButton.tsx
"use client";
import React, { useState } from "react";

interface DeleteButtonProps {
  id: number;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    setLoading(true);
    const res = await fetch("/api/rsvp", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      // Optionally, refresh the page to update the table.
      window.location.reload();
    } else {
      console.error("Failed to delete RSVP");
    }
    setLoading(false);
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-red-500 hover:text-red-700"
    >
      Delete
    </button>
  );
}
