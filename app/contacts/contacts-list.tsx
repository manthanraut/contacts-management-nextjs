"use client";

import ContactCard from "./_components/contact-card";
import type { Contact } from "@/lib/contacts";
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
          <ContactCard key={contact.id} contact={contact} />
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
