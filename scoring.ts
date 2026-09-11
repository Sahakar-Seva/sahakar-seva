/**
 * SmartMatch Engine — Scoring
 *
 * All weights and tunable constants live here in one place. Every scoring
 * function returns a value normalized to the 0–100 range so the weights
 * below can be applied uniformly.
 */

import { Worker, CustomerRequest, ScoreBreakdown } from "./types";

// ---------------------------------------------------------------------------
// Configurable weights (must sum to 1.0)
// ---------------------------------------------------------------------------
export const WEIGHTS = {
  SERVICE: 0.35,
  DISTANCE: 0.25,
  AVAILABILITY: 0.2,
  RATING: 0.1,
  EXPERIENCE: 0.1,
} as const;

// ---------------------------------------------------------------------------
// Configurable normalization constants
// ---------------------------------------------------------------------------

/** Distance (km) at or beyond which the distance score becomes 0. */
export const DEFAULT_MAX_DISTANCE_KM = 10;

/** Experience (years) at or beyond which the experience score caps at 100. */
export const DEFAULT_MAX_EXPERIENCE_YEARS = 10;

/** Rating scale maximum (ratings are assumed to run 0–5). */
export const MAX_RATING = 5;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function normalizeServiceName(service: string): string {
  return service.trim().toLowerCase();
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

// ---------------------------------------------------------------------------
// Distance (Haversine formula)
// ---------------------------------------------------------------------------

const EARTH_RADIUS_KM = 6371;

/**
 * Great-circle distance between two lat/lon points, in kilometers.
 */
export function calculateDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS_KM * c;
}

// ---------------------------------------------------------------------------
// Individual scoring functions (each returns 0–100)
// ---------------------------------------------------------------------------

/** Does the worker provide the requested service? */
export function isServiceMatch(worker: Worker, serviceRequired: string): boolean {
  const target = normalizeServiceName(serviceRequired);
  return worker.services.some((s) => normalizeServiceName(s) === target);
}

/** Returns the worker's own service string that matched the request, or "". */
export function getMatchedServiceName(
  worker: Worker,
  serviceRequired: string
): string {
  const target = normalizeServiceName(serviceRequired);
  return worker.services.find((s) => normalizeServiceName(s) === target) ?? "";
}

export function calculateServiceScore(
  worker: Worker,
  serviceRequired: string
): number {
  return isServiceMatch(worker, serviceRequired) ? 100 : 0;
}

/**
 * Linearly maps distance to a 0–100 score:
 *   0 km            -> 100
 *   maxDistanceKm   -> 0
 *   beyond max      -> 0 (clamped)
 */
export function calculateDistanceScore(
  distanceKm: number,
  maxDistanceKm: number = DEFAULT_MAX_DISTANCE_KM
): number {
  if (maxDistanceKm <= 0) return 0;
  const raw = 100 * (1 - distanceKm / maxDistanceKm);
  return clamp(raw, 0, 100);
}

/**
 * Checks whether a worker is available for the customer's requested
 * date/time. Kept intentionally simple for v1:
 *   - "busy" overall status -> unavailable
 *   - a matching entry in unavailableSlots -> unavailable
 *   - otherwise -> available
 */
export function checkAvailability(
  worker: Worker,
  request: CustomerRequest
): boolean {
  if (worker.availability === "busy") return false;

  if (worker.unavailableSlots && worker.unavailableSlots.length > 0) {
    const isBlocked = worker.unavailableSlots.some((slot) => {
      const sameDate = slot.date === request.preferredDate;
      const sameTime = !slot.time || slot.time === request.preferredTime;
      return sameDate && sameTime;
    });
    if (isBlocked) return false;
  }

  return true;
}

export function calculateAvailabilityScore(isAvailable: boolean): number {
  return isAvailable ? 100 : 0;
}

/** rating (0–5) -> percentage (0–100), clamped defensively. */
export function calculateRatingScore(rating: number): number {
  const clamped = clamp(rating, 0, MAX_RATING);
  return (clamped / MAX_RATING) * 100;
}

/** years of experience -> percentage (0–100), capped at maxExperienceYears. */
export function calculateExperienceScore(
  experienceYears: number,
  maxExperienceYears: number = DEFAULT_MAX_EXPERIENCE_YEARS
): number {
  if (maxExperienceYears <= 0) return 0;
  const clampedYears = Math.max(0, experienceYears);
  const raw = (clampedYears / maxExperienceYears) * 100;
  return clamp(raw, 0, 100);
}

// ---------------------------------------------------------------------------
// Final weighted score
// ---------------------------------------------------------------------------

export function calculateFinalScore(breakdown: ScoreBreakdown): number {
  const total =
    breakdown.serviceScore * WEIGHTS.SERVICE +
    breakdown.distanceScore * WEIGHTS.DISTANCE +
    breakdown.availabilityScore * WEIGHTS.AVAILABILITY +
    breakdown.ratingScore * WEIGHTS.RATING +
    breakdown.experienceScore * WEIGHTS.EXPERIENCE;

  // Round to 1 decimal place.
  return Math.round(total * 10) / 10;
}
