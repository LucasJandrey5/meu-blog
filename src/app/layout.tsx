"use client";

import { AuthProvider } from "@/Contexts/AuthContext";
import "./globals.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html>
        <body className="bg-gray-50">
          <div>{children}</div>
        </body>
      </html>
    </AuthProvider>
  );
}
