# Spaces Places

Marketing and portfolio site for Spaces Places — an interior design and manufacturing studio. The site showcases completed projects, services, and manufacturing capabilities, and includes an authenticated admin panel for managing portfolio content and contact form submissions.

**Live site:** [spacesplaces.in(https://spacesplaces.in)

## Overview

**Public pages**
- `/` — Home
- `/about` — About the studio
- `/portfolio` — Project portfolio
- `/services` — Interior design services
- `/manufacturing` — Manufacturing capabilities
- `/contact` — Contact form
- `/auth` — Admin sign-in

**Admin panel** (auth-protected, under `/admin`)
- Dashboard — overview
- Portfolio management — add/edit/remove portfolio projects
- Submissions — view contact form submissions

## Tech stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** for components
- **React Router** for routing, including protected admin routes
- **TanStack Query** for data fetching
- **Supabase** for auth, database, and portfolio/submission storage
- **react-helmet-async** for per-page SEO metadata
- Google Analytics + Meta Pixel for site analytics

## Getting started

Requires Node.js and npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

\`\`\`sh
# Clone the repository
git clone https://github.com/aayush0818/spacesplaces.git
cd spacesplaces

# Install dependencies
npm install

# Copy env template and fill in your Supabase project details
cp .env.example .env

# Start the dev server
npm run dev
\`\`\`

The app runs at `http://localhost:8080` by default.

## Environment variables

Create a `.env` file (see `.env.example`) with:

\`\`\`
VITE_SUPABASE_PROJECT_ID="your-project-id"
VITE_SUPABASE_PUBLISHABLE_KEY="your-publishable-key"
VITE_SUPABASE_URL="https://your-project-id.supabase.co"
\`\`\`

These are Supabase's client-side publishable credentials — safe to expose in the browser, but access control depends entirely on your Supabase Row Level Security (RLS) policies, especially for the admin-facing tables (portfolio management, form submissions).

## Database

Supabase migrations live in `supabase/migrations/`. To apply them to a fresh Supabase project, use the [Supabase CLI](https://supabase.com/docs/guides/cli):

\`\`\`sh
supabase link --project-ref your-project-id
supabase db push
\`\`\`

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Production build, output to `dist/` |
| `npm run build:dev` | Build in development mode (unminified, for debugging) |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

## Project structure

\`\`\`
src/
  components/     # Reusable UI (Header, Footer, FloatingActions, ProtectedRoute, etc.)
  components/ui/  # shadcn/ui primitives
  pages/          # Public route pages
  pages/admin/    # Admin dashboard, portfolio management, submissions
  hooks/          # Custom React hooks, including auth (useAuth)
  integrations/   # Supabase client setup
  lib/            # Shared utilities
supabase/
  migrations/     # Database schema migrations
\`\`\`

## Deployment

Deployed on Vercel from the `main` branch.

## License

Private project — all rights reserved.
