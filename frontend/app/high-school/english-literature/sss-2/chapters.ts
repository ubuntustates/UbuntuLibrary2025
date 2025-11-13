// app/high-school/english-literature/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const EnglishLiteratureSSS2chapters = Array.from({ length: 9 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `English Literature for SSS 2 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/English-Literature/SSS%202/Chapter%20${chapter}.pdf`,
    };
});

export const EnglishLiteratureSSS2basePath = "/high-school/english-literature/sss-2/reader"