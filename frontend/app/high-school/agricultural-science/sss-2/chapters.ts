// app/high-school/agricultural-science/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const AgriculturalScienceSSS2chapters = Array.from({ length: 21 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Agricultural Science for SSS 2 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Agricultural-Science/SSS%202/Chapter%20${chapter}.pdf`,
    };
});

export const AgriculturalScienceSSS2basePath = "/high-school/agricultural-science/sss-2/reader"