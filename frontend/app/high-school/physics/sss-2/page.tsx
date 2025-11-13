// app/high-school/Physics/page.tsx
import BookList from "@/app/components/common/BookList";
import { PhysicsSSS2chapters, PhysicsSSS2basePath } from "./chapters";

export default function PhysicsHighSchoolBooks() {
  return (
    <BookList
      subject="Physics"
      description="Uncover the laws of motion, energy, and forces that explain how the universe works."
      chapters={PhysicsSSS2chapters}
      basePath={PhysicsSSS2basePath}
    />
  );
}
