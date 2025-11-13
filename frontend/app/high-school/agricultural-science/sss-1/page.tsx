// app/high-school/AgriculturalScience/page.tsx
import BookList from "@/app/components/common/BookList";
import { AgriculturalScienceSSS1chapters, AgriculturalScienceSSS1basePath } from "./chapters";

export default function AgriculturalScienceHighSchoolBooks() {
  return (
    <BookList
      subject="Agricultural Science"
      description="Discover the science behind farming, food production, and sustainable use of natural resources."
      chapters={AgriculturalScienceSSS1chapters}
      basePath={AgriculturalScienceSSS1basePath}
    />
  );
}
