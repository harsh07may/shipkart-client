"use client";
import { Button } from "@/components/ui/button";
import useAuth from "@/hook/useAuth";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/stores", label: "Find a store" },
  { href: "/customer-support", label: "Customer Service" },
];

function Header() {
  const { isAuthenticated, logout } = useAuth();
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
            asChild
            variant="neutral"
            className="cursor-pointer rounded-md"
            aria-label="View cart"
          >
            <Link href="/cart">
              <ShoppingCartIcon className="h-4 w-4" />
            </Link>
          </Button>
          {!isAuthenticated && (
            <Button
              asChild
              variant="neutral"
              className="cursor-pointer rounded-md px-5"
            >
              <Link href="/login">Sign-in</Link>
            </Button>
          )}
          {!isAuthenticated && (
            <Button
              asChild
              variant="default"
              className="cursor-pointer rounded-md bg-[#A8A6FF] px-5"
            >
              <Link href="/register">Sign-up</Link>
            </Button>
          )}
          {isAuthenticated && (
            <Button
              variant="neutral"
              className="cursor-pointer rounded-md px-5"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
