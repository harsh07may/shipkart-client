"use client";
import { InputField } from "@/components/shared/InputField";
import Link from "next/link";
import React from "react";

function SignUpPage() {
  return (
    <>
      <h2 className="mb-1 text-3xl font-bold">Create Account</h2>
      <p className="mb-6 text-gray-600">Sign up to start shopping</p>

      <form>
        <InputField
          label="Full Name"
          type="text"
          placeholder="John Doe"
          name="name"
          required
        />
        <InputField
          label="Email"
          type="email"
          placeholder="your@email.com"
          name="email"
          required
        />
        <InputField
          label="Password"
          type="password"
          placeholder="••••••••"
          name="password"
          required
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

        <div></div>
        <button
          type="submit"
          className="w-full border-4 border-black bg-black py-3 font-bold text-white transition-colors hover:bg-white hover:text-black"
        >
          SIGN UP
        </button>
      </form>
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
