// app/high-school/geography/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const GeographySSS3chapters = Array.from({ length: 14 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Geography for SSS 3 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Geography/SSS%203/Chapter%20${chapter}.pdf`,
    };
});

export const GeographySSS3basePath = "/high-school/geography/sss-3/reader"