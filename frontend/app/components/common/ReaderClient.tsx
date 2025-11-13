// app/components/common/ReaderClient.tsx
"use client";

import Link from "next/link";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Breadcrumb } from "./Breadcrumb";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ReaderClientProps {
  file: string;
  prevChapter?: string | null;
  nextChapter?: string | null;
}

export default function ReaderClient({ file, prevChapter, nextChapter }: ReaderClientProps) {
  if (!file) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-xl">No book selected</p>
      </div>
    );
  }

  const displayTitle = decodeURIComponent(file)
    .split("/")
    .pop()
    ?.replace(".pdf", "");

  return (
    <div className="relative w-full h-screen bg-gray-50 dark:bg-gray-900 flex flex-col md:-mt-28 -mt-16">
      {/* ===== Sticky Navbar ===== */}
      <header className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 sticky top-0 z-10 shadow-sm flex justify-between items-center">
        {/* Left Section: Breadcrumb */}
        <Breadcrumb />

        {/* Center Section: Book Title */}
        <h1 className="text-lg font-semibold truncate max-w-[40%] text-center">
          📖 {displayTitle}
        </h1>

        {/* Right Section: Chapter Nav */}
        <div className="flex flex-row gap-2 justify-end w-auto">
          {prevChapter && (
            <Link
              href={prevChapter}
              aria-label="Previous Chapter"
              className="flex items-center justify-center md:px-3 md:py-2 px-2 py-1 bg-gray-200 dark:bg-gray-700 
                        rounded transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <ArrowLeft className="md:w-5 md:h-5 w-4 h-4" />
            </Link>
          )}
          {nextChapter && (
            <Link
              href={nextChapter}
              aria-label="Next Chapter"
              className="flex items-center justify-center md:px-3 md:py-2 px-2 py-1 bg-gray-200 dark:bg-gray-700 
                        rounded transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <ArrowRight className="md:w-5 md:h-5 w-4 h-4" />
            </Link>
          )}
        </div>
      </header>

      {/* ===== PDF Viewer ===== */}
      <main className="flex-1 overflow-auto">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={file}
            renderLoader={() => (
              <div className="flex items-center justify-center h-full">
                <div className="w-12 h-12 rounded-full animate-spin border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent"></div>
              </div>
            )}
          />
        </Worker>
      </main>
    </div>
  );
}
