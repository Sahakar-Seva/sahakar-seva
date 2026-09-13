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

function StarIcon() {
  return (
    <svg
      className="h-4 w-4 fill-current"
      viewBox="0 0 24 24"
    >
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="h-4 w-4"
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

export default function WorkerProfile() {
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

          <nav className="hidden items-center gap-7 text-sm font-medium text-gray-600 lg:flex">
            <a href="/worker/dashboard" className="hover:text-green-700">
              Dashboard
            </a>

            <a href="#" className="hover:text-green-700">
              Bookings
            </a>

            <a href="#" className="hover:text-green-700">
              Services
            </a>

            <a href="#" className="hover:text-green-700">
              Earnings
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
              <BellIcon />
            </button>

            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">Rahul Sharma</p>

              <div className="flex items-center justify-end gap-1 text-xs text-green-700">
                <CheckIcon />
                Verified Worker
              </div>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
              RS
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <a href="/worker/dashboard" className="hover:text-green-700">
            Dashboard
          </a>
          <span>/</span>
          <span className="text-gray-800">My Profile</span>
        </div>

        {/* Profile Header */}
        <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-800">
                RS
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-2xl font-bold">Rahul Sharma</h2>

                  <span className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                    <CheckIcon />
                    Verified Worker
                  </span>
                </div>

                <p className="mt-1 font-medium text-gray-600">
                  Electrician
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <LocationIcon />
                    Dwarka, New Delhi
                  </span>

                  <span className="flex items-center gap-1">
                    <StarIcon />
                    <span className="font-semibold text-gray-800">4.8</span>
                    124 reviews
                  </span>

                  <span>6+ years experience</span>

                  <span>2.4 km</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                Edit Profile
              </button>

              <button className="rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800">
                Update Availability
              </button>
            </div>
          </div>
        </section>

        <div className="mt-7 grid gap-7 lg:grid-cols-[1fr_340px]">
          {/* Left */}
          <div className="space-y-7">
            {/* About */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">About</h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Experienced electrician providing reliable electrical
                repair and installation services for homes and local
                businesses. Focused on quality work, transparent pricing,
                and dependable service for every customer.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">Experience</p>
                  <p className="mt-1 font-semibold">6+ years</p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">Service Area</p>
                  <p className="mt-1 font-semibold">Local & nearby</p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">Availability</p>
                  <p className="mt-1 font-semibold">Mon–Sat · 9–7</p>
                </div>
              </div>
            </section>

            {/* Service Area */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">Service Area</h3>

              <p className="mt-2 text-sm text-gray-500">
                Rahul currently accepts service requests in:
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-700">
                  Dwarka
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-700">
                  Janakpuri
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-700">
                  Uttam Nagar
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-700">
                  Nearby areas
                </span>
              </div>
            </section>

            {/* Services */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">My Services</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Services currently offered to customers
                  </p>
                </div>

                <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                  Manage Services
                </button>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-100 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold">Electrical Repair</p>
                      <p className="mt-1 text-xs text-gray-500">
                        Repairs & troubleshooting
                      </p>
                    </div>

                    <p className="font-semibold">₹299</p>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-100 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold">
                        Wiring & Installation
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Home wiring services
                      </p>
                    </div>

                    <p className="font-semibold">₹699</p>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-100 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold">Fan Installation</p>
                      <p className="mt-1 text-xs text-gray-500">
                        Ceiling & wall fans
                      </p>
                    </div>

                    <p className="font-semibold">₹499</p>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-100 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold">
                        Switch & Socket Repair
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Repair & replacement
                      </p>
                    </div>

                    <p className="font-semibold">₹299</p>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-100 p-4 sm:col-span-2">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold">
                        Appliance Connection
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Safe electrical appliance connections
                      </p>
                    </div>

                    <p className="font-semibold">₹399</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills & Verification */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">Skills & Verification</h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-4 rounded-xl bg-green-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-green-700">
                    <CheckIcon />
                  </div>

                  <div>
                    <p className="font-semibold text-green-900">
                      Verified Identity
                    </p>
                    <p className="mt-1 text-xs text-green-700">
                      Identity verification completed
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-green-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-green-700">
                    <CheckIcon />
                  </div>

                  <div>
                    <p className="font-semibold text-green-900">
                      Verified Skills
                    </p>
                    <p className="mt-1 text-xs text-green-700">
                      Electrical skills verified
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Reviews */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">Recent Reviews</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    What customers say about your service
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <StarIcon />
                  <span className="font-bold">4.8</span>
                </div>
              </div>

              <div className="mt-5 divide-y divide-gray-100">
                <div className="py-5 first:pt-0">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Amit Verma</p>
                    <span className="text-sm text-gray-500">
                      5.0 ★
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Very professional and arrived on time. The electrical
                    issue was fixed quickly.
                  </p>
                </div>

                <div className="py-5">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Priya Mehta</p>
                    <span className="text-sm text-gray-500">
                      4.8 ★
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Good service and clear communication. Would definitely
                    recommend Rahul.
                  </p>
                </div>

                <div className="pb-0 pt-5">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Neha Kapoor</p>
                    <span className="text-sm text-gray-500">
                      4.7 ★
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Reliable worker and reasonable pricing. Happy with the
                    service.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            {/* Performance */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">Performance</h3>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
                  <span className="text-sm text-gray-500">
                    Completed Services
                  </span>
                  <span className="font-bold">86</span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
                  <span className="text-sm text-gray-500">
                    Rating
                  </span>
                  <span className="font-bold">4.8 / 5</span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
                  <span className="text-sm text-gray-500">
                    Customer Satisfaction
                  </span>
                  <span className="font-bold">96%</span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
                  <span className="text-sm text-gray-500">
                    Response Rate
                  </span>
                  <span className="font-bold">94%</span>
                </div>
              </div>
            </section>

            {/* Availability */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">Availability</h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Current working schedule
                  </p>
                </div>

                <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                  <span className="h-2 w-2 rounded-full bg-green-600" />
                  Available
                </span>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Monday – Saturday</span>
                  <span className="font-medium">9 AM – 7 PM</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Sunday</span>
                  <span className="font-medium text-gray-400">
                    Unavailable
                  </span>
                </div>
              </div>

              <button className="mt-5 w-full rounded-xl border border-gray-200 py-3 text-sm font-semibold hover:bg-gray-50">
                Update Availability
              </button>
            </section>

            {/* Cooperative Message */}
            <section className="rounded-2xl border border-green-100 bg-green-50 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-bold text-green-700">
                S
              </div>

              <h3 className="mt-4 font-semibold text-green-900">
                Your work matters
              </h3>

              <p className="mt-2 text-sm leading-6 text-green-800">
                Every completed service helps create trusted local
                connections and strengthens cooperative livelihoods.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}