// app/high-school/Chemistry/page.tsx
import BookList from "@/app/components/common/BookList";
import { ChemistrySSS1chapters, ChemistrySSS1basePath } from "./chapters";

export default function ChemistryHighSchoolBooks() {
  return (
    <BookList
      subject="Chemistry"
      description="Explore the composition of matter, chemical reactions, and the principles that power our physical world."
      chapters={ChemistrySSS1chapters}
      basePath={ChemistrySSS1basePath}
    />
  );
}
