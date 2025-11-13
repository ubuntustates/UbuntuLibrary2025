// app/high-school/chemistry/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const ChemistrySSS2chapters = Array.from({ length: 14 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Chemistry for SSS 2 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Chemistry/SSS%202/Chapter%20${chapter}.pdf`,
    };
});

export const ChemistrySSS2basePath = "/high-school/chemistry/sss-2/reader"