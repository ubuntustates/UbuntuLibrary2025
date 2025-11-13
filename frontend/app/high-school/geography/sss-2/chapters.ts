// app/high-school/geography/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const GeographySSS2chapters = Array.from({ length: 25 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Geography for SSS 2 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Geography/SSS%202/Chapter%20${chapter}.pdf`,
    };
});

export const GeographySSS2basePath = "/high-school/geography/sss-2/reader"