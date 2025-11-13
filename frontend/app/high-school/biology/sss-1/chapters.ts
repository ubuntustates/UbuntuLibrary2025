// app/high-school/biology/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const BiologySSS1chapters = Array.from({ length: 10 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Biology for SSS 1 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Biology/SSS%201/Chapter%20${chapter}.pdf`,
    };
});

export const BiologySSS1basePath = "/high-school/biology/sss-1/reader"