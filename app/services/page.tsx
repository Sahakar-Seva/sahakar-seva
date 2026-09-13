const workers = [
  {
    name: "Rahul Sharma",
    initials: "RS",
    service: "Electrician",
    rating: "4.8",
    reviews: "124 reviews",
    experience: "6+ years",
    distance: "2.4 km",
    price: "₹299",
    availability: "Available today",
    description: "Electrical repairs, wiring and installation services.",
  },
  {
    name: "Vikram Singh",
    initials: "VS",
    service: "Electrician",
    rating: "4.7",
    reviews: "98 reviews",
    experience: "5+ years",
    distance: "3.1 km",
    price: "₹349",
    availability: "Available today",
    description: "Home electrical maintenance and appliance connections.",
  },
  {
    name: "Amit Verma",
    initials: "AV",
    service: "Electrician",
    rating: "4.9",
    reviews: "156 reviews",
    experience: "8+ years",
    distance: "4.2 km",
    price: "₹299",
    availability: "Available tomorrow",
    description: "Experienced electrician for residential electrical work.",
  },
  {
    name: "Suresh Kumar",
    initials: "SK",
    service: "Electrician",
    rating: "4.6",
    reviews: "76 reviews",
    experience: "4+ years",
    distance: "5.0 km",
    price: "₹299",
    availability: "Available today",
    description: "Switch, socket, fan and general electrical repairs.",
  },
];

function SearchIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
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

function CheckIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
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

export default function ServicesPage() {
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
            <a href="/services" className="text-green-700">
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

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Page Heading */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-medium text-green-700">
              Home / Services / Electrician
            </p>

            <h2 className="text-3xl font-bold tracking-tight">
              Electricians near you
            </h2>

            <p className="mt-2 text-gray-500">
              Verified professionals available in your area
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600">
            <LocationIcon />
            Delhi, India
          </div>
        </div>

        {/* Search and Controls */}
        <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm md:flex-row">
          <div className="flex flex-1 items-center gap-3 px-3">
            <SearchIcon />
            <input
              type="text"
              value="Electrician"
              readOnly
              className="w-full bg-transparent py-3 text-sm outline-none"
            />
          </div>

          <button className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Filter
          </button>

          <button className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Sort: Best Match
          </button>
        </div>

        {/* Content */}
        <div className="mt-8 grid gap-7 lg:grid-cols-[250px_1fr]">
          {/* Filters */}
          <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Filters</h3>
              <button className="text-xs font-medium text-green-700">
                Reset
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <p className="mb-3 text-sm font-semibold">Service Type</p>

                <label className="flex items-center gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 accent-green-700"
                  />
                  Electrician
                </label>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold">Distance</p>

                {["Within 2 km", "Within 5 km", "Within 10 km"].map(
                  (item, index) => (
                    <label
                      key={item}
                      className="mb-3 flex items-center gap-3 text-sm text-gray-600"
                    >
                      <input
                        type="radio"
                        name="distance"
                        defaultChecked={index === 1}
                        className="h-4 w-4 accent-green-700"
                      />
                      {item}
                    </label>
                  ),
                )}
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold">Availability</p>

                <label className="flex items-center gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-green-700"
                  />
                  Available today
                </label>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold">Rating</p>

                <label className="flex items-center gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-green-700"
                  />
                  4.5 & above
                </label>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold">Experience</p>

                <label className="flex items-center gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-green-700"
                  />
                  5+ years
                </label>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold">Price Range</p>

                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-400">
                    Min ₹
                  </div>
                  <div className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-400">
                    Max ₹
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Worker Results */}
          <section>
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Best matches for you</h3>
                <p className="mt-1 text-sm text-gray-500">
                  24 verified electricians available
                </p>
              </div>

              <span className="hidden rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700 sm:block">
                SmartMatch enabled
              </span>
            </div>

            <div className="space-y-4">
              {workers.map((worker) => (
                <div
                  key={worker.name}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-center">
                    {/* Worker */}
                    <div className="flex flex-1 gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-100 font-semibold text-green-800">
                        {worker.initials}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-semibold">{worker.name}</h4>

                          <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                            <CheckIcon />
                            Verified
                          </span>
                        </div>

                        <p className="mt-1 text-sm text-gray-500">
                          {worker.service}
                        </p>

                        <p className="mt-2 text-sm text-gray-600">
                          {worker.description}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm md:min-w-[300px]">
                      <div>
                        <p className="text-xs text-gray-400">Rating</p>
                        <p className="mt-1 font-semibold">
                          ★ {worker.rating}{" "}
                          <span className="font-normal text-gray-400">
                            ({worker.reviews})
                          </span>
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">Experience</p>
                        <p className="mt-1 font-semibold">
                          {worker.experience}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">Distance</p>
                        <p className="mt-1 font-semibold">
                          {worker.distance}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">Starting from</p>
                        <p className="mt-1 font-semibold">{worker.price}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2 md:w-32">
                      <span className="text-center text-xs font-medium text-green-700">
                        {worker.availability}
                      </span>

                      <button className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        View Profile
                      </button>

                      <button className="rounded-xl bg-green-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-800">
                        Book Now
                      </button>
                    </div>
                  </div>

                  {/* Match Factors */}
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-gray-100 pt-4">
                    <span className="rounded-full bg-gray-50 px-3 py-1.5 text-xs text-gray-600">
                      ✓ Service match
                    </span>
                    <span className="rounded-full bg-gray-50 px-3 py-1.5 text-xs text-gray-600">
                      ✓ Nearby
                    </span>
                    <span className="rounded-full bg-gray-50 px-3 py-1.5 text-xs text-gray-600">
                      ✓ Available
                    </span>
                    <span className="rounded-full bg-gray-50 px-3 py-1.5 text-xs text-gray-600">
                      ✓ Highly rated
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}