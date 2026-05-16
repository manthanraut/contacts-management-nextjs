import type { Contact } from "@/lib/contacts";

type ContactDetailsProps = {
  contact: Contact;
};

export default function ContactDetails({ contact }: ContactDetailsProps) {
  return (
    <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-zinc-500">Contact</p>
      <h1 className="mt-2 text-3xl font-bold">{contact.name}</h1>
      <p className="mt-1 text-zinc-600">@{contact.username}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <ContactDetailItem label="Email" value={contact.email} />
        <ContactDetailItem label="Phone" value={contact.phone} />
        <ContactDetailItem label="Website" value={contact.website} />
        <ContactDetailItem label="Company" value={contact.company.name} />

        <ContactDetailItem
          label="Address"
          value={`${contact.address.suite}, ${contact.address.street}, ${contact.address.city} - ${contact.address.zipcode}`}
          className="sm:col-span-2"
        />
      </div>
    </div>
  );
}

type ContactDetailItemProps = {
  label: string;
  value: string;
  className?: string;
};

function ContactDetailItem({
  label,
  value,
  className,
}: ContactDetailItemProps) {
  return (
    <div className={className}>
      <p className="text-sm font-medium text-zinc-500">{label}</p>
      <p>{value}</p>
    </div>
  );
}
