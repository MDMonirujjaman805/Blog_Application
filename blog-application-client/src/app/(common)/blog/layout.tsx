export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* <p className="bg-amber-600">This is Blog Layout.</p> */}
      {children}
    </section>
  );
}
