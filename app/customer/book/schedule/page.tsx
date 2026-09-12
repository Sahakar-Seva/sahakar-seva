"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const dates = [
  { day: "Today", date: "11", month: "Sep" },
  { day: "Sat", date: "12", month: "Sep" },
  { day: "Sun", date: "13", month: "Sep" },
  { day: "Mon", date: "14", month: "Sep" },
  { day: "Tue", date: "15", month: "Sep" },
  { day: "Wed", date: "16", month: "Sep" },
  { day: "Thu", date: "17", month: "Sep" },
];

const timeSlots = [
  {
    period: "Morning",
    slots: ["9:00 AM", "10:00 AM", "11:00 AM"],
  },
  {
    period: "Afternoon",
    slots: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
  },
  {
    period: "Evening",
    slots: ["4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"],
  },
];

const services = [
  { id: "electrician", name: "Electrician", price: 299, icon: "⚡", duration: "1–2 hours" },
  { id: "plumber", name: "Plumber", price: 349, icon: "🔧", duration: "1–2 hours" },
  { id: "home-cleaning", name: "Home Cleaning", price: 499, icon: "✨", duration: "2–3 hours" },
  { id: "carpenter", name: "Carpenter", price: 399, icon: "🪚", duration: "1–2 hours" },
  { id: "appliance-repair", name: "Appliance Repair", price: 399, icon: "🔌", duration: "1–2 hours" },
  { id: "painting", name: "Painting", price: 599, icon: "🎨", duration: "3–5 hours" },
  { id: "gardening", name: "Gardening", price: 299, icon: "🌱", duration: "1–2 hours" },
  { id: "ac-service", name: "AC Service", price: 499, icon: "❄️", duration: "1–2 hours" },
  { id: "pest-control", name: "Pest Control", price: 599, icon: "🛡️", duration: "2–3 hours" },
  { id: "fan-installation", name: "Fan Installation", price: 299, icon: "🌀", duration: "1 hour" },
  { id: "washing-machine-repair", name: "Washing Machine Repair", price: 399, icon: "🧺", duration: "1–2 hours" },
  { id: "furniture-assembly", name: "Furniture Assembly", price: 299, icon: "🪑", duration: "1–2 hours" },
];

const workers = [
  { id: "1", name: "Rahul Sharma", rating: 4.8 },
  { id: "2", name: "Suresh Kumar", rating: 4.7 },
  { id: "3", name: "Vikram Singh", rating: 4.6 },
  { id: "4", name: "Ramesh Gupta", rating: 4.5 },
  { id: "5", name: "Manoj Kumar", rating: 4.4 },
  { id: "6", name: "Deepak Sharma", rating: 4.3 },
];

export default function BookingSchedulePage() {
  const router = useRouter();

  const [workerId, setWorkerId] = useState("1");
  const [serviceId, setServiceId] = useState("electrician");
  const [selectedDate, setSelectedDate] = useState("11");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setWorkerId(params.get("worker") || "1");
    setServiceId(params.get("service") || "electrician");
  }, []);

  const service =
    services.find((item) => item.id === serviceId) || services[0];

  const worker =
    workers.find((item) => item.id === workerId) || workers[0];

  const selectedDateInfo = dates.find(
    (date) => date.date === selectedDate
  );

  const handleContinue = () => {
    router.push(
      `/customer/book/review?worker=${workerId}&service=${serviceId}&date=${selectedDate}&time=${encodeURIComponent(
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
            <div className="text-gray-400">1. Service & Worker</div>
            <div className="text-gray-400">2. Location</div>
            <div className="font-semibold text-green-700">
              3. Date & Time
            </div>
            <div className="text-gray-400">4. Review</div>
          </div>

          <div className="mt-3 h-1 rounded-full bg-gray-200">
            <div className="h-1 w-3/4 rounded-full bg-green-600" />
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
            Choose date & time
          </h1>

          <p className="mt-2 text-gray-600">
            Select a convenient time for {worker.name} to visit you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Selected service
                  </p>

                  <h2 className="mt-1 text-lg font-semibold">
                    {service.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {worker.name} · {worker.rating} ★ · Verified Worker
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
                  {service.icon}
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">
                    Select a date
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Choose a day that works for you.
                  </p>
                </div>

                <span className="text-xl">📅</span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
                {dates.map((date) => {
                  const isSelected = selectedDate === date.date;

                  return (
                    <button
                      key={date.date}
                      onClick={() => setSelectedDate(date.date)}
                      className={`rounded-xl border p-3 text-center transition ${
                        isSelected
                          ? "border-green-600 bg-green-600 text-white shadow-sm"
                          : "border-gray-200 bg-white hover:border-green-300 hover:bg-green-50"
                      }`}
                    >
                      <p
                        className={`text-xs font-medium ${
                          isSelected
                            ? "text-green-100"
                            : "text-gray-500"
                        }`}
                      >
                        {date.day}
                      </p>

                      <p className="mt-1 text-xl font-bold">
                        {date.date}
                      </p>

                      <p
                        className={`mt-1 text-xs ${
                          isSelected
                            ? "text-green-100"
                            : "text-gray-500"
                        }`}
                      >
                        {date.month}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div>
                <h2 className="text-lg font-semibold">
                  Select a time
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Available slots for{" "}
                  <span className="font-medium text-gray-700">
                    {selectedDateInfo?.day}, {selectedDateInfo?.date}{" "}
                    {selectedDateInfo?.month}
                  </span>
                </p>
              </div>

              <div className="mt-6 space-y-6">
                {timeSlots.map((group) => (
                  <div key={group.period}>
                    <h3 className="mb-3 text-sm font-semibold text-gray-700">
                      {group.period}
                    </h3>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {group.slots.map((slot) => {
                        const isSelected = selectedTime === slot;

                        return (
                          <button
                            key={slot}
                            onClick={() => setSelectedTime(slot)}
                            className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                              isSelected
                                ? "border-green-600 bg-green-600 text-white"
                                : "border-gray-200 bg-white text-gray-700 hover:border-green-400 hover:bg-green-50"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-3 rounded-xl bg-green-50 p-4">
                <div className="text-lg">✓</div>

                <div>
                  <p className="text-sm font-semibold text-green-900">
                    {worker.name} is available
                  </p>

                  <p className="mt-1 text-xs leading-5 text-green-800">
                    These time slots are currently available for booking.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                  ⏱
                </div>

                <div>
                  <h3 className="font-semibold">
                    Expected service duration
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {service.name} usually takes around{" "}
                    {service.duration}.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside>
            <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">
                Booking Summary
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs text-gray-400">Service</p>

                  <p className="mt-1 font-medium">
                    {service.name}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Worker</p>

                  <p className="mt-1 font-medium">
                    {worker.name}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Location</p>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Flat 204, Green Residency,
                    <br />
                    Sector 12, Dwarka, New Delhi
                  </p>
                </div>

                <div className="border-t pt-4">
                  <p className="text-xs text-gray-400">
                    Selected date
                  </p>

                  <p className="mt-1 font-semibold">
                    {selectedDateInfo?.day},{" "}
                    {selectedDateInfo?.date}{" "}
                    {selectedDateInfo?.month}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Selected time
                  </p>

                  <p className="mt-1 font-semibold text-green-700">
                    {selectedTime}
                  </p>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">
                      Estimated price
                    </span>

                    <span className="text-xl font-bold text-green-700">
                      ₹{service.price}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-gray-400">
                    Final price may vary depending on the work required.
                  </p>
                </div>
              </div>

              <button
                onClick={handleContinue}
                className="mt-6 w-full rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Continue to Review →
              </button>

              <p className="mt-3 text-center text-xs text-gray-400">
                You can review your booking before confirming.
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