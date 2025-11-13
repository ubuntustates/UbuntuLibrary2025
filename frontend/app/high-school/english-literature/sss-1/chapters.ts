// app/high-school/english-literature/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const EnglishLiteratureSSS1chapters = Array.from({ length: 9 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `English Literature for SSS 1 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/English-Literature/SSS%201/Chapter%20${chapter}.pdf`,
    };
});

export const EnglishLiteratureSSS1basePath = "/high-school/english-literature/sss-1/reader"