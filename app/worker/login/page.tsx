"use client";

import Link from "next/link";
import { useState } from "react";
import { loginUser, getUserProfile } from "@/Firebase/auth";

export default function WorkerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fillDemoCredentials = () => {
    setEmail("plumber_1789328928622@test.com");
    setPassword("WorkerSecurePass123!");
    setError("");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const user = await loginUser(email, password);
      const profile = await getUserProfile(user.uid);

      if (!profile) {
        setError("User profile not found.");
        setLoading(false);
        return;
      }

      // RBAC: only workers can use worker login
      if (profile.role !== "worker") {
        setError(
          `This account is registered as ${profile.role}. Please use the correct login.`
        );
        setLoading(false);
        return;
      }

      // Use Firebase UID instead of fake worker IDs
      window.location.href = `/worker/dashboard?worker=${user.uid}`;
    } catch (err: any) {
      console.error("Worker login error:", err);

      if (
        err?.code === "auth/invalid-credential" ||
        err?.code === "auth/wrong-password" ||
        err?.code === "auth/user-not-found"
      ) {
        setError("Invalid email or password.");
      } else {
        setError(err?.message || "Login failed. Please try again.");
      }

      setLoading(false);
    }
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
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
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

              {/* Demo Credentials */}
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-blue-800">
                      Demo Worker Account
                    </p>

                    <p className="mt-1 text-xs text-blue-700">
                      Email: plumber_1789328928622@test.com
                    </p>

                    <p className="text-xs text-blue-700">
                      Password: WorkerSecurePass123!
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={fillDemoCredentials}
                    className="shrink-0 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                  >
                    Use Demo
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Login as Worker"}
              </button>
            </form>

            {/* Firebase Auth Info */}
            <div className="mt-6 rounded-lg bg-blue-50 p-4 text-center text-sm text-blue-700">
              Demo credentials are provided for prototype evaluation.
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