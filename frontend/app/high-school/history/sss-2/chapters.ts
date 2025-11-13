// app/high-school/history/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const HistorySSS2chapters = Array.from({ length: 16 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `History for SSS 2 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/History/SSS%202/Chapter%20${chapter}.pdf`,
    };
});

export const HistorySSS2basePath = "/high-school/history/sss-2/reader"