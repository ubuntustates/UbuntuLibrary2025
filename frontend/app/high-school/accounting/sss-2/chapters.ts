// app/high-school/accounting/chapters.ts

import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const AccountingSSS2chapters = Array.from({ length: 25 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Accounting for SSS 2 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Accounting/SSS%202/Chapter%20${chapter}.pdf`,
    };
});

export const AccountingSSS2basePath = "/high-school/accounting/sss-2/reader"