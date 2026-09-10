import { Timestamp } from "firebase/firestore";

// User Roles
export type UserRole = "customer" | "worker" | "admin";

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