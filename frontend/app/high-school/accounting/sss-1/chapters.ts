// app/high-school/accounting/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const AccountingSSS1chapters = Array.from({ length: 14 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Accounting for SSS 1 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Accounting/SSS%201/Chapter%20${chapter}.pdf`,
    };
});

export const AccountingSSS1basePath = "/high-school/accounting/sss-1/reader"