"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const services = [
  {
    id: "electrician",
    name: "Electrician",
    category: "Repairs",
    price: 299,
    duration: "1–2 hours",
    icon: "⚡",
    description: "Electrical repairs, wiring and installations.",
  },
  {
    id: "plumber",
    name: "Plumber",
    category: "Repairs",
    price: 349,
    duration: "1–2 hours",
    icon: "🔧",
    description: "Plumbing repairs, fittings and installations.",
  },
  {
    id: "home-cleaning",
    name: "Home Cleaning",
    category: "Cleaning",
    price: 499,
    duration: "2–3 hours",
    icon: "✨",
    description: "Professional home and deep cleaning services.",
  },
  {
    id: "carpenter",
    name: "Carpenter",
    category: "Home Improvement",
    price: 399,
    duration: "1–2 hours",
    icon: "🪚",
    description: "Furniture repair, installation and woodwork.",
  },
  {
    id: "appliance-repair",
    name: "Appliance Repair",
    category: "Appliance Services",
    price: 399,
    duration: "1–2 hours",
    icon: "🔌",
    description: "Repair and maintenance of household appliances.",
  },
  {
    id: "painting",
    name: "Painting",
    category: "Home Improvement",
    price: 599,
    duration: "3–5 hours",
    icon: "🎨",
    description: "Interior and exterior painting services.",
  },
  {
    id: "gardening",
    name: "Gardening",
    category: "Outdoor Services",
    price: 299,
    duration: "1–2 hours",
    icon: "🌱",
    description: "Garden maintenance and plant care.",
  },
  {
    id: "ac-service",
    name: "AC Service",
    category: "Appliance Services",
    price: 499,
    duration: "1–2 hours",
    icon: "❄️",
    description: "AC servicing, cleaning and maintenance.",
  },
  {
    id: "pest-control",
    name: "Pest Control",
    category: "Home Services",
    price: 599,
    duration: "2–3 hours",
    icon: "🛡️",
    description: "Safe pest control for your home.",
  },
  {
    id: "fan-installation",
    name: "Fan Installation",
    category: "Home Services",
    price: 299,
    duration: "1 hour",
    icon: "🌀",
    description: "Ceiling and wall fan installation services.",
  },
  {
    id: "washing-machine-repair",
    name: "Washing Machine Repair",
    category: "Appliance Services",
    price: 399,
    duration: "1–2 hours",
    icon: "🧺",
    description: "Washing machine repair and maintenance.",
  },
  {
    id: "furniture-assembly",
    name: "Furniture Assembly",
    category: "Home Improvement",
    price: 299,
    duration: "1–2 hours",
    icon: "🪑",
    description: "Furniture assembly and installation.",
  },
];

const workers = [
  {
    id: "1",
    name: "Rahul Sharma",
    initials: "RS",
    rating: 4.8,
    reviews: 126,
    experience: "5 years",
    completed: 184,
    distance: "1.2 km",
    verified: true,
    available: true,
  },
  {
    id: "2",
    name: "Suresh Kumar",
    initials: "SK",
    rating: 4.7,
    reviews: 98,
    experience: "4 years",
    completed: 142,
    distance: "2.4 km",
    verified: true,
    available: true,
  },
  {
    id: "3",
    name: "Vikram Singh",
    initials: "VS",
    rating: 4.6,
    reviews: 87,
    experience: "6 years",
    completed: 156,
    distance: "3.1 km",
    verified: true,
    available: false,
  },
  {
    id: "4",
    name: "Ramesh Gupta",
    initials: "RG",
    rating: 4.5,
    reviews: 74,
    experience: "3 years",
    completed: 109,
    distance: "3.8 km",
    verified: true,
    available: true,
  },
  {
    id: "5",
    name: "Manoj Kumar",
    initials: "MK",
    rating: 4.4,
    reviews: 61,
    experience: "3 years",
    completed: 94,
    distance: "4.5 km",
    verified: true,
    available: true,
  },
  {
    id: "6",
    name: "Deepak Sharma",
    initials: "DS",
    rating: 4.3,
    reviews: 52,
    experience: "2 years",
    completed: 81,
    distance: "5.2 km",
    verified: true,
    available: true,
  },
];

export default function BookingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const workerId = searchParams.get("worker") || "1";
  const serviceId = searchParams.get("service") || "electrician";

  const [notes, setNotes] = useState("");

  const service =
    services.find((item) => item.id === serviceId) || services[0];

  const worker =
    workers.find((item) => item.id === workerId) || workers[0];

  const handleContinue = () => {
    router.push(
      `/customer/book/location?worker=${worker.id}&service=${service.id}`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.push("/")}
            className="text-2xl font-bold text-green-700"
          >
            Sahakar Seva
          </button>

          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-gray-600 sm:block">
              Delhi
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
              G
            </div>
          </div>
        </div>
      </header>

      <div className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="font-semibold text-green-700">
              1. Service & Worker
            </div>
            <div className="text-gray-400">2. Location</div>
            <div className="text-gray-400">3. Date & Time</div>
            <div className="text-gray-400">4. Review</div>
          </div>

          <div className="mt-3 h-1 rounded-full bg-gray-200">
            <div className="h-1 w-1/4 rounded-full bg-green-600"></div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="mb-6 text-sm font-medium text-gray-600 hover:text-green-700"
        >
          ← Back
        </button>

        <div className="mb-8">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Confirm your service
          </h1>
          <p className="mt-2 text-gray-600">
            Review your selected service and worker before continuing.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <section className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selected Service</h2>

                <button
                  onClick={() =>
                    router.push(`/customer/services/${service.id}`)
                  }
                  className="text-sm font-medium text-green-700 hover:underline"
                >
                  Change
                </button>
              </div>

              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-100 text-2xl">
                  {service.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{service.name}</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {service.category}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {service.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                      ⏱ {service.duration}
                    </span>

                    <span className="rounded-full bg-green-50 px-3 py-1 font-medium text-green-700">
                      Starting ₹{service.price}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selected Worker</h2>

                <button
                  onClick={() =>
                    router.push(`/customer/workers?service=${service.id}`)
                  }
                  className="text-sm font-medium text-green-700 hover:underline"
                >
                  Change
                </button>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-700">
                  {worker.initials}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold">
                      {worker.name}
                    </h3>

                    {worker.verified && (
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                        ✓ Verified
                      </span>
                    )}

                    {worker.available && (
                      <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                        Available
                      </span>
                    )}
                  </div>

                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                    <span>⭐ {worker.rating}</span>
                    <span>{worker.reviews} reviews</span>
                    <span>{worker.experience} experience</span>
                    <span>{worker.distance} away</span>
                  </div>

                  <p className="mt-3 text-sm text-gray-500">
                    {worker.completed} services completed
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">
                Service requirements
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Tell the worker anything they should know before arriving.
              </p>

              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Example: The bedroom fan is making a noise..."
                rows={4}
                className="mt-4 w-full resize-none rounded-xl border border-gray-300 p-4 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />

              <p className="mt-2 text-xs text-gray-400">Optional</p>
            </section>

            <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
              <div className="flex gap-3">
                <div className="text-xl">🛡️</div>

                <div>
                  <h3 className="font-semibold text-green-900">
                    Trusted service
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-green-800">
                    Your selected worker is verified by Sahakar Seva.
                    You can track your booking and contact support if
                    needed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-6 rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Booking Summary</h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-gray-500">Service</span>
                  <span className="text-right font-medium">
                    {service.name}
                  </span>
                </div>

                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-gray-500">Worker</span>
                  <span className="font-medium">{worker.name}</span>
                </div>

                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-gray-500">Duration</span>
                  <span className="font-medium">{service.duration}</span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Estimated price</span>
                    <span className="text-xl font-bold text-green-700">
                      ₹{service.price}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-gray-400">
                    Final price may vary depending on the service required.
                  </p>
                </div>
              </div>

              <button
                onClick={handleContinue}
                className="mt-6 w-full rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Continue to Address →
              </button>

              <p className="mt-3 text-center text-xs text-gray-400">
                No payment required at this step
              </p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="mt-12 border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-gray-500">
          © 2026 Sahakar Seva · Trusted cooperative services
        </div>
      </footer>
    </div>
  );
}