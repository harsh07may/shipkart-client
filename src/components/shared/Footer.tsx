import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="relative bg-black px-6 py-14 font-mono text-white md:px-20">
      <Image
        src="/footer-image.svg"
        width={120}
        height={120}
        alt="footer-image"
        className="absolute -top-14 right-5 md:right-20"
      />

      <div className="grid grid-cols-1 gap-8 font-mono text-xs md:grid-cols-3 md:text-xs">
        {/* Shop */}
        <div>
          <h3 className="mb-2">Shop</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/shop/ladies">• Ladies</Link>
            </li>
            <li>
              <Link href="/shop/men">• Men</Link>
            </li>
            <li>
              <Link href="/shop/kids">• Kids</Link>
            </li>
            <li>
              <Link href="/shop/home">• Home</Link>
            </li>
            <li>
              <Link href="/shop/sport">• Sport</Link>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="mb-2">Help</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/help/customer-service">• Customer Service</Link>
            </li>
            <li>
              <Link href="/help/find-store">• Find A Store</Link>
            </li>
            <li>
              <Link href="/help/legal-privacy">• Legal & Privacy</Link>
            </li>
            <li>
              <Link href="/help/contact">• Contact</Link>
            </li>
            <li>
              <Link href="/help/report-scam">• Report A Scam</Link>
            </li>
            <li>
              <Link href="/help/cookie-settings">• Cookie Settings</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="hidden flex-col justify-between md:flex md:text-right">
          <div>
            <p className="mb-2">
              Sign up now and be the first to know about exclusive offers,
              latest fashion news & style tips!
            </p>
            <a href="#" className="text-sm underline">
              Read more
            </a>
          </div>
        </div>

        {/* Corporate Info */}
        <div>
          <h3 className="mb-2">Corporate Info</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/corporate/career">• Career</Link>
            </li>
            <li>
              <Link href="/corporate/press">• Press</Link>
            </li>
            <li>
              <Link href="/corporate/investor-relations">
                • Investor Relations
              </Link>
            </li>
            <li>
              <Link href="/corporate/governance">• Corporate Governance</Link>
            </li>
          </ul>
        </div>

        <div className="mt-6 flex gap-6 text-2xl md:col-start-3">
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-blue-400"
          >
            <TwitterIcon />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-red-500"
          >
            <YoutubeIcon />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-pink-500"
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-blue-600"
          >
            <FacebookIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
