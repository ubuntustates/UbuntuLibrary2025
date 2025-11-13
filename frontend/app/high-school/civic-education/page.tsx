// app/high-school/history/page.tsx
import BookList from "@/app/components/common/BookList";
import { CivicEducationchapters, CivicEducationbasePath } from "./chapters";

export default function CivicEducationHighSchoolBooks() {
  return (
    <BookList
      subject="Civic Education"
      description="Understand the rights, duties, and values that build responsible citizens and a stronger society."
      chapters={CivicEducationchapters}
      basePath={CivicEducationbasePath}
    />
  );
}
