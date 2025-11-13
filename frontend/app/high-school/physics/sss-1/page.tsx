// app/high-school/Physics/page.tsx
import BookList from "@/app/components/common/BookList";
import { PhysicsSSS1chapters, PhysicsSSS1basePath } from "./chapters";

export default function PhysicsHighSchoolBooks() {
  return (
    <BookList
      subject="Physics"
      description="Uncover the laws of motion, energy, and forces that explain how the universe works."
      chapters={PhysicsSSS1chapters}
      basePath={PhysicsSSS1basePath}
    />
  );
}
