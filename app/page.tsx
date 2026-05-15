import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-950">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold">Contact Manager</h1>

        <p className="mt-3 text-zinc-600">
          A simple Next.js app for learning routes, forms, server actions, and
          database storage.
        </p>
        <Link
          href="/contacts"
          className="mt-6 inline-flex rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
        >
          View contacts
        </Link>
      </div>
    </main>
  );
}
