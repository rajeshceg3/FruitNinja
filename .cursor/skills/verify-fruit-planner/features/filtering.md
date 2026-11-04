# Day and benefit filtering

## Sub-features
Choose Monday: Banana. Select vitamin-c: Strawberry/Orange. Toggle off, select brain-health for no-match, Clear Filter restores Banana. Blank day resets; changing to Tuesday shows four shipped fruits. aria-pressed tracks filter state. Monday energy-only rule is existing behavior, not a verified nutritional recommendation.

## How to get to it (user POV)
Build/start the Next app and open home. Use day select, named benefit buttons and fruit card links. No login or database required.

## Driving it with Puppeteer
Run the helper in SKILL.md. Real browser selects and clicks drive the production app; inspect both-width screenshots plus result.json after cleanup.

## Gotchas
Shipped mock data, not medical advice. Photos missing; live deployment/security/database/persistence unverified. Do not seed the tracked SQLite file or infer product coverage from API-only tests.
