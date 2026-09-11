"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const service = {
  name: "Electrical Repair",
  category: "Repairs",
  icon: "⚡",
  rating: 4.6,
  reviews: 184,
  price: 299,
  workers: 28,
  duration: "1–2 hours",
  description:
    "Get reliable electrical repair and installation services from verified cooperative workers. Whether it is a faulty switch, wiring issue, fan installation, or another common electrical problem, trained workers are available to help.",
  included: [
    "Inspection of the electrical issue",
    "Basic repair and troubleshooting",
    "Switch and socket repair",
    "Minor wiring work",
    "Fan and light installation",
  ],
  areas: ["Delhi", "Noida", "Gurugram", "Ghaziabad"],
};

export default function ServiceDetailsPage() {
  const params = useParams();

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
          <span className="text-gray-800">{service.name}</span>
        </div>

        {/* Service Hero */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_330px]">
            {/* Left */}
            <div>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-4xl">
                  {service.icon}
                </div>

                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                      {service.category}
                    </span>

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      ✓ Verified Service
                    </span>
                  </div>

                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {service.name}
                  </h1>

                  <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <span>⭐</span>
                      <span className="font-semibold">
                        {service.rating}
                      </span>
                      <span className="text-gray-500">
                        ({service.reviews} reviews)
                      </span>
                    </span>

                    <span className="text-gray-300">•</span>

                    <span className="text-gray-600">
                      {service.workers} verified workers
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <h2 className="text-xl font-bold">About this service</h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>

              {/* Quick Info */}
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">Starting price</p>
                  <p className="mt-1 text-xl font-bold">
                    ₹{service.price}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">Typical duration</p>
                  <p className="mt-1 text-xl font-bold">
                    {service.duration}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">Workers available</p>
                  <p className="mt-1 text-xl font-bold">
                    {service.workers}
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm text-gray-500">
                Service starts from
              </p>

              <div className="mt-1 flex items-end gap-2">
                <span className="text-3xl font-bold">
                  ₹{service.price}
                </span>
                <span className="pb-1 text-sm text-gray-500">
                  onwards
                </span>
              </div>

              <div className="my-5 border-t border-gray-200" />

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Rating</span>
                  <span className="font-semibold">
                    ⭐ {service.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Workers</span>
                  <span className="font-semibold">
                    {service.workers} available
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Location</span>
                  <span className="font-semibold">Delhi</span>
                </div>
              </div>

              <Link
                href={`/customer/workers?service=${params.id}`}
                className="mt-6 block w-full rounded-xl bg-green-700 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-800"
              >
                Find Workers
              </Link>

              <p className="mt-3 text-center text-xs text-gray-500">
                Choose a verified worker after continuing
              </p>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="mt-7 grid gap-7 lg:grid-cols-2">
          {/* What's Included */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">What's included</h2>

            <p className="mt-2 text-sm text-gray-500">
              Common tasks covered under this service.
            </p>

            <div className="mt-5 space-y-4">
              {service.included.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </div>

                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Service availability</h2>

            <p className="mt-2 text-sm text-gray-500">
              Verified cooperative workers currently serve these areas.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {service.areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  📍 {area}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-green-50 p-4">
              <div className="flex gap-3">
                <span className="text-xl">✓</span>

                <div>
                  <p className="text-sm font-semibold text-green-800">
                    Verified cooperative workers
                  </p>

                  <p className="mt-1 text-xs leading-5 text-green-700">
                    Workers listed on Sahakar Seva are verified through
                    the cooperative platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Sahakar Seva */}
        <div className="mt-7 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-green-700">
              WHY SAHAKAR SEVA
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              A better way to book local services
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Sahakar Seva connects customers with trusted cooperative
              workers while keeping the service experience simple and
              transparent.
            </p>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-gray-50 p-5">
              <div className="text-2xl">✓</div>
              <h3 className="mt-3 font-semibold">
                Verified workers
              </h3>
              <p className="mt-1 text-sm leading-5 text-gray-500">
                Connect with workers verified through the cooperative.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <div className="text-2xl">₹</div>
              <h3 className="mt-3 font-semibold">
                Transparent pricing
              </h3>
              <p className="mt-1 text-sm leading-5 text-gray-500">
                See starting prices before choosing your service.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <div className="text-2xl">⭐</div>
              <h3 className="mt-3 font-semibold">
                Trusted ratings
              </h3>
              <p className="mt-1 text-sm leading-5 text-gray-500">
                Compare ratings and reviews from other customers.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <div className="text-2xl">🤝</div>
              <h3 className="mt-3 font-semibold">
                Cooperative model
              </h3>
              <p className="mt-1 text-sm leading-5 text-gray-500">
                Support a community-driven service ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-7 overflow-hidden rounded-2xl bg-green-700 px-6 py-8 text-white sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold">
                Ready to book {service.name}?
              </h2>

              <p className="mt-2 text-sm text-green-50">
                Choose from verified workers available near you.
              </p>
            </div>

            <Link
              href={`/customer/workers?service=${params.id}`}
              className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-green-700 transition hover:bg-green-50"
            >
              Find a Worker →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-4 border-t border-gray-200 bg-white">
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