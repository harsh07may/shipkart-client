"use client";

import { Button } from "@/components/ui/button";
import { HomeIcon, RefreshCwIcon } from "lucide-react";
import Link from "next/link";

// TODO: Make this a proper NextJS ErrorBoundary Page.
//* @see https://nextjs.org/docs/app/api-reference/file-conventions/error

export const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 bg-neutral-100 md:grid-cols-2">
      {/* Left side - Error content */}
      <div className="flex flex-col justify-center p-6 md:p-12">
        <div className="mx-auto w-full max-w-md">
          <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-8">
            <div className="mb-6 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-black bg-red-200">
                <span className="text-6xl font-bold">!</span>
              </div>
            </div>
            <h2 className="mb-3 text-center text-3xl font-bold">
              Oops! Something went wrong
            </h2>
            <p className="mb-3 text-center text-gray-600">
              We encountered an error while processing your request. Please try
              again or return home.
            </p>
            <p className="mb-3 text-center text-gray-600">
              Trace ID: {error.digest}
            </p>
            <p className="mb-3 text-center text-gray-600">
              Error: {error.name}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                variant="neutral"
                onClick={() => reset()}
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md px-5"
              >
                <RefreshCwIcon size={20} />
                TRY AGAIN
              </Button>
              <Button
                asChild
                variant="neutral"
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md px-5"
              >
                <Link href="/">
                  <HomeIcon size={20} />
                  GO TO HOMEPAGE
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Right side - Graphic */}
      <div className="relative hidden md:block">
        <div className="absolute inset-0 grid grid-cols-1 grid-rows-1 p-6">
          <div className="rounded-none border-4 border-black bg-blue-200"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="-rotate-3 transform border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:rotate-0">
            <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden border-4 border-black bg-yellow-100">
              <div className="absolute flex h-full w-full items-center justify-center">
                <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-black bg-white">
                  <span className="text-8xl font-black">?</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-1/3 w-full border-t-4 border-black bg-blue-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
