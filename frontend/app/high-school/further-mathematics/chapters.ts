// app/high-school/further-mathematics/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const FurtherMathematicschapters = Array.from({ length: 12 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Further Mathematics — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Further-Mathematics/Chapter ${chapter}.pdf`,
    };
});

export const FurtherMathematicsbasePath = "/high-school/further-mathematics/reader"