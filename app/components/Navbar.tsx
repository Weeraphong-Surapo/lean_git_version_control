import Link from "next/link";

const links = [
  { href: "/", label: "หน้าแรก" },
  { href: "#features", label: "ฟีเจอร์" },
  { href: "#about", label: "เกี่ยวกับ" },
];

export default function Navbar() {
  return (
    <header className="shrink-0 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Lean Git
        </Link>
        <ul className="flex items-center gap-4 text-sm sm:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
