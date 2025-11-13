// app/high-school/commerce/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const CommerceSSS1chapters = Array.from({ length: 24 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Commerce for SSS 1 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Commerce/SSS%201/Chapter%20${chapter}.pdf`,
    };
});

export const CommerceSSS1basePath = "/high-school/commerce/sss-1/reader"