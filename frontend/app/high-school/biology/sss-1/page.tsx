// app/high-school/biology/page.tsx
import BookList from "@/app/components/common/BookList";
import { BiologySSS1chapters, BiologySSS1basePath } from "./chapters";

export default function BiologyHighSchoolBooks() {
  return (
    <BookList
      subject="Biology"
      description="Study living organisms, their structures, and the vital processes that sustain life on Earth."
      chapters={BiologySSS1chapters}
      basePath={BiologySSS1basePath}
    />
  );
}
