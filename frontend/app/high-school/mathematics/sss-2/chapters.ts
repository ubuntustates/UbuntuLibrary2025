// app/high-school/mathematics/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const MathematicsSSS2chapters = Array.from({ length: 19 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Mathematics for SSS 2 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Mathematics/SSS%202/Chapter%20${chapter}.pdf`,
    };
});

export const MathematicsSSS2basePath = "/high-school/mathematics/sss-2/reader"