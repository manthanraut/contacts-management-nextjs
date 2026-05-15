import Link from "next/link";
import { getContacts } from "@/lib/contacts";

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-950">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold">Contacts</h1>

        <div className="mt-6 space-y-4">
          {contacts.map((contact) => (
            <Link
              key={contact.id}
              href={`/contacts/${contact.id}`}
              className="block rounded-lg border border-zinc-200 bg-white p-4 shadow-sm hover:border-zinc-300 hover:shadow-md"
            >
              <h2 className="font-semibold">{contact.name}</h2>
              <p className="mt-1 text-sm text-zinc-600">{contact.email}</p>
              <p className="text-sm text-zinc-600">{contact.phone}</p>
              <p className="mt-2 text-sm text-zinc-500">
                {contact.company.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
