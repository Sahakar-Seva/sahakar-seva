/**
 * SmartMatch Engine — public entry point.
 *
 * The rest of the application (or, later, a Firestore-backed data layer)
 * should only need to import from this file.
 */

export * from "./types";
export * from "./scoring";
export { findBestMatches } from "./matcher";
export { mockWorkers, sampleCustomerRequest } from "./mockData";
