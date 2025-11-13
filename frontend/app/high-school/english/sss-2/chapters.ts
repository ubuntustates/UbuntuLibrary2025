// app/high-school/english/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const EnglishSSS2chapters = Array.from({ length: 27 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `English for SSS 2 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/English/SSS%202/Chapter%20${chapter}.pdf`,
    };
});

export const EnglishSSS2basePath = "/high-school/english/sss-2/reader"