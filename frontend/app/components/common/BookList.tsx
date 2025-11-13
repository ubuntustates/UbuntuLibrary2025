// app/components/common/BookList.tsx
"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export interface Chapter {
  title: string;
  file: string;
}

interface BookListProps {
  subject: string;
  description?: string;
  chapters: Chapter[];
  basePath: string; // path prefix for the reader page
}

export default function BookList({ subject, description, chapters, basePath }: BookListProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-2xl md:text-5xl font-bold md:mb-4 mb-1">
          <span>Explore </span>
          <Link href={basePath.split('/').slice(0, -2).join('/')} className="text-blue-600 dark:text-blue-400">{subject}</Link>
          <span> Resources</span>
        </h1>
        {description && (
          <p className="text-sm md:text-xl text-zinc-600 dark:text-zinc-400">{description}</p>
        )}
      </motion.div>

      {/* Book List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {chapters.map((book, index) => (
          <motion.div
            key={book.file}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
                <Link
                  href={`${basePath}/${index + 1}`}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read Now →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
