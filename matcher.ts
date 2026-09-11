/**
 * SmartMatch Engine — Matcher
 *
 * Entry point for the rest of the application:
 *
 *   findBestMatches(customerRequest, workers) -> MatchResult[]
 *
 * This file has no knowledge of Firebase, Next.js, or the UI. It only
 * consumes plain Worker / CustomerRequest objects and returns plain
 * MatchResult objects, sorted best-first.
 */

import {
  Worker,
  CustomerRequest,
  MatchResult,
  MatchOptions,
  ScoreBreakdown,
} from "./types";
import {
  DEFAULT_MAX_DISTANCE_KM,
  DEFAULT_MAX_EXPERIENCE_YEARS,
  calculateDistanceKm,
  isServiceMatch,
  getMatchedServiceName,
  calculateServiceScore,
  calculateDistanceScore,
  checkAvailability,
  calculateAvailabilityScore,
  calculateRatingScore,
  calculateExperienceScore,
  calculateFinalScore,
} from "./scoring";

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}

/** Builds the "Why this worker?" reason list for the demo/UI. */
function buildReasons(
  worker: Worker,
  matchedService: string,
  distanceKm: number,
  isAvailable: boolean
): string[] {
  const reasons: string[] = [];

  if (matchedService) {
    reasons.push(`Provides required ${matchedService} service`);
  }

  reasons.push(`Only ${round1(distanceKm)} km away`);

  reasons.push(
    isAvailable
      ? "Available at requested time"
      : "Not available at requested time"
  );

  reasons.push(`${worker.rating.toFixed(1)} rating`);

  reasons.push(
    worker.experience >= DEFAULT_MAX_EXPERIENCE_YEARS
      ? `${worker.experience}+ years experience`
      : `${worker.experience} years experience`
  );

  return reasons;
}

/**
 * Finds and ranks the best-matching workers for a customer request.
 *
 * Pipeline:
 *   1. Filter workers by required service (non-matching workers are excluded)
 *   2. Calculate distance (Haversine)
 *   3. Check availability for the requested date/time
 *   4. Calculate rating score
 *   5. Calculate experience score
 *   6. Combine into a final weighted score
 *   7. Sort highest -> lowest
 */
export function findBestMatches(
  request: CustomerRequest,
  workers: Worker[],
  options: MatchOptions = {}
): MatchResult[] {
  const maxDistanceKm = options.maxDistanceKm ?? DEFAULT_MAX_DISTANCE_KM;
  const maxExperienceYears =
    options.maxExperienceYears ?? DEFAULT_MAX_EXPERIENCE_YEARS;

  // Step 1: only consider workers who provide the requested service.
  const eligibleWorkers = workers.filter((w) =>
    isServiceMatch(w, request.serviceRequired)
  );

  const results: MatchResult[] = eligibleWorkers.map((worker) => {
    // Step 2: distance
    const distanceKm = calculateDistanceKm(
      request.customerLocation.latitude,
      request.customerLocation.longitude,
      worker.latitude,
      worker.longitude
    );

    // Step 3: availability
    const isAvailable = checkAvailability(worker, request);

    // Component scores
    const breakdown: ScoreBreakdown = {
      serviceScore: calculateServiceScore(worker, request.serviceRequired),
      distanceScore: calculateDistanceScore(distanceKm, maxDistanceKm),
      availabilityScore: calculateAvailabilityScore(isAvailable),
      ratingScore: calculateRatingScore(worker.rating),
      experienceScore: calculateExperienceScore(
        worker.experience,
        maxExperienceYears
      ),
    };

    const matchScore = calculateFinalScore(breakdown);
    const matchedService = getMatchedServiceName(
      worker,
      request.serviceRequired
    );

    return {
      workerId: worker.id,
      workerName: worker.name,
      matchScore,
      distanceKm: round1(distanceKm),
      matchedService,
      availability: isAvailable,
      scoreBreakdown: breakdown,
      reasons: buildReasons(worker, matchedService, distanceKm, isAvailable),
    };
  });

  // Step 7: sort highest -> lowest. Ties broken by distance (closer first),
  // then by rating (higher first), for stable/sensible ordering.
  results.sort((a, b) => {
    if (b.matchScore !== a.matchScore) return b.matchScore - a.matchScore;
    if (a.distanceKm !== b.distanceKm) return a.distanceKm - b.distanceKm;
    return 0;
  });

  return results;
}
