"use client";
import { InputField } from "@/components/shared/InputField";
import useAuth from "@/hook/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { registerSchema } from "../schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

function SignUpPage() {
  const { register, isAuthenticated } = useAuth();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  // TODO: Fix this
  async function onSubmit(data: z.infer<typeof registerSchema>) {
    register(data);
  }

  return (
    <>
      <h2 className="mb-1 text-3xl font-bold">Create Account</h2>
      <p className="mb-6 text-gray-600">Sign up to start shopping</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border-4 border-black bg-neutral-100 px-4 py-3 transition-colors focus:bg-white focus:ring-2 focus:ring-black focus:outline-none"
                    placeholder="John"
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
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border-4 border-black bg-neutral-100 px-4 py-3 transition-colors focus:bg-white focus:ring-2 focus:ring-black focus:outline-none"
                    placeholder="Doe"
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border-4 border-black bg-neutral-100 px-4 py-3 transition-colors focus:bg-white focus:ring-2 focus:ring-black focus:outline-none"
                    placeholder="john.doe@example.com"
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
                    placeholder="********"
                    type="password"
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
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border-4 border-black bg-neutral-100 px-4 py-3 transition-colors focus:bg-white focus:ring-2 focus:ring-black focus:outline-none"
                    placeholder="********"
                    type="password"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mb-6 flex items-start">
            <div className="flex h-5 items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-5 w-5 border-2 border-black accent-black"
                required
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm">
              I agree to the{" "}
              <Link href="/terms" className="underline underline-offset-4">
                Terms and Conditions
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="w-full border-4 border-black bg-black py-3 font-bold text-white transition-colors hover:bg-white hover:text-black"
          >
            SIGN UP
          </button>
        </form>
      </Form>

      <div className="mt-6 text-center">
        <p>
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-bold underline underline-offset-4"
          >
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignUpPage;
