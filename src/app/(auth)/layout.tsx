import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 bg-neutral-100 md:grid-cols-2">
      {/* Left side - Form */}
      <div className="flex flex-col justify-center p-6 md:p-12">
        <div className="mx-auto w-full max-w-md">
          <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-8">
            {children}
          </div>
        </div>
      </div>
      {/* Right side - Image */}
      <div className="relative hidden md:block">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-6">
          <div className="rounded-none border-4 border-black bg-rose-300"></div>
          <div className="rounded-none border-4 border-black bg-yellow-300"></div>
          <div className="rounded-none border-4 border-black bg-blue-300"></div>
          <div className="rounded-none border-4 border-black bg-green-300"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rotate-3 transform border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:rotate-0">
            <Image
              src="/images/male-model.png"
              width={200}
              height={400}
              alt="Fashion model"
              className="h-80 w-64 border-2 border-black bg-amber-100 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
