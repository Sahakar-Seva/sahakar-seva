"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Booking = {
  id: string;
  customer: string;
  service: string;
  date: string;
  time: string;
  location: string;
  amount: number;
  status: "New" | "Upcoming" | "Completed" | "Cancelled";
  phone: string;
  worker: string;
  workerId: string;
  serviceId: string;
};

const services = [
  { id: "electrician", name: "Electrician", price: 299 },
  { id: "plumber", name: "Plumber", price: 349 },
  { id: "home-cleaning", name: "Home Cleaning", price: 499 },
  { id: "carpenter", name: "Carpenter", price: 399 },
  { id: "appliance-repair", name: "Appliance Repair", price: 399 },
  { id: "painting", name: "Painting", price: 599 },
  { id: "gardening", name: "Gardening", price: 299 },
  { id: "ac-service", name: "AC Service", price: 499 },
  { id: "pest-control", name: "Pest Control", price: 599 },
  { id: "fan-installation", name: "Fan Installation", price: 299 },
  {
    id: "washing-machine-repair",
    name: "Washing Machine Repair",
    price: 399,
  },
  {
    id: "furniture-assembly",
    name: "Furniture Assembly",
    price: 299,
  },
];

const workers = [
  { id: "1", name: "Rahul Sharma" },
  { id: "2", name: "Suresh Kumar" },
  { id: "3", name: "Vikram Singh" },
  { id: "4", name: "Ramesh Gupta" },
  { id: "5", name: "Manoj Kumar" },
  { id: "6", name: "Deepak Sharma" },
];

export default function BookingSuccessPage() {
  const [workerId, setWorkerId] = useState("1");
  const [serviceId, setServiceId] = useState("electrician");
  const [date, setDate] = useState("11 Sep 2026");
  const [time, setTime] = useState("10:00 AM");

  const [copied, setCopied] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const service =
    services.find((item) => item.id === serviceId) || services[0];

  const worker =
    workers.find((item) => item.id === workerId) || workers[0];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const currentWorkerId = params.get("worker") || "1";
    const currentServiceId =
      params.get("service") || "electrician";
    const currentDate = params.get("date") || "11 Sep 2026";
    const currentTime = params.get("time") || "10:00 AM";

    setWorkerId(currentWorkerId);
    setServiceId(currentServiceId);
    setDate(currentDate);
    setTime(currentTime);
  }, []);

  useEffect(() => {
    const newBookingId = `SS-${new Date().getFullYear()}-${Date.now()
      .toString()
      .slice(-6)}`;

    setBookingId(newBookingId);

    let existingBookings: Booking[] = [];

    try {
      existingBookings = JSON.parse(
        localStorage.getItem("sahakar-seva-bookings") || "[]"
      );
    } catch {
      existingBookings = [];
    }

    const newBooking: Booking = {
      id: newBookingId,
      customer: "Amit Verma",
      service: service.name,
      date,
      time,
      location:
        "Flat 204, Green Residency, Sector 12, Dwarka, New Delhi",
      amount: service.price,
      status: "New",
      phone: "+91 98XXXXXX21",
      worker: worker.name,
      workerId,
      serviceId,
    };

    localStorage.setItem(
      "sahakar-seva-bookings",
      JSON.stringify([...existingBookings, newBooking])
    );
  }, [date, time, workerId, worker, service, serviceId]);

  const copyBookingId = async () => {
    if (!bookingId) return;

    try {
      await navigator.clipboard.writeText(bookingId);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold text-green-700"
          >
            Sahakar Seva
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/customer/bookings"
              className="text-sm text-gray-600 hover:text-green-700"
            >
              My Bookings
            </Link>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
              AV
            </div>
          </div>
        </div>
      </header>

      {/* Success section */}
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="rounded-3xl border bg-white p-8 text-center shadow-sm">
          {/* Success icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <span className="text-4xl text-green-700">✓</span>
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Booking Confirmed!
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Your service request has been successfully placed.
            {worker.name} has been notified about your booking.
          </p>

          {/* Booking ID */}
          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-gray-50 p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Booking ID
            </p>

            <div className="mt-2 flex items-center justify-center gap-3">
              <p className="text-xl font-bold text-gray-900">
                {bookingId || "Generating..."}
              </p>

              <button
                onClick={copyBookingId}
                disabled={!bookingId}
                className="rounded-lg border bg-white px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* Booking details */}
          <div className="mt-8 rounded-2xl border text-left">
            <div className="border-b p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Service
              </p>

              <div className="mt-2 flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-gray-900">
                    {service.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Worker: {worker.name}
                  </p>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                  Confirmed
                </span>
              </div>
            </div>

            <div className="grid gap-5 p-5 md:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Date & Time
                </p>

                <p className="mt-1 font-medium text-gray-800">
                  {date}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {time}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Estimated Price
                </p>

                <p className="mt-1 text-xl font-bold text-gray-900">
                  ₹{service.price}
                </p>
              </div>

              <div className="md:col-span-2">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Service Location
                </p>

                <p className="mt-1 font-medium text-gray-800">
                  Flat 204, Green Residency, Sector 12, Dwarka, New Delhi
                </p>
              </div>
            </div>
          </div>

          {/* Worker notification */}
          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-left">
            <div className="flex gap-4">
              <div className="text-2xl">🔔</div>

              <div>
                <h3 className="font-semibold text-blue-900">
                  Worker notification sent
                </h3>

                <p className="mt-1 text-sm leading-6 text-blue-800">
                  {worker.name} has received your service request.
                  The booking will appear in the worker&apos;s
                  booking dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/customer/bookings"
              className="rounded-xl bg-green-700 px-6 py-3 font-medium text-white hover:bg-green-800"
            >
              View My Bookings
            </Link>

            <Link
              href="/"
              className="rounded-xl border px-6 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Trust section */}
        <div className="mt-6 rounded-2xl border bg-white p-5 text-center">
          <p className="text-sm font-medium text-gray-800">
            🛡️ Trusted cooperative service
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Your booking is handled by a verified Sahakar Seva worker.
          </p>
        </div>
      </div>
    </main>
  );
}