// app/high-school/biology/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const BiologySSS2chapters = Array.from({ length: 13 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Biology for SSS 2 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Biology/SSS%202/Chapter%20${chapter}.pdf`,
    };
});

export const BiologySSS2basePath = "/high-school/biology/sss-2/reader"