// app/high-school/economics/page.tsx
import BookList from "@/app/components/common/BookList";
import { EconomicsSSS2chapters, EconomicsSSS2basePath } from "./chapters";

export default function EconomicsHighSchoolBooks() {
  return (
    <BookList
      subject="Economics"
      description="Understand how money, markets, and choices shape societies and influence the world around us."
      chapters={EconomicsSSS2chapters}
      basePath={EconomicsSSS2basePath}
    />
  );
}
