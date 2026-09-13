"use client";

import { useState } from "react";

const monthlyData = [
  { month: "Apr", bookings: 180, revenue: 92000 },
  { month: "May", bookings: 240, revenue: 118000 },
  { month: "Jun", bookings: 310, revenue: 146000 },
  { month: "Jul", bookings: 390, revenue: 182000 },
  { month: "Aug", bookings: 470, revenue: 221000 },
  { month: "Sep", bookings: 520, revenue: 248000 },
];

const servicePerformance = [
  {
    name: "Home Cleaning",
    bookings: 328,
    revenue: "₹2.13L",
    rating: 4.8,
    growth: "+18%",
  },
  {
    name: "Plumbing",
    bookings: 276,
    revenue: "₹2.34L",
    rating: 4.7,
    growth: "+14%",
  },
  {
    name: "Electrical Repair",
    bookings: 241,
    revenue: "₹2.89L",
    rating: 4.6,
    growth: "+11%",
  },
  {
    name: "Appliance Repair",
    bookings: 184,
    revenue: "₹1.75L",
    rating: 4.5,
    growth: "+9%",
  },
  {
    name: "Gardening",
    bookings: 156,
    revenue: "₹86K",
    rating: 4.8,
    growth: "+7%",
  },
];

const ratingData = [
  { stars: 5, percentage: 72 },
  { stars: 4, percentage: 18 },
  { stars: 3, percentage: 7 },
  { stars: 2, percentage: 2 },
  { stars: 1, percentage: 1 },
];

export default function AdminReportsPage() {
  const [period, setPeriod] = useState("6 Months");

  const maxBookings = Math.max(...monthlyData.map((item) => item.bookings));
  const maxRevenue = Math.max(...monthlyData.map((item) => item.revenue));

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b bg-white">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-lg font-bold text-white">
              S
            </div>

            <div>
              <h1 className="text-lg font-bold">Sahakar Seva</h1>
              <p className="text-xs text-gray-500">Admin Panel</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative rounded-lg p-2 hover:bg-gray-100">
              <span className="text-xl">🔔</span>
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">Admin</p>
              <p className="text-xs text-gray-500">Platform Manager</p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
              A
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Reports & Analytics</h2>
            <p className="mt-1 text-sm text-gray-500">
              Monitor platform performance, bookings, revenue and growth.
            </p>
          </div>

          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-green-500"
          >
            <option>7 Days</option>
            <option>30 Days</option>
            <option>6 Months</option>
            <option>1 Year</option>
          </select>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Revenue"
            value="₹9.47L"
            change="+18.6%"
            subtitle="vs previous period"
            icon="💰"
          />

          <MetricCard
            title="Total Bookings"
            value="1,842"
            change="+14.2%"
            subtitle="vs previous period"
            icon="📅"
          />

          <MetricCard
            title="Active Workers"
            value="203"
            change="+9.8%"
            subtitle="this period"
            icon="👷"
          />

          <MetricCard
            title="Active Customers"
            value="1,642"
            change="+12.4%"
            subtitle="this period"
            icon="👥"
          />
        </div>

        {/* Booking & Revenue Overview */}
        <section className="grid gap-6 lg:grid-cols-2">
          {/* Booking Chart */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="mb-6">
              <h3 className="font-semibold">Booking Overview</h3>
              <p className="text-sm text-gray-500">
                Monthly completed and ongoing bookings
              </p>
            </div>

            <div className="flex h-64 items-end gap-3 sm:gap-5">
              {monthlyData.map((item) => {
                const height = (item.bookings / maxBookings) * 100;

                return (
                  <div
                    key={item.month}
                    className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                  >
                    <span className="text-xs font-medium text-gray-600">
                      {item.bookings}
                    </span>

                    <div className="flex h-full w-full items-end">
                      <div
                        className="w-full rounded-t-lg bg-green-500 transition-all"
                        style={{ height: `${height}%` }}
                      />
                    </div>

                    <span className="text-xs text-gray-500">
                      {item.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Revenue Chart */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="mb-6">
              <h3 className="font-semibold">Revenue Overview</h3>
              <p className="text-sm text-gray-500">
                Monthly platform revenue
              </p>
            </div>

            <div className="flex h-64 items-end gap-3 sm:gap-5">
              {monthlyData.map((item) => {
                const height = (item.revenue / maxRevenue) * 100;

                return (
                  <div
                    key={item.month}
                    className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                  >
                    <span className="text-[10px] font-medium text-gray-600 sm:text-xs">
                      ₹{Math.round(item.revenue / 1000)}K
                    </span>

                    <div className="flex h-full w-full items-end">
                      <div
                        className="w-full rounded-t-lg bg-gray-800 transition-all"
                        style={{ height: `${height}%` }}
                      />
                    </div>

                    <span className="text-xs text-gray-500">
                      {item.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Booking Status */}
        <section className="rounded-2xl border bg-white p-5 shadow-sm">
          <div className="mb-5">
            <h3 className="font-semibold">Booking Status</h3>
            <p className="text-sm text-gray-500">
              Current distribution of platform bookings.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <StatusCard
              label="Completed"
              value="1,286"
              percentage="69.8%"
              icon="✓"
            />

            <StatusCard
              label="Confirmed"
              value="438"
              percentage="23.8%"
              icon="●"
            />

            <StatusCard
              label="Ongoing"
              value="24"
              percentage="1.3%"
              icon="↗"
            />

            <StatusCard
              label="Pending"
              value="38"
              percentage="2.1%"
              icon="⏳"
            />

            <StatusCard
              label="Cancelled"
              value="56"
              percentage="3.0%"
              icon="×"
            />
          </div>
        </section>

        {/* Service Performance */}
        <section className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="border-b px-5 py-4">
            <h3 className="font-semibold">Service Performance</h3>
            <p className="text-sm text-gray-500">
              Top performing services on the platform.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-5 py-4">Service</th>
                  <th className="px-5 py-4">Bookings</th>
                  <th className="px-5 py-4">Revenue</th>
                  <th className="px-5 py-4">Rating</th>
                  <th className="px-5 py-4">Growth</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {servicePerformance.map((service) => (
                  <tr key={service.name} className="hover:bg-gray-50">
                    <td className="px-5 py-4 font-medium">{service.name}</td>
                    <td className="px-5 py-4">{service.bookings}</td>
                    <td className="px-5 py-4 font-medium">
                      {service.revenue}
                    </td>
                    <td className="px-5 py-4">⭐ {service.rating}</td>
                    <td className="px-5 py-4 font-semibold text-green-600">
                      {service.growth}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="space-y-3 p-4 lg:hidden">
            {servicePerformance.map((service) => (
              <div
                key={service.name}
                className="rounded-xl border bg-gray-50 p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{service.name}</p>
                  <span className="text-sm font-semibold text-green-600">
                    {service.growth}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div>
                    <p className="text-xs text-gray-500">Bookings</p>
                    <p className="mt-1 font-semibold">{service.bookings}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Revenue</p>
                    <p className="mt-1 font-semibold">{service.revenue}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Rating</p>
                    <p className="mt-1 font-semibold">
                      ⭐ {service.rating}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Growth Overview */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="mb-5">
              <h3 className="font-semibold">Platform Growth</h3>
              <p className="text-sm text-gray-500">
                Growth across customers and workers.
              </p>
            </div>

            <div className="space-y-6">
              <GrowthRow
                label="Customer Growth"
                value="1,842"
                percentage={82}
                change="+12.4%"
              />

              <GrowthRow
                label="Worker Growth"
                value="248"
                percentage={64}
                change="+9.8%"
              />

              <GrowthRow
                label="Service Coverage"
                value="24"
                percentage={58}
                change="+6.2%"
              />
            </div>
          </div>

          {/* Ratings */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="mb-5">
              <h3 className="font-semibold">Customer Ratings</h3>
              <p className="text-sm text-gray-500">
                Overall service quality distribution.
              </p>
            </div>

            <div className="mb-5 flex items-center gap-5">
              <div>
                <p className="text-4xl font-bold">4.7</p>
                <p className="mt-1 text-sm text-gray-500">Overall rating</p>
              </div>

              <div className="text-xl">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="space-y-3">
              {ratingData.map((item) => (
                <div
                  key={item.stars}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="w-8">{item.stars}★</span>

                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-green-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>

                  <span className="w-10 text-right text-xs text-gray-500">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights */}
        <section className="rounded-2xl border border-green-100 bg-green-50 p-5">
          <div className="flex gap-4">
            <div className="text-2xl">📊</div>

            <div>
              <h3 className="font-semibold text-green-900">
                Platform Insights
              </h3>

              <ul className="mt-2 space-y-2 text-sm leading-6 text-green-800">
                <li>
                  • Booking volume has increased consistently over the last six
                  months.
                </li>
                <li>
                  • Home Cleaning is currently the most booked service.
                </li>
                <li>
                  • Customer ratings remain strong with an overall score of
                  4.7/5.
                </li>
                <li>
                  • Worker and customer growth indicates increasing platform
                  adoption.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function MetricCard({
  title,
  value,
  change,
  subtitle,
  icon,
}: {
  title: string;
  value: string;
  change: string;
  subtitle: string;
  icon: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{title}</p>
        <span className="text-xl">{icon}</span>
      </div>

      <p className="mt-3 text-2xl font-bold">{value}</p>

      <div className="mt-2 flex items-center gap-2">
        <span className="text-xs font-semibold text-green-600">
          {change}
        </span>
        <span className="text-xs text-gray-500">{subtitle}</span>
      </div>
    </div>
  );
}

function StatusCard({
  label,
  value,
  percentage,
  icon,
}: {
  label: string;
  value: string;
  percentage: string;
  icon: string;
}) {
  return (
    <div className="rounded-xl border bg-gray-50 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{label}</p>
        <span className="text-sm font-bold text-green-600">{icon}</span>
      </div>

      <p className="mt-3 text-xl font-bold">{value}</p>

      <p className="mt-1 text-xs text-gray-500">{percentage} of bookings</p>
    </div>
  );
}

function GrowthRow({
  label,
  value,
  percentage,
  change,
}: {
  label: string;
  value: string;
  percentage: number;
  change: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">{label}</p>
          <p className="text-xs text-gray-500">{value} total</p>
        </div>

        <span className="text-sm font-semibold text-green-600">
          {change}
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-green-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}