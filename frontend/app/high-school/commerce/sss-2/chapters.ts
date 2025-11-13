// app/high-school/commerce/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const CommerceSSS2chapters = Array.from({ length: 22 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Commerce for SSS 2 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Commerce/SSS%202/Chapter%20${chapter}.pdf`,
    };
});

export const CommerceSSS2basePath = "/high-school/commerce/sss-2/reader"