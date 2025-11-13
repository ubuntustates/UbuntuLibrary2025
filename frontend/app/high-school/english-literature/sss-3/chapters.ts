// app/high-school/english-literature/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const EnglishLiteratureSSS3chapters = Array.from({ length: 8 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `English Literature for SSS 3 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/English-Literature/SSS%203/Chapter%20${chapter}.pdf`,
    };
});

export const EnglishLiteratureSSS3basePath = "/high-school/english-literature/sss-3/reader"