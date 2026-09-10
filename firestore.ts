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
  ServiceItem,
  Booking,
  BookingStatus,
  Review,
  AppNotification,
} from "./types";

// --- Service Operations ---

// Add a new service offered by a worker
export async function createService(
  serviceData: Omit<ServiceItem, "serviceId" | "createdAt">
): Promise<string> {
  const serviceRef = doc(collection(db, "services"));
  const newService: ServiceItem = {
    ...serviceData,
    serviceId: serviceRef.id,
    createdAt: serverTimestamp() as Timestamp,
  };
  await setDoc(serviceRef, newService);
  return serviceRef.id;
}

// Fetch all active services
export async function getActiveServices(): Promise<ServiceItem[]> {
  const q = query(collection(db, "services"), where("status", "==", "active"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((docSnap) => docSnap.data() as ServiceItem);
}

// --- Booking Operations ---

// Create a new booking request by a customer
export async function createBooking(
  bookingData: Omit<Booking, "bookingId" | "status" | "createdAt">
): Promise<string> {
  const bookingRef = doc(collection(db, "bookings"));
  const newBooking: Booking = {
    ...bookingData,
    bookingId: bookingRef.id,
    status: "pending",
    createdAt: serverTimestamp() as Timestamp,
  };
  await setDoc(bookingRef, newBooking);
  return bookingRef.id;
}

// Retrieve a single booking by ID
export async function getBooking(bookingId: string): Promise<Booking | null> {
  const docRef = doc(db, "bookings", bookingId);
  const snapshot = await getDoc(docRef);
  if (snapshot.exists()) {
    return snapshot.data() as Booking;
  }
  return null;
}

// Update the booking status (e.g., pending -> confirmed -> on_the_way -> in_progress -> completed)
export async function updateBookingStatus(
  bookingId: string,
  newStatus: BookingStatus
): Promise<void> {
  const docRef = doc(db, "bookings", bookingId);
  await updateDoc(docRef, { status: newStatus });
}

// Fetch all bookings for a specific customer
export async function getCustomerBookings(customerId: string): Promise<Booking[]> {
  const q = query(collection(db, "bookings"), where("customerId", "==", customerId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((docSnap) => docSnap.data() as Booking);
}

// Fetch all bookings assigned to a specific worker
export async function getWorkerBookings(workerId: string): Promise<Booking[]> {
  const q = query(collection(db, "bookings"), where("workerId", "==", workerId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((docSnap) => docSnap.data() as Booking);
}

// --- Review Operations ---

// Create a review for a completed service
export async function createReview(
  reviewData: Omit<Review, "reviewId" | "createdAt">
): Promise<string> {
  const reviewRef = doc(collection(db, "reviews"));
  const newReview: Review = {
    ...reviewData,
    reviewId: reviewRef.id,
    createdAt: serverTimestamp() as Timestamp,
  };
  await setDoc(reviewRef, newReview);
  return reviewRef.id;
}