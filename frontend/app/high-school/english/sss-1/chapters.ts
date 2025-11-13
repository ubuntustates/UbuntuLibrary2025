// app/high-school/english/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const EnglishSSS1chapters = Array.from({ length: 30 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `English for SSS 1 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/English/SSS%201/Chapter%20${chapter}.pdf`,
    };
});

export const EnglishSSS1basePath = "/high-school/english/sss-1/reader"