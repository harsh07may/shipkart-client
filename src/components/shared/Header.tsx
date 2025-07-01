import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/stores", label: "Find a store" },
  { href: "/customer-support", label: "Customer Service" },
];

function Header() {
  return (
    <header className="border-b-2 bg-[#FFF9ED] font-mono">
      <div className="mx-auto flex h-16 items-center justify-between px-8">
        <nav className="flex items-center gap-10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="font-semibold tracking-tighter text-sm md:text-lg hover:scale-105 transition"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-5">
          <Button
            variant="neutral"
            className="cursor-pointer rounded-md"
            aria-label="View cart"
          >
            <ShoppingCartIcon className="h-4 w-4" />
          </Button>
          <Button variant="neutral" className="cursor-pointer rounded-md px-5">
            Log-In
          </Button>
          <Button
            variant="default"
            className="cursor-pointer bg-[#A8A6FF] rounded-md px-5"
          >
            Sign-Up
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
