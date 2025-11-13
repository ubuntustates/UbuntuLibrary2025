// app/high-school/economics/page.tsx
import BookList from "@/app/components/common/BookList";
import { EconomicsSSS1chapters, EconomicsSSS1basePath } from "./chapters";

export default function EconomicsHighSchoolBooks() {
  return (
    <BookList
      subject="Economics"
      description="Understand how money, markets, and choices shape societies and influence the world around us."
      chapters={EconomicsSSS1chapters}
      basePath={EconomicsSSS1basePath}
    />
  );
}
