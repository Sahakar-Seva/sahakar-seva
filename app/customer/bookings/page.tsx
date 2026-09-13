"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/Firebase/config";
import { getCustomerBookings } from "@/Firebase/firestore";

type BookingStatus =
  | "Pending"
  | "Confirmed"
  | "On the Way"
  | "In Progress"
  | "Completed"
  | "Cancelled";

type Booking = {
  id: string;
  service: string;
  category: string;
  worker: string;
  workerInitials: string;
  date: string;
  time: string;
  price: string;
  status: BookingStatus;
  address: string;
};

const demoBookings: Booking[] = [
  {
    id: "SS-2026-00118",
    service: "Home Cleaning",
    category: "Cleaning",
    worker: "Priya Singh",
    workerInitials: "PS",
    date: "8 September 2026",
    time: "11:00 AM",
    price: "₹499",
    status: "Completed",
    address: "Delhi",
  },
  {
    id: "SS-2026-00105",
    service: "Plumbing",
    category: "Repairs",
    worker: "Suresh Kumar",
    workerInitials: "SK",
    date: "2 September 2026",
    time: "2:00 PM",
    price: "₹399",
    status: "Completed",
    address: "Delhi",
  },
  {
    id: "SS-2026-00096",
    service: "AC Service",
    category: "Appliance Services",
    worker: "Vikram Singh",
    workerInitials: "VS",
    date: "28 August 2026",
    time: "4:00 PM",
    price: "₹599",
    status: "Cancelled",
    address: "Delhi",
  },
];

export default function MyBookingsPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("All");
  const [bookings, setBookings] =
    useState<Booking[]>(demoBookings);
  const [loading, setLoading] = useState(true);

  const loadBookings = async (customerId: string) => {
    try {
      setLoading(true);

      const firebaseBookings =
        await getCustomerBookings(customerId);

      const formattedBookings: Booking[] =
        firebaseBookings.map((booking) => {
          let status: BookingStatus = "Pending";

          switch (booking.status) {
            case "pending":
              status = "Pending";
              break;

            case "confirmed":
              status = "Confirmed";
              break;

            case "on_the_way":
              status = "On the Way";
              break;

            case "in_progress":
              status = "In Progress";
              break;

            case "completed":
              status = "Completed";
              break;

            case "cancelled":
              status = "Cancelled";
              break;
          }

          return {
            id: booking.bookingId,
            service: booking.serviceName,
            category: "Service",
            worker: `Worker ${booking.workerId}`,
            workerInitials: "W",
            date: booking.date,
            time: booking.time,
            price: `₹${booking.amount}`,
            status,
            address: booking.address,
          };
        });

      setBookings([
        ...formattedBookings,
        ...demoBookings,
      ]);
    } catch (error) {
      console.error(
        "Unable to load customer bookings:",
        error
      );

      setBookings(demoBookings);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (!user) {
          setBookings(demoBookings);
          setLoading(false);
          return;
        }

        loadBookings(user.uid);
      }
    );

    const handleFocus = () => {
      const user = auth.currentUser;

      if (user) {
        loadBookings(user.uid);
      }
    };

    window.addEventListener(
      "focus",
      handleFocus
    );

    return () => {
      unsubscribe();

      window.removeEventListener(
        "focus",
        handleFocus
      );
    };
  }, []);

  const filteredBookings =
    activeTab === "All"
      ? bookings
      : bookings.filter(
          (booking) =>
            booking.status === activeTab
        );

  const upcomingCount = bookings.filter(
    (booking) =>
      booking.status === "Pending" ||
      booking.status === "Confirmed" ||
      booking.status === "On the Way" ||
      booking.status === "In Progress"
  ).length;

  const completedCount = bookings.filter(
    (booking) =>
      booking.status === "Completed"
  ).length;

  const cancelledCount = bookings.filter(
    (booking) =>
      booking.status === "Cancelled"
  ).length;

  const getStatusStyle = (
    status: BookingStatus
  ) => {
    if (status === "Pending") {
      return "bg-yellow-50 text-yellow-700 border-yellow-200";
    }

    if (status === "Confirmed") {
      return "bg-blue-50 text-blue-700 border-blue-200";
    }

    if (
      status === "On the Way" ||
      status === "In Progress"
    ) {
      return "bg-purple-50 text-purple-700 border-purple-200";
    }

    if (status === "Completed") {
      return "bg-green-50 text-green-700 border-green-200";
    }

    return "bg-red-50 text-red-700 border-red-200";
  };

  const tabs = [
    "All",
    "Pending",
    "Confirmed",
    "On the Way",
    "In Progress",
    "Completed",
    "Cancelled",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <button
            onClick={() => router.push("/")}
            className="text-xl font-bold text-green-700"
          >
            Sahakar Seva
          </button>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <button
              onClick={() => router.push("/")}
              className="text-gray-600 hover:text-green-700"
            >
              Home
            </button>

            <button
              onClick={() =>
                router.push("/customer/services")
              }
              className="text-gray-600 hover:text-green-700"
            >
              Services
            </button>

            <span className="font-medium text-green-700">
              My Bookings
            </span>
          </nav>

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

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div>
          <p className="text-sm font-medium text-green-600">
            Customer Dashboard
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            My Bookings
          </h1>

          <p className="mt-2 text-gray-600">
            View and manage all your service bookings.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Upcoming
            </p>

            <p className="mt-2 text-2xl font-bold text-gray-900">
              {upcomingCount}
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Completed
            </p>

            <p className="mt-2 text-2xl font-bold text-gray-900">
              {completedCount}
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Cancelled
            </p>

            <p className="mt-2 text-2xl font-bold text-gray-900">
              {cancelledCount}
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto border-b">
          {tabs.map((tab) => {
            const count =
              tab === "All"
                ? bookings.length
                : bookings.filter(
                    (booking) =>
                      booking.status === tab
                  ).length;

            return (
              <button
                key={tab}
                onClick={() =>
                  setActiveTab(tab)
                }
                className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition ${
                  activeTab === tab
                    ? "border-green-600 text-green-700"
                    : "border-transparent text-gray-500 hover:text-gray-900"
                }`}
              >
                {tab}

                <span className="ml-1 text-xs text-gray-400">
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {loading && (
          <div className="mt-6 rounded-2xl border bg-white px-6 py-14 text-center">
            <div className="text-3xl">
              ⏳
            </div>

            <h2 className="mt-4 text-lg font-semibold text-gray-900">
              Loading bookings...
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fetching your bookings from Firebase.
            </p>
          </div>
        )}

        {!loading && (
          <div className="mt-6 space-y-4">
            {filteredBookings.map(
              (booking) => (
                <div
                  key={booking.id}
                  className="rounded-2xl border bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 font-semibold text-green-700">
                        {booking.workerInitials}
                      </div>

                      <div>
                        <h2 className="font-semibold text-gray-900">
                          {booking.service}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                          {booking.category}
                        </p>

                        <p className="mt-2 text-sm text-gray-700">
                          Worker:{" "}
                          <span className="font-medium">
                            {booking.worker}
                          </span>
                        </p>
                      </div>
                    </div>

                    <span
                      className={`w-fit rounded-full border px-3 py-1 text-xs font-medium ${getStatusStyle(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-4 border-t pt-5 sm:grid-cols-3">
                    <div>
                      <p className="text-xs text-gray-500">
                        Date & Time
                      </p>

                      <p className="mt-1 text-sm font-medium text-gray-900">
                        {booking.date}
                      </p>

                      <p className="text-sm text-gray-600">
                        {booking.time}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Booking ID
                      </p>

                      <p className="mt-1 break-all text-sm font-medium text-gray-900">
                        {booking.id}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Amount
                      </p>

                      <p className="mt-1 text-lg font-bold text-gray-900">
                        {booking.price}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 border-t pt-5">
                    <p className="text-xs text-gray-500">
                      Service Location
                    </p>

                    <p className="mt-1 text-sm text-gray-700">
                      {booking.address}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 border-t pt-5 sm:flex-row sm:justify-end">
                    <button
                      onClick={() =>
                        router.push(
                          `/customer/bookings/${booking.id}`
                        )
                      }
                      className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
                    >
                      View Details
                    </button>

                    {(booking.status ===
                      "Confirmed" ||
                      booking.status ===
                        "On the Way" ||
                      booking.status ===
                        "In Progress") && (
                      <button
                        onClick={() =>
                          router.push(
                            "/customer/services"
                          )
                        }
                        className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                      >
                        Book Another Service
                      </button>
                    )}

                    {booking.status ===
                      "Completed" && (
                      <button
                        onClick={() =>
                          router.push(
                            `/customer/review/${booking.id}`
                          )
                        }
                        className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                      >
                        Rate & Review
                      </button>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {!loading &&
          filteredBookings.length === 0 && (
            <div className="mt-6 rounded-2xl border bg-white px-6 py-14 text-center">
              <div className="text-4xl">
                📋
              </div>

              <h2 className="mt-4 text-lg font-semibold text-gray-900">
                No bookings found
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                You don't have any bookings in this
                category.
              </p>

              <button
                onClick={() =>
                  router.push(
                    "/customer/services"
                  )
                }
                className="mt-6 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
              >
                Explore Services
              </button>
            </div>
          )}

        <div className="mt-10 rounded-2xl border border-green-100 bg-green-50 p-6 text-center">
          <h3 className="font-semibold text-gray-900">
            Your bookings are in safe hands
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            All service providers on Sahakar Seva
            are verified cooperative workers.
          </p>
        </div>
      </main>
    </div>
  );
}