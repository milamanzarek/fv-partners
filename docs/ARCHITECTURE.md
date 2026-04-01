# FV Partners SPA - Architecture Documentation

## Technology Stack
- **Framework**: React 19 (Single Page Application)
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Testing**: Vitest + React Testing Library

## Architectural Overview
The application follows a **Secure Edge-First** architecture. The core objective is to minimize latency for Southern California users while maintaining strict compliance with financial regulations.

### 1. Frontend Modularization
The legacy monolithic structure has been refactored into:
- `/src/components`: Reusable UI elements (UI) and layout components (Layout).
- `/src/pages`: Feature-based page containers (Home, Story, Services, etc.).
- `/src/routes`: Centralized route management using `AnimatedRoutes`.

### 2. Edge-First Performance
- **Target**: TTFB < 50ms for SoCal users.
- **Strategy**: Global Edge CDN deployment (Vercel or Cloudflare).
- **Caching**: Aggressive static asset caching via Edge nodes.
- **Optimization**: Move render-blocking Google Fonts to `<link rel="preconnect">` and optimize remote images via URL parameters.

### 3. Secure Serverless Relay
- **Pattern**: Zero-persistence proxy for form submissions.
- **Implementation**: Node.js serverless functions (located in `/api`) act as an encrypted relay to external CRM perimeters.
- **Compliance**: Adheres to GLBA/FTC Safeguards by ensuring no SPII is logged or stored within the marketing infrastructure.

## Data Flow
1. **Request**: Edge node serves the SPA bundle from the nearest SoCal POP.
2. **Submission**: Contact form data is sent to the `/api/contact-proxy` endpoint.
3. **Relay**: Proxy function validates, encrypts, and forwards to CRM without local persistence.
