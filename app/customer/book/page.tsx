"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function BookingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const workerId = searchParams.get("worker") || "1";
  const serviceId = searchParams.get("service") || "1";

  const [notes, setNotes] = useState("");

  // Mock data for now
  const worker = {
    id: workerId,
    name: "Rahul Sharma",
    initials: "RS",
    rating: 4.8,
    reviews: 126,
    experience: "5 years",
    completed: 184,
    distance: "1.2 km",
    verified: true,
    available: true,
  };

  const service = {
    id: serviceId,
    name: "Electrical Repair",
    category: "Repairs",
    price: 299,
    duration: "1–2 hours",
    description:
      "Professional electrical repair service for common household electrical issues.",
  };

  const handleContinue = () => {
    router.push(
      `/customer/book/location?worker=${worker.id}&service=${service.id}`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
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

      {/* Progress */}
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

      {/* Main */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back */}
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
          {/* Left Content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Service */}
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
                  ⚡
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{service.name}</h3>

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

            {/* Worker */}
            <section className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selected Worker</h2>

                <button
                  onClick={() =>
                    router.push(
                      `/customer/workers?service=${service.id}`
                    )
                  }
                  className="text-sm font-medium text-green-700 hover:underline"
                >
                  Change
                </button>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                {/* Avatar */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-700">
                  {worker.initials}
                </div>

                {/* Details */}
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

            {/* Notes */}
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

              <p className="mt-2 text-xs text-gray-400">
                Optional
              </p>
            </section>

            {/* Trust */}
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

          {/* Booking Summary */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6 rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">
                Booking Summary
              </h2>

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

      {/* Footer */}
      <footer className="mt-12 border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-gray-500">
          © 2026 Sahakar Seva · Trusted cooperative services
        </div>
      </footer>
    </div>
  );
}