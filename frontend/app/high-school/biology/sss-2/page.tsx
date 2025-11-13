// app/high-school/biology/page.tsx
import BookList from "@/app/components/common/BookList";
import { BiologySSS2chapters, BiologySSS2basePath } from "./chapters";

export default function BiologyHighSchoolBooks() {
  return (
    <BookList
      subject="Biology"
      description="Study living organisms, their structures, and the vital processes that sustain life on Earth."
      chapters={BiologySSS2chapters}
      basePath={BiologySSS2basePath}
    />
  );
}
