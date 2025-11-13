// app/high-school/history/page.tsx
import BookList from "@/app/components/common/BookList";
import { HistorySSS3chapters, HistorySSS3basePath } from "./chapters";

export default function HistoryHighSchoolBooks() {
  return (
    <BookList
      subject="History"
      description="Dive into key chapters of history and discover the stories that shaped our world."
      chapters={HistorySSS3chapters}
      basePath={HistorySSS3basePath}
    />
  );
}
