"use client";

import Link from "next/link";
import { useState } from "react";
import { loginUser, getUserProfile } from "@/Firebase/auth";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

      // RBAC: only admins can use admin login
      if (profile.role !== "admin") {
        setError(
          `This account is registered as ${profile.role}. Please use the correct login.`
        );
        setLoading(false);
        return;
      }

      // Admin is authenticated and has the correct role
      window.location.href = "/admin/dashboard";
    } catch (err: any) {
      console.error("Admin login error:", err);

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
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
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
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-3xl">
              🏢
            </div>

            <div className="mt-6 text-center">
              <h1 className="text-3xl font-bold text-gray-900">
                Admin Login
              </h1>

              <p className="mt-2 text-sm text-gray-600">
                Sign in to manage the Sahakar Seva platform.
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
                  placeholder="Enter admin email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
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
                  placeholder="Enter admin password"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />
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
                className="w-full rounded-lg bg-purple-600 px-4 py-3 font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Login as Admin"}
              </button>
            </form>

            {/* Info */}
            <div className="mt-6 rounded-lg bg-purple-50 p-4 text-center text-sm text-purple-700">
              Admin access is restricted to authorized accounts.
            </div>

            {/* Switch Role */}
            <div className="mt-6 text-center text-sm text-gray-600">
              Not an admin?{" "}
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