import Link from "next/link";
import ContactDetails from "../_components/contact-details";
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
    <>
      <Link href="/contacts" className="text-sm font-extrabold text-zinc-600">
        {"<  Back to contacts"}
      </Link>

      <ContactDetails contact={contact} />
    </>
  );
}
