
import Link from "next/link";

export default function ContactNotFound() {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-zinc-500">404</p>

      <h1 className="mt-2 text-2xl font-bold">Contact not found</h1>

      <p className="mt-3 text-sm text-zinc-600">
        The contact you are looking for does not exist.
      </p>

      <Link
        href="/contacts"
        className="mt-6 inline-flex rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
      >
        Back to contacts
      </Link>
    </div>
  );
}
