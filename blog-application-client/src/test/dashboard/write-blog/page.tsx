import { Button } from "@/components/ui/button";
import Link from "next/link";

const WriteBlog = () => {
  return (
    <div>
      <p>This is Write blog page.</p>
      <Button asChild className="mt-8">
        <Link href={"/dashboard"}>Dashboard</Link>
      </Button>
    </div>
  );
};

export default WriteBlog;
