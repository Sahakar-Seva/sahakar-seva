"use client";

import { useState } from "react";

const customers = [
  {
    id: 1,
    name: "Amit Sharma",
    phone: "+91 98765 43210",
    email: "amit.sharma@gmail.com",
    joined: "12 Aug 2026",
    bookings: 14,
    spent: "₹8,450",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Verma",
    phone: "+91 98123 45678",
    email: "priya.verma@gmail.com",
    joined: "10 Aug 2026",
    bookings: 9,
    spent: "₹5,280",
    status: "Active",
  },
  {
    id: 3,
    name: "Rohit Kumar",
    phone: "+91 97654 32109",
    email: "rohit.kumar@gmail.com",
    joined: "05 Aug 2026",
    bookings: 21,
    spent: "₹12,750",
    status: "Active",
  },
  {
    id: 4,
    name: "Neha Singh",
    phone: "+91 98987 65432",
    email: "neha.singh@gmail.com",
    joined: "01 Aug 2026",
    bookings: 6,
    spent: "₹3,420",
    status: "Active",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    phone: "+91 97531 86420",
    email: "arjun.mehta@gmail.com",
    joined: "28 Jul 2026",
    bookings: 11,
    spent: "₹6,890",
    status: "Active",
  },
  {
    id: 6,
    name: "Kavita Gupta",
    phone: "+91 98234 56789",
    email: "kavita.gupta@gmail.com",
    joined: "22 Jul 2026",
    bookings: 4,
    spent: "₹2,150",
    status: "Inactive",
  },
  {
    id: 7,
    name: "Vivek Yadav",
    phone: "+91 99001 22334",
    email: "vivek.yadav@gmail.com",
    joined: "18 Jul 2026",
    bookings: 17,
    spent: "₹9,640",
    status: "Active",
  },
  {
    id: 8,
    name: "Anjali Malhotra",
    phone: "+91 98712 34567",
    email: "anjali.malhotra@gmail.com",
    joined: "15 Jul 2026",
    bookings: 8,
    spent: "₹4,720",
    status: "Suspended",
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

function UserIcon() {
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
        d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm11 10v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
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

function PauseIcon() {
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
        d="M10 9v6m4-6v6m-9 5h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

export default function AdminCustomers() {
  const [activeFilter, setActiveFilter] = useState("All Customers");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm);

    const matchesFilter =
      activeFilter === "All Customers" ||
      (activeFilter === "Active" && customer.status === "Active") ||
      (activeFilter === "Inactive" && customer.status === "Inactive") ||
      (activeFilter === "Suspended" && customer.status === "Suspended");

    return matchesSearch && matchesFilter;
  });

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
            Admin / Customers
          </p>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Customer Management
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Manage and monitor customers using Sahakar Seva.
              </p>
            </div>

            <button className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700">
              + Add Customer
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-100 text-green-600">
                <UserIcon />
              </div>

              <span className="text-xs font-medium text-green-600">
                +12.4%
              </span>
            </div>

            <p className="text-sm text-gray-500">Total Customers</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">1,842</h3>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <CheckIcon />
              </div>

              <span className="text-xs font-medium text-blue-600">
                89.2%
              </span>
            </div>

            <p className="text-sm text-gray-500">Active Customers</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">1,642</h3>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <UserIcon />
              </div>

              <span className="text-xs font-medium text-purple-600">
                This month
              </span>
            </div>

            <p className="text-sm text-gray-500">New Customers</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">126</h3>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-100 text-red-600">
                <PauseIcon />
              </div>

              <span className="text-xs font-medium text-red-600">
                Requires review
              </span>
            </div>

            <p className="text-sm text-gray-500">Suspended Customers</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">14</h3>
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
                placeholder="Search by name, email or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <FilterIcon />
              More Filters
            </button>
          </div>

          {/* Filter Pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "All Customers",
              "Active",
              "Inactive",
              "Suspended",
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
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Customer List
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {filteredCustomers.length} customers displayed
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Contact
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Joined
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Bookings
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Total Spent
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
                {filteredCustomers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="transition hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-700">
                          {customer.name.charAt(0)}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {customer.name}
                          </p>

                          <p className="text-xs text-gray-500">
                            Customer #{customer.id.toString().padStart(3, "0")}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-700">
                        {customer.phone}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {customer.email}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {customer.joined}
                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {customer.bookings}
                    </td>

                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      {customer.spent}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          customer.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : customer.status === "Inactive"
                              ? "bg-gray-100 text-gray-600"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {customer.status}
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

          {filteredCustomers.length === 0 && (
            <div className="px-6 py-12 text-center">
              <p className="text-sm font-medium text-gray-700">
                No customers found
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
              customers
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

        {/* Mobile Customer Cards */}
        <div className="space-y-4 lg:hidden">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900">Customer List</h3>
            <p className="mt-1 text-sm text-gray-500">
              {filteredCustomers.length} customers displayed
            </p>
          </div>

          {filteredCustomers.map((customer) => (
            <div
              key={customer.id}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                    {customer.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {customer.name}
                    </h4>

                    <p className="text-xs text-gray-500">
                      Customer #{customer.id.toString().padStart(3, "0")}
                    </p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    customer.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : customer.status === "Inactive"
                        ? "bg-gray-100 text-gray-600"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {customer.status}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4 border-t pt-4">
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="mt-1 text-sm font-medium text-gray-800">
                    {customer.phone}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Joined</p>
                  <p className="mt-1 text-sm font-medium text-gray-800">
                    {customer.joined}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Bookings</p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    {customer.bookings}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Total Spent</p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    {customer.spent}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  View
                </button>

                <button className="flex-1 rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700">
                  Manage
                </button>
              </div>
            </div>
          ))}

          {filteredCustomers.length === 0 && (
            <div className="rounded-xl border bg-white px-6 py-12 text-center">
              <p className="text-sm font-medium text-gray-700">
                No customers found
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Try changing your search or filter.
              </p>
            </div>
          )}
        </div>

        {/* Customer Activity Section */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Customer Activity
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Overview of customer engagement on the platform.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-gray-600">Active customers</span>
                  <span className="font-semibold text-gray-900">89.2%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-100">
                  <div
                    className="h-2 rounded-full bg-green-500"
                    style={{ width: "89.2%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-gray-600">Repeat customers</span>
                  <span className="font-semibold text-gray-900">64.8%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-100">
                  <div
                    className="h-2 rounded-full bg-blue-500"
                    style={{ width: "64.8%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-gray-600">Monthly engagement</span>
                  <span className="font-semibold text-gray-900">76.4%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-100">
                  <div
                    className="h-2 rounded-full bg-purple-500"
                    style={{ width: "76.4%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-green-50 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-600 text-white">
              <UserIcon />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Growing Customer Community
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Sahakar Seva is helping customers easily discover trusted
              cooperative workers for household and community services.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-white p-4">
                <p className="text-xs text-gray-500">New this month</p>
                <p className="mt-1 text-xl font-bold text-green-700">126</p>
              </div>

              <div className="rounded-lg bg-white p-4">
                <p className="text-xs text-gray-500">Repeat users</p>
                <p className="mt-1 text-xl font-bold text-green-700">64.8%</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}