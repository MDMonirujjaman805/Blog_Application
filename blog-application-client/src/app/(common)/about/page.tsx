"use client";

import { getBlogs } from "@/actions/blog.action";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [data, setData] = useState();
  const [error, setError] = useState<{ message: string } | null>(null);

  console.log({ data }, { error });

  useEffect(() => {
    (async () => {
      const { data, error } = await getBlogs();

      setData(data);
      setError(error);
    })();
  }, []);
  return <div>Hello Next.js! This is from about !!!</div>;
};

export default AboutPage;
