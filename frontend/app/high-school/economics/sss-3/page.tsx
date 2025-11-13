// app/high-school/economics/page.tsx
import BookList from "@/app/components/common/BookList";
import { EconomicsSSS3chapters, EconomicsSSS3basePath } from "./chapters";

export default function EconomicsHighSchoolBooks() {
  return (
    <BookList
      subject="Economics"
      description="Understand how money, markets, and choices shape societies and influence the world around us."
      chapters={EconomicsSSS3chapters}
      basePath={EconomicsSSS3basePath}
    />
  );
}
