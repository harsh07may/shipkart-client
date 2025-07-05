import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
export const NotFoundPage = () => {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 bg-neutral-100 md:grid-cols-2">
      {/* Left side - 404 content */}
      <div className="flex flex-col justify-center p-6 md:p-12">
        <div className="mx-auto w-full max-w-md">
          <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-8">
            <h2 className="mb-3 text-center font-mono text-7xl font-black">
              404
            </h2>
            <h3 className="mb-3 text-center text-2xl font-bold">
              Page Not Found
            </h3>
            <p className="mb-8 text-center text-gray-600">
              Looks like the page you&apos;re looking for doesn&apos;t exist or
              has been moved.
            </p>

            <Button
              asChild
              variant="neutral"
              className="flex flex-1 cursor-pointer items-center justify-center gap-2 px-5"
            >
              <Link href="/">
                <HomeIcon size={20} />
                BACK TO HOME
              </Link>
            </Button>
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

export default NotFoundPage;
