"use client";

import { useState } from "react";

export default function CustomerLoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="text-center mb-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-2xl font-bold text-white">
            S
          </div>

          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Sahakar Seva
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Trusted services, powered by cooperation.
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          {/* Tabs */}
          <div className="mb-6 flex rounded-xl bg-gray-100 p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition ${
                isLogin
                  ? "bg-white text-green-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition ${
                !isLogin
                  ? "bg-white text-green-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {isLogin ? "Welcome back!" : "Create your account"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {isLogin
                ? "Login to continue to Sahakar Seva."
                : "Join Sahakar Seva and find trusted local services."}
            </p>
          </div>

          {/* Full Name - Signup */}
          {!isLogin && (
            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Phone - Signup */}
          {!isLogin && (
            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>
          )}

          {/* Password */}
          <div className={isLogin ? "mb-3" : "mb-4"}>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-16 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-green-700 hover:text-green-800"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          {isLogin && (
            <div className="mb-6 text-right">
              <button className="text-sm font-medium text-green-700 hover:text-green-800">
                Forgot password?
              </button>
            </div>
          )}

          {/* Terms - Signup */}
          {!isLogin && (
            <div className="mb-6 flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-green-600"
              />

              <p className="text-xs leading-5 text-gray-500">
                I agree to the Sahakar Seva terms of service and privacy
                policy.
              </p>
            </div>
          )}

          {/* Main Button */}
          <button className="w-full rounded-xl bg-green-700 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
            {isLogin ? "Login to Sahakar Seva" : "Create Account"}
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-xs text-gray-400">
              OR
            </span>

            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Google */}
          <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
            <span className="text-lg font-bold">G</span>
            Continue with Google
          </button>
        </div>

        {/* Trust Message */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            🛡️ Trusted cooperative services for your community
          </p>

          <p className="mt-2 text-xs text-gray-400">
            © 2026 Sahakar Seva
          </p>
        </div>
      </div>
    </main>
  );
}