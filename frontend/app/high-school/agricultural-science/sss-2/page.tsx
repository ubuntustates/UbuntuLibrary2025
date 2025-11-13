// app/high-school/AgriculturalScience/page.tsx
import BookList from "@/app/components/common/BookList";
import { AgriculturalScienceSSS2chapters, AgriculturalScienceSSS2basePath } from "./chapters";

export default function AgriculturalScienceHighSchoolBooks() {
  return (
    <BookList
      subject="Agricultural Science"
      description="Discover the science behind farming, food production, and sustainable use of natural resources."
      chapters={AgriculturalScienceSSS2chapters}
      basePath={AgriculturalScienceSSS2basePath}
    />
  );
}
