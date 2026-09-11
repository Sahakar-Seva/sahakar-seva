"use client";

import { useState } from "react";

const bookings = [
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
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-4.35-4.35m2.35-5.65a8 8 0 11-16 0 8 8 0 0116 0z"
      />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5h18M6 12h12M10 19h4"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z"
      />
    </svg>
  );
}

function BookingIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5h6M9 3h6a2 2 0 012 2v1h1a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h1V5a2 2 0 012-2zM8 11h8M8 15h5"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function CancelIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 6l12 12M6 18L18 6"
      />
    </svg>
  );
}

export default function AdminBookings() {
  const [activeFilter, setActiveFilter] = useState("All Bookings");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.worker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.service.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      activeFilter === "All Bookings" ||
      (activeFilter === "Pending" && booking.status === "Pending") ||
      (activeFilter === "Confirmed" && booking.status === "Confirmed") ||
      (activeFilter === "Ongoing" && booking.status === "Ongoing") ||
      (activeFilter === "Completed" && booking.status === "Completed") ||
      (activeFilter === "Cancelled" && booking.status === "Cancelled");

    return matchesSearch && matchesFilter;
  });

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Ongoing":
        return "bg-blue-100 text-blue-700";
      case "Confirmed":
        return "bg-purple-100 text-purple-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-lg font-bold text-white">
              S
            </div>

            <div>
              <h1 className="text-lg font-bold text-gray-900">
                Sahakar Seva
              </h1>
              <p className="text-xs text-gray-500">Admin Panel</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative rounded-lg p-2 text-gray-600 hover:bg-gray-100">
              <BellIcon />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
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

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Heading */}
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

        {/* Summary Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {/* Total */}
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-green-100 text-green-600">
              <BookingIcon />
            </div>

            <p className="text-sm text-gray-500">Total Bookings</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">1,842</h3>

            <p className="mt-2 text-xs font-medium text-green-600">
              +14.8% this month
            </p>
          </div>

          {/* Pending */}
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
              <ClockIcon />
            </div>

            <p className="text-sm text-gray-500">Pending</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">38</h3>

            <p className="mt-2 text-xs font-medium text-yellow-600">
              Needs attention
            </p>
          </div>

          {/* Ongoing */}
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              <ClockIcon />
            </div>

            <p className="text-sm text-gray-500">Ongoing</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">24</h3>

            <p className="mt-2 text-xs font-medium text-blue-600">
              Currently active
            </p>
          </div>

          {/* Completed */}
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-green-100 text-green-600">
              <CheckIcon />
            </div>

            <p className="text-sm text-gray-500">Completed</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">1,286</h3>

            <p className="mt-2 text-xs font-medium text-green-600">
              69.8% of total
            </p>
          </div>

          {/* Cancelled */}
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-red-100 text-red-600">
              <CancelIcon />
            </div>

            <p className="text-sm text-gray-500">Cancelled</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">56</h3>

            <p className="mt-2 text-xs font-medium text-red-600">
              3.0% of total
            </p>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="mb-6 rounded-xl border bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </div>

              <input
                type="text"
                placeholder="Search booking, customer, worker..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <CalendarIcon />
                Date
              </button>

              <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <FilterIcon />
                More Filters
              </button>
            </div>
          </div>

          {/* Filter Pills */}
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

        {/* Desktop Table */}
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
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Booking
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Worker
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Service
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Date & Time
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {filteredBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="transition hover:bg-gray-50"
                  >
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
                        <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                          View
                        </button>

                        <button className="rounded-lg bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700 hover:bg-green-100">
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

          {/* Pagination */}
          <div className="flex flex-col gap-3 border-t px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium text-gray-700">1–8</span>{" "}
              of <span className="font-medium text-gray-700">1,842</span>{" "}
              bookings
            </p>

            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
                Previous
              </button>

              <button className="rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white">
                1
              </button>

              <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
                2
              </button>

              <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
                3
              </button>

              <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
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
                <button className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  View
                </button>

                <button className="flex-1 rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700">
                  Manage
                </button>
              </div>
            </div>
          ))}

          {filteredBookings.length === 0 && (
            <div className="rounded-xl border bg-white px-6 py-12 text-center">
              <p className="text-sm font-medium text-gray-700">
                No bookings found
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Try changing your search or filter.
              </p>
            </div>
          )}
        </div>

        {/* Booking Overview */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Booking Overview
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Current distribution of booking statuses.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-gray-600">Completed</span>
                  <span className="font-semibold text-gray-900">69.8%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-100">
                  <div
                    className="h-2 rounded-full bg-green-500"
                    style={{ width: "69.8%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-gray-600">Confirmed</span>
                  <span className="font-semibold text-gray-900">14.6%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-100">
                  <div
                    className="h-2 rounded-full bg-purple-500"
                    style={{ width: "14.6%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-gray-600">Ongoing</span>
                  <span className="font-semibold text-gray-900">7.4%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-100">
                  <div
                    className="h-2 rounded-full bg-blue-500"
                    style={{ width: "7.4%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-gray-600">Pending</span>
                  <span className="font-semibold text-gray-900">2.1%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-100">
                  <div
                    className="h-2 rounded-full bg-yellow-500"
                    style={{ width: "2.1%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-gray-600">Cancelled</span>
                  <span className="font-semibold text-gray-900">3.0%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-100">
                  <div
                    className="h-2 rounded-full bg-red-500"
                    style={{ width: "3%" }}
                  ></div>
                </div>
              </div>
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
                  69.8%
                </p>
              </div>

              <div className="rounded-lg bg-white p-4">
                <p className="text-xs text-gray-500">Active bookings</p>
                <p className="mt-1 text-xl font-bold text-green-700">62</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}