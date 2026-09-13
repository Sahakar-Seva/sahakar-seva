"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingLocationPage() {
  const router = useRouter();

  const [workerId, setWorkerId] = useState("1");
  const [serviceId, setServiceId] = useState("electrician");
  const [selectedAddress, setSelectedAddress] = useState("home");
  const [landmark, setLandmark] = useState("");
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setWorkerId(params.get("worker") || "1");
    setServiceId(params.get("service") || "electrician");
  }, []);

const handleContinue = () => {
  const address =
    selectedAddress === "home"
      ? "Flat 204, Green Residency, Sector 12, Dwarka, New Delhi"
      : "3rd Floor, Business Hub, Sector 10, Dwarka, New Delhi";

  router.push(
    `/customer/book/schedule?worker=${workerId}&service=${serviceId}&address=${encodeURIComponent(
      address
    )}&landmark=${encodeURIComponent(
      landmark
    )}&instructions=${encodeURIComponent(
      instructions
    )}`
  );
};

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
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

      {/* Progress */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="text-gray-400">1. Service & Worker</div>

            <div className="font-semibold text-green-700">
              2. Location
            </div>

            <div className="text-gray-400">3. Date & Time</div>

            <div className="text-gray-400">4. Review</div>
          </div>

          <div className="mt-3 h-1 rounded-full bg-gray-200">
            <div className="h-1 w-2/4 rounded-full bg-green-600" />
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="mb-6 text-sm font-medium text-gray-600 hover:text-green-700"
        >
          ← Back
        </button>

        <div className="mb-8">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Where should we provide the service?
          </h1>

          <p className="mt-2 text-gray-600">
            Select an address where Rahul can provide the service.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Left */}
          <div className="space-y-6">
            {/* Location / Map */}
            <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="flex h-64 items-center justify-center bg-green-50">
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                    📍
                  </div>

                  <h3 className="mt-4 font-semibold">
                    Service location
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Map location will be available here
                  </p>

                  <button className="mt-4 rounded-lg border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-50">
                    Use current location
                  </button>
                </div>
              </div>
            </section>

            {/* Saved Addresses */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">
                    Select an address
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Choose where the service should be provided.
                  </p>
                </div>

                <button className="text-sm font-medium text-green-700 hover:underline">
                  + Add new
                </button>
              </div>

              <div className="mt-5 space-y-3">
                {/* Home */}
                <button
                  onClick={() => setSelectedAddress("home")}
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    selectedAddress === "home"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100">
                      🏠
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">Home</p>

                          {selectedAddress === "home" && (
                            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                              Selected
                            </span>
                          )}
                        </div>

                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                            selectedAddress === "home"
                              ? "border-green-600 bg-green-600"
                              : "border-gray-300"
                          }`}
                        >
                          {selectedAddress === "home" && (
                            <span className="text-xs text-white">✓</span>
                          )}
                        </div>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        Flat 204, Green Residency,
                        <br />
                        Sector 12, Dwarka, New Delhi - 110075
                      </p>
                    </div>
                  </div>
                </button>

                {/* Work */}
                <button
                  onClick={() => setSelectedAddress("work")}
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    selectedAddress === "work"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                      💼
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">Work</p>

                          {selectedAddress === "work" && (
                            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                              Selected
                            </span>
                          )}
                        </div>

                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                            selectedAddress === "work"
                              ? "border-green-600 bg-green-600"
                              : "border-gray-300"
                          }`}
                        >
                          {selectedAddress === "work" && (
                            <span className="text-xs text-white">✓</span>
                          )}
                        </div>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        3rd Floor, Business Hub,
                        <br />
                        Sector 10, Dwarka, New Delhi - 110075
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </section>

            {/* Additional Details */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">
                Additional details
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Help the worker find your location easily.
              </p>

              <div className="mt-5">
                <label className="text-sm font-medium text-gray-700">
                  Landmark
                </label>

                <input
                  type="text"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  placeholder="Example: Near Metro Station"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div className="mt-5">
                <label className="text-sm font-medium text-gray-700">
                  Instructions for worker
                </label>

                <textarea
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder="Example: Please call when you reach the main gate."
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

                <p className="mt-2 text-xs text-gray-400">
                  Optional
                </p>
              </div>
            </section>
          </div>

          {/* Right Summary */}
          <aside>
            <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">
                Booking Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs text-gray-400">Service</p>
                  <p className="mt-1 font-medium">
                    Electrical Repair
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Worker</p>
                  <p className="mt-1 font-medium">
                    Rahul Sharma
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Service address</p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {selectedAddress === "home"
                      ? "Flat 204, Green Residency, Sector 12, Dwarka, New Delhi"
                      : "3rd Floor, Business Hub, Sector 10, Dwarka, New Delhi"}
                  </p>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">
                      Estimated price
                    </span>

                    <span className="text-xl font-bold text-green-700">
                      ₹299
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleContinue}
                className="mt-6 w-full rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Continue to Date & Time →
              </button>

              <p className="mt-3 text-center text-xs text-gray-400">
                You can review everything before confirming.
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-gray-500">
          © 2026 Sahakar Seva · Trusted cooperative services
        </div>
      </footer>
    </div>
  );
}