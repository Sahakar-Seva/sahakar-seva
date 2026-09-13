"use client";

import Link from "next/link";
import { useState } from "react";

export default function WorkerLogin() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Temporary worker selection for prototype testing.
    // Rahul = 1
    // Suresh = 2
    const workerId = phone.endsWith("2") ? "2" : "1";

    window.location.href = `/worker/dashboard?worker=${workerId}`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold text-green-700">
            Sahakar Seva
          </Link>

          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-green-700"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Login */}
      <section className="flex min-h-[calc(100vh-81px)] items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
              👷
            </div>

            <div className="mt-6 text-center">
              <h1 className="text-3xl font-bold text-gray-900">
                Worker Login
              </h1>

              <p className="mt-2 text-sm text-gray-600">
                Sign in to manage your services and bookings.
              </p>
            </div>

            <form onSubmit={handleLogin} className="mt-8 space-y-5">
              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Login as Worker
              </button>
            </form>

            {/* Temporary Testing Info */}
            <div className="mt-6 rounded-lg bg-blue-50 p-4 text-center text-sm text-blue-700">
              For testing, use a phone number ending in <strong>2</strong>{" "}
              for Suresh. Any other number opens Rahul&apos;s account.
            </div>

            {/* Switch Role */}
            <div className="mt-6 text-center text-sm text-gray-600">
              Not a worker?{" "}
              <Link
                href="/"
                className="font-medium text-green-700 hover:underline"
              >
                Choose another role
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}