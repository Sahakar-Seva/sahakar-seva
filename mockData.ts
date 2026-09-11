/**
 * SmartMatch Engine — Mock Data
 *
 * Local/mock worker dataset so the engine can be developed and tested
 * without any Firebase/Firestore dependency. Locations are realistic
 * points around Delhi NCR, spaced out so distance-based ranking is
 * actually exercised.
 *
 * Reference customer location used across examples/tests (Connaught
 * Place, New Delhi): { latitude: 28.6315, longitude: 77.2167 }
 */

import { Worker } from "./types";

export const mockWorkers: Worker[] = [
  {
    id: "w001",
    name: "Rahul Sharma",
    services: ["Electrical Repair", "Fan Installation"],
    skills: ["wiring", "MCB repair"],
    experience: 6,
    rating: 4.8,
    availability: "available",
    latitude: 28.6448, // ~2.1 km from CP
    longitude: 77.216,
  },
  {
    id: "w002",
    name: "Amit Kumar",
    services: ["Electrical Repair", "Switchboard Installation"],
    skills: ["wiring"],
    experience: 4,
    rating: 4.5,
    availability: "available",
    latitude: 28.6692, // ~4.5 km from CP
    longitude: 77.2265,
  },
  {
    id: "w003",
    name: "Suresh Kumar",
    services: ["Plumbing", "Water Tank Cleaning"],
    skills: ["pipe fitting"],
    experience: 8,
    rating: 4.7,
    availability: "available",
    latitude: 28.6139,
    longitude: 77.209,
  },
  {
    id: "w004",
    name: "Rakesh Singh",
    services: ["Electrical Repair"],
    skills: ["wiring", "inverter setup"],
    experience: 2,
    rating: 4.2,
    availability: "available",
    latitude: 28.7041, // ~8.4 km from CP
    longitude: 77.1025,
  },
  {
    id: "w005",
    name: "Vikram Yadav",
    services: ["Electrical Repair", "AC Repair"],
    skills: ["HVAC basics"],
    experience: 5,
    rating: 4.9,
    availability: "busy",
    unavailableSlots: [{ date: "2025-11-20", time: "14:00" }],
    latitude: 28.6358, // ~0.5 km from CP
    longitude: 77.221,
  },
  {
    id: "w006",
    name: "Manoj Tiwari",
    services: ["Carpentry", "Furniture Repair"],
    skills: ["woodwork"],
    experience: 10,
    rating: 4.6,
    availability: "available",
    latitude: 28.5921,
    longitude: 77.2508,
  },
  {
    id: "w007",
    name: "Deepak Verma",
    services: ["Plumbing"],
    skills: ["leak repair"],
    experience: 1,
    rating: 3.8,
    availability: "available",
    latitude: 28.63,
    longitude: 77.219,
  },
  {
    id: "w008",
    name: "Sanjay Gupta",
    services: ["Electrical Repair", "Fan Installation", "AC Repair"],
    skills: ["wiring", "HVAC"],
    experience: 12, // deliberately > max, to test the experience-score cap
    rating: 4.4,
    availability: "available",
    latitude: 28.6205,
    longitude: 77.203,
  },
  {
    id: "w009",
    name: "Anil Mehta",
    services: ["Painting", "Wall Repair"],
    skills: ["interior painting"],
    experience: 7,
    rating: 4.1,
    availability: "available",
    latitude: 28.65,
    longitude: 77.24,
  },
  {
    id: "w010",
    name: "Ramesh Chand",
    services: ["Electrical Repair"],
    skills: ["wiring"],
    experience: 0, // brand new, to test experience = 0 edge case
    rating: 0, // no ratings yet, to test rating = 0 edge case
    availability: "available",
    latitude: 28.64,
    longitude: 77.215,
  },
];

/** A sample customer request usable in demos/tests. */
export const sampleCustomerRequest = {
  serviceRequired: "Electrical Repair",
  customerLocation: { latitude: 28.6315, longitude: 77.2167 },
  preferredDate: "2025-11-20",
  preferredTime: "14:00",
};
