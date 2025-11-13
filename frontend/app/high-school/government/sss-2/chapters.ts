// app/high-school/government/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const GovernmentSSS2chapters = Array.from({ length: 12 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Government for SSS 2 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Government/SSS%202/Chapter%20${chapter}.pdf`,
    };
});

export const GovernmentSSS2basePath = "/high-school/government/sss-2/reader"