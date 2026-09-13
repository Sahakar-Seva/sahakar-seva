"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/Firebase/config";
import { createBooking } from "@/Firebase/firestore";

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

  const [date, setDate] = useState("14");
  const [time, setTime] = useState("10:00 AM");

  const [address, setAddress] = useState(
    "Flat 204, Green Residency, Sector 12, Dwarka, New Delhi"
  );

  const [landmark, setLandmark] = useState("");
  const [instructions, setInstructions] = useState("");

  const [bookingId, setBookingId] = useState("");
  const [copied, setCopied] = useState(false);

  const [isCreatingBooking, setIsCreatingBooking] = useState(true);
  const [bookingError, setBookingError] = useState("");

  const service =
    services.find((item) => item.id === serviceId) || services[0];

  const worker =
    workers.find((item) => item.id === workerId) || workers[0];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setWorkerId(params.get("worker") || "1");
    setServiceId(params.get("service") || "electrician");

    setDate(params.get("date") || "14");
    setTime(params.get("time") || "10:00 AM");

    setAddress(
      params.get("address") ||
        "Flat 204, Green Residency, Sector 12, Dwarka, New Delhi"
    );

    setLandmark(params.get("landmark") || "");
    setInstructions(params.get("instructions") || "");
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setBookingError(
          "You must be logged in to create a booking."
        );
        setIsCreatingBooking(false);
        return;
      }

      try {
        setIsCreatingBooking(true);
        setBookingError("");

        const params = new URLSearchParams(window.location.search);

        const currentWorkerId = params.get("worker") || "1";
        const currentServiceId =
          params.get("service") || "electrician";

        const currentDate = params.get("date") || "14";
        const currentTime = params.get("time") || "10:00 AM";

        const currentAddress =
          params.get("address") ||
          "Flat 204, Green Residency, Sector 12, Dwarka, New Delhi";

        const currentLandmark = params.get("landmark") || "";
        const currentInstructions =
          params.get("instructions") || "";

        const selectedService =
          services.find(
            (item) => item.id === currentServiceId
          ) || services[0];

        const notes = [
          currentLandmark
            ? `Landmark: ${currentLandmark}`
            : "",
          currentInstructions
            ? `Instructions: ${currentInstructions}`
            : "",
        ]
          .filter(Boolean)
          .join("\n");

        const newBookingId = await createBooking({
          customerId: user.uid,
          workerId: currentWorkerId,
          serviceId: currentServiceId,
          serviceName: selectedService.name,
          date: `${currentDate} Sep 2026`,
          time: currentTime,
          address: currentAddress,
          ...(notes ? { notes } : {}),
          amount: selectedService.price,
        });

        setBookingId(newBookingId);
      } catch (error) {
        console.error("Failed to create booking:", error);

        setBookingError(
          "Unable to create the booking right now. Please try again."
        );
      } finally {
        setIsCreatingBooking(false);
      }
    });

    return () => unsubscribe();
  }, []);

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

  const displayDate = `${date} Sep 2026`;

  return (
    <main className="min-h-screen bg-gray-50">
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

      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="rounded-3xl border bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <span className="text-4xl text-green-700">✓</span>
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Booking Request Placed!
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Your service request has been successfully sent to{" "}
            {worker.name}.
          </p>

          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-gray-50 p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Booking ID
            </p>

            <div className="mt-2 flex items-center justify-center gap-3">
              <p className="break-all text-xl font-bold text-gray-900">
                {isCreatingBooking
                  ? "Creating..."
                  : bookingId || "Unavailable"}
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

          {bookingError && (
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-left">
              <p className="font-medium text-red-800">
                Booking Error
              </p>

              <p className="mt-1 text-sm text-red-700">
                {bookingError}
              </p>
            </div>
          )}

          <div className="mt-8 rounded-2xl border text-left">
            <div className="border-b p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Service
              </p>

              <div className="mt-2 flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-semibold text-gray-900">
                    {service.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Worker: {worker.name}
                  </p>
                </div>

                <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700">
                  Pending
                </span>
              </div>
            </div>

            <div className="grid gap-5 p-5 md:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Date & Time
                </p>

                <p className="mt-1 font-medium text-gray-800">
                  {displayDate}
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
                  {address}
                </p>

                {landmark && (
                  <p className="mt-1 text-sm text-gray-500">
                    Landmark: {landmark}
                  </p>
                )}
              </div>

              {instructions && (
                <div className="md:col-span-2">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Instructions
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {instructions}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-left">
            <div className="flex gap-4">
              <div className="text-2xl">🔔</div>

              <div>
                <h3 className="font-semibold text-blue-900">
                  Worker request sent
                </h3>

                <p className="mt-1 text-sm leading-6 text-blue-800">
                  {worker.name} has received your service request.
                  The booking is currently pending and will be
                  updated when the worker responds.
                </p>
              </div>
            </div>
          </div>

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

        <div className="mt-6 rounded-2xl border bg-white p-5 text-center">
          <p className="text-sm font-medium text-gray-800">
            🛡️ Trusted cooperative service
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Your booking is handled by a verified Sahakar Seva
            worker.
          </p>
        </div>
      </div>
    </main>
  );
}