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
    <header className="fixed top-0 z-20 w-full border-b-2 bg-[#FFF9ED] font-mono">
      <div
        id="navbar"
        className="container mx-auto flex h-16 items-center justify-center md:justify-between"
      >
        <nav className="flex items-center gap-10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-semibold tracking-tighter transition hover:scale-105 md:text-lg"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <Button
            variant="neutral"
            className="cursor-pointer rounded-md"
            aria-label="View cart"
          >
            <ShoppingCartIcon className="h-4 w-4" />
          </Button>
          <Button
            asChild
            variant="neutral"
            className="cursor-pointer rounded-md px-5"
          >
            <Link href="/auth">Sign-in</Link>
          </Button>
          <Button
            asChild
            variant="default"
            className="cursor-pointer rounded-md bg-[#A8A6FF] px-5"
          >
            <Link href="/auth">Sign-up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
