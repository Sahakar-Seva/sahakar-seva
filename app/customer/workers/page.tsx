"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const workers = [
  {
    id: 1,
    name: "Rahul Sharma",
    service: "Electrical Repair",
    rating: 4.8,
    reviews: 126,
    experience: "5 years",
    distance: "1.2 km",
    price: 299,
    completed: 184,
    verified: true,
    available: true,
    initials: "RS",
  },
  {
    id: 2,
    name: "Suresh Kumar",
    service: "Electrical Repair",
    rating: 4.7,
    reviews: 98,
    experience: "4 years",
    distance: "2.4 km",
    price: 349,
    completed: 142,
    verified: true,
    available: true,
    initials: "SK",
  },
  {
    id: 3,
    name: "Vikram Singh",
    service: "Electrical Repair",
    rating: 4.6,
    reviews: 87,
    experience: "6 years",
    distance: "3.1 km",
    price: 399,
    completed: 156,
    verified: true,
    available: false,
    initials: "VS",
  },
  {
    id: 4,
    name: "Ramesh Gupta",
    service: "Electrical Repair",
    rating: 4.5,
    reviews: 74,
    experience: "3 years",
    distance: "3.8 km",
    price: 299,
    completed: 109,
    verified: true,
    available: true,
    initials: "RG",
  },
  {
    id: 5,
    name: "Manoj Kumar",
    service: "Electrical Repair",
    rating: 4.4,
    reviews: 61,
    experience: "3 years",
    distance: "4.5 km",
    price: 349,
    completed: 94,
    verified: true,
    available: true,
    initials: "MK",
  },
  {
    id: 6,
    name: "Deepak Sharma",
    service: "Electrical Repair",
    rating: 4.3,
    reviews: 52,
    experience: "2 years",
    distance: "5.2 km",
    price: 299,
    completed: 81,
    verified: true,
    available: true,
    initials: "DS",
  },
];

export default function AvailableWorkersPage() {
  const searchParams = useSearchParams();

  const serviceId = searchParams.get("service");

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-2xl font-bold text-green-700">
            Sahakar Seva
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-green-700"
            >
              Home
            </Link>

            <Link
              href="/customer/services"
              className="text-sm font-medium text-gray-600 hover:text-green-700"
            >
              Services
            </Link>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-gray-600 hover:text-green-700"
            >
              How it works
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full bg-gray-100 px-3 py-2 sm:flex">
              <span>📍</span>
              <span className="text-sm font-medium text-gray-700">
                Delhi
              </span>
            </div>

            <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
              🔔
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
              A
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-700">
            Home
          </Link>

          <span>›</span>

          <Link
            href="/customer/services"
            className="hover:text-green-700"
          >
            Services
          </Link>

          <span>›</span>

          <span className="text-gray-800">Available Workers</span>
        </div>

        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold text-green-700">
              ELECTRICAL REPAIR
            </p>

            <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
              Choose a trusted worker
            </h1>

            <p className="mt-2 max-w-2xl text-gray-600">
              Compare verified cooperative workers based on rating,
              experience, distance and price.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <span>📍</span>
            <div>
              <p className="text-xs text-gray-500">Service location</p>
              <p className="text-sm font-semibold">Delhi</p>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-7 flex flex-col justify-between gap-4 rounded-2xl border border-green-100 bg-green-50 p-5 sm:flex-row sm:items-center">
          <div>
            <p className="font-semibold text-green-800">
              {workers.length} verified workers found
            </p>

            <p className="mt-1 text-sm text-green-700">
              Workers are sorted based on availability and service
              quality.
            </p>
          </div>

          <button className="rounded-lg border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-100">
            Change location
          </button>
        </div>

        {/* Controls */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Showing <span className="font-semibold text-gray-800">6</span>{" "}
            workers
          </p>

          <select
            defaultValue="recommended"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-green-500"
          >
            <option value="recommended">Recommended</option>
            <option value="rating">Highest Rated</option>
            <option value="price-low">Lowest Price</option>
            <option value="distance">Nearest First</option>
            <option value="experience">Most Experienced</option>
          </select>
        </div>

        {/* Worker Cards */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {workers.map((worker) => (
            <div
              key={worker.id}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-700">
                    {worker.initials}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold">
                        {worker.name}
                      </h2>

                      {worker.verified && (
                        <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
                          ✓ Verified
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                      {worker.service}
                    </p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    worker.available
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {worker.available ? "Available" : "Busy"}
                </span>
              </div>

              {/* Rating */}
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <span>⭐</span>
                  <span className="font-semibold">
                    {worker.rating}
                  </span>
                  <span className="text-gray-500">
                    ({worker.reviews})
                  </span>
                </span>

                <span className="text-gray-300">•</span>

                <span className="text-gray-600">
                  {worker.experience} experience
                </span>

                <span className="text-gray-300">•</span>

                <span className="text-gray-600">
                  📍 {worker.distance}
                </span>
              </div>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-3 gap-3 rounded-xl bg-gray-50 p-4">
                <div>
                  <p className="text-xs text-gray-500">Completed</p>
                  <p className="mt-1 font-bold">{worker.completed}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Rating</p>
                  <p className="mt-1 font-bold">⭐ {worker.rating}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Starting</p>
                  <p className="mt-1 font-bold">₹{worker.price}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/customer/workers/${worker.id}`}
                  className="flex-1 rounded-xl border border-green-700 px-4 py-3 text-center text-sm font-semibold text-green-700 transition hover:bg-green-50"
                >
                  View profile
                </Link>

                <Link
                  href={`/customer/book?worker=${worker.id}&service=${serviceId || "1"}`}
                  className={`flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold text-white transition ${
                    worker.available
                      ? "bg-green-700 hover:bg-green-800"
                      : "pointer-events-none bg-gray-300"
                  }`}
                >
                  {worker.available ? "Select worker" : "Currently busy"}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-xl">
                ✓
              </div>

              <div>
                <h3 className="font-semibold">Verified workers</h3>
                <p className="mt-1 text-sm leading-5 text-gray-500">
                  Workers are verified through the cooperative platform.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-xl">
                ⭐
              </div>

              <div>
                <h3 className="font-semibold">Real ratings</h3>
                <p className="mt-1 text-sm leading-5 text-gray-500">
                  Compare ratings and reviews from previous customers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-xl">
                🤝
              </div>

              <div>
                <h3 className="font-semibold">Community first</h3>
                <p className="mt-1 text-sm leading-5 text-gray-500">
                  Your booking supports the cooperative service
                  ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-gray-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Sahakar Seva. Cooperative services for everyone.</p>

          <div className="flex gap-5">
            <span className="cursor-pointer hover:text-green-700">
              Help
            </span>

            <span className="cursor-pointer hover:text-green-700">
              Privacy
            </span>

            <span className="cursor-pointer hover:text-green-700">
              Terms
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}