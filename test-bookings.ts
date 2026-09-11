declare const process: {
  env: {
    [key: string]: string | undefined;
  };
  exit: (code?: number) => never;
};

import { registerCustomer, registerWorker, loginUser, logoutUser } from "./auth";
import { 
  createBooking, 
  getCustomerBookings, 
  getWorkerBookings, 
  updateBookingStatus,
  createReview 
} from "./firestore";

async function runBookingLifecycleTest() {
  const timestamp = Date.now();
  const customerEmail = `booker_${timestamp}@test.com`;
  const workerEmail = `technician_${timestamp}@test.com`;
  const password = "SecurePassword123!";

  console.log("==========================================");
  console.log("TESTING BOOKING LIFECYCLE & REVIEWS");
  console.log("==========================================\n");

  // 1. Create test customer and worker
  console.log("[1] Provisioning test participants...");
  const { user: custUser } = await registerCustomer(
    customerEmail,
    password,
    "Ananya Sharma",
    "9988776655"
  );
  const { user: workUser } = await registerWorker(
    workerEmail,
    password,
    "Mohan Lal",
    "9876543219"
  );
  console.log(" Participants created.");

  // 2. Switch Auth session back to Customer
  console.log("\n[2] Logging in as Customer to place booking...");
  await logoutUser();
  await loginUser(customerEmail, password);

  const bookingId = await createBooking({
    customerId: custUser.uid,
    workerId: workUser.uid,
    serviceId: "srv_mock_123",
    serviceName: "AC Deep Cleaning & Service",
    date: "2026-10-15",
    time: "10:30 AM",
    address: "Flat 402, Green Valley Apartments, Delhi",
    notes: "Please carry extra refrigerant if needed.",
    amount: 799,
  });
  console.log(" PASS: Booking created with ID:", bookingId);

  // 3. Customer queries their own bookings
  console.log("\n[3] Fetching customer bookings...");
  const custBookings = await getCustomerBookings(custUser.uid);
  if (!custBookings.some((b) => b.bookingId === bookingId)) {
    throw new Error("Created booking not found in customer records.");
  }
  console.log(` PASS: Retrieved ${custBookings.length} booking(s) for customer.`);

  // 4. Switch Auth session to Worker to view assigned work & update status
  console.log("\n[4] Logging in as Worker to view assigned work...");
  await logoutUser();
  await loginUser(workerEmail, password);

  const workerBookings = await getWorkerBookings(workUser.uid);
  if (!workerBookings.some((b) => b.bookingId === bookingId)) {
    throw new Error("Created booking not found in worker records.");
  }
  console.log(` PASS: Retrieved ${workerBookings.length} job(s) assigned to worker.`);

  // 5. Worker updates status to confirmed, then completed
  console.log("\n[5] Worker updating status: pending -> confirmed -> completed...");
  await updateBookingStatus(bookingId, "confirmed");
  await updateBookingStatus(bookingId, "completed");
  console.log(" PASS: Booking transitioned to 'completed'.");

  // 6. Switch back to Customer to submit review
  console.log("\n[6] Logging back in as Customer to submit review...");
  await logoutUser();
  await loginUser(customerEmail, password);

  const reviewId = await createReview({
    bookingId,
    customerId: custUser.uid,
    workerId: workUser.uid,
    rating: 5,
    comment: "Punctual, professional, and very thorough with the cleaning!",
  });
  console.log(" PASS: Review created with ID:", reviewId);

  console.log("\n==========================================");
  console.log("ALL BOOKING LIFECYCLE TESTS PASSED!");
  console.log("==========================================");
  process.exit(0);
}

runBookingLifecycleTest().catch((error) => {
  console.error("\n TEST FAILED:", error);
  process.exit(1);
});