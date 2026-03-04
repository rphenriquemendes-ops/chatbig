import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { siteConfig } from '@/data/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' }
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-foreground/10 bg-background/90 backdrop-blur">
      <nav className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          {siteConfig.photographerName}
        </Link>
        <div className="flex items-center gap-3">
          <ul className="flex gap-3 text-xs sm:text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:opacity-70">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
