// app/high-school/history/page.tsx
import BookList from "@/app/components/common/BookList";
import { GeographySSS2chapters, GeographySSS2basePath } from "./chapters";

export default function GeographyHighSchoolBooks() {
  return (
    <BookList
      subject="Geography"
      description="Explore the Earth’s landscapes, climates, and human interactions that shape our world."
      chapters={GeographySSS2chapters}
      basePath={GeographySSS2basePath}
    />
  );
}
