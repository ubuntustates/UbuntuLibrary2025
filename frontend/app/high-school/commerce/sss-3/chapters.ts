// app/high-school/commerce/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const CommerceSSS3chapters = Array.from({ length: 16 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Commerce for SSS 3 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Commerce/SSS%203/Chapter%20${chapter}.pdf`,
    };
});

export const CommerceSSS3basePath = "/high-school/commerce/sss-3/reader"