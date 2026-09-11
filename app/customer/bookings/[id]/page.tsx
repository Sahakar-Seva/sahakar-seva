"use client";

import { useParams, useRouter } from "next/navigation";

export default function BookingDetailsPage() {
  const router = useRouter();
  const params = useParams();

  const bookingId =
    typeof params.id === "string" ? params.id : "SS-2026-00124";

  const isCompleted = bookingId === "SS-2026-00118";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <button
            onClick={() => router.push("/")}
            className="text-xl font-bold text-green-700"
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

      {/* Main */}
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* Back */}
        <button
          onClick={() => router.push("/customer/bookings")}
          className="mb-6 text-sm font-medium text-gray-600 hover:text-green-700"
        >
          ← Back to My Bookings
        </button>

        {/* Heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium text-green-600">
              Booking Details
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              Electrical Repair
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Booking ID: {bookingId}
            </p>
          </div>

          <span
            className={`w-fit rounded-full border px-4 py-2 text-sm font-medium ${
              isCompleted
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-blue-200 bg-blue-50 text-blue-700"
            }`}
          >
            {isCompleted ? "Completed" : "Upcoming"}
          </span>
        </div>

        {/* Tracking */}
        {!isCompleted && (
          <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Booking Status
            </h2>

            <div className="mt-8">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                    ✓
                  </div>

                  <div className="h-12 w-0.5 bg-green-500" />
                </div>

                <div className="pb-6">
                  <p className="font-semibold text-gray-900">
                    Booking Confirmed
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Your booking request has been received.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                    ✓
                  </div>

                  <div className="h-12 w-0.5 bg-green-500" />
                </div>

                <div className="pb-6">
                  <p className="font-semibold text-gray-900">
                    Worker Assigned
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Rahul Sharma has been assigned to your service.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-green-600 bg-white text-sm font-bold text-green-600">
                    3
                  </div>

                  <div className="h-12 w-0.5 bg-gray-200" />
                </div>

                <div className="pb-6">
                  <p className="font-semibold text-gray-900">
                    Service Scheduled
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Your service is scheduled for 11 September at 10:00 AM.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-sm font-bold text-gray-400">
                  4
                </div>

                <div>
                  <p className="font-semibold text-gray-400">
                    Service Completed
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    This will be updated after the service is completed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Completed Status */}
        {isCompleted && (
          <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-600 text-xl text-white">
                ✓
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">
                  Service Completed
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  Your Electrical Repair service was successfully completed.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Details Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main Details */}
          <div className="space-y-6 lg:col-span-2">
            {/* Service */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Service Details
              </h2>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-xl">
                  ⚡
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Electrical Repair
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Repairs • 1–2 hours
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t pt-5">
                <p className="text-sm text-gray-500">
                  Service includes
                </p>

                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>✓ Electrical inspection</li>
                  <li>✓ Minor electrical repairs</li>
                  <li>✓ Switch and socket checking</li>
                  <li>✓ Basic safety inspection</li>
                </ul>
              </div>
            </div>

            {/* Worker */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Service Provider
              </h2>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                    RS
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      Rahul Sharma
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Verified Electrician
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      ⭐ 4.8 • 6+ years experience
                    </p>
                  </div>
                </div>

                {!isCompleted && (
                  <button
                    onClick={() => alert("Contact feature coming soon")}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Contact
                  </button>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Service Location
              </h2>

              <div className="mt-5 flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100">
                  📍
                </div>

                <div>
                  <p className="font-medium text-gray-900">
                    Flat 204, Green Residency
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    Sector 12, Dwarka, New Delhi
                  </p>
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Date & Time
              </h2>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">Date</p>

                  <p className="mt-1 font-medium text-gray-900">
                    Friday, 11 September 2026
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">Time</p>

                  <p className="mt-1 font-medium text-gray-900">
                    10:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-gray-900">
                Payment Summary
              </h2>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Service charge
                  </span>

                  <span className="font-medium text-gray-900">
                    ₹299
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Service visit
                  </span>

                  <span className="font-medium text-green-600">
                    Included
                  </span>
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">
                      Total
                    </span>

                    <span className="text-xl font-bold text-gray-900">
                      ₹299
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            {!isCompleted && (
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h2 className="font-semibold text-gray-900">
                  Manage Booking
                </h2>

                <div className="mt-5 space-y-3">
                  <button
                    onClick={() =>
                      router.push(
                        `/customer/book/schedule?worker=1&service=1`
                      )
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Reschedule
                  </button>

                  <button
                    onClick={() =>
                      alert("Cancellation feature coming soon")
                    }
                    className="w-full rounded-lg border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50"
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            )}

            {/* Completed Review */}
            {isCompleted && (
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h2 className="font-semibold text-gray-900">
                  How was your service?
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Share your experience with Rahul Sharma.
                </p>

                <button
                  onClick={() => router.push("/customer/review/1")}
                  className="mt-5 w-full rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white hover:bg-green-700"
                >
                  Rate & Review
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Help */}
        <div className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">
                Need help with this booking?
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Our support team is here to help you.
              </p>
            </div>

            <button
              onClick={() => router.push("/customer/support")}
              className="w-fit rounded-lg border border-green-200 bg-white px-4 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-100"
            >
              Get Support
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}