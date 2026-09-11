declare const process: {
  env: {
    [key: string]: string | undefined;
  };
  exit: (code?: number) => never;
};

import { registerCustomer } from "./auth";
import { sendNotification, subscribeToNotifications } from "./firestore";

async function runNotificationTest() {
  const timestamp = Date.now();
  const email = `listener_${timestamp}@test.com`;
  const password = "SecurePassword123!";

  console.log("==========================================");
  console.log("TESTING REAL-TIME NOTIFICATION LISTENERS");
  console.log("==========================================\n");

  // 1. Provision target user
  console.log("[1] Provisioning test user...");
  const { user } = await registerCustomer(
    email,
    password,
    "Siddharth Verma",
    "9876501234"
  );
  console.log(" User registered. UID:", user.uid);

  // 2. Setup real-time listener
  console.log("\n[2] Attaching live onSnapshot listener...");
  let receivedCount = 0;

  const unsubscribe = subscribeToNotifications(
    user.uid,
    (notifications) => {
      receivedCount = notifications.length;
      console.log(` -> [LIVE EVENT] Snapshot received! Total notifications: ${receivedCount}`);
      if (notifications.length > 0) {
        const latest = notifications[notifications.length - 1];
        console.log(`    Title: "${latest.title}" | Message: "${latest.message}"`);
      }
    },
    (err) => {
      console.error(" Listener error:", err);
    }
  );

  // Allow initial empty snapshot to establish connection
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // 3. Dispatch first notification
  console.log("\n[3] Dispatching booking confirmation notification...");
  await sendNotification(
    user.uid,
    "Booking Confirmed",
    "Your AC technician has accepted your request.",
    "booking"
  );

  // Wait for real-time socket delivery
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // 4. Dispatch second notification
  console.log("\n[4] Dispatching status update notification...");
  await sendNotification(
    user.uid,
    "Technician On The Way",
    "Mohan Lal is driving to your location.",
    "status_update"
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));

  // 5. Verification & Unsubscribe
  console.log("\n[5] Cleaning up real-time listener...");
  unsubscribe();
  console.log(" Listener unsubscribed successfully.");

  if (receivedCount < 2) {
    throw new Error(`Expected at least 2 real-time events, received: ${receivedCount}`);
  }

  console.log("\n==========================================");
  console.log("ALL REAL-TIME LISTENER TESTS PASSED!");
  console.log("==========================================");
  process.exit(0);
}

runNotificationTest().catch((error) => {
  console.error("\n NOTIFICATION TEST FAILED:", error);
  process.exit(1);
});