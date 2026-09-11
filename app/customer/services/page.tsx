"use client";

import { useState } from "react";

const categories = [
  {
    name: "Home Services",
    description: "Everyday services for your home",
    icon: "🏠",
    services: 8,
  },
  {
    name: "Repairs",
    description: "Fix and repair household issues",
    icon: "🔧",
    services: 7,
  },
  {
    name: "Cleaning",
    description: "Keep your home clean and fresh",
    icon: "✨",
    services: 5,
  },
  {
    name: "Home Improvement",
    description: "Improve and maintain your home",
    icon: "🎨",
    services: 6,
  },
  {
    name: "Appliance Services",
    description: "Installation and appliance repair",
    icon: "🔌",
    services: 5,
  },
  {
    name: "Outdoor Services",
    description: "Gardening and outdoor maintenance",
    icon: "🌱",
    services: 4,
  },
];

const services = [
  {
    name: "Electrician",
    category: "Repairs",
    icon: "⚡",
    description: "Electrical repairs, wiring and installations",
    startingPrice: "₹299",
    workers: 28,
    rating: "4.8",
  },
  {
    name: "Plumber",
    category: "Repairs",
    icon: "🔧",
    description: "Plumbing repairs, fittings and installations",
    startingPrice: "₹349",
    workers: 31,
    rating: "4.7",
  },
  {
    name: "Home Cleaning",
    category: "Cleaning",
    icon: "✨",
    description: "Professional home and deep cleaning services",
    startingPrice: "₹499",
    workers: 42,
    rating: "4.8",
  },
  {
    name: "Carpenter",
    category: "Home Improvement",
    icon: "🪚",
    description: "Furniture repair, installation and woodwork",
    startingPrice: "₹399",
    workers: 19,
    rating: "4.6",
  },
  {
    name: "Appliance Repair",
    category: "Appliance Services",
    icon: "🔌",
    description: "Repair and maintenance of household appliances",
    startingPrice: "₹399",
    workers: 19,
    rating: "4.5",
  },
  {
    name: "Painting",
    category: "Home Improvement",
    icon: "🎨",
    description: "Interior and exterior painting services",
    startingPrice: "₹599",
    workers: 17,
    rating: "4.4",
  },
  {
    name: "Gardening",
    category: "Outdoor Services",
    icon: "🌱",
    description: "Garden maintenance and plant care",
    startingPrice: "₹299",
    workers: 24,
    rating: "4.8",
  },
  {
    name: "AC Service",
    category: "Appliance Services",
    icon: "❄️",
    description: "AC servicing, cleaning and maintenance",
    startingPrice: "₹499",
    workers: 15,
    rating: "4.6",
  },
  {
    name: "Pest Control",
    category: "Home Services",
    icon: "🛡️",
    description: "Safe pest control for your home",
    startingPrice: "₹599",
    workers: 8,
    rating: "4.2",
  },
  {
    name: "Fan Installation",
    category: "Home Services",
    icon: "🌀",
    description: "Ceiling and wall fan installation services",
    startingPrice: "₹299",
    workers: 14,
    rating: "4.7",
  },
  {
    name: "Washing Machine Repair",
    category: "Appliance Services",
    icon: "🧺",
    description: "Washing machine repair and maintenance",
    startingPrice: "₹399",
    workers: 11,
    rating: "4.5",
  },
  {
    name: "Furniture Assembly",
    category: "Home Improvement",
    icon: "🪑",
    description: "Furniture assembly and installation",
    startingPrice: "₹299",
    workers: 13,
    rating: "4.6",
  },
];

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

function LocationIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

export default function CustomerServices() {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      activeCategory === "All Services" ||
      service.category === activeCategory;

    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-lg font-bold text-white">
              S
            </div>

            <div>
              <h1 className="text-lg font-bold text-gray-900">
                Sahakar Seva
              </h1>
              <p className="text-xs text-gray-500">
                Trusted services, powered by cooperation.
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            <a href="/" className="hover:text-green-700">
              Home
            </a>

            <a href="/customer/services" className="text-green-700">
              Services
            </a>

            <a href="#" className="hover:text-green-700">
              How it works
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden items-center gap-2 text-sm text-gray-600 sm:flex">
              <LocationIcon />
              Delhi, India
            </button>

            <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
              <BellIcon />
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-800">
              A
            </div>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-green-700">
              Customer / Services
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Find the right service for you
            </h2>

            <p className="mt-3 text-base leading-7 text-gray-600">
              Browse trusted services offered by verified cooperative workers
              in your area.
            </p>

            {/* Search */}
            <div className="mt-7 flex max-w-2xl items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
              <div className="text-gray-400">
                <SearchIcon />
              </div>

              <input
                type="text"
                placeholder="Search for a service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-7">
          <h3 className="text-2xl font-bold text-gray-900">
            Browse by category
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Explore services based on what you need.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`rounded-2xl border p-5 text-left transition hover:-translate-y-0.5 hover:shadow-sm ${
                activeCategory === category.name
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white hover:border-green-300"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                {category.icon}
              </div>

              <p className="mt-4 text-sm font-semibold text-gray-900">
                {category.name}
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                {category.description}
              </p>

              <p className="mt-3 text-xs font-medium text-green-700">
                {category.services} services
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Service Filters */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Available services
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {filteredServices.length} services available in your area.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "All Services",
                "Home Services",
                "Repairs",
                "Cleaning",
                "Home Improvement",
                "Appliance Services",
                "Outdoor Services",
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    activeCategory === category
                      ? "bg-green-700 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <div
                key={service.name}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                    {service.icon}
                  </div>

                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                    Verified
                  </span>
                </div>

                <h4 className="mt-5 text-lg font-semibold text-gray-900">
                  {service.name}
                </h4>

                <p className="mt-2 min-h-10 text-sm leading-5 text-gray-500">
                  {service.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-4 border-y border-gray-100 py-4">
                  <div>
                    <p className="text-xs text-gray-400">
                      Starting from
                    </p>

                    <p className="mt-1 text-lg font-bold text-gray-900">
                      {service.startingPrice}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Rating
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      ★ {service.rating}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xs text-gray-500">
                    {service.workers} verified workers
                  </p>

                  <button className="rounded-xl bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800">
                    View service
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center">
              <div className="text-4xl">🔍</div>

              <h4 className="mt-4 text-lg font-semibold text-gray-900">
                No services found
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                Try searching for another service or selecting a different
                category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-2xl bg-green-50 p-7 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-green-700">
                Trusted cooperative network
              </p>

              <h3 className="mt-1 text-xl font-bold text-gray-900">
                Every service connects you with verified local workers.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                Compare services, check worker ratings and choose the right
                professional for your needs.
              </p>
            </div>

            <div className="shrink-0 rounded-xl bg-white px-5 py-4 shadow-sm">
              <p className="text-xs text-gray-500">
                Available workers
              </p>

              <p className="mt-1 text-2xl font-bold text-green-700">
                248+
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-7 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sahakar Seva</p>

          <p>Trusted services, powered by cooperation.</p>
        </div>
      </footer>
    </main>
  );
}