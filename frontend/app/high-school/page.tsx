"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Clock, LineChart, Scale, Type, Sigma, Calculator, FlaskConical, 
  Sprout, Atom, Dna, Globe, Landmark, FileSpreadsheet, TrendingUp } from "lucide-react";

export default function HighSchool() {
  const subjects = [
    { name: "History", icon: <Clock className="w-6 h-6" />, href: "/high-school/history" },
    { name: "English Literature", icon: <BookOpen className="w-6 h-6" />, href: "/high-school/english-literature" },
    { name: "Economics", icon: <LineChart className="w-6 h-6" />, href: "/high-school/economics" },
    { name: "Civic Education", icon: <Scale className="w-6 h-6" />, href: "/high-school/civic-education" },
    { name: "English", icon: <Type className="w-6 h-6" />, href: "/high-school/english" },
    { name: "Further Mathematics", icon: <Sigma className="w-6 h-6" />, href: "/high-school/further-mathematics" },
    { name: "Mathematics", icon: <Calculator className="w-6 h-6" />, href: "/high-school/mathematics" },
    { name: "Chemistry", icon: <FlaskConical className="w-6 h-6" />, href: "/high-school/chemistry" },
    { name: "Agricultural Science", icon: <Sprout className="w-6 h-6" />, href: "/high-school/agricultural-science" },
    { name: "Physics", icon: <Atom className="w-6 h-6" />, href: "/high-school/physics" },
    { name: "Biology", icon: <Dna className="w-6 h-6" />, href: "/high-school/biology" },
    { name: "Geography", icon: <Globe className="w-6 h-6" />, href: "/high-school/geography" },
    { name: "Government", icon: <Landmark className="w-6 h-6" />, href: "/high-school/government" },
    { name: "Accounting", icon: <FileSpreadsheet className="w-6 h-6" />, href: "/high-school/accounting" },
    { name: "Commerce", icon: <TrendingUp className="w-6 h-6" />, href: "/high-school/commerce" },
  ];

  return (
    <div className="flex flex-col items-center ">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-2xl md:text-6xl font-bold md:mb-4 mb-1 tracking-tight">
          High School — <Link href="/" className="text-blue-600 dark:text-blue-400">Ubuntu Library</Link>
        </h1>
        <p className="text-sm md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
          Discover, read, and explore educational content designed to help you grow your knowledge — anytime, anywhere.
        </p>
      </motion.div>

      {/* Navigation Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-240"
      >
        {subjects.map((subject, index) => (
          <Link
            key={index}
            href={subject.href}
            className="group p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                {subject.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {subject.name}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Explore {subject.name} materials
                </p>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
