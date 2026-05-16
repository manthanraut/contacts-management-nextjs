# Contact Management Next.js

A small contact management app built while learning Next.js App Router.

The app uses JSONPlaceholder as a fake REST API, so it can demonstrate real async data fetching without needing a database setup. It includes a contacts list, contact detail pages, runtime search, loading states, error handling, and a custom not found screen.

## Features

- Home page with navigation to contacts
- Contacts list fetched from a REST API
- Contact detail pages using dynamic routes
- Runtime contact search while typing
- Shared contacts layout
- Loading UI with skeleton placeholders
- Route-level error UI with retry
- Contact-specific not found page
- Reusable contact UI components
- Centralized REST API helpers in `lib/contacts.ts`

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- JSONPlaceholder REST API

## Project Structure

```txt
app/
  page.tsx
  contacts/
    page.tsx
    layout.tsx
    loading.tsx
    error.tsx
    contacts-list.tsx
    _components/
      contact-card.tsx
      contact-details.tsx
    [id]/
      page.tsx
      not-found.tsx
lib/
  contacts.ts
```

## Learning Concepts

This project is intentionally small, but it covers important Next.js ideas:

- File-based routing with the `app` directory
- Nested routes such as `/contacts` and `/contacts/[id]`
- Dynamic route params
- Server Components for data fetching
- Client Components for interactive UI
- Passing server-fetched data into client components
- Route-level `loading.tsx`
- Route-level `error.tsx`
- Segment-specific `not-found.tsx`
- Reusable components
- Separating REST API logic from UI code

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Useful Scripts

```bash
npm run dev
npm run lint
npm run build
```

## API Source

Contact data comes from:

```txt
https://jsonplaceholder.typicode.com/users
```

The API layer is centralized in:

```txt
lib/contacts.ts
```

That keeps the UI independent from the exact external API response shape.
