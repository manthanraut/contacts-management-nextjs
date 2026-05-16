import { getContacts } from "@/lib/contacts";
import ContactsList from "./contacts-list";

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
    <>
      <h1 className="text-3xl font-bold">Contacts</h1>
      <ContactsList contacts={contacts} />
    </>
  );
}
