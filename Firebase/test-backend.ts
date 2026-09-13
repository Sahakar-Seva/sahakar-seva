declare const process: {
  env: {
    [key: string]: string | undefined;
  };
  exit: (code?: number) => never;
};

import { registerCustomer, registerWorker } from "./auth";
import { createService, createBooking, getBooking, updateBookingStatus } from "./firestore";

async function runTest() {
  const timestamp = Date.now();

  console.log("--- 1. Testing User Registration ---");
  const { user: customerUser } = await registerCustomer(
    `customer_${timestamp}@test.com`,
    "CustomerSecure123!",
    "Test Customer",
    "9876543210"
  );
  console.log("Registered Customer UID:", customerUser.uid);

  const { user: workerUser } = await registerWorker(
    `worker_${timestamp}@test.com`,
    "WorkerSecure123!",
    "Test Worker",
    "9876543211"
  );
  console.log("Registered Worker UID:", workerUser.uid);

  console.log("\n--- 2. Testing Service Creation ---");
  const serviceId = await createService({
    workerId: workerUser.uid,
    name: "General Electric Repair",
    category: "Electrical",
    description: "Switchboard and appliance wiring checks.",
    price: 499,
    status: "active",
  });
  console.log("Created Service ID:", serviceId);

  console.log("\n--- 3. Testing Booking Lifecycle ---");
  const bookingId = await createBooking({
    customerId: customerUser.uid,
    workerId: workerUser.uid,
    serviceId: serviceId,
    serviceName: "General Electric Repair",
    date: "2026-10-20",
    time: "02:00 PM",
    address: "Block B, Sector 62, Noida",
    notes: "Main meter tripping frequently.",
    amount: 499,
  });
  console.log("Created Booking ID:", bookingId);

  const bookingDoc = await getBooking(bookingId);
  console.log("Fetched Booking status:", bookingDoc?.status);

  await updateBookingStatus(bookingId, "confirmed");
  console.log("Updated status to 'confirmed'");

  console.log("\nAll backend sanity checks passed cleanly!");
  process.exit(0);
}

runTest().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});