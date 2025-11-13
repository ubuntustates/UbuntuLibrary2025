// app/high-school/english-literature/page.tsx
import BookList from "@/app/components/common/BookList";
import { EnglishLiteratureSSS3chapters, EnglishLiteratureSSS3basePath } from "./chapters";

export default function EnglishLiteratureHighSchoolBooks() {
  return (
    <BookList
      subject="English Literature"
      description="Dive into timeless stories, poems, and plays that reveal the beauty and power of language through the ages."
      chapters={EnglishLiteratureSSS3chapters}
      basePath={EnglishLiteratureSSS3basePath}
    />
  );
}
