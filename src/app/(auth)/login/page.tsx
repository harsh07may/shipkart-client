"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAuth from "@/hook/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginForm } from "../schema";

function SignInPage() {
  const { login, isLoggingIn, isAuthenticated } = useAuth();

  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/");
    }
  }, [router, isAuthenticated]);

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginForm) {
    login(data);
  }

  return (
    <>
      <h2 className="mb-1 text-3xl font-bold">SIGN IN</h2>
      <p className="mb-6 text-gray-600">
        Enter your details to access your account
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border-4 border-black bg-neutral-100 px-4 py-3 transition-colors focus:bg-white focus:ring-2 focus:ring-black focus:outline-none"
                    placeholder="you@example.com"
                    type="email"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border-4 border-black bg-neutral-100 px-4 py-3 transition-colors focus:bg-white focus:ring-2 focus:ring-black focus:outline-none"
                    type="password"
                    placeholder="********"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/forgot-password"
              className="text-sm underline underline-offset-4"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full border-4 border-black bg-black py-3 font-bold text-white transition-colors hover:bg-white hover:text-black"
          >
            {isLoggingIn ? "SIGNING IN... " : "SIGN IN"}
          </button>
        </form>
      </Form>
      <div className="mt-6 text-center">
        <p>
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-bold underline underline-offset-4"
          >
            Create an account
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignInPage;
