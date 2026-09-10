declare const process: {
  env: {
    [key: string]: string | undefined;
  };
  exit: (code?: number) => never;
};

import { registerUser } from "./auth";
import { createService, createBooking, getBooking, updateBookingStatus } from "./firestore";

async function runTest() {
  const timestamp = Date.now();

  console.log("--- 1. Testing User Registration ---");
  const customer = await registerUser(
    `customer_${timestamp}@test.com`,
    "password123",
    "Rohan Sharma",
    "customer"
  );
  console.log("Customer registered:", customer.uid);

  const worker = await registerUser(
    `worker_${timestamp}@test.com`,
    "password123",
    "Amit Kumar",
    "worker"
  );
  console.log("Worker registered:", worker.uid);

  console.log("\n--- 2. Testing Service Creation ---");
  const serviceId = await createService({
    workerId: worker.uid,
    name: "Electrical Repair",
    category: "Home Maintenance",
    description: "Switchboard repair and rewiring",
    price: 350,
    status: "active",
  });
  console.log("Service created with ID:", serviceId);

  console.log("\n--- 3. Testing Booking Creation ---");
  const bookingId = await createBooking({
    customerId: customer.uid,
    workerId: worker.uid,
    serviceId: serviceId,
    serviceName: "Electrical Repair",
    date: "2026-09-15",
    time: "10:00 AM",
    address: "Block B, Delhi",
    amount: 350,
  });
  console.log("Booking created with ID:", bookingId);

  console.log("\n--- 4. Testing Status Update ---");
  await updateBookingStatus(bookingId, "confirmed");
  const updatedBooking = await getBooking(bookingId);
  console.log("Updated Booking Status:", updatedBooking?.status);

  console.log("\nAll backend operations succeeded!");
  process.exit(0);
}

runTest().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});