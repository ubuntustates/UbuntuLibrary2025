// app/high-school/history/page.tsx
import BookList from "@/app/components/common/BookList";
import { FurtherMathematicschapters, FurtherMathematicsbasePath } from "./chapters";

export default function FurtherMathematicsHighSchoolBooks() {
  return (
    <BookList
      subject="Further Mathematics"
      description="Dive deeper into advanced mathematical concepts and sharpen your analytical reasoning."
      chapters={FurtherMathematicschapters}
      basePath={FurtherMathematicsbasePath}
    />
  );
}
