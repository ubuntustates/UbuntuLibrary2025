// app/high-school/government/page.tsx
import BookList from "@/app/components/common/BookList";
import { GovernmentSSS2chapters, GovernmentSSS2basePath } from "./chapters";

export default function GovernmentHighSchoolBooks() {
  return (
    <BookList
      subject="Government"
      description="Learn about political systems, leadership, and the structures that guide decision-making in society."
      chapters={GovernmentSSS2chapters}
      basePath={GovernmentSSS2basePath}
    />
  );
}
