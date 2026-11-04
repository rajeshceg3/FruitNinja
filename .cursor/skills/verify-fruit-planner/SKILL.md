---
name: verify-fruit-planner
description: Build FruitNinja's actual Fruitful Days planner, drive day/benefit filtering and fruit details, test real shipped-data APIs and controlled stale/error responses, and inspect mobile/desktop pixels.
---
# Fruitful Days verification

## Launch
Use Node22.12+ and Chrome. `npm ci --ignore-scripts` then `npm run build`. Install helper dependencies: `npm ci --ignore-scripts --prefix .cursor/skills/verify-fruit-planner`. Normal app: `npm run start`. No database or secret is needed: pages/api/fruits.js reads data/fruits.js, not Prisma. Do not seed/change the tracked SQLite database or run Prisma against it. The unused SQLite schema contains unsupported string lists and is not accepted database coverage.

## Doctor
`node .cursor/skills/verify-fruit-planner/helpers/verify.mjs /tmp/fruit-proof` owns an ephemeral loopback Next production server. Readiness needs a successful real home response, followed by real API assertions. Build must be done first. CHROME_PATH can override /usr/bin/google-chrome. An error means stop and fix the actual source or record the blocker, not substitute a fake server. Fresh runs start new owned browser contexts/server; no shared user session is driven.

## Drive
The helper tests the real API against its shipped ten-fruit dataset for seven days and every day/benefit combination, all ten detail IDs and unknown fruit. Monday without a benefit intentionally returns only source energy fruit; preserve this existing rule. Invalid repeated query parameters/non-numeric IDs return400 instead of throwing or silently accepting 1oops. POST returns405 with AllowGET.

At390and1365, real select/button/card clicks prove initial selection, Monday Banana, vitamin-c filter Strawberry/Orange, same-button toggle, no-match, clear, detail/reload/back, Tuesday4fruits and blank-day reset. A real browser request delays the older Monday API response while Tuesday returns: Tuesday must remain visible after both finish. A controlled HTTP500 at the production fetch boundary proves visible error and recovery. These two boundary fixtures are labeled, not live provider proof. No internal store setters/endpoints used. Benefit buttons expose aria-pressed and native focus rings.

## Evidence
Named output contains server.log,result.json and each-width filter/detail/race PNGs. Inspect pixels, not file existence. Missing source photos currently return404; the app preserves their URLs but displays an honest unavailable message rather than broken images/empty300pxpanels. No invented replacement assets. visualAcceptance stays false because actual photography and health/benefit claims are unverified. Compare before/after evidence, especially mobile detail overflow and stale-response behavior.

## Cleanup
Helper closes its browser and only the Next process it launched; named proof survives. Never kill by process name, delete source/database, rewrite data or contact external providers. Concurrent runs require different output directories and separate owned sessions. Confirm named artifacts survive after cleanup. Failed iterations clean themselves before rerun.

## Coverage and maintenance
Actual shipped mock-data planner proof, not a slicing game, live nutrition advice, persistence,3primary+2alternative planning, Prisma/database, hosted deployment or CI acceptance. Audit15(1critical13high1moderate) remains open; no forced upgrade. nextlint passes with one no-img-element warning on the explicit missing-image fallback. Use /maintain-verification-skill after source changes and keep feature-map claims tied to actual journeys.
