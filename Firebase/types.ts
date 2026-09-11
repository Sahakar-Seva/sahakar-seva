import { Timestamp } from "firebase/firestore";

// User Roles
export type UserRole = "customer" | "worker" | "admin";

// Roles permitted during normal public registration (Admin cannot be chosen publicly)
export type PublicUserRole = "customer" | "worker";

// Input data expected when registering a new user
export interface RegisterUserInput {
  email: string;
  password: string;
  name: string;
  phone?: string;
  role: PublicUserRole;
}

// Base User profile
export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  location?: string;
  createdAt: Timestamp;
}

// Worker-specific profile
export interface WorkerProfile {
  uid: string;
  name: string;
  serviceCategories: string[];
  skills: string[];
  experienceYears: number;
  rating: number;
  totalReviews: number;
  availability: boolean;
  verificationStatus: "pending" | "verified" | "rejected";
  location?: string;
  profileImageUrl?: string;
  createdAt: Timestamp;
}

// Service offering
export interface ServiceItem {
  serviceId: string;
  workerId: string;
  name: string;
  category: string;
  description: string;
  price: number;
  status: "active" | "inactive";
  createdAt: Timestamp;
}

// Booking Lifecycle Statuses
export type BookingStatus =
  | "pending"
  | "confirmed"
  | "on_the_way"
  | "in_progress"
  | "completed"
  | "cancelled";

// Booking document
export interface Booking {
  bookingId: string;
  customerId: string;
  workerId: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  address: string;
  notes?: string;
  amount: number;
  status: BookingStatus;
  createdAt: Timestamp;
}

// Customer Review
export interface Review {
  reviewId: string;
  bookingId: string;
  customerId: string;
  workerId: string;
  rating: number; // e.g., 1 to 5
  comment: string;
  createdAt: Timestamp;
}

// System / Activity Notification
export interface AppNotification {
  notificationId: string;
  userId: string;
  title: string;
  message: string;
  type: "booking" | "status_update" | "system";
  read: boolean;
  createdAt: Timestamp;
}

// ==========================================
// 5. KYC & Worker Verification Types
// ==========================================

export type KycDocumentType = "identity_card" | "trade_certificate" | "address_proof";

export interface KycSubmission {
  submissionId: string;
  workerId: string;
  workerName: string;
  documentType: KycDocumentType;
  documentNumberMasked: string; // Stored masked for privacy (e.g., "XXXX-XXXX-1234")
  documentFileUrl: string;
  status: "pending" | "approved" | "rejected";
  rejectionReason?: string;
  submittedAt: Timestamp;
  reviewedAt?: Timestamp;
  reviewedBy?: string; // Admin UID
}

export interface SubmitKycInput {
  workerId: string;
  workerName: string;
  documentType: KycDocumentType;
  documentNumberMasked: string;
  documentFileUrl: string;
}
// ==========================================
// 7. Payment & Transaction Types
// ==========================================

export type PaymentStatus = "pending" | "completed" | "failed" | "refunded";
export type PaymentMethod = "card" | "upi" | "netbanking" | "wallet" | "cash";

export interface PaymentTransaction {
  transactionId: string;
  bookingId: string;
  customerId: string;
  workerId: string;
  amount: number;
  currency: "INR";
  method: PaymentMethod;
  status: PaymentStatus;
  receiptNumber: string;
  createdAt: Timestamp;
  completedAt?: Timestamp;
}

export interface CreatePaymentInput {
  bookingId: string;
  customerId: string;
  workerId: string;
  amount: number;
  method: PaymentMethod;
}