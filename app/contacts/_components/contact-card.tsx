import Link from "next/link";
import type { Contact } from "@/lib/contacts";

type ContactCardProps = {
  contact: Contact;
};

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <Link
      href={`/contacts/${contact.id}`}
      className="block rounded-lg border border-zinc-200 bg-white p-4 shadow-sm hover:border-zinc-300 hover:shadow-md"
    >
      <h2 className="font-semibold">{contact.name}</h2>
      <p className="mt-1 text-sm text-zinc-600">{contact.email}</p>
      <p className="text-sm text-zinc-600">{contact.phone}</p>
      <p className="mt-2 text-sm text-zinc-500">{contact.company.name}</p>
    </Link>
  );
}
