"use client";

import { FormEvent } from "react";
import { restaurant } from "@/data/restaurant";

export function WhatsAppReservationForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const date = String(formData.get("date") ?? "");
    const guests = String(formData.get("guests") ?? "");

    const formattedDate = date
      ? new Date(date).toLocaleString("ro-RO", {
          dateStyle: "medium",
          timeStyle: "short",
        })
      : "";

    const message = [
      `Hello, I would like to request a reservation at ${restaurant.name}.`,
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Date and time: ${formattedDate}`,
      `Number of guests: ${guests}`,
      "",
      "Please confirm availability. Thank you.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${
      restaurant.phoneWhatsApp
    }?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-8 text-black"
    >
      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-medium">Full name</span>
          <input
            name="name"
            required
            className="rounded-xl border border-gray-300 p-4 outline-none focus:border-[#9b6b43]"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium">Phone number</span>
          <input
            name="phone"
            type="tel"
            required
            className="rounded-xl border border-gray-300 p-4 outline-none focus:border-[#9b6b43]"
            placeholder="+40..."
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium">Date and time</span>
          <input
            name="date"
            type="datetime-local"
            required
            className="rounded-xl border border-gray-300 p-4 outline-none focus:border-[#9b6b43]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium">Number of guests</span>
          <input
            name="guests"
            type="number"
            min="1"
            max="20"
            required
            className="rounded-xl border border-gray-300 p-4 outline-none focus:border-[#9b6b43]"
            placeholder="2"
          />
        </label>

        <button
          type="submit"
          className="mt-2 rounded-xl bg-[#1f1f1f] px-6 py-4 font-semibold text-white transition hover:bg-[#3a3a3a]"
        >
          Request Reservation
        </button>
      </div>
    </form>
  );
}