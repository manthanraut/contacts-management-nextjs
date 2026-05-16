"use client";

import type { Contact } from "@/lib/contacts";
import Link from "next/link";
import { useState } from "react";

type ContactsListProps = {
  contacts: Contact[];
};

export default function ContactsList({ contacts }: ContactsListProps) {
  const [search, setSearch] = useState("");
  const searchText = search.toLowerCase();

  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(searchText) ||
      contact.email.toLowerCase().includes(searchText) ||
      contact.phone.toLowerCase().includes(searchText) ||
      contact.company.name.toLowerCase().includes(searchText)
    );
  });

  return (
    <>
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search contacts..."
        className="mt-6 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-500"
      />
      <p className="mt-3 text-sm text-zinc-500">
        Showing {filteredContacts.length} of {contacts.length} contacts
      </p>
      <div className="mt-6 space-y-4">
        {filteredContacts.map((contact) => (
          <Link
            key={contact.id}
            href={`/contacts/${contact.id}`}
            className="block rounded-lg border border-zinc-200 bg-white p-4 shadow-sm hover:border-zinc-300 hover:shadow-md"
          >
            <h2 className="font-semibold">{contact.name}</h2>
            <p className="mt-1 text-sm text-zinc-600">{contact.email}</p>
            <p className="text-sm text-zinc-600">{contact.phone}</p>
            <p className="mt-2 text-sm text-zinc-500">{contact.company.name}</p>
          </Link>
        ))}

        {filteredContacts.length === 0 ? (
          <div className="rounded-lg border border-zinc-200 bg-white p-6 text-sm text-zinc-600 shadow-sm">
            No contacts found.
          </div>
        ) : null}
      </div>
    </>
  );
}
