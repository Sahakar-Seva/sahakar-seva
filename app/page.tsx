"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 text-gray-900">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold text-green-700">
            Sahakar Seva
          </Link>

          <div className="text-sm text-gray-500">
            Cooperative Services Platform
          </div>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl items-center justify-center px-6 py-12">
        <div className="w-full max-w-5xl text-center">

          {/* Hero */}
          <div className="mb-12">
            <div className="mb-4 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Trusted • Verified • Cooperative
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to{" "}
              <span className="text-green-700">
                Sahakar Seva
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              A cooperative platform connecting customers with trusted and
              verified service workers for household and community services.
            </p>
          </div>

          {/* Role Selection */}
          <div>
            <h2 className="mb-3 text-2xl font-semibold">
              How do you want to use Sahakar Seva?
            </h2>

            <p className="mb-8 text-gray-500">
              Select your role to continue.
            </p>

            <div className="grid gap-6 md:grid-cols-3">

              {/* Customer */}
              <Link
                href="/customer/login"
                className="group rounded-2xl border border-gray-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                  👤
                </div>

                <h3 className="text-xl font-semibold group-hover:text-green-700">
                  Customer
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
                  Find trusted services, explore verified workers and book
                  services for your household or community needs.
                </p>

                <div className="mt-6 font-medium text-green-700">
                  Continue as Customer →
                </div>
              </Link>

              {/* Worker */}
              <Link
                href="/worker/login"
                className="group rounded-2xl border border-gray-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                  👷
                </div>

                <h3 className="text-xl font-semibold group-hover:text-blue-700">
                  Worker
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
                  Manage your services, receive customer requests, track
                  bookings and manage your earnings.
                </p>

                <div className="mt-6 font-medium text-blue-700">
                  Continue as Worker →
                </div>
              </Link>

              {/* Admin */}
              <Link
                href="/admin/login"
                className="group rounded-2xl border border-gray-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-3xl">
                  🏢
                </div>

                <h3 className="text-xl font-semibold group-hover:text-purple-700">
                  Admin
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
                  Manage cooperative workers, customers, services, bookings
                  and overall platform operations.
                </p>

                <div className="mt-6 font-medium text-purple-700">
                  Continue as Admin →
                </div>
              </Link>

            </div>
          </div>

          {/* Footer */}
          <p className="mt-12 text-sm text-gray-500">
            Sahakar Seva — Cooperative-owned services for the community.
          </p>

        </div>
      </section>
    </main>
  );
}