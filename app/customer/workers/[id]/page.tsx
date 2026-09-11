"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const worker = {
  id: 1,
  name: "Rahul Sharma",
  initials: "RS",
  service: "Electrical Repair",
  rating: 4.8,
  reviews: 126,
  experience: "5 years",
  distance: "1.2 km",
  completed: 184,
  price: 299,
  location: "Delhi",
  verified: true,
  available: true,
  joined: "March 2023",
  about:
    "Rahul is an experienced electrical service professional working with the Sahakar Seva cooperative. He specializes in household electrical repairs, installations and maintenance.",
  services: [
    {
      name: "Electrical Repair",
      price: "₹299 onwards",
      duration: "1–2 hours",
    },
    {
      name: "Wiring & Installation",
      price: "₹699 onwards",
      duration: "2–3 hours",
    },
    {
      name: "Fan Installation",
      price: "₹499 onwards",
      duration: "Around 1 hour",
    },
    {
      name: "Switch & Socket Repair",
      price: "₹299 onwards",
      duration: "Around 1 hour",
    },
  ],
};

const reviews = [
  {
    name: "Amit Verma",
    rating: 5,
    date: "2 weeks ago",
    text: "Rahul arrived on time and fixed the electrical issue quickly. Very professional and polite.",
  },
  {
    name: "Priya Mehta",
    rating: 5,
    date: "1 month ago",
    text: "Good service and transparent pricing. The work was completed properly.",
  },
  {
    name: "Neha Kapoor",
    rating: 4,
    date: "2 months ago",
    text: "The service was good and Rahul explained the issue clearly before starting the work.",
  },
];

export default function WorkerProfilePage() {
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

          <Link
            href="/customer/workers"
            className="hover:text-green-700"
          >
            Workers
          </Link>

          <span>›</span>

          <span className="text-gray-800">{worker.name}</span>
        </div>

        {/* Profile Hero */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              {/* Avatar */}
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-700">
                {worker.initials}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-3xl font-bold">
                    {worker.name}
                  </h1>

                  {worker.verified && (
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      ✓ Verified Worker
                    </span>
                  )}
                </div>

                <p className="mt-2 text-gray-600">
                  {worker.service} Specialist
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <span>⭐</span>
                    <span className="font-semibold">
                      {worker.rating}
                    </span>
                    <span className="text-gray-500">
                      ({worker.reviews} reviews)
                    </span>
                  </span>

                  <span className="text-gray-300">•</span>

                  <span className="text-gray-600">
                    {worker.experience} experience
                  </span>

                  <span className="text-gray-300">•</span>

                  <span className="text-gray-600">
                    📍 {worker.distance} away
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      worker.available
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                  />

                  <span
                    className={
                      worker.available
                        ? "font-medium text-green-700"
                        : "text-gray-500"
                    }
                  >
                    {worker.available
                      ? "Available for bookings"
                      : "Currently unavailable"}
                  </span>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="w-full rounded-2xl border border-gray-200 bg-gray-50 p-5 lg:max-w-xs">
              <p className="text-sm text-gray-500">
                Starting price
              </p>

              <p className="mt-1 text-3xl font-bold">
                ₹{worker.price}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Final price may vary based on the service required.
              </p>

              <Link
                href={`/customer/book?worker=${params.id}&service=1`}
                className="mt-5 block w-full rounded-xl bg-green-700 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-800"
              >
                Select Worker
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Completed services</p>
            <p className="mt-2 text-2xl font-bold">
              {worker.completed}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Average rating</p>
            <p className="mt-2 text-2xl font-bold">
              ⭐ {worker.rating}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Experience</p>
            <p className="mt-2 text-2xl font-bold">
              {worker.experience}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Service location</p>
            <p className="mt-2 text-2xl font-bold">
              {worker.location}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-7 grid gap-7 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left */}
          <div className="space-y-7">
            {/* About */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
              <h2 className="text-xl font-bold">About {worker.name}</h2>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {worker.about}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                  ✓ Cooperative verified
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                  {worker.completed}+ services
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                  Member since {worker.joined}
                </span>
              </div>
            </div>

            {/* Services */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold">
                    Services offered
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Choose the service you need from this worker.
                  </p>
                </div>

                <span className="hidden rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 sm:block">
                  {worker.services.length} services
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {worker.services.map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-between gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 sm:flex-row sm:items-center"
                  >
                    <div>
                      <h3 className="font-semibold">
                        {service.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Estimated duration: {service.duration}
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="font-bold">{service.price}</p>

                      <button className="mt-1 text-xs font-semibold text-green-700 hover:text-green-800">
                        Select service
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-xl font-bold">
                    Customer reviews
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    What customers say about {worker.name}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xl">⭐</span>
                  <span className="font-bold">{worker.rating}</span>
                  <span className="text-sm text-gray-500">
                    from {worker.reviews} reviews
                  </span>
                </div>
              </div>

              <div className="mt-6 divide-y divide-gray-100">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="py-5 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold">
                          {review.name}
                        </p>

                        <div className="mt-1 flex items-center gap-2 text-sm">
                          <span>
                            {"⭐".repeat(review.rating)}
                          </span>

                          <span className="text-gray-400">
                            {review.date}
                          </span>
                        </div>
                      </div>

                      <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-700">
                        Verified booking
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <aside className="space-y-7">
            {/* Availability */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold">Availability</h2>

              <div className="mt-5 space-y-3">
                {[
                  ["Monday", "9:00 AM – 7:00 PM"],
                  ["Tuesday", "9:00 AM – 7:00 PM"],
                  ["Wednesday", "9:00 AM – 7:00 PM"],
                  ["Thursday", "9:00 AM – 7:00 PM"],
                  ["Friday", "9:00 AM – 7:00 PM"],
                  ["Saturday", "10:00 AM – 6:00 PM"],
                ].map(([day, time]) => (
                  <div
                    key={day}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-gray-600">{day}</span>
                    <span className="font-medium text-gray-800">
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl bg-green-50 p-4">
                <p className="text-sm font-semibold text-green-800">
                  ✓ Currently accepting bookings
                </p>

                <p className="mt-1 text-xs leading-5 text-green-700">
                  Availability will be confirmed when you select your
                  date and time.
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold">Service area</h2>

              <div className="mt-5 flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50">
                  📍
                </div>

                <div>
                  <p className="font-semibold">{worker.location}</p>

                  <p className="mt-1 text-sm text-gray-500">
                    Approximately {worker.distance} from your selected
                    location
                  </p>
                </div>
              </div>

              <div className="mt-5 flex h-36 items-center justify-center rounded-xl bg-gray-100 text-sm text-gray-400">
                Map preview
              </div>
            </div>

            {/* Safety */}
            <div className="rounded-2xl border border-green-100 bg-green-50 p-6">
              <div className="flex gap-3">
                <span className="text-2xl">🛡️</span>

                <div>
                  <h2 className="font-bold text-green-900">
                    Safe & trusted service
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-green-800">
                    Worker verification and booking records help make
                    your service experience safer and more transparent.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 rounded-2xl bg-green-700 px-6 py-8 text-white sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold">
                Want to book {worker.name}?
              </h2>

              <p className="mt-2 text-sm text-green-50">
                Select a service and continue with your booking.
              </p>
            </div>

            <Link
              href={`/customer/book?worker=${params.id}&service=1`}
              className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-green-700 transition hover:bg-green-50"
            >
              Select Worker →
            </Link>
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