"use client";

import { useMemo, useState } from "react";

type ServiceStatus = "Active" | "Review";

type Service = {
  id: number;
  name: string;
  category: string;
  workers: number;
  bookings: number;
  rating: number;
  status: ServiceStatus;
};

const services: Service[] = [
  {
    id: 1,
    name: "Home Cleaning",
    category: "Home Services",
    workers: 42,
    bookings: 328,
    rating: 4.8,
    status: "Active",
  },
  {
    id: 2,
    name: "Plumbing",
    category: "Repairs",
    workers: 31,
    bookings: 276,
    rating: 4.7,
    status: "Active",
  },
  {
    id: 3,
    name: "Electrical Repair",
    category: "Repairs",
    workers: 28,
    bookings: 241,
    rating: 4.6,
    status: "Active",
  },
  {
    id: 4,
    name: "Appliance Repair",
    category: "Repairs",
    workers: 19,
    bookings: 184,
    rating: 4.5,
    status: "Active",
  },
  {
    id: 5,
    name: "Gardening",
    category: "Outdoor Services",
    workers: 24,
    bookings: 156,
    rating: 4.8,
    status: "Active",
  },
  {
    id: 6,
    name: "Painting",
    category: "Home Improvement",
    workers: 17,
    bookings: 132,
    rating: 4.4,
    status: "Active",
  },
  {
    id: 7,
    name: "AC Service",
    category: "Appliance Services",
    workers: 15,
    bookings: 119,
    rating: 4.6,
    status: "Active",
  },
  {
    id: 8,
    name: "Pest Control",
    category: "Home Services",
    workers: 8,
    bookings: 64,
    rating: 4.2,
    status: "Review",
  },
];

const categories = [
  "All Services",
  "Home Services",
  "Repairs",
  "Outdoor Services",
  "Home Improvement",
  "Appliance Services",
];

export default function AdminServicesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Services");
  const [status, setStatus] = useState("All");

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(search.toLowerCase()) ||
        service.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All Services" || service.category === category;

      const matchesStatus =
        status === "All" || service.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [search, category, status]);

  const popularServices = [...services]
    .sort((a, b) => b.bookings - a.bookings)
    .slice(0, 5);

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
        {/* Page Heading */}
        <div>
          <h2 className="text-2xl font-bold">Service Management</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage services available on the Sahakar Seva platform.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            title="Total Services"
            value="24"
            subtitle="Available in catalog"
            icon="🛠️"
          />

          <SummaryCard
            title="Active Services"
            value="21"
            subtitle="Currently available"
            icon="✅"
          />

          <SummaryCard
            title="Most Booked"
            value="328"
            subtitle="Home Cleaning bookings"
            icon="🔥"
          />

          <SummaryCard
            title="Needs Review"
            value="3"
            subtitle="Services require attention"
            icon="⚠️"
          />
        </div>

        {/* Search & Filters */}
        <section className="rounded-2xl border bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>

              <input
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-green-500 focus:bg-white"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {["All", "Active", "Review"].map((item) => (
                <button
                  key={item}
                  onClick={() => setStatus(item)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    status === item
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition ${
                  category === item
                    ? "bg-green-50 text-green-700 ring-1 ring-green-200"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* Desktop Table */}
        <section className="hidden overflow-hidden rounded-2xl border bg-white shadow-sm lg:block">
          <div className="border-b px-5 py-4">
            <h3 className="font-semibold">Service Catalog</h3>
            <p className="text-sm text-gray-500">
              {filteredServices.length} services displayed
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-5 py-4">Service</th>
                  <th className="px-5 py-4">Category</th>
                  <th className="px-5 py-4">Workers</th>
                  <th className="px-5 py-4">Bookings</th>
                  <th className="px-5 py-4">Rating</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {filteredServices.map((service) => (
                  <tr key={service.id} className="hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="font-semibold">{service.name}</div>
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      {service.category}
                    </td>

                    <td className="px-5 py-4">{service.workers}</td>

                    <td className="px-5 py-4 font-medium">
                      {service.bookings}
                    </td>

                    <td className="px-5 py-4">
                      <span className="font-medium">⭐ {service.rating}</span>
                    </td>

                    <td className="px-5 py-4">
                      <StatusBadge status={service.status} />
                    </td>

                    <td className="px-5 py-4">
                      <button className="rounded-lg border px-3 py-1.5 text-xs font-medium hover:bg-gray-50">
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredServices.length === 0 && (
              <EmptyState />
            )}
          </div>

          {/* Pagination */}
          <Pagination />
        </section>

        {/* Mobile Cards */}
        <section className="space-y-3 lg:hidden">
          <div className="rounded-2xl border bg-white px-4 py-4 shadow-sm">
            <h3 className="font-semibold">Service Catalog</h3>
            <p className="text-sm text-gray-500">
              {filteredServices.length} services displayed
            </p>
          </div>

          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border bg-white p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold">{service.name}</h3>
                  <p className="mt-1 text-xs text-gray-500">
                    {service.category}
                  </p>
                </div>

                <StatusBadge status={service.status} />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 border-t pt-4">
                <div>
                  <p className="text-xs text-gray-500">Workers</p>
                  <p className="mt-1 font-semibold">{service.workers}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Bookings</p>
                  <p className="mt-1 font-semibold">{service.bookings}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Rating</p>
                  <p className="mt-1 font-semibold">⭐ {service.rating}</p>
                </div>
              </div>

              <button className="mt-4 w-full rounded-xl border py-2 text-sm font-medium hover:bg-gray-50">
                Manage Service
              </button>
            </div>
          ))}

          {filteredServices.length === 0 && <EmptyState />}

          <Pagination />
        </section>

        {/* Popular Services */}
        <section className="rounded-2xl border bg-white p-5 shadow-sm">
          <div className="mb-5">
            <h3 className="font-semibold">Popular Services</h3>
            <p className="text-sm text-gray-500">
              Services receiving the highest number of bookings.
            </p>
          </div>

          <div className="space-y-5">
            {popularServices.map((service, index) => {
              const percentage =
                (service.bookings / popularServices[0].bookings) * 100;

              return (
                <div key={service.id}>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-50 text-xs font-bold text-green-700">
                        {index + 1}
                      </span>

                      <div>
                        <p className="text-sm font-medium">{service.name}</p>
                        <p className="text-xs text-gray-500">
                          {service.bookings} bookings
                        </p>
                      </div>
                    </div>

                    <span className="text-sm font-semibold">
                      ⭐ {service.rating}
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
            })}
          </div>
        </section>

        {/* Information Card */}
        <section className="rounded-2xl border border-green-100 bg-green-50 p-5">
          <div className="flex gap-4">
            <div className="text-2xl">💡</div>

            <div>
              <h3 className="font-semibold text-green-900">
                Keep the service catalog updated
              </h3>

              <p className="mt-1 text-sm leading-6 text-green-800">
                Admins can review service performance, monitor worker
                availability, and identify services that may need improvement
                based on bookings and customer ratings.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SummaryCard({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string;
  value: string;
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
      <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: ServiceStatus }) {
  const styles =
    status === "Active"
      ? "bg-green-50 text-green-700"
      : "bg-yellow-50 text-yellow-700";

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${styles}`}
    >
      {status}
    </span>
  );
}

function Pagination() {
  return (
    <div className="flex items-center justify-between border-t px-5 py-4">
      <p className="text-xs text-gray-500">Showing 1–8 of 24 services</p>

      <div className="flex gap-2">
        <button className="rounded-lg border px-3 py-1.5 text-xs text-gray-500 hover:bg-gray-50">
          Previous
        </button>

        <button className="rounded-lg bg-green-600 px-3 py-1.5 text-xs font-medium text-white">
          1
        </button>

        <button className="rounded-lg border px-3 py-1.5 text-xs hover:bg-gray-50">
          2
        </button>

        <button className="rounded-lg border px-3 py-1.5 text-xs hover:bg-gray-50">
          3
        </button>

        <button className="rounded-lg border px-3 py-1.5 text-xs hover:bg-gray-50">
          Next
        </button>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="px-5 py-12 text-center">
      <div className="text-3xl">🔍</div>
      <h3 className="mt-3 font-semibold">No services found</h3>
      <p className="mt-1 text-sm text-gray-500">
        Try changing your search or filters.
      </p>
    </div>
  );
}