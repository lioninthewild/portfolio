export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <main className="max-w-[1440px] mx-auto p-6">{children}</main>
    </div>
  );
}
