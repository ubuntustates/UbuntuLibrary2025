// app/high-school/history/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const HistorySSS1chapters = Array.from({ length: 15 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `History for SSS 1 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/History/SSS%201/Chapter%20${chapter}.pdf`,
    };
});

export const HistorySSS1basePath = "/high-school/history/sss-1/reader"