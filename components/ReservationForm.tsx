"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ReservationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const customerName = String(
      formData.get("customer_name") ?? "",
    ).trim();

    const phone = String(formData.get("phone") ?? "").trim();

    const reservationDate = String(
      formData.get("reservation_date") ?? "",
    );

    const guests = Number(formData.get("guests"));

    if (
      !customerName ||
      !phone ||
      !reservationDate ||
      !Number.isInteger(guests) ||
      guests < 1 ||
      guests > 20
    ) {
      setStatus("error");
      setMessage("Please complete all fields correctly.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const { error } = await supabase.from("reservations").insert({
      customer_name: customerName,
      phone,
      reservation_date: new Date(reservationDate).toISOString(),
      guests,
    });

    if (error) {
      console.error(error);
      setStatus("error");
      setMessage("The reservation could not be submitted.");
      return;
    }

    form.reset();
    setStatus("success");
    setMessage("Reservation request submitted successfully.");
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
            name="customer_name"
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
            name="reservation_date"
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
          disabled={status === "loading"}
          className="mt-2 rounded-xl bg-[#1f1f1f] px-6 py-4 font-semibold text-white transition hover:bg-[#3a3a3a] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading"
            ? "Submitting..."
            : "Request Reservation"}
        </button>

        {message && (
          <p
            className={
              status === "success"
                ? "text-sm text-green-700"
                : "text-sm text-red-700"
            }
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}