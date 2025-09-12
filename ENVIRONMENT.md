# Environment Variables Guide

This project now has proper environment variable support set up. Here's how to use it:

## Files Created:

1. **`.env.local`** - Your local development environment variables (not committed to git)
2. **`.env.example`** - Template file showing what environment variables are needed
3. **`lib/env.ts`** - Utility functions for environment detection

## How to Use Environment Variables:

### 1. Server-side Environment Variables
These are only accessible on the server (in API routes, getServerSideProps, etc.):

```javascript
// In API routes or server-side code
const apiKey = process.env.API_KEY;
const databaseUrl = process.env.DATABASE_URL;
```

### 2. Client-side Environment Variables
Must start with `NEXT_PUBLIC_` to be accessible in the browser:

```javascript
// In React components (client-side)
const appName = process.env.NEXT_PUBLIC_APP_NAME;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

### 3. Environment Detection
Use the utility functions from `lib/env.ts`:

```javascript
import { isDevelopment, isProduction, getEnvironment } from '@/lib/env';

// Check if in development
if (isDevelopment()) {
  console.log('This only runs in development');
}

// Check if in production
if (isProduction()) {
  console.log('This only runs in production');
}

// Get current environment
const env = getEnvironment(); // 'development' or 'production'
```

## Debug Button Behavior:

- ✅ **Development** (`npm run dev`): Debug button (🐛) visible
- ❌ **Production** (`npm run build && npm start`): Debug button hidden
- ❌ **Deployed**: Debug button hidden

## Adding New Environment Variables:

1. Add to `.env.local` for local development
2. Add to `.env.example` as documentation
3. For production, set them in your deployment platform (Vercel, Netlify, etc.)

## Example `.env.local`:

```bash
# Development only
NODE_ENV=development
NEXT_PUBLIC_APP_ENV=development

# Private variables (server-side only)
DATABASE_URL=your-database-url
API_SECRET=your-secret-key

# Public variables (client-side accessible)
NEXT_PUBLIC_API_URL=https://api.development.com
NEXT_PUBLIC_APP_NAME=MELP
```

## Important Notes:

- Never commit `.env.local` to git (it's in `.gitignore`)
- Always add new variables to `.env.example` for team documentation
- Client-side variables must start with `NEXT_PUBLIC_`
- Restart your development server after adding new environment variables