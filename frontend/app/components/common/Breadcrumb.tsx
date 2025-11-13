"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

export function Breadcrumb() {
  const pathname = usePathname();

  // Split the pathname into parts
  let parts = pathname.split("/").filter((part) => part.trim() !== "");

  // Exclude "reader" and everything after it
  const readerIndex = parts.indexOf("reader");
  if (readerIndex !== -1) {
    parts = parts.slice(0, readerIndex);
  }

  // Build cumulative hrefs
  const crumbs = parts.map((part, index) => {
    const href = "/" + parts.slice(0, index + 1).join("/");
    return { label: formatLabel(part), href };
  });

  // Keep only the last 2 for mobile
  const mobileCrumbs = crumbs.slice(-1);

  return (
    <>
      {/* ===== Desktop Breadcrumb (full) ===== */}
      <div className="hidden md:flex items-center gap-2 text-sm">
        {/* Home link */}
        <Link
          href="/"
          className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
        >
          <Home className="w-4 h-4" />
          Ubuntu Library
        </Link>

        {crumbs.map((crumb) => (
          <div key={crumb.href} className="flex items-center gap-2">
            <span className="text-gray-400">/</span>
            <Link
              href={crumb.href}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors capitalize"
            >
              {crumb.label}
            </Link>
          </div>
        ))}
      </div>

      {/* ===== Mobile Breadcrumb (last 2 only, no Home) ===== */}
      <div className="flex md:hidden items-center gap-2 text-sm">
        {mobileCrumbs.map((crumb, index) => (
          <div key={crumb.href} className="flex items-center gap-2">
            {index > 0 && <span className="text-gray-400">/</span>}
            <Link
              href={crumb.href}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors capitalize"
            >
              {crumb.label}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

// Utility: format each segment label nicely
function formatLabel(part: string) {
  return part
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}
