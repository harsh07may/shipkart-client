import { InputField } from "@/components/shared/InputField";
import Link from "next/link";
import React from "react";

function SignInPage() {
  return (
    <>
      <h2 className="mb-1 text-3xl font-bold">SIGN IN</h2>
      <p className="mb-6 text-gray-600">
        Enter your details to access your account
      </p>

      <form>
        <InputField
          label="Email"
          type="email"
          placeholder="your-name@email.com"
          name="email"
          required
        />
        <InputField
          label="password"
          type="password"
          placeholder="••••••••••"
          name="password"
          required
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
