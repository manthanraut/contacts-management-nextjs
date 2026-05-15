import { notFound } from "next/navigation";

export type Contact = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
};

const CONTACTS_API_URL = "https://jsonplaceholder.typicode.com/users";

export async function getContacts(): Promise<Contact[]> {
  const response = await fetch(CONTACTS_API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch contacts");
  }

  return response.json();
}

export async function getContact(id: string): Promise<Contact> {
  const response = await fetch(`${CONTACTS_API_URL}/${id}`);

  if (!response.ok) {
    notFound();
  }

  const contact = await response.json();

  if (!contact.id) {
    notFound();
  }

  return contact;
}
