"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { HistorySSS1chapters, HistorySSS1basePath } from "../../chapters";

const ReaderClient = dynamic(() => import("@/app/components/common/ReaderClient"), { ssr: false });

export default function ReaderPage() {
  const { chapter } = useParams(); // e.g., "1", "2", etc.
  const chapterNumber = Number(chapter);

  // Get the current chapter data
  const current = HistorySSS1chapters[chapterNumber - 1];
  if (!current) {
    return <div className="p-8 text-center text-gray-600">Invalid chapter</div>;
  }

  // Determine prev and next chapters (URLs)
  const prevChapter =
    chapterNumber > 1
      ? `${HistorySSS1basePath}/${chapterNumber - 1}`
      : null;
  const nextChapter =
    chapterNumber < HistorySSS1chapters.length
      ? `${HistorySSS1basePath}/${chapterNumber + 1}`
      : null;

  return (
    <ReaderClient
      file={current.file}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    />
  );
}
