// app/high-school/physics/chapters.ts
import { HIGH_SCHOOL_BASE_URL } from "@/app/high-school/utils";
export const PhysicsSSS3chapters = Array.from({ length: 12 }, (_, i) => {
    const chapter = i + 1;
    return {
        title: `Physics for SSS 3 — Chapter ${chapter}`,
        file: `${HIGH_SCHOOL_BASE_URL}/Physics/SSS%203/Chapter%20${chapter}.pdf`,
    };
});

export const PhysicsSSS3basePath = "/high-school/physics/sss-3/reader"