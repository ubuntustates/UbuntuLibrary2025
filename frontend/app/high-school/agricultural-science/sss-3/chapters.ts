// app/high-school/agricultural-science/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const AgriculturalScienceSSS3chapters = Array.from({ length: 11 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Agricultural Science for SSS 3 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Agricultural-Science/SSS%203/Chapter%20${chapter}.pdf`,
    };
});

export const AgriculturalScienceSSS3basePath = "/high-school/agricultural-science/sss-3/reader"