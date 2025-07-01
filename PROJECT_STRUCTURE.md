# SERP Prototypes Project Structure

## Overview
This project contains prototypes for testing different search experience features. Each feature has its own folder with multiple iterations.

## Structure

```
/SERP
├── /src
│   ├── /components
│   │   ├── /ui (shadcn components)
│   │   ├── /core (shared search components)
│   │   │   ├── Header.tsx (main header with nav and search)
│   │   │   ├── HeaderInput.tsx (search input component)
│   │   │   └── Layout.tsx (page layout wrapper)
│   │   └── /shared (components used across prototypes)
│   ├── /features (prototype implementations)
│   │   ├── /answer
│   │   │   ├── /v1
│   │   │   │   ├── HomePage.tsx (home page with hero content)
│   │   │   │   └── ResultsPage.tsx (results with answer cards)
│   │   │   └── /v2
│   │   ├── /type-ahead
│   │   ├── /spellcheck
│   │   ├── /related-questions
│   │   ├── /enhanced-input
│   │   └── /enhanced-result-row
│   ├── /app (Next.js routes)
│   │   └── /answer/v1
│   │       ├── page.tsx (home route)
│   │       └── /results/page.tsx (results route)
│   ├── /data (mock data for prototypes)
│   └── /styles (additional styling)
├── /public
│   ├── /images (hero images, etc.)
│   └── sparkle.svg (header button icon)
└── package.json
```

## Features to Prototype

1. **Answer** - AI-generated answer cards
2. **Type Ahead** - Autocomplete suggestions  
3. **Spellcheck** - Spell correction UI
4. **Related Questions** - Question suggestions
5. **Enhanced Input** - Input field enhancements
6. **Enhanced Result Row** - Rich result formatting

## URL Structure

Each prototype follows the pattern: `/{feature}/{version}` for home page
Results pages: `/{feature}/{version}/results?q=query`

Examples:
- `/answer/v1` - Answer prototype v1 home
- `/answer/v1/results?q=what+is+react` - Answer prototype v1 results
- `/type-ahead/v1` - Type ahead prototype v1 home

## Current Status

✅ Project structure created
✅ Answer v1 prototype implemented  
✅ Header and search components integrated
✅ Assets copied from original project
⏳ Additional prototypes pending

## Next Steps

1. Create additional feature prototypes
2. Add prototype-specific routing logic
3. Implement mock data for different features
4. Add testing documentation 