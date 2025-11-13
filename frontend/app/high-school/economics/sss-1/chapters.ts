// app/high-school/economics/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const EconomicsSSS1chapters = Array.from({ length: 17 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Economics for SSS 1 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Economics/SSS%201/Chapter%20${chapter}.pdf`,
    };
});

export const EconomicsSSS1basePath = "/high-school/economics/sss-1/reader"