export default function ContactsLoading() {
  return (
    <>
      <div className="h-9 w-40 rounded bg-zinc-200" />

      <div className="mt-6 space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm"
          >
            <div className="h-5 w-48 rounded bg-zinc-200" />
            <div className="mt-3 h-4 w-64 rounded bg-zinc-100" />
            <div className="mt-2 h-4 w-40 rounded bg-zinc-100" />
            <div className="mt-4 h-4 w-52 rounded bg-zinc-100" />
          </div>
        ))}
      </div>
    </>
  );
}
