// app/high-school/accounting/page.tsx
import BookList from "@/app/components/common/BookList";
import { AccountingSSS1chapters, AccountingSSS1basePath } from "./chapters";

export default function AccountingHighSchoolBooks() {
  return (
    <BookList
      subject="Accounting"
      description="Master the principles of recording, analyzing, and interpreting financial information for sound decision-making."
      chapters={AccountingSSS1chapters}
      basePath={AccountingSSS1basePath}
    />
  );
}
