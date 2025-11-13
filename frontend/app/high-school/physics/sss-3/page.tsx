// app/high-school/Physics/page.tsx
import BookList from "@/app/components/common/BookList";
import { PhysicsSSS3chapters, PhysicsSSS3basePath } from "./chapters";

export default function PhysicsHighSchoolBooks() {
  return (
    <BookList
      subject="Physics"
      description="Uncover the laws of motion, energy, and forces that explain how the universe works."
      chapters={PhysicsSSS3chapters}
      basePath={PhysicsSSS3basePath}
    />
  );
}
