type ContactsLayoutProps = {
  children: React.ReactNode;
};

export default function ContactsLayout({ children }: ContactsLayoutProps) {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-950">
      <div className="mx-auto max-w-4xl">{children}</div>
    </main>
  );
}
