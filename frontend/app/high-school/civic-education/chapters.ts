// app/high-school/civic-education/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const CivicEducationchapters = Array.from({ length: 10 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Civic Education — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Civic-Education/Chapter ${chapter}.pdf`,
    };
});

export const CivicEducationbasePath = "/high-school/civic-education/reader"