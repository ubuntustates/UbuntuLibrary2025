// app/high-school/Chemistry/page.tsx
import BookList from "@/app/components/common/BookList";
import { ChemistrySSS3chapters, ChemistrySSS3basePath } from "./chapters";

export default function ChemistryHighSchoolBooks() {
  return (
    <BookList
      subject="Chemistry"
      description="Explore the composition of matter, chemical reactions, and the principles that power our physical world."
      chapters={ChemistrySSS3chapters}
      basePath={ChemistrySSS3basePath}
    />
  );
}
