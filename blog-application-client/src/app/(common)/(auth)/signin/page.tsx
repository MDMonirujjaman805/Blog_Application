import { SignInForm } from "@/components/modules/auth/signin-form";

export default function SignInFrom() {
  return (
    // <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
    //   <div className="flex w-full max-w-sm flex-col gap-6">
    //     <SignInForm />
    //   </div>
    // </div>

       <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <SignInForm />
          </div>
        </div>
  );
}
