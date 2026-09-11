declare const process: {
  env: {
    [key: string]: string | undefined;
  };
  exit: (code?: number) => never;
};

import { registerWorker, loginUser, logoutUser } from "./auth";
import { 
  submitWorkerKyc, 
  getPendingKycSubmissions, 
  reviewKycSubmission, 
  getWorkerProfile 
} from "./firestore";

async function runKycVerificationTest() {
  const timestamp = Date.now();
  const workerEmail = `kyc_worker_${timestamp}@test.com`;
  const adminEmail = "admin@test.com";
  const password = "SecurePassword123!";

  console.log("==========================================");
  console.log("TESTING WORKER KYC VERIFICATION PIPELINE");
  console.log("==========================================\n");

  // 1. Provision a test worker
  console.log("[1] Registering worker for verification...");
  const { user: workerUser } = await registerWorker(
    workerEmail,
    password,
    "Vikramaditya Rao",
    "9876543120"
  );
  console.log(" Worker registered. UID:", workerUser.uid);

  // 2. Submit KYC documents
  console.log("\n[2] Submitting KYC identification proofs...");
  const submissionId = await submitWorkerKyc({
    workerId: workerUser.uid,
    workerName: "Vikramaditya Rao",
    documentType: "identity_card",
    documentNumberMasked: "XXXX-XXXX-8921",
    documentFileUrl: "https://storage.googleapis.com/mock-kyc-bucket/doc_front.jpg"
  });
  console.log(" PASS: KYC submitted. ID:", submissionId);

  // Verify worker status is now pending
  const profilePending = await getWorkerProfile(workerUser.uid);
  if (profilePending?.verificationStatus !== "pending") {
    throw new Error(`Expected verificationStatus 'pending', got '${profilePending?.verificationStatus}'`);
  }
  console.log(" PASS: Worker profile verificationStatus updated to 'pending'.");

  // 3. Admin queries pending queue
  console.log("\n[3] Admin logging in to inspect pending KYC queue...");
  await logoutUser();
  const adminUser = await loginUser(adminEmail, "AdminSecurePassword123!");

  const pendingList = await getPendingKycSubmissions();
  const foundSubmission = pendingList.find((s) => s.submissionId === submissionId);
  if (!foundSubmission) {
    throw new Error("Submitted KYC document not found in admin pending queue.");
  }
  console.log(` PASS: Admin successfully fetched queue (${pendingList.length} pending).`);

  // 4. Admin approves the submission
  console.log("\n[4] Admin reviewing and approving submission...");
  await reviewKycSubmission(
    submissionId,
    workerUser.uid,
    adminUser.uid,
    "approved"
  );
  console.log(" PASS: Submission marked as 'approved'.");

  // 5. Verify worker profile reflects verified status
  console.log("\n[5] Verifying worker profile reflects verified badge...");
  const profileApproved = await getWorkerProfile(workerUser.uid);
  if (profileApproved?.verificationStatus !== "verified") {
    throw new Error(`Expected verificationStatus 'verified', got '${profileApproved?.verificationStatus}'`);
  }
  console.log(" PASS: Worker profile verificationStatus is now officially 'verified'.");

  console.log("\n==========================================");
  console.log("ALL KYC PIPELINE TESTS PASSED!");
  console.log("==========================================");
  process.exit(0);
}

runKycVerificationTest().catch((error) => {
  console.error("\n KYC TEST SUITE FAILED:", error);
  process.exit(1);
});