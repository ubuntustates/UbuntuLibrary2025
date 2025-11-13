// app/high-school/government/page.tsx
import BookList from "@/app/components/common/BookList";
import { GovernmentSSS3chapters, GovernmentSSS3basePath } from "./chapters";

export default function GovernmentHighSchoolBooks() {
  return (
    <BookList
      subject="Government"
      description="Learn about political systems, leadership, and the structures that guide decision-making in society."
      chapters={GovernmentSSS3chapters}
      basePath={GovernmentSSS3basePath}
    />
  );
}
