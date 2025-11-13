// app/high-school/mathematics/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const MathematicsSSS1chapters = Array.from({ length: 19 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Mathematics for SSS 1 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Mathematics/SSS%201/Chapter%20${chapter}.pdf`,
    };
});

export const MathematicsSSS1basePath = "/high-school/mathematics/sss-1/reader"