// app/high-school/physics/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const PhysicsSSS2chapters = Array.from({ length: 16 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Physics for SSS 2 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Physics/SSS%202/Chapter%20${chapter}.pdf`,
    };
});

export const PhysicsSSS2basePath = "/high-school/physics/sss-2/reader"