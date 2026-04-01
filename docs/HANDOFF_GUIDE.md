# FV Partners SPA - Handoff Guide

## Local Development
1. **Setup**: `npm install` to install React 19, Vite 6, and Testing dependencies.
2. **Run**: `npm run dev` for local development.
3. **Test**: `npm run test:run` for CI execution; `npm run test:watch` for TDD.
4. **Build**: `npm run build` to generate the production bundle in `/dist`.

## Content Management
- **Resources**: Manage the "Client Resources" list via `/src/data/resources.json`.
- **Theme**: Update brand colors and typography in `/src/index.css` under the `@theme` block.

## Deployment Strategy
- **Platform**: Recommended deployment to **Vercel** or **Cloudflare Pages**.
- **Edge Config**: Ensure `vercel.json` or Cloudflare redirects are configured for aggressive caching of `/assets`.
- **Environment**: Configure `GEMINI_API_KEY` and any CRM credentials in the platform's environment variables.

## Maintenance Priorities
1. **COMPLETED**: Remediated contrast ratio for muted text color.
2. **COMPLETED**: Added keyboard accessibility and ARIA roles to Insights article cards.
3. Establish automated synthetic monitoring from LA/San Diego nodes.
