"use client";

type ContactsErrorProps = {
  error: Error;
  reset: () => void;
};

export default function ContactsError({ error, reset }: ContactsErrorProps) {
  return (
    <div className="rounded-lg border border-red-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-red-600">Something went wrong</p>

      <h1 className="mt-2 text-2xl font-bold">
        We could not load your contacts.
      </h1>

      <p className="mt-3 text-sm text-zinc-600">{error.message}</p>

      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
      >
        Try again
      </button>
    </div>
  );
}
