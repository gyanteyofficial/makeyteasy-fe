# MakeyteasyFe

An Angular 22 frontend application generated with Angular CLI.

## Stack

- **Framework**: Angular 22
- **Language**: TypeScript
- **Build tool**: Vite (via `@angular/build`)
- **Node.js**: v22 (Replit module `nodejs-22`)

## Running the app

The dev server starts automatically via the **Start application** workflow:

```bash
NG_CLI_ANALYTICS=false NG_DISABLE_VERSION_CHECK=true ng serve
```

It runs on port **5000** and hot-reloads on file changes.

## Development notes

- Angular CLI analytics are disabled via `NG_CLI_ANALYTICS=false`
- `NG_DISABLE_VERSION_CHECK=true` is required because Replit's Node 22 module ships v22.22.0, while Angular CLI 22 requires v22.22.3+. The apps build and run correctly despite this minor patch difference.
- Dev server is bound to `0.0.0.0:5000` with `allowedHosts: true` in `angular.json` so Replit's proxy can reach it.

## Common commands

```bash
# Generate a component
ng generate component my-component --skip-tests --standalone

# Build for production
ng build

# Run unit tests
ng test
```

## User preferences
