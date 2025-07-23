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
import api from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { loginSchema } from "../schema";

function SignInPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof loginSchema>) {
    try {
      const response = await api.post(`/auth/login`, data);

      const { token } = response.data.data;

      localStorage.setItem("token", token);
      toast.success("Success!");
      router.push("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const error = err?.response.data.errors[0];
      toast.error(error);
    }
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
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-5 w-5 border-2 border-black accent-black"
              />
              <label htmlFor="remember" className="ml-2 text-sm">
                Remember me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm underline underline-offset-4"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full border-4 border-black bg-black py-3 font-bold text-white transition-colors hover:bg-white hover:text-black"
          >
            SIGN IN
          </button>
        </form>
      </Form>
      <div className="mt-6 text-center">
        <p>
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
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
