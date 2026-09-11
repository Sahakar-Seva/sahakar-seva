const services = [
  ["Electrical Repair", "₹299", "1–2 hours"],
  ["Wiring & Installation", "₹699", "2–3 hours"],
  ["Fan Installation", "₹499", "1 hour"],
  ["Switch & Socket Repair", "₹299", "1 hour"],
  ["Appliance Connection", "₹399", "1–2 hours"],
];

const reviews = [
  {
    name: "Amit Verma",
    rating: "5.0",
    text: "Very professional and completed the repair quickly. Pricing was transparent.",
  },
  {
    name: "Priya Mehta",
    rating: "4.8",
    text: "Good service and arrived on time. Would definitely recommend.",
  },
  {
    name: "Neha Kapoor",
    rating: "4.7",
    text: "Experienced worker and explained the issue clearly before starting.",
  },
];

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

export default function WorkerProfilePage() {
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

      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Breadcrumb */}
        <p className="mb-6 text-sm text-gray-500">
          Home / Services / Electrician / Rahul Sharma
        </p>

        {/* Profile Hero */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-800">
                RS
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-3xl font-bold">Rahul Sharma</h2>

                  <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                    <CheckIcon />
                    Verified Worker
                  </span>
                </div>

                <p className="mt-2 text-lg text-gray-600">Electrician</p>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <LocationIcon />
                    Dwarka, New Delhi
                  </span>
                  <span>★ 4.8 rating</span>
                  <span>124 reviews</span>
                  <span>6+ years experience</span>
                  <span>2.4 km away</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:flex-none">
                Contact
              </button>

              <button className="flex-1 rounded-xl bg-green-700 px-7 py-3 text-sm font-semibold text-white hover:bg-green-800 sm:flex-none">
                Book Now
              </button>
            </div>
          </div>
        </section>

        {/* Two Column Content */}
        <div className="mt-7 grid gap-7 lg:grid-cols-[1fr_360px]">
          {/* Left */}
          <div className="space-y-7">
            {/* About */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">About</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Rahul is an experienced electrician providing reliable
                residential electrical services in and around Dwarka. He
                focuses on safe, transparent and timely service for local
                customers.
              </p>
            </section>

            {/* Services */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Services</h3>
                <span className="text-sm text-gray-500">
                  Starting from ₹299
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {services.map(([name, price, duration]) => (
                  <div
                    key={name}
                    className="flex flex-col gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-semibold">{name}</p>
                      <p className="mt-1 text-xs text-gray-500">
                        Estimated duration: {duration}
                      </p>
                    </div>

                    <p className="font-bold text-gray-900">{price}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Availability */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-bold">Availability</h3>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  ["Mon", "9 AM – 7 PM"],
                  ["Tue", "9 AM – 7 PM"],
                  ["Wed", "9 AM – 7 PM"],
                  ["Thu", "9 AM – 7 PM"],
                  ["Fri", "9 AM – 7 PM"],
                  ["Sat", "9 AM – 7 PM"],
                ].map(([day, time]) => (
                  <div
                    key={day}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center"
                  >
                    <p className="text-sm font-semibold">{day}</p>
                    <p className="mt-1 text-xs text-gray-500">{time}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-green-700">
                <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                Available for booking
              </div>
            </section>

            {/* Reviews */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Customer Reviews</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    4.8 average rating from 124 reviews
                  </p>
                </div>

                <div className="text-2xl font-bold">
                  ★ 4.8
                </div>
              </div>

              <div className="mt-6 divide-y divide-gray-100">
                {reviews.map((review) => (
                  <div key={review.name} className="py-5 first:pt-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{review.name}</p>
                      <span className="text-sm font-medium">
                        ★ {review.rating}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right */}
          <aside className="space-y-5">
            {/* Pricing */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold">Pricing</h3>

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-xs text-gray-400">Starting from</p>
                  <p className="mt-1 text-2xl font-bold">₹299</p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-400">Service visit</p>
                  <p className="mt-1 font-semibold">₹199</p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-gray-500">
                Final service cost may vary depending on the work required.
              </p>
            </div>

            {/* SmartMatch */}
            <div className="rounded-2xl border border-green-100 bg-green-50 p-6">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white font-bold text-green-700">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold text-green-900">
                    SmartMatch
                  </h3>
                  <p className="text-xs text-green-700">
                    Why Rahul is a good match
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Service matches your requirement",
                  "Available at your preferred time",
                  "Nearby — approximately 2.4 km",
                  "Highly rated by customers",
                  "Verified 6+ years experience",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-sm text-green-900"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold">Trusted Cooperative Worker</h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Rahul is a verified service provider on Sahakar Seva.
                Worker verification helps customers find reliable local
                professionals.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-50 px-3 py-1.5 text-xs text-gray-600">
                  ✓ Verified Identity
                </span>
                <span className="rounded-full bg-gray-50 px-3 py-1.5 text-xs text-gray-600">
                  ✓ Verified Skills
                </span>
              </div>
            </div>

            {/* Main CTA */}
            <button className="w-full rounded-xl bg-green-700 py-4 text-sm font-semibold text-white shadow-sm hover:bg-green-800">
              Book Rahul Sharma
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}