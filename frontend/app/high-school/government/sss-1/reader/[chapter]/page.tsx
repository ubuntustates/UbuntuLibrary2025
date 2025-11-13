"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { GovernmentSSS1chapters, GovernmentSSS1basePath } from "../../chapters";

const ReaderClient = dynamic(() => import("@/app/components/common/ReaderClient"), { ssr: false });

export default function ReaderPage() {
  const { chapter } = useParams(); // e.g., "1", "2", etc.
  const chapterNumber = Number(chapter);

  // Get the current chapter data
  const current = GovernmentSSS1chapters[chapterNumber - 1];
  if (!current) {
    return <div className="p-8 text-center text-gray-600">Invalid chapter</div>;
  }

  // Determine prev and next chapters (URLs)
  const prevChapter =
    chapterNumber > 1
      ? `${GovernmentSSS1basePath}/${chapterNumber - 1}`
      : null;
  const nextChapter =
    chapterNumber < GovernmentSSS1chapters.length
      ? `${GovernmentSSS1basePath}/${chapterNumber + 1}`
      : null;

  return (
    <ReaderClient
      file={current.file}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    />
  );
}
