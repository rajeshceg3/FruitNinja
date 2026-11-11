# Verify FruitNinja
Fruit Ninja - fruit slicing game (Next.js pages router).
## Launch
npm install, then npm run dev or npm run build && npx next start.
## Doctor
`python3 .cursor/skills/verify-fruit-ninja/verify.py`
## Drive
Builds the Next.js app, starts the production server, and renders the home page in headless Chromium asserting the boot marker and zero JS console errors.
## Evidence
`.cursor/skills/verify-fruit-ninja/evidence.json`
## Cleanup
Static/streamlit/next server terminated after the render.
## Known boundaries
Render smoke only; e2e suites not exercised here.
