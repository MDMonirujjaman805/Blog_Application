"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import { toast } from "sonner";

type SignInForm = {
  email: string;
  password: string;
};

const formSchema = z.object({
  name: z.string().min(1, "This field is Required."),
  email: z.email(),
  password: z.string().min(8, "Minimum length is 8"),
});
export function SignInForm({ ...props }: React.ComponentProps<typeof Card>) {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Signing In User !!!");
      try {
        // const { data, error } = await authClient.signUp.email(value);
        const { error } = await authClient.signUp.email(value);
        // console.log("Submit Clicked.....", value);

        if (error) {
          toast.error(error.message, { id: toastId });
          return;
        }
        toast.success("User Signed in Successfully.", { id: toastId });
      } catch (error) {
        toast.error("Something Went Wrong, Please Try Again.", { id: toastId });
        // console.error(error);
      }
    },
  });

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "http://localhost:3000",
    });
    // console.log(data);
  };
  // console.log(form);
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Sign In Your Account</CardTitle>
        <CardDescription>
          Enter your information below to Sign in your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="sign-in-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      type="email"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      placeholder={"Enter Your Email"}
                      autoComplete="off"
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                      }}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="password"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input
                      type="password"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      placeholder={"Enter Your Password"}
                      autoComplete="off"
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                      }}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-5 ">
        <Button
          className="w-full"
          onClick={() => handleGoogleSignIn()}
          variant="outline"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              fill="currentColor"
            />
          </svg>
          Sign In with Google
        </Button>

        <Button className="w-full font-bold" form="sign-in-form" type="submit">
          Sign In with Email
        </Button>
      </CardFooter>
    </Card>
  );
}
