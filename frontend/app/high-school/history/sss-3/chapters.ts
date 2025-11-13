// app/high-school/history/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const HistorySSS3chapters = Array.from({ length: 20 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `History for SSS 3 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/History/SSS%203/Chapter%20${chapter}.pdf`,
    };
});

export const HistorySSS3basePath = "/high-school/history/sss-3/reader"