// app/high-school/english/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const EnglishSSS3chapters = Array.from({ length: 23 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `English for SSS 3 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/English/SSS%203/Chapter%20${chapter}.pdf`,
    };
});

export const EnglishSSS3basePath = "/high-school/english/sss-3/reader"