import { Button } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("Something went wrong !!!");
  return (
    <div>
      <p>Hello from blog page.</p>
      <Link href={"/blogs/post"}>
        <Button className="cursor-pointer mt-8">Post</Button>
      </Link>
    </div>
  );
}
