import AdminNavigation from "@/Components/AdminNavigation/AdminNavigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AdminNavigation />
      {children}
    </div>
  );
}
