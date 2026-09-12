declare const process: {
  env: {
    [key: string]: string | undefined;
  };
  exit: (code?: number) => never;
};

import { registerWorker, loginUser } from "./auth";
import { 
  setupWorkerProfile, 
  getWorkerProfile, 
  createService, 
  getActiveServices, 
  getServicesByCategory,
  updateService 
} from "./firestore";

async function runServicesTest() {
  const timestamp = Date.now();
  const workerEmail = `plumber_${timestamp}@test.com`;
  const password = "WorkerSecurePass123!";

  console.log("==========================================");
  console.log("TESTING WORKER PROFILES & SERVICES");
  console.log("==========================================\n");

  // 1. Create a worker account
  console.log("[1] Registering worker...");
  const { user: workerUser } = await registerWorker(
    workerEmail,
    password,
    "Ramesh Kumar",
    "9876501234"
  );
  console.log(" Worker registered. UID:", workerUser.uid);

  // 2. Set up extended profile
  console.log("\n[2] Setting up extended worker profile...");
  await setupWorkerProfile(workerUser.uid, {
    name: "Ramesh Kumar",
    serviceCategories: ["Plumbing", "Sanitary"],
    skills: ["Pipe Fitting", "Leak Repair", "Motor Installation"],
    experienceYears: 6,
    availability: true,
    verificationStatus: "verified",
    location: "South Delhi"
  });

  const profile = await getWorkerProfile(workerUser.uid);
  if (!profile || profile.experienceYears !== 6) {
    throw new Error("Worker profile verification failed.");
  }
  console.log(" PASS: Worker profile created with 6 years experience.");

  // 3. Create a service offering
  console.log("\n[3] Creating service listing...");
  const serviceId = await createService({
    workerId: workerUser.uid,
    name: "Emergency Tap & Pipe Leak Repair",
    category: "Plumbing",
    description: "Fixing high pressure water pipe bursts and tap replacements.",
    price: 350,
    status: "active"
  });
  console.log(" PASS: Service created with ID:", serviceId);

  // 4. Query active services
  console.log("\n[4] Querying active services...");
  const activeServices = await getActiveServices();
  const found = activeServices.some((s) => s.serviceId === serviceId);
  if (!found) {
    throw new Error("Created service not found in active catalog.");
  }
  console.log(` PASS: Catalog retrieved ${activeServices.length} active service(s).`);

  // 5. Query by category
  console.log("\n[5] Filtering by category 'Plumbing'...");
  const plumbingServices = await getServicesByCategory("Plumbing");
  if (!plumbingServices.length) {
    throw new Error("Category filter returned zero services.");
  }
  console.log(` PASS: Found ${plumbingServices.length} service(s) in 'Plumbing'.`);

  // 6. Update service price
  console.log("\n[6] Updating service price...");
  await updateService(serviceId, { price: 400 });
  console.log(" PASS: Service price updated to ₹400.");

  console.log("\n==========================================");
  console.log("ALL SERVICES & WORKER TESTS PASSED!");
  console.log("==========================================");
  process.exit(0);
}

runServicesTest().catch((error) => {
  console.error("\n TEST SUITE FAILED:", error);
  process.exit(1);
});