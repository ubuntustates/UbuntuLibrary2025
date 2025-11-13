// app/high-school/physics/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const PhysicsSSS1chapters = Array.from({ length: 14 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Physics for SSS 1 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Physics/SSS%201/Chapter%20${chapter}.pdf`,
    };
});

export const PhysicsSSS1basePath = "/high-school/physics/sss-1/reader"