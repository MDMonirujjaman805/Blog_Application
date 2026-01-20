import { NextResponse, NextRequest } from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constants/roles";

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  let isAuthenticated = false;
  let isAdmin = false;
  const pathName = request.nextUrl.pathname;
  const { data } = await userService.getSession();

  //   console.log("Hello from Proxy........", request.url);
  console.log("The Path name is:", pathName);
  //   console.log(data);

  if (data) {
    isAuthenticated = true;
    isAdmin = data.user.role === Roles.admin;
  }
  //* User in not authenticated at all.
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  //* User is authenticated and role = ADMIN
  //* User can not visit user-dashboard
  if (isAdmin && pathName.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }
  //* User is authenticated and role = USER
  //* User can not visit admin-dashboard
  if (!isAdmin && pathName.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
  //   return NextResponse.redirect(new URL("/", request.url));
}
export const config = {
  //   matcher: ["/dashboard", "/admin-dashboard","/dashboard/:path*"],
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/user-dashboard",
    "/user-dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
  ],
};

// ⨯ /src/proxy contains invalid middleware config: source must start with / at "matcher[1]"

// import { NextRequest, NextResponse } from "next/server";
// import { userService } from "./services/user.service";
// import { Roles } from "./constants/roles";

// export async function proxy(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;

//   let isAuthenticated = false;
//   let isAdmin = false;

//   const { data } = await userService.getSession();

//   if (data) {
//     isAuthenticated = true;
//     isAdmin = data.user.role === Roles.admin;
//   }

//   //* User in not authenticated at all
//   if (!isAuthenticated) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   //* User is authenticated and role = ADMIN
//   //* User can not visit user dashboard
//   if (isAdmin && pathname.startsWith("/dashboard")) {
//     return NextResponse.redirect(new URL("/admin-dashboard", request.url));
//   }

//   //* User is authenticated and role = USER
//   //* User can not visit admin-dashboard
//   if (!isAdmin && pathname.startsWith("/admin-dashboard")) {
//     return NextResponse.redirect(new URL("/dashboard", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/dashboard",
//     "/dashboard/:path*",
//     "/admin-dashboard",
//     "/admin-dashboard/:path*",
//   ],
// };