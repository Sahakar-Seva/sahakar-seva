# SmartMatch Engine

A standalone, dependency-free scoring/ranking engine that takes a customer's
service request and a list of workers, and returns a ranked list of the best
matches with a score breakdown and "why this worker?" reasons.

No Firebase, no Next.js, no UI code — it only touches plain objects, so it
can be developed, tested, and later dropped into the real app without any
rework.

## Folder structure

```
smartmatch-engine/
├── package.json
├── tsconfig.json
├── jest.config.js
├── README.md
└── smartmatch/
    ├── types.ts        # Worker, CustomerRequest, MatchResult, etc.
    ├── scoring.ts       # weights + individual scoring functions (Haversine, etc.)
    ├── matcher.ts       # findBestMatches() — the main pipeline
    ├── mockData.ts      # 10 mock Indian workers + a sample request
    ├── index.ts         # public entry point (re-exports everything)
    ├── demo.ts          # runnable demo printing ranked results
    └── test/
        └── matcher.test.ts   # 40 unit tests
```

## Setup

Requires Node.js 18+.

```bash
cd smartmatch-engine
npm install
```

## Running it

**Type-check** (no compilation errors):
```bash
npm run typecheck
```

**Run the unit tests** (40 tests — scoring functions, the full pipeline, and
every edge case listed in the spec: no match, rating 0, rating 5,
experience 0, experience > 10, same distance, same score, missing optional
fields, etc.):
```bash
npm test
```

**Run the demo** (prints a ranked list with scores and reasons, like the
SIH demo screen would show):
```bash
npm run demo
```

Expected demo output (abridged) for an "Electrical Repair" request:

```
1. Sanjay Gupta  —  Score: 94.3
   Distance: 1.8 km | Available: true
   Why recommended:
     ✓ Provides required Electrical Repair service
     ✓ Only 1.8 km away
     ✓ Available at requested time
     ✓ 4.4 rating
     ✓ 12+ years experience
...
```

## Using it in code

```typescript
import { findBestMatches, mockWorkers } from "./smartmatch";

const results = findBestMatches(
  {
    serviceRequired: "Electrical Repair",
    customerLocation: { latitude: 28.6315, longitude: 77.2167 },
    preferredDate: "2025-11-20",
    preferredTime: "14:00",
  },
  mockWorkers // swap this for real Firestore data later — same shape
);

// results[0] => { workerId, workerName, matchScore, distanceKm,
//                 matchedService, availability, scoreBreakdown, reasons }
```

## Scoring model

| Factor       | Weight | Source constant (smartmatch/scoring.ts) |
|--------------|--------|------------------------------------------|
| Service      | 35%    | `WEIGHTS.SERVICE`                         |
| Distance     | 25%    | `WEIGHTS.DISTANCE`                        |
| Availability | 20%    | `WEIGHTS.AVAILABILITY`                    |
| Rating       | 10%    | `WEIGHTS.RATING`                          |
| Experience   | 10%    | `WEIGHTS.EXPERIENCE`                      |

All weights and normalization constants (`DEFAULT_MAX_DISTANCE_KM`,
`DEFAULT_MAX_EXPERIENCE_YEARS`) live in one place in `scoring.ts`, so
rebalancing (e.g. "make distance 30%, rating 15%") is a one-line change.

- **Service**: exact (case/whitespace-insensitive) match against the
  worker's `services` list. Non-matching workers are filtered out before
  scoring, per the spec's recommendation.
- **Distance**: Haversine great-circle distance, linearly mapped so 0 km →
  100 and `maxDistanceKm` (default 10 km) → 0, clamped so it never goes
  negative beyond that.
- **Availability**: simple boolean check for v1 — a worker is unavailable if
  their overall status is `"busy"`, or if they have a matching entry in
  `unavailableSlots` for the requested date/time. This is designed to be
  swapped for real Firestore booking data later without changing the
  function's signature.
- **Rating**: `(rating / 5) * 100`, clamped to 0–5 input range.
- **Experience**: `(years / maxExperienceYears) * 100`, capped at 100 so
  30 years of experience doesn't produce 300%.

> **Note on the spec's worked example:** the spec's step 10 example states a
> final score of 90.1 for inputs (100, 85, 100, 96, 60), but
> `100×.35 + 85×.25 + 100×.20 + 96×.10 + 60×.10 = 91.85 → 91.9`. The code
> implements the formula correctly (91.9); the test suite checks against the
> correct arithmetic rather than the spec's typo.

## What's deliberately NOT here (per the spec's boundaries)

- No UI, no pages, no navbar/dashboard changes
- No Firebase, Firestore, or authentication
- No project-wide folder restructuring — this whole module is isolated
  under `smartmatch/` so it can be moved/integrated later

## Next steps (not part of this deliverable)

1. `npm run typecheck && npm test` should both pass before opening a PR.
2. Commit on a feature branch (never directly on `development`/`main`):
   ```bash
   git checkout development
   git pull origin development
   git checkout -b feature/smartmatch-engine
   git add .
   git commit -m "feat: add SmartMatch scoring engine"
   git push -u origin feature/smartmatch-engine
   ```
3. Open a PR into `development` (not `main`).
4. Later: swap `mockData.ts` for real Firestore-backed worker data once the
   Firebase contributor's backend is stable — `findBestMatches()`'s
   signature doesn't need to change, since it only expects an array of
   `Worker` objects.
