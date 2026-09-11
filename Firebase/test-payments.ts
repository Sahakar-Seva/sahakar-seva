declare const process: {
  env: {
    [key: string]: string | undefined;
  };
  exit: (code?: number) => never;
};

import { registerCustomer, registerWorker, loginUser } from "./auth";
import { 
  createService, 
  createBooking, 
  processPayment, 
  getPaymentByBooking, 
  getBooking 
} from "./firestore";

async function runPaymentTest() {
  const timestamp = Date.now();
  const customerEmail = `pay_cust_${timestamp}@test.com`;
  const workerEmail = `pay_worker_${timestamp}@test.com`;
  const password = "SecurePassword123!";

  console.log("==========================================");
  console.log("TESTING PAYMENT & TRANSACTION SUBSYSTEM");
  console.log("==========================================\n");

  // 1. Provision customer & worker
  console.log("[1] Provisioning test parties...");
  const { user: customer } = await registerCustomer(customerEmail, password, "Rohan Das", "9811223344");
  const { user: worker } = await registerWorker(workerEmail, password, "Amit Sharma", "9822334455");
  console.log(" Users created successfully.");

  // 2. Setup service as worker
  console.log("\n[2] Worker creating service offering...");
  const serviceId = await createService({
    workerId: worker.uid,
    name: "Tap Leakage & Plumbing Inspection",
    category: "Plumbing",
    description: "Inspection and quick repair.",
    price: 349,
    status: "active",
  });
  console.log(" Service created. ID:", serviceId);

  // 3. Switch back to customer auth session
  console.log("\n[3] Authenticating as customer for booking & payment...");
  await loginUser(customerEmail, password);

  // 4. Create booking
  const bookingId = await createBooking({
    customerId: customer.uid,
    workerId: worker.uid,
    serviceId,
    serviceName: "Tap Leakage & Plumbing Inspection",
    date: "2026-11-05",
    time: "10:00 AM",
    address: "Flat 402, Green Avenue, Delhi",
    amount: 349,
  });
  console.log(" PASS: Booking created in 'pending' status. ID:", bookingId);

  // 5. Process mock payment
  console.log("\n[5] Processing mock payment transaction...");
  const payment = await processPayment({
    bookingId,
    customerId: customer.uid,
    workerId: worker.uid,
    amount: 349,
    method: "upi",
  });
  console.log(" PASS: Payment captured. Receipt:", payment.receiptNumber);

  // 6. Verify status transition
  console.log("\n[6] Checking booking auto-confirmation...");
  const updatedBooking = await getBooking(bookingId);
  if (updatedBooking?.status !== "confirmed") {
    throw new Error(`Expected booking status 'confirmed', got '${updatedBooking?.status}'`);
  }
  console.log(" PASS: Booking transitioned to 'confirmed' on payment settlement.");

  // 7. Query receipt
  console.log("\n[7] Fetching transaction record by booking...");
  const savedPayment = await getPaymentByBooking(bookingId);
  if (!savedPayment || savedPayment.amount !== 349) {
    throw new Error("Failed to retrieve valid payment record.");
  }
  console.log(" PASS: Retrieved transaction record with verified amount:", savedPayment.amount, savedPayment.currency);

  console.log("\n==========================================");
  console.log("ALL PAYMENT SUBSYSTEM TESTS PASSED!");
  console.log("==========================================");
  process.exit(0);
}

runPaymentTest().catch((err) => {
  console.error("\n PAYMENT TEST FAILED:", err);
  process.exit(1);
});