import { notFound } from "next/navigation";

type JsonPlaceholderUser = {
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

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchFromApi<T>(path: string, errorMessage: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  return response.json();
}

function mapUserToContact(user: JsonPlaceholderUser): Contact {
  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
    website: user.website,
    company: {
      name: user.company.name,
      catchPhrase: user.company.catchPhrase,
    },
    address: {
      street: user.address.street,
      suite: user.address.suite,
      city: user.address.city,
      zipcode: user.address.zipcode,
    },
  };
}

function isJsonPlaceholderUser(value: unknown): value is JsonPlaceholderUser {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value &&
    "email" in value &&
    "phone" in value
  );
}

export async function getContacts(): Promise<Contact[]> {
  const users = await fetchFromApi<JsonPlaceholderUser[]>(
    "/users",
    "Failed to fetch contacts"
  );

  return users.map(mapUserToContact);
}

export async function getContact(id: string): Promise<Contact> {
  const user = await fetchFromApi<unknown>(
    `/users/${id}`,
    "Failed to fetch contact"
  );

  if (!isJsonPlaceholderUser(user)) {
    notFound();
  }

  return mapUserToContact(user);
}
