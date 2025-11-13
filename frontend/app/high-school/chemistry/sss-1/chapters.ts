// app/high-school/chemistry/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const ChemistrySSS1chapters = Array.from({ length: 10 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Chemistry for SSS 1 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Chemistry/SSS%201/Chapter%20${chapter}.pdf`,
    };
});

export const ChemistrySSS1basePath = "/high-school/chemistry/sss-1/reader"