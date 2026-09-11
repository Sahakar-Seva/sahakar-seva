/**
 * Quick manual demo: run with `npm run demo`.
 * Prints a ranked list with scores and "Why this worker?" reasons,
 * similar to what the UI's SmartMatch section would show.
 */

import { findBestMatches } from "./matcher";
import { mockWorkers, sampleCustomerRequest } from "./mockData";

const results = findBestMatches(sampleCustomerRequest, mockWorkers);

console.log(
  `\nSmartMatch results for "${sampleCustomerRequest.serviceRequired}"\n` +
    "=".repeat(50)
);

if (results.length === 0) {
  console.log("No matching workers found.");
} else {
  results.forEach((r, i) => {
    console.log(`\n${i + 1}. ${r.workerName}  —  Score: ${r.matchScore}`);
    console.log(`   Distance: ${r.distanceKm} km | Available: ${r.availability}`);
    console.log("   Why recommended:");
    r.reasons.forEach((reason) => console.log(`     ✓ ${reason}`));
  });
}

console.log("\n" + "=".repeat(50));

// Also demonstrate the "no matching worker" case (Test 6 from the spec).
const noMatch = findBestMatches(
  { ...sampleCustomerRequest, serviceRequired: "AC Repair" },
  mockWorkers.filter((w) => !w.services.includes("AC Repair"))
);
console.log(`\nRequest for a service nobody offers -> ${JSON.stringify(noMatch)}`);
