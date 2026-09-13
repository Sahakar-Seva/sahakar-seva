"use client";

import { useState } from "react";
import Link from "next/link";

type Service = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  workers: number;
  rating: number;
  reviews: number;
  duration: string;
  icon: string;
  available: boolean;
};

const services: Service[] = [
  {
    id: 1,
    name: "Electrical Repair",
    category: "Repairs",
    description:
      "Professional electrical repair and installation services for your home.",
    price: 299,
    workers: 28,
    rating: 4.6,
    reviews: 184,
    duration: "1–2 hours",
    icon: "⚡",
    available: true,
  },
  {
    id: 2,
    name: "Plumbing",
    category: "Repairs",
    description:
      "Reliable plumbing services for leaks, fittings, pipes and other repairs.",
    price: 349,
    workers: 31,
    rating: 4.7,
    reviews: 216,
    duration: "1–2 hours",
    icon: "🔧",
    available: true,
  },
  {
    id: 3,
    name: "Home Cleaning",
    category: "Cleaning",
    description:
      "Thorough home cleaning services from verified cooperative workers.",
    price: 499,
    workers: 42,
    rating: 4.8,
    reviews: 328,
    duration: "2–4 hours",
    icon: "🧹",
    available: true,
  },
  {
    id: 4,
    name: "Carpenter",
    category: "Home Services",
    description:
      "Furniture repair, installation and custom carpentry services.",
    price: 399,
    workers: 24,
    rating: 4.5,
    reviews: 142,
    duration: "1–3 hours",
    icon: "🪚",
    available: true,
  },
  {
    id: 5,
    name: "Appliance Repair",
    category: "Appliance Services",
    description:
      "Repair and maintenance services for common household appliances.",
    price: 449,
    workers: 19,
    rating: 4.5,
    reviews: 118,
    duration: "1–2 hours",
    icon: "🔌",
    available: true,
  },
  {
    id: 6,
    name: "Painting",
    category: "Home Improvement",
    description:
      "Interior and exterior painting services for homes and small spaces.",
    price: 999,
    workers: 17,
    rating: 4.4,
    reviews: 96,
    duration: "1–2 days",
    icon: "🎨",
    available: true,
  },
  {
    id: 7,
    name: "Gardening",
    category: "Outdoor Services",
    description:
      "Garden maintenance, trimming, planting and basic landscaping services.",
    price: 399,
    workers: 24,
    rating: 4.8,
    reviews: 87,
    duration: "1–3 hours",
    icon: "🌱",
    available: true,
  },
  {
    id: 8,
    name: "AC Service",
    category: "Appliance Services",
    description:
      "AC cleaning, servicing and basic maintenance by verified workers.",
    price: 499,
    workers: 15,
    rating: 4.6,
    reviews: 105,
    duration: "1–2 hours",
    icon: "❄️",
    available: true,
  },
];

const categories = [
  "All",
  "Home Services",
  "Repairs",
  "Cleaning",
  "Home Improvement",
  "Appliance Services",
  "Outdoor Services",
];

export default function ServiceSearchPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("All Ratings");
  const [priceFilter, setPriceFilter] = useState("All Prices");
  const [availableOnly, setAvailableOnly] = useState(false);

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      search.trim() === "" ||
      service.name.toLowerCase().includes(search.toLowerCase()) ||
      service.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || service.category === category;

    const matchesRating =
      ratingFilter === "All Ratings" ||
      (ratingFilter === "4.5+" && service.rating >= 4.5) ||
      (ratingFilter === "4.0+" && service.rating >= 4.0);

    const matchesPrice =
      priceFilter === "All Prices" ||
      (priceFilter === "Under ₹500" && service.price < 500) ||
      (priceFilter === "₹500–₹1000" &&
        service.price >= 500 &&
        service.price <= 1000) ||
      (priceFilter === "Above ₹1000" && service.price > 1000);

    const matchesAvailability = !availableOnly || service.available;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesRating &&
      matchesPrice &&
      matchesAvailability
    );
  });

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
              className="text-sm font-semibold text-green-700"
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
        <div className="mb-5 flex items-center gap-2 text-sm text-gray-500">
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
          <span className="text-gray-800">Search Results</span>
        </div>

        {/* Heading */}
        <div className="mb-7">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Find the right service
          </h1>
          <p className="mt-2 text-gray-600">
            Search and compare trusted services available in your area.
          </p>
        </div>

        {/* Search */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a service..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4">
              <span className="mr-2">📍</span>
              <span className="text-sm font-medium text-gray-700">
                Delhi
              </span>
            </div>

            <button
              onClick={() => setSearch(search)}
              className="rounded-xl bg-green-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Search
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 grid gap-7 lg:grid-cols-[240px_1fr]">
          {/* Filters */}
          <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Filters</h2>

              <button
                onClick={() => {
                  setCategory("All");
                  setRatingFilter("All Ratings");
                  setPriceFilter("All Prices");
                  setAvailableOnly(false);
                }}
                className="text-xs font-semibold text-green-700 hover:text-green-800"
              >
                Clear all
              </button>
            </div>

            {/* Category */}
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold">Category</h3>

              <div className="space-y-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                      category === item
                        ? "bg-green-50 font-semibold text-green-700"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mt-7 border-t border-gray-100 pt-6">
              <h3 className="mb-3 text-sm font-semibold">Price</h3>

              <div className="space-y-2">
                {["All Prices", "Under ₹500", "₹500–₹1000", "Above ₹1000"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => setPriceFilter(item)}
                      className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                        priceFilter === item
                          ? "bg-green-50 font-semibold text-green-700"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Rating */}
            <div className="mt-7 border-t border-gray-100 pt-6">
              <h3 className="mb-3 text-sm font-semibold">Rating</h3>

              <div className="space-y-2">
                {["All Ratings", "4.5+", "4.0+"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setRatingFilter(item)}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                      ratingFilter === item
                        ? "bg-green-50 font-semibold text-green-700"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item === "All Ratings" ? item : `⭐ ${item}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-7 border-t border-gray-100 pt-6">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={availableOnly}
                  onChange={(e) => setAvailableOnly(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-green-700 focus:ring-green-500"
                />
                <span className="text-sm text-gray-700">
                  Available services only
                </span>
              </label>
            </div>
          </aside>

          {/* Results */}
          <div>
            <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm text-gray-500">
                  Showing{" "}
                  <span className="font-semibold text-gray-800">
                    {filteredServices.length}
                  </span>{" "}
                  services
                </p>

                {search && (
                  <p className="mt-1 text-sm text-gray-600">
                    Results for{" "}
                    <span className="font-semibold">"{search}"</span>
                  </p>
                )}
              </div>

              <select
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 outline-none focus:border-green-500"
                defaultValue="recommended"
              >
                <option value="recommended">Recommended</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {filteredServices.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl">
                        {service.icon}
                      </div>

                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                        Available
                      </span>
                    </div>

                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
                        {service.category}
                      </p>

                      <h2 className="mt-1 text-xl font-bold">
                        {service.name}
                      </h2>

                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3">
                      <div>
                        <p className="text-xs text-gray-500">Starting from</p>
                        <p className="mt-1 font-bold text-gray-900">
                          ₹{service.price}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="mt-1 font-semibold text-gray-800">
                          {service.duration}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-1 text-sm">
                        <span>⭐</span>
                        <span className="font-semibold">
                          {service.rating}
                        </span>
                        <span className="text-gray-500">
                          ({service.reviews})
                        </span>
                      </div>

                      <div className="text-sm text-gray-500">
                        {service.workers} verified workers
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs font-medium text-green-700">
                        ✓ Cooperative verified
                      </span>

                      <Link
                        href={`/customer/services/${service.id}`}
                        className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
                      >
                        View service
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
                <div className="text-4xl">🔍</div>

                <h2 className="mt-4 text-xl font-bold">
                  No services found
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                  We couldn't find a service matching your current filters.
                  Try changing your search or clearing some filters.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                    setRatingFilter("All Ratings");
                    setPriceFilter("All Prices");
                    setAvailableOnly(false);
                  }}
                  className="mt-5 rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-800"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-green-700 px-6 py-7 text-white sm:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-bold">
                Services you can trust
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-green-50">
                Every service on Sahakar Seva is offered by verified
                cooperative workers committed to reliable service.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <span>✓ Verified workers</span>
              <span>✓ Transparent pricing</span>
              <span>✓ Community driven</span>
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