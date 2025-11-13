// app/high-school/history/page.tsx
import BookList from "@/app/components/common/BookList";
import { MathematicsSSS2chapters, MathematicsSSS2basePath } from "./chapters";

export default function MathematicsHighSchoolBooks() {
  return (
    <BookList
      subject="Mathematics"
      description="Strengthen your problem-solving skills and explore the logic that shapes numbers and patterns."
      chapters={MathematicsSSS2chapters}
      basePath={MathematicsSSS2basePath}
    />
  );
}
