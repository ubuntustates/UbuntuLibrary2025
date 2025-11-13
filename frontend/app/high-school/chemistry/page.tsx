"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function ChemistryHighSchool() {
  const subject = "Chemistry"; // dynamically used in hero text
  const levels = [
    { name: "SSS 1", icon: <BookOpen className="w-6 h-6" />, href: "/high-school/chemistry/sss-1" },
    { name: "SSS 2", icon: <BookOpen className="w-6 h-6" />, href: "/high-school/chemistry/sss-2" },
    { name: "SSS 3", icon: <BookOpen className="w-6 h-6" />, href: "/high-school/chemistry/sss-3" },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-2xl md:text-6xl font-bold md:mb-4 mb-1 tracking-tight">
          {subject} — <Link href="/high-school" className="text-blue-600 dark:text-blue-400">High School</Link>
        </h1>
        <p className="text-sm md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
          Choose your class level to access {subject} materials designed to help you grow your knowledge — anytime, anywhere.
        </p>
      </motion.div>

      {/* Levels Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl"
      >
        {levels.map((level, index) => (
          <Link
            key={index}
            href={level.href}
            className="group p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                {level.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {level.name}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Explore {level.name} {subject} materials
                </p>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
