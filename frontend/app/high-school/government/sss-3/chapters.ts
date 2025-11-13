// app/high-school/government/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const GovernmentSSS3chapters = Array.from({ length: 9 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Government for SSS 3 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Government/SSS%203/Chapter%20${chapter}.pdf`,
    };
});

export const GovernmentSSS3basePath = "/high-school/government/sss-3/reader"