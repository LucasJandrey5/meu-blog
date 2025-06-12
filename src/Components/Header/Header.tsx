"use client";

import Link from "next/link";

export default function Header() {
  const navsItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Admin",
      href: "/admin",
    },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div>
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Lucas Jandrey
            </Link>
          </div>
          <nav className="flex items-center space-x-6">
            {navsItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="text-gray-600 hover:text-gray-800">
      {children}
    </Link>
  );
};
