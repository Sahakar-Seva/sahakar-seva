"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getWorkerBookings,
  updateBookingStatus,
} from "@/Firebase/firestore";

type BookingStatus =
  | "New"
  | "Upcoming"
  | "Completed"
  | "Cancelled";

type Booking = {
  id: string;
  customer: string;
  service: string;
  date: string;
  time: string;
  location: string;
  amount: number;
  status: BookingStatus;
  phone: string;
  workerId: string;
  serviceId?: string;
};

export default function WorkerBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [activeTab, setActiveTab] = useState("All");
  const [currentWorkerId, setCurrentWorkerId] = useState("1");
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState("");

  const loadBookings = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams(
        window.location.search
      );

      const workerId = params.get("worker") || "1";

      setCurrentWorkerId(workerId);

      const firebaseBookings =
        await getWorkerBookings(workerId);

      const convertedBookings: Booking[] =
        firebaseBookings.map((booking) => {
          let status: BookingStatus = "New";

          if (booking.status === "pending") {
            status = "New";
          } else if (
            booking.status === "confirmed" ||
            booking.status === "on_the_way" ||
            booking.status === "in_progress"
          ) {
            status = "Upcoming";
          } else if (
            booking.status === "completed"
          ) {
            status = "Completed";
          } else if (
            booking.status === "cancelled"
          ) {
            status = "Cancelled";
          }

          return {
            id: booking.bookingId,
            customer: "Customer",
            service: booking.serviceName,
            date: booking.date,
            time: booking.time,
            location: booking.address,
            amount: booking.amount,
            status,
            phone: "Customer contact available",
            workerId: booking.workerId,
            serviceId: booking.serviceId,
          };
        });

      setBookings(convertedBookings);
    } catch (error) {
      console.error(
        "Unable to load Firebase bookings:",
        error
      );

      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();

    window.addEventListener(
      "focus",
      loadBookings
    );

    return () => {
      window.removeEventListener(
        "focus",
        loadBookings
      );
    };
  }, []);

  /*
   * Accept booking
   */
  const acceptBooking = async (id: string) => {
    try {
      setActionLoading(id);

      await updateBookingStatus(
        id,
        "confirmed"
      );

      setBookings((currentBookings) =>
        currentBookings.map((booking) =>
          booking.id === id
            ? {
                ...booking,
                status: "Upcoming",
              }
            : booking
        )
      );
    } catch (error) {
      console.error(
        "Unable to accept booking:",
        error
      );

      alert(
        "Unable to accept booking. Please try again."
      );
    } finally {
      setActionLoading("");
    }
  };

  /*
   * Reject booking
   */
  const rejectBooking = async (id: string) => {
    try {
      setActionLoading(id);

      await updateBookingStatus(
        id,
        "cancelled"
      );

      setBookings((currentBookings) =>
        currentBookings.map((booking) =>
          booking.id === id
            ? {
                ...booking,
                status: "Cancelled",
              }
            : booking
        )
      );
    } catch (error) {
      console.error(
        "Unable to reject booking:",
        error
      );

      alert(
        "Unable to reject booking. Please try again."
      );
    } finally {
      setActionLoading("");
    }
  };

  /*
   * Complete service
   */
  const completeBooking = async (
    id: string
  ) => {
    try {
      setActionLoading(id);

      await updateBookingStatus(
        id,
        "completed"
      );

      setBookings((currentBookings) =>
        currentBookings.map((booking) =>
          booking.id === id
            ? {
                ...booking,
                status: "Completed",
              }
            : booking
        )
      );
    } catch (error) {
      console.error(
        "Unable to complete booking:",
        error
      );

      alert(
        "Unable to complete booking. Please try again."
      );
    } finally {
      setActionLoading("");
    }
  };

  const tabs = [
    "All",
    "New",
    "Upcoming",
    "Completed",
    "Cancelled",
  ];

  const filteredBookings =
    activeTab === "All"
      ? bookings
      : bookings.filter(
          (booking) =>
            booking.status === activeTab
        );

  const newCount = bookings.filter(
    (booking) =>
      booking.status === "New"
  ).length;

  const upcomingCount = bookings.filter(
    (booking) =>
      booking.status === "Upcoming"
  ).length;

  const completedCount = bookings.filter(
    (booking) =>
      booking.status === "Completed"
  ).length;

  const cancelledCount = bookings.filter(
    (booking) =>
      booking.status === "Cancelled"
  ).length;

  const statusStyles: Record<
    BookingStatus,
    string
  > = {
    New: "bg-blue-50 text-blue-700",
    Upcoming:
      "bg-green-50 text-green-700",
    Completed:
      "bg-gray-100 text-gray-700",
    Cancelled:
      "bg-red-50 text-red-700",
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/worker/dashboard"
            className="text-2xl font-bold text-green-700"
          >
            Sahakar Seva
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/worker/dashboard"
              className="hidden text-sm text-gray-600 hover:text-green-700 md:block"
            >
              Dashboard
            </Link>

            <Link
              href="/worker/services"
              className="hidden text-sm text-gray-600 hover:text-green-700 md:block"
            >
              My Services
            </Link>

            <Link
              href="/worker/earnings"
              className="hidden text-sm text-gray-600 hover:text-green-700 md:block"
            >
              Earnings
            </Link>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
              RS
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-green-700">
            Worker Dashboard
          </p>

          <h1 className="text-3xl font-bold text-gray-900">
            My Bookings
          </h1>

          <p className="mt-2 text-gray-600">
            Manage your service requests and
            upcoming work.
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Worker ID: {currentWorkerId}
          </p>
        </div>

        {/* Summary */}
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-2xl border bg-white p-5">
            <p className="text-sm text-gray-500">
              New Requests
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-600">
              {newCount}
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Awaiting your response
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <p className="text-sm text-gray-500">
              Upcoming
            </p>

            <p className="mt-2 text-3xl font-bold text-green-600">
              {upcomingCount}
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Scheduled services
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <p className="text-sm text-gray-500">
              Completed
            </p>

            <p className="mt-2 text-3xl font-bold text-gray-800">
              {completedCount}
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Successfully completed
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <p className="text-sm text-gray-500">
              Cancelled
            </p>

            <p className="mt-2 text-3xl font-bold text-red-600">
              {cancelledCount}
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Cancelled requests
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex min-w-max gap-2 rounded-xl border bg-white p-2">
            {tabs.map((tab) => {
              const count =
                tab === "All"
                  ? bookings.length
                  : bookings.filter(
                      (booking) =>
                        booking.status === tab
                    ).length;

              return (
                <button
                  key={tab}
                  onClick={() =>
                    setActiveTab(tab)
                  }
                  className={`rounded-lg px-5 py-2.5 text-sm font-medium transition ${
                    activeTab === tab
                      ? "bg-green-700 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab}

                  <span
                    className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
                      activeTab === tab
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="rounded-2xl border bg-white px-6 py-16 text-center">
            <div className="text-3xl">⏳</div>

            <h3 className="mt-4 text-lg font-semibold">
              Loading bookings...
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Fetching your bookings from Firebase.
            </p>
          </div>
        )}

        {/* Booking cards */}
        {!loading && (
          <div className="space-y-4">
            {filteredBookings.map(
              (booking) => (
                <div
                  key={booking.id}
                  className="rounded-2xl border bg-white p-5 shadow-sm"
                >
                  {/* Top */}
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                        C
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="text-lg font-semibold text-gray-900">
                            {booking.service}
                          </h2>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              statusStyles[
                                booking.status
                              ]
                            }`}
                          >
                            {booking.status}
                          </span>
                        </div>

                        <p className="mt-1 text-sm text-gray-600">
                          Booking ID:{" "}
                          {booking.id}
                        </p>
                      </div>
                    </div>

                    <div className="text-left md:text-right">
                      <p className="text-sm text-gray-500">
                        Service Amount
                      </p>

                      <p className="text-xl font-bold text-gray-900">
                        ₹{booking.amount}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mt-5 grid gap-4 border-t pt-5 md:grid-cols-3">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Customer
                      </p>

                      <p className="mt-1 font-medium text-gray-800">
                        {booking.customer}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {booking.phone}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Date & Time
                      </p>

                      <p className="mt-1 font-medium text-gray-800">
                        {booking.date}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {booking.time}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Service Location
                      </p>

                      <p className="mt-1 font-medium text-gray-800">
                        {booking.location}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex flex-wrap gap-3 border-t pt-5">
                    {booking.status ===
                      "New" && (
                      <>
                        <button
                          onClick={() =>
                            acceptBooking(
                              booking.id
                            )
                          }
                          disabled={
                            actionLoading ===
                            booking.id
                          }
                          className="rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {actionLoading ===
                          booking.id
                            ? "Updating..."
                            : "Accept Booking"}
                        </button>

                        <button
                          onClick={() =>
                            rejectBooking(
                              booking.id
                            )
                          }
                          disabled={
                            actionLoading ===
                            booking.id
                          }
                          className="rounded-lg border border-red-200 px-5 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          Reject
                        </button>
                      </>
                    )}

                    {booking.status ===
                      "Upcoming" && (
                      <button
                        onClick={() =>
                          completeBooking(
                            booking.id
                          )
                        }
                        disabled={
                          actionLoading ===
                          booking.id
                        }
                        className="rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {actionLoading ===
                        booking.id
                          ? "Updating..."
                          : "Mark Service Complete"}
                      </button>
                    )}

                    {booking.status ===
                      "Completed" && (
                      <span className="rounded-lg bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-600">
                        ✓ Service Completed
                      </span>
                    )}

                    {booking.status ===
                      "Cancelled" && (
                      <span className="rounded-lg bg-red-50 px-5 py-2.5 text-sm font-medium text-red-600">
                        Booking Cancelled
                      </span>
                    )}
                  </div>
                </div>
              )
            )}

            {/* Empty state */}
            {filteredBookings.length ===
              0 && (
              <div className="rounded-2xl border bg-white px-6 py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl">
                  📋
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  No bookings found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  There are no Firebase bookings
                  assigned to this worker yet.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Firebase info */}
        <div className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-5">
          <div className="flex gap-4">
            <div className="text-2xl">
              🔥
            </div>

            <div>
              <h3 className="font-semibold text-green-900">
                Firebase booking management
              </h3>

              <p className="mt-1 text-sm leading-6 text-green-800">
                Bookings are loaded from Firebase
                Firestore. Accepting, rejecting or
                completing a booking updates its
                status in the database.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-gray-500">
          © 2026 Sahakar Seva · Empowering
          cooperative workers
        </div>
      </footer>
    </main>
  );
}