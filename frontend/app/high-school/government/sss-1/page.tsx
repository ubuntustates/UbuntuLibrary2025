// app/high-school/government/page.tsx
import BookList from "@/app/components/common/BookList";
import { GovernmentSSS1chapters, GovernmentSSS1basePath } from "./chapters";

export default function GovernmentHighSchoolBooks() {
  return (
    <BookList
      subject="Government"
      description="Learn about political systems, leadership, and the structures that guide decision-making in society."
      chapters={GovernmentSSS1chapters}
      basePath={GovernmentSSS1basePath}
    />
  );
}
