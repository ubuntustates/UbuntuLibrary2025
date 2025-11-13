// app/high-school/agricultural-science/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const AgriculturalScienceSSS1chapters = Array.from({ length: 17 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Agricultural Science for SSS 1 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Agricultural-Science/SSS%201/Chapter%20${chapter}.pdf`,
    };
});

export const AgriculturalScienceSSS1basePath = "/high-school/agricultural-science/sss-1/reader"