"use client"; // Error boundaries must be Client Components

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        {/* <Link href={"/"}> Home</Link> */}
        {/* <Button>Try again</Button> */}
        Try again
      </button>
    </div>
  );
}
