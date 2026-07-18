# Enterprise Delivery Dashboard

A responsive Vue and TypeScript portfolio application for tracking enterprise project health, delivery progress, milestones, team size, and technology coverage.

The repository demonstrates how a basic Vue starter can be transformed into a maintainable, production-oriented frontend with reusable components, typed sample data, automated validation, and dependency security checks.

## Features

- responsive enterprise dashboard layout
- reusable metric-card and delivery-table components
- typed project and status models
- computed portfolio metrics
- search, domain, and delivery-status filters
- accessible status badges and progress indicators
- mobile-friendly navigation and table presentation
- automated type checking, unit testing, production build, and npm audit

## Technology stack

- Vue 3 Composition API
- TypeScript
- Vue Router
- Pinia-ready application bootstrap
- Vite
- Vitest and Vue Test Utils

## Requirements

- Node.js 22.22.3 or newer
- npm 10 or newer

## Local development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:5173`.

## Validation

```bash
npm run type-check
npm run test
npm run build
npm run audit
```

Run the complete validation suite with:

```bash
npm run check
```

## Continuous integration

GitHub Actions performs a clean npm installation, TypeScript validation, unit tests, a production build, and a high-severity dependency audit. Dependabot checks npm and GitHub Actions dependencies weekly.

## Data notice

All project names, metrics, and delivery values in this repository are demonstration data created for portfolio presentation. They do not represent confidential client information.
