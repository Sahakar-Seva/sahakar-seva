"use client";

import { useEffect, useState } from "react";

type BookingStatus =
  | "New"
  | "Upcoming"
  | "Pending"
  | "Confirmed"
  | "Ongoing"
  | "Completed"
  | "Cancelled";

type Booking = {
  id: string;
  customer: string;
  worker: string;
  service: string;
  date: string;
  time: string;
  amount: string;
  status: BookingStatus;
  location?: string;
  phone?: string;
};

const demoBookings: Booking[] = [
  {
    id: "SS-1001",
    customer: "Amit Sharma",
    worker: "Rahul Sharma",
    service: "Home Cleaning",
    date: "11 Sep 2026",
    time: "10:30 AM",
    amount: "₹650",
    status: "Completed",
  },
  {
    id: "SS-1002",
    customer: "Priya Verma",
    worker: "Suresh Kumar",
    service: "Plumbing",
    date: "11 Sep 2026",
    time: "12:00 PM",
    amount: "₹850",
    status: "Ongoing",
  },
  {
    id: "SS-1003",
    customer: "Rohit Kumar",
    worker: "Vikram Singh",
    service: "Electrical Repair",
    date: "11 Sep 2026",
    time: "2:30 PM",
    amount: "₹1,200",
    status: "Confirmed",
  },
  {
    id: "SS-1004",
    customer: "Neha Singh",
    worker: "Ramesh Gupta",
    service: "Appliance Repair",
    date: "12 Sep 2026",
    time: "9:00 AM",
    amount: "₹950",
    status: "Pending",
  },
  {
    id: "SS-1005",
    customer: "Arjun Mehta",
    worker: "Manoj Kumar",
    service: "Gardening",
    date: "12 Sep 2026",
    time: "11:30 AM",
    amount: "₹550",
    status: "Confirmed",
  },
  {
    id: "SS-1006",
    customer: "Kavita Gupta",
    worker: "Deepak Sharma",
    service: "Home Cleaning",
    date: "12 Sep 2026",
    time: "3:00 PM",
    amount: "₹700",
    status: "Cancelled",
  },
  {
    id: "SS-1007",
    customer: "Vivek Yadav",
    worker: "Anil Yadav",
    service: "Painting",
    date: "13 Sep 2026",
    time: "10:00 AM",
    amount: "₹1,500",
    status: "Pending",
  },
  {
    id: "SS-1008",
    customer: "Anjali Malhotra",
    worker: "Sunil Verma",
    service: "AC Service",
    date: "13 Sep 2026",
    time: "1:00 PM",
    amount: "₹800",
    status: "Completed",
  },
];

function BellIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m2.35-5.65a8 8 0 11-16 0 8 8 0 0116 0z" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M6 12h12M10 19h4" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" />
    </svg>
  );
}

function BookingIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5h6M9 3h6a2 2 0 012 2v1h1a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h1V5a2 2 0 012-2zM8 11h8M8 15h5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CancelIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M6 18L18 6" />
    </svg>
  );
}

export default function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>(demoBookings);
  const [activeFilter, setActiveFilter] = useState("All Bookings");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [modalType, setModalType] = useState<"view" | "manage" | null>(null);
  const [newStatus, setNewStatus] = useState<BookingStatus>("Pending");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("sahakar-seva-bookings");

      if (stored) {
        const parsed = JSON.parse(stored);

        if (Array.isArray(parsed) && parsed.length > 0) {
          setBookings(parsed);
        }
      }
    } catch (error) {
      console.error("Failed to load bookings:", error);
    }
  }, []);

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.worker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.service.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      activeFilter === "All Bookings" || booking.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const total = bookings.length;
  const pending = bookings.filter(
    (b) => b.status === "Pending" || b.status === "New"
  ).length;
  const ongoing = bookings.filter(
    (b) => b.status === "Ongoing" || b.status === "Upcoming"
  ).length;
  const completed = bookings.filter((b) => b.status === "Completed").length;
  const cancelled = bookings.filter((b) => b.status === "Cancelled").length;
  const confirmed = bookings.filter((b) => b.status === "Confirmed").length;

  const percentage = (value: number) =>
    total === 0 ? 0 : Number(((value / total) * 100).toFixed(1));

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Ongoing":
      case "Upcoming":
        return "bg-blue-100 text-blue-700";
      case "Confirmed":
        return "bg-purple-100 text-purple-700";
      case "Pending":
      case "New":
        return "bg-yellow-100 text-yellow-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const openView = (booking: Booking) => {
    setSelectedBooking(booking);
    setModalType("view");
  };

  const openManage = (booking: Booking) => {
    setSelectedBooking(booking);
    setNewStatus(booking.status);
    setModalType("manage");
  };

  const updateStatus = () => {
    if (!selectedBooking) return;

    const updatedBookings = bookings.map((booking) =>
      booking.id === selectedBooking.id
        ? { ...booking, status: newStatus }
        : booking
    );

    setBookings(updatedBookings);

    localStorage.setItem(
      "sahakar-seva-bookings",
      JSON.stringify(updatedBookings)
    );

    setSelectedBooking({
      ...selectedBooking,
      status: newStatus,
    });

    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-lg font-bold text-white">
              S
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Sahakar Seva</h1>
              <p className="text-xs text-gray-500">Admin Panel</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative rounded-lg p-2 text-gray-600 hover:bg-gray-100">
              <BellIcon />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="hidden items-center gap-3 sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-700">
                A
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Admin</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="mb-1 text-sm font-medium text-green-600">
            Admin / Bookings
          </p>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Booking Management
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Monitor and manage service bookings across the platform.
          </p>
        </div>

        {/* Summary */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            {
              label: "Total Bookings",
              value: total,
              icon: <BookingIcon />,
              bg: "bg-green-100",
              text: "text-green-600",
              note: "All bookings",
            },
            {
              label: "Pending",
              value: pending,
              icon: <ClockIcon />,
              bg: "bg-yellow-100",
              text: "text-yellow-600",
              note: "Needs attention",
            },
            {
              label: "Ongoing",
              value: ongoing,
              icon: <ClockIcon />,
              bg: "bg-blue-100",
              text: "text-blue-600",
              note: "Currently active",
            },
            {
              label: "Completed",
              value: completed,
              icon: <CheckIcon />,
              bg: "bg-green-100",
              text: "text-green-600",
              note: `${percentage(completed)}% of total`,
            },
            {
              label: "Cancelled",
              value: cancelled,
              icon: <CancelIcon />,
              bg: "bg-red-100",
              text: "text-red-600",
              note: `${percentage(cancelled)}% of total`,
            },
          ].map((card) => (
            <div
              key={card.label}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg ${card.bg} ${card.text}`}
              >
                {card.icon}
              </div>
              <p className="text-sm text-gray-500">{card.label}</p>
              <h3 className="mt-1 text-2xl font-bold text-gray-900">
                {card.value}
              </h3>
              <p className={`mt-2 text-xs font-medium ${card.text}`}>
                {card.note}
              </p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="mb-6 rounded-xl border bg-white p-4 shadow-sm">
          <div className="relative w-full lg:max-w-md">
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </div>

            <input
              type="text"
              placeholder="Search booking, customer, worker..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "All Bookings",
              "Pending",
              "Confirmed",
              "Ongoing",
              "Completed",
              "Cancelled",
            ].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeFilter === filter
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden overflow-hidden rounded-xl border bg-white shadow-sm lg:block">
          <div className="border-b px-6 py-5">
            <h3 className="font-semibold text-gray-900">Booking List</h3>
            <p className="mt-1 text-sm text-gray-500">
              {filteredBookings.length} bookings displayed
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b bg-gray-50">
                <tr>
                  {[
                    "Booking",
                    "Customer",
                    "Worker",
                    "Service",
                    "Date & Time",
                    "Amount",
                    "Status",
                    "Action",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="transition hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">
                        {booking.id}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Service Booking
                      </p>
                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-gray-800">
                      {booking.customer}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-700">
                      {booking.worker}
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700">
                        {booking.service}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-800">{booking.date}</p>
                      <p className="mt-1 text-xs text-gray-500">
                        {booking.time}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      {booking.amount}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                          booking.status
                        )}`}
                      >
                        {booking.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openView(booking)}
                          className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                        >
                          View
                        </button>

                        <button
                          onClick={() => openManage(booking)}
                          className="rounded-lg bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700 hover:bg-green-100"
                        >
                          Manage
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredBookings.length === 0 && (
            <div className="px-6 py-12 text-center">
              <p className="text-sm font-medium text-gray-700">
                No bookings found
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Try changing your search or filter.
              </p>
            </div>
          )}
        </div>

        {/* Mobile */}
        <div className="space-y-4 lg:hidden">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900">Booking List</h3>
            <p className="mt-1 text-sm text-gray-500">
              {filteredBookings.length} bookings displayed
            </p>
          </div>

          {filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    {booking.id}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {booking.service}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                    booking.status
                  )}`}
                >
                  {booking.status}
                </span>
              </div>

              <div className="mt-5 space-y-3 border-t pt-4">
                <div className="flex justify-between gap-4">
                  <span className="text-xs text-gray-500">Customer</span>
                  <span className="text-sm font-medium text-gray-800">
                    {booking.customer}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-xs text-gray-500">Worker</span>
                  <span className="text-sm font-medium text-gray-800">
                    {booking.worker}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-xs text-gray-500">Date</span>
                  <span className="text-sm text-gray-800">
                    {booking.date}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-xs text-gray-500">Time</span>
                  <span className="text-sm text-gray-800">
                    {booking.time}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-xs text-gray-500">Amount</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {booking.amount}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                <button
                  onClick={() => openView(booking)}
                  className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  View
                </button>

                <button
                  onClick={() => openManage(booking)}
                  className="flex-1 rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
                >
                  Manage
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Booking Overview
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Current distribution of booking statuses.
            </p>

            <div className="mt-6 space-y-5">
              {[
                ["Completed", completed, "bg-green-500"],
                ["Confirmed", confirmed, "bg-purple-500"],
                ["Ongoing", ongoing, "bg-blue-500"],
                ["Pending", pending, "bg-yellow-500"],
                ["Cancelled", cancelled, "bg-red-500"],
              ].map(([label, value, color]) => {
                const numericValue = Number(value);
                const percent = percentage(numericValue);

                return (
                  <div key={label as string}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-gray-600">{label}</span>
                      <span className="font-semibold text-gray-900">
                        {percent}%
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-gray-100">
                      <div
                        className={`h-2 rounded-full ${color}`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border bg-green-50 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-600 text-white">
              <BookingIcon />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Smooth Service Delivery
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Admins can monitor the complete booking lifecycle and help
              resolve issues between customers and cooperative workers.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-white p-4">
                <p className="text-xs text-gray-500">Completion rate</p>
                <p className="mt-1 text-xl font-bold text-green-700">
                  {percentage(completed)}%
                </p>
              </div>

              <div className="rounded-lg bg-white p-4">
                <p className="text-xs text-gray-500">Active bookings</p>
                <p className="mt-1 text-xl font-bold text-green-700">
                  {pending + ongoing + confirmed}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedBooking && modalType && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setModalType(null)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-green-600">
                  Booking Details
                </p>
                <h3 className="mt-1 text-xl font-bold text-gray-900">
                  {selectedBooking.id}
                </h3>
              </div>

              <button
                onClick={() => setModalType(null)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between gap-4">
                <span className="text-sm text-gray-500">Customer</span>
                <span className="text-sm font-medium text-gray-900">
                  {selectedBooking.customer}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-sm text-gray-500">Worker</span>
                <span className="text-sm font-medium text-gray-900">
                  {selectedBooking.worker}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-sm text-gray-500">Service</span>
                <span className="text-sm font-medium text-gray-900">
                  {selectedBooking.service}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-sm text-gray-500">Date & Time</span>
                <span className="text-sm font-medium text-gray-900">
                  {selectedBooking.date}, {selectedBooking.time}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-sm text-gray-500">Amount</span>
                <span className="text-sm font-bold text-gray-900">
                  {selectedBooking.amount}
                </span>
              </div>

              {selectedBooking.location && (
                <div className="flex justify-between gap-4">
                  <span className="text-sm text-gray-500">Location</span>
                  <span className="text-right text-sm font-medium text-gray-900">
                    {selectedBooking.location}
                  </span>
                </div>
              )}

              {selectedBooking.phone && (
                <div className="flex justify-between gap-4">
                  <span className="text-sm text-gray-500">Phone</span>
                  <span className="text-sm font-medium text-gray-900">
                    {selectedBooking.phone}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between border-t pt-4">
                <span className="text-sm text-gray-500">Status</span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                    selectedBooking.status
                  )}`}
                >
                  {selectedBooking.status}
                </span>
              </div>
            </div>

            {modalType === "manage" && (
              <div className="mt-6 border-t pt-5">
                <label className="text-sm font-medium text-gray-700">
                  Change Booking Status
                </label>

                <select
                  value={newStatus}
                  onChange={(e) =>
                    setNewStatus(e.target.value as BookingStatus)
                  }
                  className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                >
                  <option value="New">New</option>
                  <option value="Upcoming">Upcoming</option>
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>

                <button
                  onClick={updateStatus}
                  className="mt-4 w-full rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
                >
                  Save Status
                </button>
              </div>
            )}

            {modalType === "view" && (
              <button
                onClick={() => setModalType(null)}
                className="mt-6 w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Close
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}