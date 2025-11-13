// app/high-school/history/page.tsx
import BookList from "@/app/components/common/BookList";
import { EnglishSSS3chapters, EnglishSSS3basePath } from "./chapters";

export default function EnglishHighSchoolBooks() {
  return (
    <BookList
      subject="English"
      description="Build strong communication skills through reading, writing, and the power of language."
      chapters={EnglishSSS3chapters}
      basePath={EnglishSSS3basePath}
    />
  );
}
