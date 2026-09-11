/**
 * SmartMatch Engine — Type Definitions
 *
 * This module is intentionally self-contained: it has no dependency on
 * Firebase, Next.js, or any UI code. It operates purely on plain data
 * passed in by the caller (mock data for now, Firestore data later).
 */

/** Simple day-level availability status for a worker. */
export type AvailabilityStatus = "available" | "busy";

/**
 * An optional, more granular way to express that a worker is booked for a
 * specific date (and optionally a specific time). If a worker's overall
 * `availability` is "available" but they have a matching slot here, they
 * are treated as unavailable for that particular request.
 */
export interface UnavailableSlot {
  /** ISO date string, e.g. "2025-11-20" */
  date: string;
  /** Optional time, e.g. "14:00". If omitted, the whole day is blocked. */
  time?: string;
}

export interface GeoLocation {
  latitude: number;
  longitude: number;
}

export interface Worker {
  id: string;
  name: string;
  /** Services this worker provides, e.g. ["Electrical Repair", "Fan Installation"] */
  services: string[];
  /** Optional finer-grained skills, not used in scoring yet. */
  skills?: string[];
  /** Years of professional experience. */
  experience: number;
  /** Rating on a 0–5 scale. */
  rating: number;
  /** Overall availability status. */
  availability: AvailabilityStatus;
  /** Specific dates/times this worker is already booked, if known. */
  unavailableSlots?: UnavailableSlot[];
  latitude: number;
  longitude: number;
}

export interface CustomerRequest {
  /** The service the customer is looking for, e.g. "Electrical Repair" */
  serviceRequired: string;
  customerLocation: GeoLocation;
  /** ISO date string, e.g. "2025-11-20" */
  preferredDate: string;
  /** Time string, e.g. "14:00" */
  preferredTime: string;
}

/** Individual component scores, each already normalized to 0–100. */
export interface ScoreBreakdown {
  serviceScore: number;
  distanceScore: number;
  availabilityScore: number;
  ratingScore: number;
  experienceScore: number;
}

export interface MatchResult {
  workerId: string;
  workerName: string;
  /** Final weighted score, 0–100 (one decimal place). */
  matchScore: number;
  /** Distance from the customer, in km (one decimal place). */
  distanceKm: number;
  /** The specific service string that matched the request. */
  matchedService: string;
  /** Whether the worker is available for the requested date/time. */
  availability: boolean;
  /** Raw component scores, useful for debugging/UI breakdowns. */
  scoreBreakdown: ScoreBreakdown;
  /** Human-readable reasons for the recommendation ("Why this worker?"). */
  reasons: string[];
}

/** Optional tuning knobs for findBestMatches(). */
export interface MatchOptions {
  /** Distance (km) beyond which the distance score is 0. Default: 10. */
  maxDistanceKm?: number;
  /** Experience (years) at which the experience score caps at 100. Default: 10. */
  maxExperienceYears?: number;
}
