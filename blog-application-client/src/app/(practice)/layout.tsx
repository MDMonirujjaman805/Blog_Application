import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PracticeLayout({
  children,
  marketingSlot,
  salesSlot,
  testingSlot,
}: {
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  salesSlot: React.ReactNode;
  testingSlot: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex justify-between my-10 border-2 border-white px-3 py-2 rounded-xl">
        <Button asChild>
          <Link className="hover:underline" href="/development">
            Development
          </Link>
        </Button>
        <Button asChild>
          <Link className="hover:underline" href="/testing">
            Testing
          </Link>
        </Button>
        <Button asChild>
          <Link className="hover:underline" href="/marketing">
            Marketing
          </Link>
        </Button>
        <Button asChild>
          <Link className="hover:underline" href="/marketing/settings">
            Settings
          </Link>
        </Button>
        <Button asChild>
          <Link className="hover:underline" href="/sales">
            Sales
          </Link>
        </Button>
      </nav>

      <div className="flex">
        {marketingSlot}
        {salesSlot}
        {testingSlot}
      </div>

      {children}
    </div>
  );
}
