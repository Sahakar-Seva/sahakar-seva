"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app =
  getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);

const auth = getAuth(app);

export default function CustomerLoginPage() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fillDemoCredentials = () => {
    setIsLogin(true);
    setEmail("customer1@test.com");
    setPassword("CustTest123");
    setError("");
  };

  const handleAuth = async () => {
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!isLogin && !fullName) {
      setError("Please enter your full name.");
      return;
    }

    if (!isLogin && !phone) {
      setError("Please enter your phone number.");
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await updateProfile(userCredential.user, {
          displayName: fullName,
        });
      }

      router.push("/customer/services");
    } catch (error: unknown) {
      const firebaseError = error as { code?: string };

      switch (firebaseError.code) {
        case "auth/invalid-credential":
        case "auth/invalid-email":
          setError("Invalid email or password.");
          break;

        case "auth/user-not-found":
          setError("No account found with this email.");
          break;

        case "auth/wrong-password":
          setError("Incorrect password.");
          break;

        case "auth/email-already-in-use":
          setError("An account already exists with this email.");
          break;

        case "auth/weak-password":
          setError("Password should be at least 6 characters.");
          break;

        default:
          setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setError("");

    if (!email) {
      setError("Enter your email address first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setError("Password reset email sent. Check your inbox.");
    } catch {
      setError("Unable to send reset email. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      router.push("/customer/services");
    } catch (error: unknown) {
      const firebaseError = error as { code?: string };

      if (firebaseError.code === "auth/popup-closed-by-user") {
        setError("Google sign-in was cancelled.");
      } else {
        setError("Google sign-in failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">

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

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-6 flex rounded-xl bg-gray-100 p-1">
            <button
              onClick={() => {
                setIsLogin(true);
                setError("");
              }}
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition ${
                isLogin
                  ? "bg-white text-green-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => {
                setIsLogin(false);
                setError("");
              }}
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition ${
                !isLogin
                  ? "bg-white text-green-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Create Account
            </button>
          </div>

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

          {!isLogin && (
            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {!isLogin && (
            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>
          )}

          <div className={isLogin ? "mb-3" : "mb-4"}>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          {isLogin && (
            <div className="mb-4 text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm font-medium text-green-700 hover:text-green-800"
              >
                Forgot password?
              </button>
            </div>
          )}

          {isLogin && (
            <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-green-800">
                    Demo Customer Account
                  </p>

                  <p className="mt-1 text-xs text-green-700">
                    Email: customer1@test.com
                  </p>

                  <p className="text-xs text-green-700">
                    Password: CustTest123
                  </p>
                </div>

                <button
                  type="button"
                  onClick={fillDemoCredentials}
                  className="shrink-0 rounded-lg bg-green-700 px-3 py-2 text-xs font-semibold text-white transition hover:bg-green-800"
                >
                  Use Demo
                </button>
              </div>
            </div>
          )}

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

          {error && (
            <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            onClick={handleAuth}
            disabled={loading}
            className="w-full rounded-xl bg-green-700 py-3 text-sm font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Please wait..."
              : isLogin
                ? "Login to Sahakar Seva"
                : "Create Account"}
          </button>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-xs text-gray-400">
              OR
            </span>

            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="text-lg font-bold">G</span>
            Continue with Google
          </button>
        </div>

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