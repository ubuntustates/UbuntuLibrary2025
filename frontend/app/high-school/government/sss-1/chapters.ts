// app/high-school/government/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const GovernmentSSS1chapters = Array.from({ length: 10 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Government for SSS 1 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Government/SSS%201/Chapter%20${chapter}.pdf`,
    };
});

export const GovernmentSSS1basePath = "/high-school/government/sss-1/reader"