// app/high-school/economics/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const EconomicsSSS3chapters = Array.from({ length: 19 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Economics for SSS 3 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Economics/SSS%203/Chapter%20${chapter}.pdf`,
    };
});

export const EconomicsSSS3basePath = "/high-school/economics/sss-3/reader"