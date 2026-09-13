"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  getBooking,
  updateBookingStatus,
} from "@/Firebase/firestore";

type Booking = {
  bookingId: string;
  customerId: string;
  workerId: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  address: string;
  notes?: string;
  amount: number;
  status:
    | "pending"
    | "confirmed"
    | "on_the_way"
    | "in_progress"
    | "completed"
    | "cancelled";
};

const services = [
  {
    id: "electrician",
    name: "Electrical Repair",
    icon: "⚡",
    category: "Repairs",
    duration: "1–2 hours",
  },
  {
    id: "plumber",
    name: "Plumbing",
    icon: "🔧",
    category: "Repairs",
    duration: "1–2 hours",
  },
  {
    id: "home-cleaning",
    name: "Home Cleaning",
    icon: "🧹",
    category: "Cleaning",
    duration: "2–3 hours",
  },
  {
    id: "carpenter",
    name: "Carpentry",
    icon: "🪚",
    category: "Repairs",
    duration: "1–2 hours",
  },
  {
    id: "appliance-repair",
    name: "Appliance Repair",
    icon: "🔧",
    category: "Repairs",
    duration: "1–2 hours",
  },
  {
    id: "painting",
    name: "Painting",
    icon: "🎨",
    category: "Home Services",
    duration: "3–5 hours",
  },
  {
    id: "gardening",
    name: "Gardening",
    icon: "🌱",
    category: "Home Services",
    duration: "1–2 hours",
  },
  {
    id: "ac-service",
    name: "AC Service",
    icon: "❄️",
    category: "Appliance Services",
    duration: "1–2 hours",
  },
  {
    id: "pest-control",
    name: "Pest Control",
    icon: "🛡️",
    category: "Home Services",
    duration: "1–2 hours",
  },
  {
    id: "fan-installation",
    name: "Fan Installation",
    icon: "🌀",
    category: "Installation",
    duration: "1 hour",
  },
  {
    id: "washing-machine-repair",
    name: "Washing Machine Repair",
    icon: "🧺",
    category: "Appliance Services",
    duration: "1–2 hours",
  },
  {
    id: "furniture-assembly",
    name: "Furniture Assembly",
    icon: "🪑",
    category: "Home Services",
    duration: "1–2 hours",
  },
];

export default function BookingDetailsPage() {
  const router = useRouter();
  const params = useParams();

  const bookingId =
    typeof params.id === "string"
      ? params.id
      : "";

  const [booking, setBooking] =
    useState<Booking | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [actionLoading, setActionLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const loadBooking = async () => {
      try {
        setLoading(true);
        setError("");

        const firebaseBooking =
          await getBooking(bookingId);

        if (!firebaseBooking) {
          setError("Booking not found.");
          return;
        }

        setBooking(firebaseBooking);
      } catch (error) {
        console.error(
          "Unable to load booking:",
          error
        );

        setError(
          "Unable to load booking from Firebase."
        );
      } finally {
        setLoading(false);
      }
    };

    if (bookingId) {
      loadBooking();
    }
  }, [bookingId]);

  const service =
    services.find(
      (item) =>
        item.id === booking?.serviceId ||
        item.name === booking?.serviceName
    ) || {
      id: "",
      name:
        booking?.serviceName ||
        "Service",
      icon: "🛠️",
      category: "Service",
      duration: "1–2 hours",
    };

  const getStatusLabel = () => {
    if (!booking) return "";

    switch (booking.status) {
      case "pending":
        return "Pending";

      case "confirmed":
        return "Confirmed";

      case "on_the_way":
        return "Worker On The Way";

      case "in_progress":
        return "Service In Progress";

      case "completed":
        return "Completed";

      case "cancelled":
        return "Cancelled";

      default:
        return "Pending";
    }
  };

  const getStatusStyle = () => {
    if (!booking) return "";

    switch (booking.status) {
      case "pending":
        return "border-yellow-200 bg-yellow-50 text-yellow-700";

      case "confirmed":
        return "border-blue-200 bg-blue-50 text-blue-700";

      case "on_the_way":
      case "in_progress":
        return "border-purple-200 bg-purple-50 text-purple-700";

      case "completed":
        return "border-green-200 bg-green-50 text-green-700";

      case "cancelled":
        return "border-red-200 bg-red-50 text-red-700";

      default:
        return "border-gray-200 bg-gray-50 text-gray-700";
    }
  };

  const cancelBooking = async () => {
    if (!booking) return;

    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmed) return;

    try {
      setActionLoading(true);

      await updateBookingStatus(
        booking.bookingId,
        "cancelled"
      );

      setBooking({
        ...booking,
        status: "cancelled",
      });
    } catch (error) {
      console.error(
        "Unable to cancel booking:",
        error
      );

      alert(
        "Unable to cancel booking. Please try again."
      );
    } finally {
      setActionLoading(false);
    }
  };

  const notes = booking?.notes || "";

  const landmark = notes
    .split("\n")
    .find((line) =>
      line.startsWith("Landmark:")
    )
    ?.replace("Landmark:", "")
    .trim();

  const instructions = notes
    .split("\n")
    .find((line) =>
      line.startsWith("Instructions:")
    )
    ?.replace("Instructions:", "")
    .trim();

  const isCompleted =
    booking?.status === "completed";

  const isCancelled =
    booking?.status === "cancelled";

  const canCancel =
    booking?.status === "pending" ||
    booking?.status === "confirmed";

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-4xl">
            ⏳
          </div>

          <h2 className="mt-4 text-lg font-semibold">
            Loading booking...
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Fetching booking details from Firebase.
          </p>
        </div>
      </div>
    );
  }

  if (error || !booking) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <button
              onClick={() => router.push("/")}
              className="text-xl font-bold text-green-700"
            >
              Sahakar Seva
            </button>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6">
          <div className="text-5xl">
            📋
          </div>

          <h1 className="mt-5 text-2xl font-bold text-gray-900">
            Booking not found
          </h1>

          <p className="mt-2 text-gray-500">
            {error ||
              "This booking could not be found in Firebase."}
          </p>

          <button
            onClick={() =>
              router.push("/customer/bookings")
            }
            className="mt-6 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
          >
            Back to My Bookings
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
        <button
          onClick={() =>
            router.push("/customer/bookings")
          }
          className="mb-6 text-sm font-medium text-gray-600 hover:text-green-700"
        >
          ← Back to My Bookings
        </button>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium text-green-600">
              Booking Details
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              {booking.serviceName}
            </h1>

            <p className="mt-2 break-all text-sm text-gray-500">
              Booking ID: {booking.bookingId}
            </p>
          </div>

          <span
            className={`w-fit rounded-full border px-4 py-2 text-sm font-medium ${getStatusStyle()}`}
          >
            {getStatusLabel()}
          </span>
        </div>

        {/* Booking Status */}
        <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            Booking Status
          </h2>

          <div className="mt-8 space-y-0">
            <StatusStep
              number="1"
              title="Booking Request"
              description="Your booking request was submitted."
              active={true}
              completed={true}
            />

            <StatusStep
              number="2"
              title="Worker Confirmation"
              description={
                booking.status === "pending"
                  ? "Waiting for the worker to accept your request."
                  : "The worker has accepted your booking."
              }
              active={
                booking.status !== "cancelled"
              }
              completed={
                booking.status !== "pending" &&
                booking.status !== "cancelled"
              }
            />

            <StatusStep
              number="3"
              title="Service Scheduled"
              description={`${booking.date} at ${booking.time}`}
              active={
                booking.status ===
                  "confirmed" ||
                booking.status ===
                  "on_the_way" ||
                booking.status ===
                  "in_progress" ||
                booking.status ===
                  "completed"
              }
              completed={
                booking.status ===
                  "on_the_way" ||
                booking.status ===
                  "in_progress" ||
                booking.status ===
                  "completed"
              }
            />

            <StatusStep
              number="4"
              title="Service Completed"
              description={
                isCompleted
                  ? "Service successfully completed."
                  : "This will be updated after the service is completed."
              }
              active={isCompleted}
              completed={isCompleted}
              last
            />
          </div>

          {isCancelled && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
              <p className="font-semibold text-red-800">
                Booking Cancelled
              </p>

              <p className="mt-1 text-sm text-red-700">
                This booking has been cancelled.
              </p>
            </div>
          )}
        </div>

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
                    {booking.serviceName}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {service.category} •{" "}
                    {service.duration}
                  </p>
                </div>
              </div>
            </div>

            {/* Worker */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Service Provider
              </h2>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                  W
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Worker {booking.workerId}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Verified Cooperative Worker
                  </p>
                </div>
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
                    {booking.address}
                  </p>

                  {landmark && (
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-medium">
                        Landmark:
                      </span>{" "}
                      {landmark}
                    </p>
                  )}

                  {instructions && (
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-medium">
                        Instructions:
                      </span>{" "}
                      {instructions}
                    </p>
                  )}
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
                  <p className="text-xs text-gray-500">
                    Date
                  </p>

                  <p className="mt-1 font-medium text-gray-900">
                    {booking.date}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">
                    Time
                  </p>

                  <p className="mt-1 font-medium text-gray-900">
                    {booking.time}
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
                    ₹{booking.amount}
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
                      ₹{booking.amount}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Manage Booking */}
            {canCancel && (
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h2 className="font-semibold text-gray-900">
                  Manage Booking
                </h2>

                <div className="mt-5">
                  <button
                    onClick={cancelBooking}
                    disabled={actionLoading}
                    className="w-full rounded-lg border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {actionLoading
                      ? "Cancelling..."
                      : "Cancel Booking"}
                  </button>
                </div>
              </div>
            )}

            {/* Completed Review */}
            {isCompleted && (
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h2 className="font-semibold text-gray-900">
                  How was your service?
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Share your experience with the
                  cooperative worker.
                </p>

                <button
                  onClick={() =>
                    router.push(
                      `/customer/review/${booking.bookingId}`
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
              onClick={() =>
                router.push("/customer/support")
              }
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

function StatusStep({
  number,
  title,
  description,
  active,
  completed,
  last = false,
}: {
  number: string;
  title: string;
  description: string;
  active: boolean;
  completed: boolean;
  last?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
            completed
              ? "bg-green-600 text-white"
              : active
              ? "border-2 border-green-600 bg-white text-green-600"
              : "border-2 border-gray-200 bg-white text-gray-400"
          }`}
        >
          {completed ? "✓" : number}
        </div>

        {!last && (
          <div
            className={`h-12 w-0.5 ${
              completed
                ? "bg-green-500"
                : "bg-gray-200"
            }`}
          />
        )}
      </div>

      <div className={last ? "" : "pb-6"}>
        <p
          className={`font-semibold ${
            active
              ? "text-gray-900"
              : "text-gray-400"
          }`}
        >
          {title}
        </p>

        <p
          className={`mt-1 text-sm ${
            active
              ? "text-gray-500"
              : "text-gray-400"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}