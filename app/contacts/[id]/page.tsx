import Link from "next/link";
import { getContact } from "@/lib/contacts";

type ContactDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ContactDetailsPage({
  params,
}: ContactDetailsPageProps) {
  const { id } = await params;

  const contact = await getContact(id);

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-950">
      <div className="mx-auto max-w-4xl">
        <Link href="/contacts" className="text-sm font-extrabold text-zinc-600">
          {"<  Back to contacts"}
        </Link>

        <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-zinc-500">Contact</p>
          <h1 className="mt-2 text-3xl font-bold">{contact.name}</h1>
          <p className="mt-1 text-zinc-600">@{contact.username}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-zinc-500">Email</p>
              <p>{contact.email}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-500">Phone</p>
              <p>{contact.phone}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-500">Website</p>
              <p>{contact.website}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-500">Company</p>
              <p>{contact.company.name}</p>
            </div>

            <div className="sm:col-span-2">
              <p className="text-sm font-medium text-zinc-500">Address</p>
              <p>
                {contact.address.suite}, {contact.address.street},{" "}
                {contact.address.city} - {contact.address.zipcode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
