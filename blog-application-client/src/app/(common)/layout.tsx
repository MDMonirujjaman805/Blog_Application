import { Navbar } from "@/components/layout/Navbar";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <p>This is common layout</p> */}
      <Navbar />
      {children}
    </div>
  );
}
