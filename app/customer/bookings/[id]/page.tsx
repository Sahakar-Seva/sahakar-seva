"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Booking = {
  id?: string;
  bookingId?: string;
  serviceId?: string;
  serviceName?: string;
  workerId?: string;
  workerName?: string;
  price?: number;
  date?: string;
  time?: string;
  status?: string;
  location?: string;
};

const services = [
  {
    id: "electrician",
    name: "Electrical Repair",
    icon: "⚡",
    category: "Repairs",
    duration: "1–2 hours",
    price: 299,
  },
  {
    id: "plumber",
    name: "Plumbing",
    icon: "🔧",
    category: "Repairs",
    duration: "1–2 hours",
    price: 249,
  },
  {
    id: "home-cleaning",
    name: "Home Cleaning",
    icon: "🧹",
    category: "Cleaning",
    duration: "2–3 hours",
    price: 499,
  },
  {
    id: "carpenter",
    name: "Carpentry",
    icon: "🪚",
    category: "Repairs",
    duration: "1–2 hours",
    price: 399,
  },
  {
    id: "appliance-repair",
    name: "Appliance Repair",
    icon: "🔧",
    category: "Repairs",
    duration: "1–2 hours",
    price: 349,
  },
  {
    id: "painting",
    name: "Painting",
    icon: "🎨",
    category: "Home Services",
    duration: "3–5 hours",
    price: 699,
  },
  {
    id: "gardening",
    name: "Gardening",
    icon: "🌱",
    category: "Home Services",
    duration: "1–2 hours",
    price: 299,
  },
  {
    id: "ac-service",
    name: "AC Service",
    icon: "❄️",
    category: "Appliance Services",
    duration: "1–2 hours",
    price: 449,
  },
  {
    id: "pest-control",
    name: "Pest Control",
    icon: "🛡️",
    category: "Home Services",
    duration: "1–2 hours",
    price: 599,
  },
  {
    id: "fan-installation",
    name: "Fan Installation",
    icon: "🌀",
    category: "Installation",
    duration: "1 hour",
    price: 199,
  },
  {
    id: "washing-machine-repair",
    name: "Washing Machine Repair",
    icon: "🧺",
    category: "Appliance Services",
    duration: "1–2 hours",
    price: 399,
  },
  {
    id: "furniture-assembly",
    name: "Furniture Assembly",
    icon: "🪑",
    category: "Home Services",
    duration: "1–2 hours",
    price: 349,
  },
];

export default function BookingDetailsPage() {
  const router = useRouter();
  const params = useParams();

  const bookingId =
    typeof params.id === "string" ? params.id : "";

  const [booking, setBooking] = useState<Booking | null>(null);

  useEffect(() => {
    const storedBookings = localStorage.getItem("sahakar-seva-bookings");

    if (!storedBookings) return;

    try {
      const bookings: Booking[] = JSON.parse(storedBookings);

      const foundBooking = bookings.find(
        (item) =>
          item.id === bookingId ||
          item.bookingId === bookingId
      );

      if (foundBooking) {
        setBooking(foundBooking);
      }
    } catch (error) {
      console.error("Failed to load booking:", error);
    }
  }, [bookingId]);

  const service =
    services.find(
      (item) =>
        item.id === booking?.serviceId ||
        item.name === booking?.serviceName
    ) || services[0];

  const serviceName =
    booking?.serviceName || service.name;

  const workerName =
    booking?.workerName || "Rahul Sharma";

  const price =
    booking?.price || service.price;

  const date =
    booking?.date || "11 September 2026";

  const time =
    booking?.time || "10:00 AM";

  const isCompleted =
    booking?.status?.toLowerCase() === "completed" ||
    bookingId === "SS-2026-00118";

  const handleCancel = () => {
    const storedBookings = localStorage.getItem(
      "sahakar-seva-bookings"
    );

    if (!storedBookings) return;

    try {
      const bookings: Booking[] = JSON.parse(storedBookings);

      const updatedBookings = bookings.map((item) => {
        if (
          item.id === bookingId ||
          item.bookingId === bookingId
        ) {
          return {
            ...item,
            status: "Cancelled",
          };
        }

        return item;
      });

      localStorage.setItem(
        "sahakar-seva-bookings",
        JSON.stringify(updatedBookings)
      );

      setBooking((current) =>
        current
          ? {
              ...current,
              status: "Cancelled",
            }
          : current
      );
    } catch (error) {
      console.error("Failed to cancel booking:", error);
    }
  };

  const isCancelled =
    booking?.status?.toLowerCase() === "cancelled";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <button
            onClick={() => router.push("/")}
            className="text-xl font-bold text-green-700"
          >
            Sahakar Seva
          </button>

          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-gray-600 sm:block">
              Delhi
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
              G
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* Back */}
        <button
          onClick={() => router.push("/customer/bookings")}
          className="mb-6 text-sm font-medium text-gray-600 hover:text-green-700"
        >
          ← Back to My Bookings
        </button>

        {/* Heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium text-green-600">
              Booking Details
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              {serviceName}
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Booking ID: {bookingId}
            </p>
          </div>

          <span
            className={`w-fit rounded-full border px-4 py-2 text-sm font-medium ${
              isCancelled
                ? "border-red-200 bg-red-50 text-red-700"
                : isCompleted
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-blue-200 bg-blue-50 text-blue-700"
            }`}
          >
            {isCancelled
              ? "Cancelled"
              : isCompleted
              ? "Completed"
              : "Upcoming"}
          </span>
        </div>

        {/* Tracking */}
        {!isCompleted && !isCancelled && (
          <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Booking Status
            </h2>

            <div className="mt-8">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                    ✓
                  </div>

                  <div className="h-12 w-0.5 bg-green-500" />
                </div>

                <div className="pb-6">
                  <p className="font-semibold text-gray-900">
                    Booking Confirmed
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Your booking request has been received.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                    ✓
                  </div>

                  <div className="h-12 w-0.5 bg-green-500" />
                </div>

                <div className="pb-6">
                  <p className="font-semibold text-gray-900">
                    Worker Assigned
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {workerName} has been assigned to your service.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-green-600 bg-white text-sm font-bold text-green-600">
                    3
                  </div>

                  <div className="h-12 w-0.5 bg-gray-200" />
                </div>

                <div className="pb-6">
                  <p className="font-semibold text-gray-900">
                    Service Scheduled
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Your service is scheduled for {date} at {time}.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-sm font-bold text-gray-400">
                  4
                </div>

                <div>
                  <p className="font-semibold text-gray-400">
                    Service Completed
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    This will be updated after the service is completed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cancelled */}
        {isCancelled && (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 text-xl text-white">
                ×
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">
                  Booking Cancelled
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  This booking has been cancelled.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Completed */}
        {isCompleted && !isCancelled && (
          <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-600 text-xl text-white">
                ✓
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">
                  Service Completed
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  Your {serviceName} service was successfully completed.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Details */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            {/* Service */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Service Details
              </h2>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-xl">
                  {service.icon}
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    {serviceName}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {service.category} • {service.duration}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t pt-5">
                <p className="text-sm text-gray-500">
                  Service includes
                </p>

                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>✓ Professional service visit</li>
                  <li>✓ Inspection and basic assessment</li>
                  <li>✓ Verified cooperative worker</li>
                  <li>✓ Service completion support</li>
                </ul>
              </div>
            </div>

            {/* Worker */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Service Provider
              </h2>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                    {workerName
                      .split(" ")
                      .map((name) => name[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      {workerName}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Verified Service Provider
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      ⭐ 4.8 • 6+ years experience
                    </p>
                  </div>
                </div>

                {!isCompleted && !isCancelled && (
                  <button
                    onClick={() =>
                      alert("Contact feature coming soon")
                    }
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Contact
                  </button>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Service Location
              </h2>

              <div className="mt-5 flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100">
                  📍
                </div>

                <div>
                  <p className="font-medium text-gray-900">
                    {booking?.location || "Flat 204, Green Residency"}
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    Sector 12, Dwarka, New Delhi
                  </p>
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Date & Time
              </h2>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">Date</p>

                  <p className="mt-1 font-medium text-gray-900">
                    {date}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">Time</p>

                  <p className="mt-1 font-medium text-gray-900">
                    {time}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payment */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-gray-900">
                Payment Summary
              </h2>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Service charge
                  </span>

                  <span className="font-medium text-gray-900">
                    ₹{price}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Service visit
                  </span>

                  <span className="font-medium text-green-600">
                    Included
                  </span>
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">
                      Total
                    </span>

                    <span className="text-xl font-bold text-gray-900">
                      ₹{price}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            {!isCompleted && !isCancelled && (
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h2 className="font-semibold text-gray-900">
                  Manage Booking
                </h2>

                <div className="mt-5 space-y-3">
                  <button
                    onClick={() =>
                      router.push(
                        `/customer/book/schedule?worker=${
                          booking?.workerId || "1"
                        }&service=${
                          booking?.serviceId || service.id
                        }`
                      )
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Reschedule
                  </button>

                  <button
                    onClick={handleCancel}
                    className="w-full rounded-lg border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50"
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            )}

            {/* Review */}
            {isCompleted && !isCancelled && (
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h2 className="font-semibold text-gray-900">
                  How was your service?
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Share your experience with {workerName}.
                </p>

                <button
                  onClick={() =>
                    router.push(
                      `/customer/review/${bookingId}`
                    )
                  }
                  className="mt-5 w-full rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white hover:bg-green-700"
                >
                  Rate & Review
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Help */}
        <div className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">
                Need help with this booking?
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Our support team is here to help you.
              </p>
            </div>

            <button
              onClick={() => router.push("/customer/support")}
              className="w-fit rounded-lg border border-green-200 bg-white px-4 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-100"
            >
              Get Support
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}