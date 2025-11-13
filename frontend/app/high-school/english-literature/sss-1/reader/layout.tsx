// app/high-school/english-literature/reader/layout.tsx

export default function ReaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen -mx-6">
      {children} {/* no padding */}
    </div>
  );
}
