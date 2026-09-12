import Link from "next/link";

const services = [
  { name: "Electrician", icon: "⚡" },
  { name: "Plumber", icon: "🔧" },
  { name: "Cleaning", icon: "✨" },
  { name: "Carpenter", icon: "🪚" },
  { name: "Appliance Repair", icon: "🔌" },
  { name: "Painting", icon: "🎨" },
];

const workers = [
  {
    name: "Rahul Sharma",
    initials: "RS",
    category: "Electrician",
    rating: "4.8",
    experience: "6+ years",
    distance: "2.4 km",
    price: "₹299",
  },
  {
    name: "Ankit Kumar",
    initials: "AK",
    category: "Plumber",
    rating: "4.7",
    experience: "5+ years",
    distance: "3.1 km",
    price: "₹349",
  },
  {
    name: "Priya Singh",
    initials: "PS",
    category: "Home Cleaning",
    rating: "4.9",
    experience: "4+ years",
    distance: "1.8 km",
    price: "₹499",
  },
];

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

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-lg font-bold text-white">
              S
            </div>

            <div>
              <h1 className="text-lg font-bold text-gray-900">
                Sahakar Seva
              </h1>

              <p className="text-xs text-gray-500">
                Trusted services, powered by cooperation.
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            <Link href="/" className="text-green-700">
              Home
            </Link>

            <Link
              href="/customer/services"
              className="hover:text-green-700"
            >
              Services
            </Link>

            <a
              href="#how-it-works"
              className="hover:text-green-700"
            >
              How it works
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden items-center gap-2 text-sm text-gray-600 sm:flex">
              <LocationIcon />
              Delhi, India
            </button>

            <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
              <BellIcon />
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-800">
              A
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-800">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              Verified local service providers
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
              Reliable services.
              <br />
              <span className="text-green-700">Trusted people.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Find verified local workers for your household and community
              service needs. Simple booking, transparent pricing and trusted
              cooperative workers.
            </p>

            {/* Search */}
            <div className="mt-8 flex max-w-3xl flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm sm:flex-row">
              <div className="flex flex-1 items-center gap-3 px-3">
                <SearchIcon />

                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-gray-400"
                />
              </div>

              <div className="flex items-center gap-2 border-t border-gray-100 px-3 py-3 text-sm text-gray-600 sm:border-l sm:border-t-0">
                <LocationIcon />
                <span>Delhi, India</span>
              </div>

              <button className="rounded-xl bg-green-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
                Find a service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Popular Services
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Get help from verified professionals near you.
            </p>
          </div>

          <Link
            href="/customer/services"
            className="hidden text-sm font-semibold text-green-700 sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {services.map((service) => (
            <Link
              key={service.name}
              href="/customer/services"
              className="rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-green-300 hover:shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                {service.icon}
              </div>

              <p className="text-sm font-semibold text-gray-900">
                {service.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Recommended Workers */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-7">
            <h3 className="text-2xl font-bold text-gray-900">
              Recommended for you
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Trusted workers matched based on service, location and
              availability.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {workers.map((worker) => (
              <div
                key={worker.name}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 font-semibold text-green-800">
                      {worker.initials}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900">
                          {worker.name}
                        </h4>

                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-700 text-white">
                          <CheckIcon />
                        </span>
                      </div>

                      <p className="text-sm text-gray-500">
                        {worker.category}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                    Verified
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 border-y border-gray-100 py-4">
                  <div>
                    <p className="text-xs text-gray-400">Rating</p>

                    <p className="mt-1 text-sm font-semibold">
                      ★ {worker.rating}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Experience
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      {worker.experience}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Distance
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      {worker.distance}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">
                      Starting from
                    </p>

                    <p className="text-lg font-bold text-gray-900">
                      {worker.price}
                    </p>
                  </div>

                  <button className="rounded-xl bg-green-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-800">
                    Book now
                  </button>
                </div>

                <button className="mt-3 w-full rounded-xl border border-gray-200 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  View profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works / Trust */}
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16"
      >
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Why choose Sahakar Seva?
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Built around trust, transparency and local cooperation.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "✓",
              "Verified workers",
              "Connect with trusted and verified service providers.",
            ],
            [
              "₹",
              "Transparent pricing",
              "Know the starting price before booking.",
            ],
            [
              "⌖",
              "Local service providers",
              "Find skilled workers available near you.",
            ],
            [
              "✓",
              "Secure booking",
              "Simple and reliable service booking experience.",
            ],
          ].map(([icon, title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-lg font-bold text-green-700">
                {icon}
              </div>

              <h4 className="mt-4 font-semibold text-gray-900">
                {title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-7 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sahakar Seva</p>

          <p>Trusted services, powered by cooperation.</p>
        </div>
      </footer>
    </main>
  );
}