"use client";

import Link from "next/link";
import { Book, Globe, Compass, PenTool, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const categories = [
    { name: "High School Books", icon: <Book className="w-6 h-6" />, href: "/high-school" },
    { name: "Philosophy", icon: <Compass className="w-6 h-6" />, href: "/philosophy" },
    { name: "Politics", icon: <Globe className="w-6 h-6" />, href: "/politics" },
    { name: "African Novels", icon: <BookOpen className="w-6 h-6" />, href: "/novels" },
    { name: "Languages", icon: <PenTool className="w-6 h-6" />, href: "/languages" },
  ];

  return (
    <div className="flex flex-col items-center justify-center  text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-2xl md:text-6xl font-bold md:mb-4 mb-1 tracking-tight">
          Welcome to <Link href="/" className="text-blue-600 dark:text-blue-400">Ubuntu Library</Link>
        </h1>
        <p className="text-sm md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
          Explore African heritage, education, and world knowledge — all in one place.
        </p>
      </motion.div>

    

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="group p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                {category.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {category.name}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Explore {category.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
