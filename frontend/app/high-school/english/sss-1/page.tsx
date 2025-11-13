// app/high-school/history/page.tsx
import BookList from "@/app/components/common/BookList";
import { EnglishSSS1chapters, EnglishSSS1basePath } from "./chapters";

export default function EnglishHighSchoolBooks() {
  return (
    <BookList
      subject="English"
      description="Build strong communication skills through reading, writing, and the power of language."
      chapters={EnglishSSS1chapters}
      basePath={EnglishSSS1basePath}
    />
  );
}
