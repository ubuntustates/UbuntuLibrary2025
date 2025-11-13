// app/high-school/Commerce/page.tsx
import BookList from "@/app/components/common/BookList";
import { CommerceSSS1chapters, CommerceSSS1basePath } from "./chapters";

export default function CommerceHighSchoolBooks() {
  return (
    <BookList
      subject="Commerce"
      description="Understand trade, business principles, and the flow of goods and services in the modern economy."
      chapters={CommerceSSS1chapters}
      basePath={CommerceSSS1basePath}
    />
  );
}
