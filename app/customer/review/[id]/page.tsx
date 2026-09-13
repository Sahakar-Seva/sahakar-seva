"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ReviewPage() {
  const router = useRouter();
  const params = useParams();

  const bookingId =
    typeof params.id === "string" ? params.id : "1";

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="border-b bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
            <button
              onClick={() => router.push("/")}
              className="text-xl font-bold text-green-700"
            >
              Sahakar Seva
            </button>

            <div className="flex items-center gap-4">
              <span className="hidden text-sm text-gray-600 sm:block">
                Delhi
              </span>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                G
              </div>
            </div>
          </div>
        </header>

        {/* Success */}
        <main className="mx-auto flex max-w-2xl flex-col items-center px-4 py-16 text-center sm:px-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
              ✓
            </div>
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Review Submitted!
          </h1>

          <p className="mt-3 max-w-md text-gray-600">
            Thank you for sharing your experience. Your feedback helps
            cooperative workers improve their services.
          </p>

          <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex justify-center gap-1 text-2xl">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>
                  {index < rating ? "★" : "☆"}
                </span>
              ))}
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Your rating for Rahul Sharma
            </p>
          </div>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <button
              onClick={() => router.push("/customer/bookings")}
              className="flex-1 rounded-xl bg-green-600 px-5 py-3.5 font-semibold text-white hover:bg-green-700"
            >
              View My Bookings
            </button>

            <button
              onClick={() => router.push("/")}
              className="flex-1 rounded-xl border border-gray-300 bg-white px-5 py-3.5 font-semibold text-gray-700 hover:bg-gray-50"
            >
              Back to Home
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <button
            onClick={() => router.push("/")}
            className="text-xl font-bold text-green-700"
          >
            Sahakar Seva
          </button>

          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-gray-600 sm:block">
              Delhi
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
              G
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
        {/* Back */}
        <button
          onClick={() => router.push("/customer/bookings")}
          className="mb-6 text-sm font-medium text-gray-600 hover:text-green-700"
        >
          ← Back to My Bookings
        </button>

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium text-green-600">
            Share Your Experience
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Rate & Review
          </h1>

          <p className="mt-2 text-gray-600">
            Your feedback helps us maintain quality service.
          </p>
        </div>

        {/* Service Card */}
        <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
              RS
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">
                Rahul Sharma
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Electrical Repair
              </p>

              <p className="mt-1 text-sm text-gray-600">
                Booking ID: SS-2026-00118
              </p>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-900">
              How would you rate your service?
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Tap a star to give your rating
            </p>

            <div className="mt-5 flex justify-center gap-2">
              {Array.from({ length: 5 }).map((_, index) => {
                const star = index + 1;
                const active = star <= (hoverRating || rating);

                return (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className={`text-4xl transition ${
                      active
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </button>
                );
              })}
            </div>

            <p className="mt-3 text-sm font-medium text-gray-600">
              {rating === 0 && "No rating selected"}
              {rating === 1 && "Poor"}
              {rating === 2 && "Needs Improvement"}
              {rating === 3 && "Good"}
              {rating === 4 && "Very Good"}
              {rating === 5 && "Excellent"}
            </p>
          </div>
        </div>

        {/* Review */}
        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <label
            htmlFor="review"
            className="text-lg font-semibold text-gray-900"
          >
            Write a review
          </label>

          <p className="mt-1 text-sm text-gray-500">
            Tell us about your experience with the service.
          </p>

          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="What did you like about the service?"
            rows={5}
            maxLength={500}
            className="mt-4 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />

          <div className="mt-2 text-right text-xs text-gray-400">
            {review.length}/500
          </div>
        </div>

        {/* Quick Feedback */}
        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900">
            What went well?
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Professional",
              "On time",
              "Good quality",
              "Polite",
              "Affordable",
              "Clean work",
            ].map((item) => (
              <button
                key={item}
                type="button"
                className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:border-green-500 hover:bg-green-50 hover:text-green-700"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="mt-8 w-full rounded-xl bg-green-600 px-5 py-3.5 font-semibold text-white hover:bg-green-700"
        >
          Submit Review
        </button>

        <p className="mt-4 text-center text-xs text-gray-500">
          Your review will help other customers make better choices.
        </p>
      </main>
    </div>
  );
}