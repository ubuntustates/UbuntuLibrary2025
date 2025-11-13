"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "High School", href: "/high-school" },
    { name: "Philosophy", href: "/philosophy" },
    { name: "Politics", href: "/politics" },
    { name: "Novels", href: "/novels" },
    { name: "Languages", href: "/languages" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div>
      {pathname && !pathname.includes("/reader") && (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:py-1">
            {/* Brand */}
            <Link
              href="/"
              className="text-xl font-bold text-blue-600 dark:text-blue-400 py-2"
            >
              {/* Ubuntu Library */}
              <div className="relative w-8 h-8 md:w-14 md:h-14">
                <Image
                  src="/images/roundLogo.png"
                  alt="Ubuntu Library"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-6 text-sm">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive(link.href)
                      ? "font-semibold text-blue-600 dark:text-blue-400"
                      : "text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 shadow-sm">
              <div className="flex flex-col items-center gap-2 px-4 py-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-2 px-3 rounded transition hover:bg-gray-100 dark:hover:bg-zinc-800 ${
                      isActive(link.href)
                        ? "font-semibold text-blue-600 dark:text-blue-400"
                        : "text-zinc-700 dark:text-zinc-300"
                    }`}
                    onClick={() => setOpen(false)} // close menu on click
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      )}
    </div>
  );
}
