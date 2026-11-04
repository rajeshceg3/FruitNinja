# Fruit details and missing images

## Sub-features
Click Banana, verify name/description/benefits, reload then Go Back. Direct unknown id shows Fruit not found. Missing tracked image URLs remain unchanged and produce explicit unavailable messages, not fabricated pictures.

## How to get to it (user POV)
Build/start the Next app and open home. Use day select, named benefit buttons and fruit card links. No login or database required.

## Driving it with Puppeteer
Run the helper in SKILL.md. Real browser selects and clicks drive the production app; inspect both-width screenshots plus result.json after cleanup.

## Gotchas
Shipped mock data, not medical advice. Photos missing; live deployment/security/database/persistence unverified. Do not seed the tracked SQLite file or infer product coverage from API-only tests.
