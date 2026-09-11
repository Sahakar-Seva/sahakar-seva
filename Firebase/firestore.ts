import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "./config";
import { 
  WorkerProfile, 
  ServiceItem, 
  Booking, 
  Review, 
  KycSubmission, 
  SubmitKycInput 
} from "./types";

// ==========================================
// 1. Worker Profile Management
// ==========================================

/**
 * Initialize or update an extended worker profile at users/{workerId}
 */
export async function setupWorkerProfile(
  workerId: string,
  profileData: Omit<WorkerProfile, "uid" | "createdAt" | "rating" | "totalReviews">
): Promise<void> {
  const workerRef = doc(db, "users", workerId);

  await updateDoc(workerRef, {
    ...profileData,
    rating: 0,
    totalReviews: 0,
    verificationStatus: profileData.verificationStatus || "pending",
    updatedAt: serverTimestamp(),
  });
}

/**
 * Fetch a worker profile by UID
 */
export async function getWorkerProfile(workerId: string): Promise<WorkerProfile | null> {
  const docRef = doc(db, "users", workerId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return docSnap.data() as WorkerProfile;
}

/**
 * Update worker availability status
 */
export async function setWorkerAvailability(
  workerId: string,
  availability: boolean
): Promise<void> {
  const workerRef = doc(db, "users", workerId);
  await updateDoc(workerRef, {
    availability,
    updatedAt: serverTimestamp(),
  });
}

// ==========================================
// 2. Service Management (Catalog Operations)
// ==========================================

/**
 * Publish a new service listing
 */
export async function createService(
  serviceData: Omit<ServiceItem, "serviceId" | "createdAt">
): Promise<string> {
  const servicesRef = collection(db, "services");
  const newDocRef = doc(servicesRef); // Auto-generate ID

  const servicePayload: ServiceItem = {
    ...serviceData,
    serviceId: newDocRef.id,
    createdAt: serverTimestamp() as Timestamp,
  };

  await setDoc(newDocRef, servicePayload);
  return newDocRef.id;
}

/**
 * Fetch all active services for marketplace browsing
 */
export async function getActiveServices(): Promise<ServiceItem[]> {
  const servicesRef = collection(db, "services");
  const q = query(servicesRef, where("status", "==", "active"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => docSnap.data() as ServiceItem);
}

/**
 * Fetch services by specific category
 */
export async function getServicesByCategory(category: string): Promise<ServiceItem[]> {
  const servicesRef = collection(db, "services");
  const q = query(
    servicesRef,
    where("status", "==", "active"),
    where("category", "==", category)
  );
  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => docSnap.data() as ServiceItem);
}

/**
 * Fetch all services created by a specific worker
 */
export async function getWorkerServices(workerId: string): Promise<ServiceItem[]> {
  const servicesRef = collection(db, "services");
  const q = query(servicesRef, where("workerId", "==", workerId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => docSnap.data() as ServiceItem);
}

/**
 * Update an existing service (e.g., price, status, description)
 */
export async function updateService(
  serviceId: string,
  updates: Partial<Omit<ServiceItem, "serviceId" | "workerId" | "createdAt">>
): Promise<void> {
  const serviceRef = doc(db, "services", serviceId);
  await updateDoc(serviceRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

// ==========================================
// 3. Booking Lifecycle Management
// ==========================================

/**
 * Fetch a single booking document by its ID
 */
export async function getBooking(bookingId: string): Promise<Booking | null> {
  const docRef = doc(db, "bookings", bookingId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return docSnap.data() as Booking;
}

/**
 * Customer creates a new service booking request
 */
export async function createBooking(
  bookingData: Omit<Booking, "bookingId" | "status" | "createdAt">
): Promise<string> {
  const bookingsRef = collection(db, "bookings");
  const newBookingDoc = doc(bookingsRef);

  const bookingPayload: Booking = {
    ...bookingData,
    bookingId: newBookingDoc.id,
    status: "pending",
    createdAt: serverTimestamp() as Timestamp,
  };

  await setDoc(newBookingDoc, bookingPayload);
  return newBookingDoc.id;
}

/**
 * Fetch all bookings placed by a specific customer
 */
export async function getCustomerBookings(customerId: string): Promise<Booking[]> {
  const bookingsRef = collection(db, "bookings");
  const q = query(bookingsRef, where("customerId", "==", customerId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => docSnap.data() as Booking);
}

/**
 * Fetch all bookings assigned to a specific worker
 */
export async function getWorkerBookings(workerId: string): Promise<Booking[]> {
  const bookingsRef = collection(db, "bookings");
  const q = query(bookingsRef, where("workerId", "==", workerId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => docSnap.data() as Booking);
}

/**
 * Update the lifecycle status of a booking
 */
export async function updateBookingStatus(
  bookingId: string,
  newStatus: Booking["status"]
): Promise<void> {
  const bookingRef = doc(db, "bookings", bookingId);
  await updateDoc(bookingRef, {
    status: newStatus,
    updatedAt: serverTimestamp(),
  });
}

// ==========================================
// 4. Review & Rating Operations
// ==========================================

/**
 * Customer submits a review for a completed service
 */
export async function createReview(
  reviewData: Omit<Review, "reviewId" | "createdAt">
): Promise<string> {
  const reviewsRef = collection(db, "reviews");
  const newReviewDoc = doc(reviewsRef);

  const reviewPayload: Review = {
    ...reviewData,
    reviewId: newReviewDoc.id,
    createdAt: serverTimestamp() as Timestamp,
  };

  await setDoc(newReviewDoc, reviewPayload);
  return newReviewDoc.id;
}
// ==========================================
// 5. Worker KYC Verification Pipeline
// ==========================================

/**
 * Worker submits a document for verification
 */
export async function submitWorkerKyc(input: SubmitKycInput): Promise<string> {
  const kycRef = collection(db, "kyc_submissions");
  const newSubmissionDoc = doc(kycRef);

  const payload: KycSubmission = {
    ...input,
    submissionId: newSubmissionDoc.id,
    status: "pending",
    submittedAt: serverTimestamp() as Timestamp,
  };

  await setDoc(newSubmissionDoc, payload);

  // Set the worker's user profile to pending
  const workerUserRef = doc(db, "users", input.workerId);
  await updateDoc(workerUserRef, {
    verificationStatus: "pending",
    updatedAt: serverTimestamp(),
  });

  return newSubmissionDoc.id;
}

/**
 * Admin retrieves all pending KYC submissions
 */
export async function getPendingKycSubmissions(): Promise<KycSubmission[]> {
  const kycRef = collection(db, "kyc_submissions");
  const q = query(kycRef, where("status", "==", "pending"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => docSnap.data() as KycSubmission);
}

/**
 * Admin reviews and approves or rejects a KYC document
 */
export async function reviewKycSubmission(
  submissionId: string,
  workerId: string,
  adminId: string,
  decision: "approved" | "rejected",
  rejectionReason?: string
): Promise<void> {
  const kycDocRef = doc(db, "kyc_submissions", submissionId);
  const workerRef = doc(db, "users", workerId);

  // Update submission status
  await updateDoc(kycDocRef, {
    status: decision,
    reviewedBy: adminId,
    rejectionReason: rejectionReason || "",
    reviewedAt: serverTimestamp(),
  });

  // Reflect decision on worker profile
  await updateDoc(workerRef, {
    verificationStatus: decision === "approved" ? "verified" : "rejected",
    updatedAt: serverTimestamp(),
  });
}