import Link from "next/link";

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="m5 12 4 4L19 6" />
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

function CalendarIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 6h16a2 2 0 0 1 2 2v11H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M2 6V5a2 2 0 0 1 2-2h14" />
      <path d="M17 13h5" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      className="h-5 w-5 fill-current"
      viewBox="0 0 24 24"
    >
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function WorkerDashboard() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/worker/dashboard" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-lg font-bold text-white">
              S
            </div>

            <div>
              <h1 className="text-lg font-bold">Sahakar Seva</h1>
              <p className="text-xs text-gray-500">
                Trusted services, powered by cooperation.
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-gray-600 lg:flex">
            <Link
              href="/worker/dashboard"
              className="font-semibold text-green-700"
            >
              Dashboard
            </Link>

            <Link
              href="/worker/bookings"
              className="hover:text-green-700"
            >
              Bookings
            </Link>

            <Link
              href="/worker/services"
              className="hover:text-green-700"
            >
              Services
            </Link>

            <Link
              href="/worker/earnings"
              className="hover:text-green-700"
            >
              Earnings
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="relative rounded-full p-2 text-gray-600 hover:bg-gray-100"
            >
              <BellIcon />

              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-green-600" />
            </button>

            <Link href="/worker/profile" className="hidden text-right sm:block">
              <p className="text-sm font-semibold">Rahul Sharma</p>

              <div className="flex items-center justify-end gap-1 text-xs text-green-700">
                <CheckIcon />
                Verified Worker
              </div>
            </Link>

            <Link
              href="/worker/profile"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800"
            >
              RS
            </Link>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Welcome */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">
                Welcome back, Rahul!
              </h2>

              <span className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                <CheckIcon />
                Verified
              </span>
            </div>

            <p className="mt-2 text-gray-500">
              Manage your services, bookings and earnings from one place.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-green-600" />

            <div>
              <p className="text-sm font-semibold text-green-900">
                Available
              </p>

              <p className="text-xs text-green-700">
                Accepting new bookings
              </p>
            </div>

            <div className="ml-2 h-6 w-11 rounded-full bg-green-700 p-1">
              <div className="ml-auto h-4 w-4 rounded-full bg-white" />
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-green-50 p-3 text-green-700">
                <CalendarIcon />
              </div>

              <span className="text-xs font-medium text-green-700">
                Today
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Today&apos;s Bookings
            </p>

            <p className="mt-1 text-2xl font-bold">3</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-gray-50 p-3 text-gray-700">
                <CalendarIcon />
              </div>

              <span className="text-xs font-medium text-gray-500">
                Upcoming
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Upcoming Services
            </p>

            <p className="mt-1 text-2xl font-bold">5</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-green-50 p-3 text-green-700">
                <WalletIcon />
              </div>

              <span className="text-xs font-medium text-green-700">
                This Month
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              This Month&apos;s Earnings
            </p>

            <p className="mt-1 text-2xl font-bold">₹18,450</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-yellow-50 p-3 text-yellow-600">
                <StarIcon />
              </div>

              <span className="text-xs font-medium text-gray-500">
                124 reviews
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Average Rating
            </p>

            <div className="mt-1 flex items-center gap-2">
              <p className="text-2xl font-bold">4.8</p>
              <span className="text-sm text-gray-500">★</span>
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-7 lg:grid-cols-[1fr_330px]">
          {/* Today's Bookings */}
          <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 p-6">
              <div>
                <h3 className="text-lg font-bold">
                  Today&apos;s Bookings
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Your scheduled services for today
                </p>
              </div>

              <Link
                href="/worker/bookings"
                className="flex items-center gap-1 text-sm font-semibold text-green-700 hover:text-green-800"
              >
                View All
                <ArrowIcon />
              </Link>
            </div>

            <div className="divide-y divide-gray-100">
              {/* Booking 1 */}
              <div className="p-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 font-semibold text-gray-600">
                      AV
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold">Amit Verma</h4>

                        <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                          Confirmed
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-gray-500">
                        Electrical Repair
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        10 AM · Dwarka, New Delhi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-5 md:justify-end">
                    <p className="font-semibold">₹499</p>

                    <Link
                      href="/worker/bookings"
                      className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>

              {/* Booking 2 */}
              <div className="p-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 font-semibold text-gray-600">
                      PM
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold">Priya Mehta</h4>

                        <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                          Confirmed
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-gray-500">
                        Fan Installation
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        2 PM · Janakpuri, New Delhi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-5 md:justify-end">
                    <p className="font-semibold">₹699</p>

                    <Link
                      href="/worker/bookings"
                      className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>

              {/* Booking 3 */}
              <div className="p-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 font-semibold text-gray-600">
                      RK
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold">Rohit Kumar</h4>

                        <span className="rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700">
                          Pending
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-gray-500">
                        Switch & Socket Repair
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        5 PM · Uttam Nagar, New Delhi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 md:justify-end">
                    <p className="mr-2 font-semibold">₹399</p>

                    <button
                      type="button"
                      className="rounded-lg border border-red-100 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                    >
                      Reject
                    </button>

                    <button
                      type="button"
                      className="rounded-lg bg-green-700 px-3 py-2 text-sm font-medium text-white hover:bg-green-800"
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <aside className="space-y-6">
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">Quick Actions</h3>

              <div className="mt-5 space-y-3">
                <Link
                  href="/worker/services"
                  className="flex w-full items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium hover:bg-gray-50"
                >
                  Manage Services
                  <ArrowIcon />
                </Link>

                <Link
                  href="/worker/bookings"
                  className="flex w-full items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium hover:bg-gray-50"
                >
                  View All Bookings
                  <ArrowIcon />
                </Link>

                <Link
                  href="/worker/profile"
                  className="flex w-full items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium hover:bg-gray-50"
                >
                  Update Availability
                  <ArrowIcon />
                </Link>

                <Link
                  href="/worker/earnings"
                  className="flex w-full items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium hover:bg-gray-50"
                >
                  View Earnings
                  <ArrowIcon />
                </Link>
              </div>
            </section>

            {/* Cooperative Message */}
            <section className="rounded-2xl border border-green-100 bg-green-50 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-bold text-green-700">
                S
              </div>

              <h3 className="mt-4 font-semibold text-green-900">
                Growing together
              </h3>

              <p className="mt-2 text-sm leading-6 text-green-800">
                Every service you complete helps strengthen cooperative
                livelihoods and builds trust in your local community.
              </p>
            </section>
          </aside>
        </div>

        {/* Upcoming + Performance */}
        <div className="mt-7 grid gap-7 lg:grid-cols-2">
          {/* Upcoming */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">
                  Upcoming Bookings
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Your next scheduled services
                </p>
              </div>

              <Link
                href="/worker/bookings"
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200"
              >
                5 services
              </Link>
            </div>

            <div className="mt-5 space-y-4">
              <Link
                href="/worker/bookings"
                className="flex items-center justify-between rounded-xl bg-gray-50 p-4 hover:bg-gray-100"
              >
                <div>
                  <p className="font-semibold">Electrical Repair</p>

                  <p className="mt-1 text-xs text-gray-500">
                    Amit Verma · 18 Sep · 10 AM
                  </p>
                </div>

                <p className="font-semibold">₹499</p>
              </Link>

              <Link
                href="/worker/bookings"
                className="flex items-center justify-between rounded-xl bg-gray-50 p-4 hover:bg-gray-100"
              >
                <div>
                  <p className="font-semibold">Fan Installation</p>

                  <p className="mt-1 text-xs text-gray-500">
                    Priya Mehta · 18 Sep · 2 PM
                  </p>
                </div>

                <p className="font-semibold">₹699</p>
              </Link>

              <Link
                href="/worker/bookings"
                className="flex items-center justify-between rounded-xl bg-gray-50 p-4 hover:bg-gray-100"
              >
                <div>
                  <p className="font-semibold">
                    Switch & Socket Repair
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Rohit Kumar · 19 Sep · 5 PM
                  </p>
                </div>

                <p className="font-semibold">₹399</p>
              </Link>
            </div>
          </section>

          {/* Performance */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div>
              <h3 className="text-lg font-bold">Performance</h3>

              <p className="mt-1 text-sm text-gray-500">
                Your service performance at a glance
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Completed</p>

                <p className="mt-2 text-2xl font-bold">86</p>
              </div>

              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  Customer Satisfaction
                </p>

                <p className="mt-2 text-2xl font-bold">96%</p>
              </div>

              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  Response Rate
                </p>

                <p className="mt-2 text-2xl font-bold">94%</p>
              </div>

              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Rating</p>

                <div className="mt-2 flex items-center gap-1">
                  <p className="text-2xl font-bold">4.8</p>
                  <span className="text-sm text-yellow-500">★</span>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-900">
                Great work, Rahul!
              </p>

              <p className="mt-1 text-xs leading-5 text-green-800">
                Your high customer satisfaction and response rate are
                helping you build a strong reputation on Sahakar Seva.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}