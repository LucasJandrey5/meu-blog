import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Nome na esquerda */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 hover:text-gray-600"
        >
          Lucas Jandrey <span className="text-gray-500">👋</span>
        </Link>

        {/* Navegação na direita */}
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink href="/sobre">Sobre</NavLink>
            </li>
            <li>
              <NavLink href="/projetos">Projetos</NavLink>
            </li>
          </ul>
        </nav>
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
