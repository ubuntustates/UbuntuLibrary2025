// app/high-school/mathematics/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const MathematicsSSS3chapters = Array.from({ length: 13 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Mathematics for SSS 3 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Mathematics/SSS%203/Chapter%20${chapter}.pdf`,
    };
});

export const MathematicsSSS3basePath = "/high-school/mathematics/sss-3/reader"