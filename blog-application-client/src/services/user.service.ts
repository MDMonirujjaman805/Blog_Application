import { cookies } from "next/headers";
import { env } from "@/env";

const AUTH_URL = env.AUTH_URL;

export const userService = {
  getSession: async function () {
    try {
      const cookiesStore = await cookies();
      // console.log(cookiesStore);
      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookiesStore.toString(),
        },
        cache: "no-store",
      });
      const session = await res.json();
      if (session === null) {
        return { data: null, error: { message: "Something is Missing !!!" } };
      }
      return { data: session, error: null };
    } catch (error) {
      console.error(error);
      return { data: null, error: { message: "Something Went Wrong !!!" } };
    }
  },
};
