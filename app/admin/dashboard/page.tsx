"use client";

import Link from "next/link";

function BellIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function WorkerIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
      <path d="M16 5h4M18 3v4" />
    </svg>
  );
}

function BookingIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export default function AdminDashboard() {
  const recentBookings = [
    {
      customer: "Amit Verma",
      worker: "Rahul Sharma",
      service: "Electrical Repair",
      date: "18 Sep 2026",
      amount: "₹499",
      status: "Completed",
    },
    {
      customer: "Priya Mehta",
      worker: "Suresh Kumar",
      service: "Plumbing Repair",
      date: "18 Sep 2026",
      amount: "₹699",
      status: "In Progress",
    },
    {
      customer: "Neha Kapoor",
      worker: "Vikram Singh",
      service: "Home Cleaning",
      date: "17 Sep 2026",
      amount: "₹899",
      status: "Confirmed",
    },
    {
      customer: "Rohit Kumar",
      worker: "Anil Yadav",
      service: "Fan Installation",
      date: "17 Sep 2026",
      amount: "₹499",
      status: "Pending",
    },
  ];

  const verificationRequests = [
    {
      name: "Ramesh Gupta",
      service: "Plumbing",
      submitted: "2 hours ago",
      initials: "RG",
    },
    {
      name: "Manoj Kumar",
      service: "Carpentry",
      submitted: "5 hours ago",
      initials: "MK",
    },
    {
      name: "Deepak Sharma",
      service: "Electrical",
      submitted: "Yesterday",
      initials: "DS",
    },
  ];

  const popularServices = [
    { name: "Electrical Repair", bookings: 342, width: "88%" },
    { name: "Home Cleaning", bookings: 286, width: "74%" },
    { name: "Plumbing Repair", bookings: 251, width: "65%" },
    { name: "Carpentry", bookings: 194, width: "50%" },
    { name: "Appliance Installation", bookings: 156, width: "40%" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-lg font-bold text-white">
              S
            </div>

            <div>
              <h1 className="text-lg font-bold">Sahakar Seva</h1>
              <p className="text-xs text-gray-500">
                Cooperative services platform
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-gray-600 lg:flex">
            <Link
              href="/admin/dashboard"
              className="font-semibold text-green-700"
            >
              Dashboard
            </Link>

            <Link href="/admin/workers" className="hover:text-green-700">
              Workers
            </Link>

            <Link href="/admin/customers" className="hover:text-green-700">
              Customers
            </Link>

            <Link href="/admin/bookings" className="hover:text-green-700">
              Bookings
            </Link>

            <Link href="/admin/services" className="hover:text-green-700">
              Services
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
              <BellIcon />
            </button>

            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">Admin</p>
              <p className="text-xs text-gray-500">
                Platform Administrator
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
              A
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Breadcrumb + Title */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
              <span>Admin</span>
              <span>/</span>
              <span className="text-gray-800">Dashboard</span>
            </div>

            <h2 className="text-2xl font-bold">Admin Dashboard</h2>

            <p className="mt-2 text-gray-500">
              Monitor and manage the Sahakar Seva cooperative platform.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <span>Last 30 Days</span>
              <span>▾</span>
            </button>

            <Link
              href="/admin/bookings"
              className="flex items-center gap-2 rounded-xl bg-green-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-800"
            >
              <PlusIcon />
              Quick Action
            </Link>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <WorkerIcon />
              </div>

              <span className="text-xs font-medium text-green-700">
                +12.4%
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">Total Workers</p>

            <p className="mt-1 text-2xl font-bold">248</p>

            <p className="mt-2 text-xs text-gray-500">
              216 verified workers
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-700">
                <UsersIcon />
              </div>

              <span className="text-xs font-medium text-green-700">
                +8.7%
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">Total Customers</p>

            <p className="mt-1 text-2xl font-bold">1,842</p>

            <p className="mt-2 text-xs text-gray-500">
              126 new this month
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <BookingIcon />
              </div>

              <span className="text-xs font-medium text-green-700">
                +15.2%
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">Active Bookings</p>

            <p className="mt-1 text-2xl font-bold">126</p>

            <p className="mt-2 text-xs text-gray-500">
              Across the platform
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-700">
                <CheckIcon />
              </div>

              <span className="text-xs font-medium text-green-700">
                +18.1%
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Completed Services
            </p>

            <p className="mt-1 text-2xl font-bold">1,286</p>

            <p className="mt-2 text-xs text-gray-500">
              This month
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="mt-7 grid gap-7 lg:grid-cols-[1fr_360px]">
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Booking Overview</h3>

                <p className="mt-1 text-sm text-gray-500">
                  Platform bookings over the last 7 days
                </p>
              </div>

              <Link
                href="/admin/reports"
                className="text-sm font-semibold text-green-700 hover:text-green-800"
              >
                View Reports
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-7 items-end gap-3">
              {[
                { day: "Mon", height: "55%", value: "82" },
                { day: "Tue", height: "68%", value: "104" },
                { day: "Wed", height: "76%", value: "118" },
                { day: "Thu", height: "61%", value: "96" },
                { day: "Fri", height: "88%", value: "132" },
                { day: "Sat", height: "100%", value: "148" },
                { day: "Sun", height: "72%", value: "109" },
              ].map((item) => (
                <div
                  key={item.day}
                  className="flex h-52 flex-col items-center justify-end"
                >
                  <span className="mb-2 text-xs font-medium text-gray-500">
                    {item.value}
                  </span>

                  <div className="flex h-40 w-full items-end rounded-lg bg-gray-50">
                    <div
                      className="w-full rounded-lg bg-green-600"
                      style={{ height: item.height }}
                    />
                  </div>

                  <span className="mt-3 text-xs text-gray-400">
                    {item.day}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
              <div>
                <p className="text-xs text-gray-500">Total Bookings</p>
                <p className="mt-1 text-lg font-bold">789</p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Average / Day</p>
                <p className="mt-1 text-lg font-bold">113</p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Success Rate</p>
                <p className="mt-1 text-lg font-bold text-green-700">
                  94.6%
                </p>
              </div>
            </div>
          </section>

          {/* Verification Requests */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Worker Verification</h3>

                <p className="mt-1 text-sm text-gray-500">
                  Pending verification requests
                </p>
              </div>

              <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700">
                8 Pending
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {verificationRequests.map((worker) => (
                <div
                  key={worker.name}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-800">
                    {worker.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                      {worker.name}
                    </p>

                    <p className="text-xs text-gray-500">
                      {worker.service} · {worker.submitted}
                    </p>
                  </div>

                  <Link
                    href="/admin/workers"
                    className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium hover:bg-gray-50"
                  >
                    Review
                  </Link>
                </div>
              ))}
            </div>

            <Link
              href="/admin/workers"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 hover:bg-green-100"
            >
              View All Requests
              <ArrowIcon />
            </Link>
          </section>
        </div>

        {/* Recent Bookings */}
        <section className="mt-7 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 p-6">
            <div>
              <h3 className="text-lg font-bold">Recent Bookings</h3>

              <p className="mt-1 text-sm text-gray-500">
                Latest activity across the platform
              </p>
            </div>

            <Link
              href="/admin/bookings"
              className="flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800"
            >
              View All
              <ArrowIcon />
            </Link>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Customer</th>
                  <th className="px-6 py-4 font-medium">Worker</th>
                  <th className="px-6 py-4 font-medium">Service</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Amount</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {recentBookings.map((booking) => (
                  <tr key={`${booking.customer}-${booking.date}`}>
                    <td className="px-6 py-5 font-semibold">
                      {booking.customer}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {booking.worker}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {booking.service}
                    </td>

                    <td className="px-6 py-5 text-gray-500">
                      {booking.date}
                    </td>

                    <td className="px-6 py-5 font-semibold">
                      {booking.amount}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          booking.status === "Completed"
                            ? "bg-green-50 text-green-700"
                            : booking.status === "In Progress"
                              ? "bg-blue-50 text-blue-700"
                              : booking.status === "Confirmed"
                                ? "bg-gray-100 text-gray-700"
                                : "bg-yellow-50 text-yellow-700"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="divide-y divide-gray-100 md:hidden">
            {recentBookings.map((booking) => (
              <div
                key={`${booking.customer}-${booking.date}`}
                className="p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">{booking.customer}</p>

                    <p className="mt-1 text-sm text-gray-500">
                      {booking.service}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Worker: {booking.worker}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {booking.date}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold">{booking.amount}</p>

                    <span className="mt-2 inline-block rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                      {booking.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Services + Activity */}
        <div className="mt-7 grid gap-7 lg:grid-cols-2">
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div>
              <h3 className="text-lg font-bold">Popular Services</h3>

              <p className="mt-1 text-sm text-gray-500">
                Most requested services this month
              </p>
            </div>

            <div className="mt-7 space-y-6">
              {popularServices.map((service, index) => (
                <div key={service.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-50 text-xs font-bold text-gray-500">
                        {index + 1}
                      </span>

                      <span className="font-medium">{service.name}</span>
                    </div>

                    <span className="font-semibold">
                      {service.bookings}
                    </span>
                  </div>

                  <div className="ml-10 h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-green-600"
                      style={{ width: service.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div>
              <h3 className="text-lg font-bold">Platform Activity</h3>

              <p className="mt-1 text-sm text-gray-500">
                Recent important activities
              </p>
            </div>

            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700">
                  <CheckIcon />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    12 workers verified
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Verification team · 1 hour ago
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-700">
                  <UsersIcon />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    38 new customers registered
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Platform activity · 3 hours ago
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-700">
                  <BookingIcon />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    64 bookings completed
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Booking system · 5 hours ago
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-50 text-yellow-700">
                  <WorkerIcon />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    8 worker applications awaiting review
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Verification queue · Today
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Quick Actions */}
        <section className="mt-7 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div>
            <h3 className="text-lg font-bold">Quick Actions</h3>

            <p className="mt-1 text-sm text-gray-500">
              Common administrative tasks
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/admin/workers"
              className="rounded-xl border border-gray-200 p-5 text-left hover:border-green-200 hover:bg-green-50"
            >
              <WorkerIcon />

              <p className="mt-4 text-sm font-semibold">
                Verify Workers
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Review pending applications
              </p>
            </Link>

            <Link
              href="/admin/customers"
              className="rounded-xl border border-gray-200 p-5 text-left hover:border-green-200 hover:bg-green-50"
            >
              <UsersIcon />

              <p className="mt-4 text-sm font-semibold">
                Manage Customers
              </p>

              <p className="mt-1 text-xs text-gray-500">
                View and manage accounts
              </p>
            </Link>

            <Link
              href="/admin/bookings"
              className="rounded-xl border border-gray-200 p-5 text-left hover:border-green-200 hover:bg-green-50"
            >
              <BookingIcon />

              <p className="mt-4 text-sm font-semibold">
                Manage Bookings
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Monitor platform bookings
              </p>
            </Link>

            <Link
              href="/admin/services"
              className="rounded-xl border border-gray-200 p-5 text-left hover:border-green-200 hover:bg-green-50"
            >
              <PlusIcon />

              <p className="mt-4 text-sm font-semibold">
                Add Service
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Create a new service category
              </p>
            </Link>
          </div>
        </section>

        {/* Cooperative Impact */}
        <section className="mt-7 rounded-2xl border border-green-100 bg-green-50 p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white font-bold text-green-700">
                S
              </div>

              <div>
                <h3 className="font-semibold text-green-900">
                  Cooperative Impact
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-green-800">
                  Sahakar Seva is helping local cooperative workers connect
                  with customers and build sustainable livelihoods through
                  trusted community services.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <p className="text-xl font-bold text-green-900">248</p>
                <p className="mt-1 text-xs text-green-700">Workers</p>
              </div>

              <div>
                <p className="text-xl font-bold text-green-900">1.8K+</p>
                <p className="mt-1 text-xs text-green-700">Customers</p>
              </div>

              <div>
                <p className="text-xl font-bold text-green-900">5K+</p>
                <p className="mt-1 text-xs text-green-700">Services</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}