// app/high-school/history/page.tsx
import BookList from "@/app/components/common/BookList";
import { GeographySSS1chapters, GeographySSS1basePath } from "./chapters";

export default function GeographyHighSchoolBooks() {
  return (
    <BookList
      subject="Geography"
      description="Explore the Earth’s landscapes, climates, and human interactions that shape our world."
      chapters={GeographySSS1chapters}
      basePath={GeographySSS1basePath}
    />
  );
}
