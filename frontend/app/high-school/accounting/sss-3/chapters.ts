// app/high-school/accounting/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const AccountingSSS3chapters = Array.from({ length: 9 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Accounting for SSS 3 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Accounting/SSS%203/Chapter%20${chapter}.pdf`,
    };
});

export const AccountingSSS3basePath = "/high-school/accounting/sss-3/reader"