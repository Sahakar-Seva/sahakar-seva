"use client";

import { useRouter, useSearchParams } from "next/navigation";

const services = [
  {
    id: "electrician",
    name: "Electrician",
    description: "Professional household electrical repair service",
    price: 299,
    icon: "⚡",
    duration: "1–2 hours",
    category: "Electrician",
  },
  {
    id: "plumber",
    name: "Plumber",
    description: "Reliable plumbing and repair services",
    price: 349,
    icon: "🔧",
    duration: "1–2 hours",
    category: "Plumber",
  },
  {
    id: "home-cleaning",
    name: "Home Cleaning",
    description: "Professional home cleaning service",
    price: 499,
    icon: "✨",
    duration: "2–3 hours",
    category: "Cleaning",
  },
  {
    id: "carpenter",
    name: "Carpenter",
    description: "Furniture repair and carpentry services",
    price: 399,
    icon: "🪚",
    duration: "1–2 hours",
    category: "Carpenter",
  },
  {
    id: "appliance-repair",
    name: "Appliance Repair",
    description: "Reliable household appliance repair",
    price: 399,
    icon: "🔌",
    duration: "1–2 hours",
    category: "Appliance Repair",
  },
  {
    id: "painting",
    name: "Painting",
    description: "Professional home painting services",
    price: 599,
    icon: "🎨",
    duration: "3–5 hours",
    category: "Painting",
  },
  {
    id: "gardening",
    name: "Gardening",
    description: "Garden maintenance and gardening services",
    price: 299,
    icon: "🌱",
    duration: "1–2 hours",
    category: "Gardening",
  },
  {
    id: "ac-service",
    name: "AC Service",
    description: "AC servicing and maintenance",
    price: 499,
    icon: "❄️",
    duration: "1–2 hours",
    category: "AC Service",
  },
  {
    id: "pest-control",
    name: "Pest Control",
    description: "Professional pest control service",
    price: 599,
    icon: "🛡️",
    duration: "2–3 hours",
    category: "Pest Control",
  },
  {
    id: "fan-installation",
    name: "Fan Installation",
    description: "Safe and reliable fan installation",
    price: 299,
    icon: "🌀",
    duration: "1 hour",
    category: "Electrician",
  },
  {
    id: "washing-machine-repair",
    name: "Washing Machine Repair",
    description: "Washing machine repair and maintenance",
    price: 399,
    icon: "🧺",
    duration: "1–2 hours",
    category: "Appliance Repair",
  },
  {
    id: "furniture-assembly",
    name: "Furniture Assembly",
    description: "Professional furniture assembly service",
    price: 299,
    icon: "🪑",
    duration: "1–2 hours",
    category: "Carpenter",
  },
];

const workers = [
  {
    id: "1",
    name: "Rahul Sharma",
    initials: "RS",
    category: "Electrician",
    rating: 4.8,
    reviews: 124,
    experience: "6+ years",
  },
  {
    id: "2",
    name: "Suresh Kumar",
    initials: "SK",
    category: "Service Worker",
    rating: 4.7,
    reviews: 98,
    experience: "5+ years",
  },
  {
    id: "3",
    name: "Vikram Singh",
    initials: "VS",
    category: "Service Worker",
    rating: 4.6,
    reviews: 87,
    experience: "5+ years",
  },
  {
    id: "4",
    name: "Ramesh Gupta",
    initials: "RG",
    category: "Service Worker",
    rating: 4.5,
    reviews: 76,
    experience: "4+ years",
  },
  {
    id: "5",
    name: "Manoj Kumar",
    initials: "MK",
    category: "Service Worker",
    rating: 4.4,
    reviews: 65,
    experience: "4+ years",
  },
  {
    id: "6",
    name: "Deepak Sharma",
    initials: "DS",
    category: "Service Worker",
    rating: 4.3,
    reviews: 54,
    experience: "3+ years",
  },
];

export default function BookingReviewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const workerId = searchParams.get("worker") || "1";
  const serviceId = searchParams.get("service") || "electrician";
  const selectedDate = searchParams.get("date") || "11";
  const selectedTime = searchParams.get("time") || "10:00 AM";

  const service =
    services.find((item) => item.id === serviceId) || services[0];

  const worker =
    workers.find((item) => item.id === workerId) || workers[0];

  const dateDetails: Record<
    string,
    { day: string; month: string }
  > = {
    "11": { day: "Today", month: "September" },
    "12": { day: "Saturday", month: "September" },
    "13": { day: "Sunday", month: "September" },
    "14": { day: "Monday", month: "September" },
    "15": { day: "Tuesday", month: "September" },
    "16": { day: "Wednesday", month: "September" },
    "17": { day: "Thursday", month: "September" },
  };

  const dateInfo = dateDetails[selectedDate] || {
    day: "Today",
    month: "September",
  };

  const handleConfirm = () => {
    router.push(
      `/customer/book/success?worker=${workerId}&service=${serviceId}&date=${selectedDate}&time=${encodeURIComponent(
        selectedTime
      )}`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b border-gray-100 bg-white">
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
              A
            </div>
          </div>
        </div>
      </header>

      <div className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="text-gray-400">
              1. Service & Worker
            </div>

            <div className="text-gray-400">2. Location</div>

            <div className="text-gray-400">3. Date & Time</div>

            <div className="font-semibold text-green-700">
              4. Review
            </div>
          </div>

          <div className="mt-3 h-1 rounded-full bg-gray-200">
            <div className="h-1 w-full rounded-full bg-green-600" />
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="mb-6 text-sm font-medium text-gray-600 hover:text-green-700"
        >
          ← Back
        </button>

        <div className="mb-8">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Review your booking
          </h1>

          <p className="mt-2 text-gray-600">
            Please check the details carefully before confirming.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            {/* Service & Worker */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Service & Worker
                </h2>

                <button
                  onClick={() =>
                    router.push(
                      `/customer/book?worker=${workerId}&service=${serviceId}`
                    )
                  }
                  className="text-sm font-medium text-green-700 hover:underline"
                >
                  Edit
                </button>
              </div>

              <div className="mt-5 flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-100 text-2xl">
                  {service.icon}
                </div>

                <div>
                  <h3 className="font-semibold">
                    {service.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {service.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-600">
                      ⏱ {service.duration}
                    </span>

                    <span className="rounded-full bg-green-50 px-3 py-1 font-medium text-green-700">
                      ₹{service.price}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t pt-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                    {worker.initials}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold">
                        {worker.name}
                      </p>

                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                        ✓ Verified
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                      {worker.category} · ★ {worker.rating} ·{" "}
                      {worker.reviews} reviews · {worker.experience}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Location */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Service Location
                </h2>

                <button
                  onClick={() =>
                    router.push(
                      `/customer/book/location?worker=${workerId}&service=${serviceId}`
                    )
                  }
                  className="text-sm font-medium text-green-700 hover:underline"
                >
                  Edit
                </button>
              </div>

              <div className="mt-5 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-100">
                  📍
                </div>

                <div>
                  <p className="font-semibold">Home</p>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Flat 204, Green Residency,
                    <br />
                    Sector 12, Dwarka,
                    <br />
                    New Delhi - 110075
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium text-gray-500">
                  Landmark
                </p>

                <p className="mt-1 text-sm text-gray-700">
                  Near Metro Station
                </p>
              </div>
            </section>

            {/* Date & Time */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Date & Time
                </h2>

                <button
                  onClick={() =>
                    router.push(
                      `/customer/book/schedule?worker=${workerId}&service=${serviceId}`
                    )
                  }
                  className="text-sm font-medium text-green-700 hover:underline"
                >
                  Edit
                </button>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3 rounded-xl bg-gray-50 p-4">
                  <div className="text-xl">📅</div>

                  <div>
                    <p className="text-xs text-gray-500">Date</p>

                    <p className="mt-1 font-semibold">
                      {dateInfo.day}, {selectedDate}{" "}
                      {dateInfo.month}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-xl bg-green-50 p-4">
                  <div className="text-xl">🕐</div>

                  <div>
                    <p className="text-xs text-gray-500">Time</p>

                    <p className="mt-1 font-semibold text-green-700">
                      {selectedTime}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Instructions */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">
                Service Instructions
              </h2>

              <div className="mt-4 rounded-xl bg-gray-50 p-4">
                <p className="text-sm leading-6 text-gray-600">
                  Please call when you reach the main gate.
                </p>
              </div>

              <p className="mt-2 text-xs text-gray-400">
                You can share additional requirements with the worker
                after booking.
              </p>
            </section>

            {/* Cancellation */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex gap-3">
                <div className="text-xl">ℹ️</div>

                <div>
                  <h3 className="font-semibold">
                    Before you confirm
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-600">
                    <li>
                      • The worker will be notified after confirmation.
                    </li>
                    <li>
                      • You can cancel or reschedule your booking later.
                    </li>
                    <li>
                      • Final pricing may vary depending on the actual work required.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Summary */}
          <aside>
            <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">
                Price Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    {service.name}
                  </span>

                  <span className="font-medium">
                    ₹{service.price}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Service visit
                  </span>

                  <span className="font-medium">
                    Included
                  </span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">
                      Estimated total
                    </span>

                    <span className="text-2xl font-bold text-green-700">
                      ₹{service.price}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-green-50 p-4">
                <p className="text-xs font-medium text-green-700">
                  Appointment
                </p>

                <p className="mt-1 font-semibold text-green-900">
                  {dateInfo.day}, {selectedDate}{" "}
                  {dateInfo.month}
                </p>

                <p className="mt-1 text-sm text-green-800">
                  {selectedTime} · {worker.name}
                </p>
              </div>

              <button
                onClick={handleConfirm}
                className="mt-6 w-full rounded-xl bg-green-600 px-5 py-3.5 font-semibold text-white transition hover:bg-green-700"
              >
                Confirm Booking
              </button>

              <p className="mt-3 text-center text-xs leading-5 text-gray-400">
                By confirming, you agree to Sahakar Seva's booking
                terms and service policies.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-gray-500">
          © 2026 Sahakar Seva · Trusted cooperative services
        </div>
      </footer>
    </div>
  );
}