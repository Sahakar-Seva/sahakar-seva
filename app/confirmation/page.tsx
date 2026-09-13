function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="m5 12 4 4L19 6" />
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

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-lg font-bold text-white">
              S
            </div>

            <div>
              <h1 className="text-lg font-bold">Sahakar Seva</h1>
              <p className="text-xs text-gray-500">
                Trusted services, powered by cooperation.
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            <a href="/" className="hover:text-green-700">
              Home
            </a>
            <a href="/services" className="hover:text-green-700">
              Services
            </a>
            <a href="#" className="hover:text-green-700">
              How it works
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 text-sm text-gray-600 sm:flex">
              <LocationIcon />
              Delhi, India
            </div>

            <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
              <BellIcon />
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-800">
              A
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Success */}
        <section className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
            <CheckIcon />
          </div>

          <h2 className="mt-5 text-3xl font-bold">
            Booking Confirmed!
          </h2>

          <p className="mt-2 text-gray-500">
            Your service has been successfully booked.
          </p>

          <div className="mt-5 inline-flex rounded-full bg-gray-50 px-4 py-2 text-sm">
            Booking ID:
            <span className="ml-2 font-semibold text-gray-900">
              SS-2026-1048
            </span>
          </div>
        </section>

        <div className="mt-7 grid gap-7 lg:grid-cols-[1fr_360px]">
          {/* Left */}
          <div className="space-y-6">
            {/* Worker */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold">Your service provider</h3>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 font-bold text-green-800">
                  RS
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-semibold">Rahul Sharma</h4>

                    <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                      <CheckIcon />
                      Verified
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-gray-500">
                    Electrician · ★ 4.8 · 6+ years
                  </p>
                </div>
              </div>
            </section>

            {/* Booking Details */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold">Booking Details</h3>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs text-gray-400">Service</p>
                  <p className="mt-1 font-semibold">Electrical Repair</p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Date</p>
                  <p className="mt-1 font-semibold">
                    18 September 2026
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Time</p>
                  <p className="mt-1 font-semibold">4:00 PM</p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="mt-1 font-semibold">
                    Dwarka, New Delhi
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Total Amount</span>
                  <span className="text-xl font-bold text-green-700">
                    ₹498
                  </span>
                </div>
              </div>
            </section>

            {/* Status Tracker */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold">Booking Status</h3>

              <div className="mt-7">
                <div className="relative">
                  <div className="absolute left-4 top-1 h-full w-px bg-gray-200" />

                  <div className="relative mb-7 flex gap-4">
                    <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-white">
                      <CheckIcon />
                    </div>

                    <div>
                      <p className="font-semibold">Booking Confirmed</p>
                      <p className="mt-1 text-xs text-gray-500">
                        Your booking has been confirmed.
                      </p>
                    </div>
                  </div>

                  <div className="relative mb-7 flex gap-4">
                    <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-green-600 bg-white text-green-700">
                      ●
                    </div>

                    <div>
                      <p className="font-semibold">Worker Accepted</p>
                      <p className="mt-1 text-xs text-gray-500">
                        Waiting for worker confirmation.
                      </p>
                    </div>
                  </div>

                  <div className="relative mb-7 flex gap-4">
                    <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-400">
                      ○
                    </div>

                    <div>
                      <p className="font-medium text-gray-500">
                        Worker On the Way
                      </p>
                    </div>
                  </div>

                  <div className="relative flex gap-4">
                    <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-400">
                      ○
                    </div>

                    <div>
                      <p className="font-medium text-gray-500">
                        Service Completed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Actions */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <button className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                  Contact Worker
                </button>

                <button className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                  View Booking
                </button>

                <button className="rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800">
                  Track Booking
                </button>

                <a
                  href="/"
                  className="rounded-xl border border-gray-200 px-5 py-3 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Back to Home
                </a>
              </div>
            </section>
          </div>

          {/* Right */}
          <aside className="space-y-6">
            {/* Map Preview */}
            <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="p-5">
                <h3 className="font-bold">Track your service</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Worker is approximately 2.4 km away.
                </p>
              </div>

              {/* Map Mockup */}
              <div className="relative h-72 overflow-hidden bg-green-50">
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute left-10 top-10 h-px w-80 rotate-12 bg-gray-300" />
                  <div className="absolute left-0 top-36 h-px w-96 -rotate-6 bg-gray-300" />
                  <div className="absolute left-24 top-56 h-px w-80 rotate-6 bg-gray-300" />
                  <div className="absolute left-44 top-0 h-80 w-px rotate-12 bg-gray-300" />
                  <div className="absolute left-72 top-0 h-80 w-px -rotate-12 bg-gray-300" />
                </div>

                {/* Route */}
                <div className="absolute left-[25%] top-[55%] h-1 w-[50%] rotate-[-18deg] rounded-full bg-green-600" />

                {/* Customer */}
                <div className="absolute bottom-[27%] left-[20%] flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-green-700 text-white shadow-md">
                  <LocationIcon />
                </div>

                <div className="absolute bottom-[16%] left-[12%] rounded-lg bg-white px-2 py-1 text-xs font-medium shadow-sm">
                  You
                </div>

                {/* Worker */}
                <div className="absolute right-[20%] top-[25%] flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-gray-800 text-xs font-bold text-white shadow-md">
                  RS
                </div>

                <div className="absolute right-[13%] top-[14%] rounded-lg bg-white px-2 py-1 text-xs font-medium shadow-sm">
                  Rahul
                </div>
              </div>

              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="text-xs text-gray-400">Distance</p>
                  <p className="font-semibold">~2.4 km</p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-400">Destination</p>
                  <p className="font-semibold">Dwarka, New Delhi</p>
                </div>
              </div>
            </section>

            {/* Trust */}
            <section className="rounded-2xl border border-green-100 bg-green-50 p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white font-bold text-green-700">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-green-900">
                    Verified cooperative worker
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-green-800">
                    Your booking is with a verified local worker through
                    Sahakar Seva.
                  </p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}