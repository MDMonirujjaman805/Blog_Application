import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>This is Analytics Layout page.</p>
      <div className=" space-x-5 hover:underline">
        {/* <Button asChild>
          <Link href={"/dashboard"}>Dashboard</Link>
        </Button> */}
        <Button asChild>
          <Link href={"/dashboard/analytics/monthly"}>Monthly</Link>
        </Button>
        <Button asChild>
          <Link href={"/dashboard/analytics/weekly"}>Weekly</Link>
        </Button>
      </div>
      {children}
    </div>
  );
}
