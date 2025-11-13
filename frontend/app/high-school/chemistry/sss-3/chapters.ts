// app/high-school/chemistry/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const ChemistrySSS3chapters = Array.from({ length: 7 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Chemistry for SSS 3 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Chemistry/SSS%203/Chapter%20${chapter}.pdf`,
    };
});

export const ChemistrySSS3basePath = "/high-school/chemistry/sss-3/reader"