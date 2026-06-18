'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#0b0d12]/70 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-sm text-zinc-300">
          thijsvzwam<span className="text-cyan-400">.dev</span>
        </Link>
        <div className="flex gap-6">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-colors ${
                  active ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-cyan-400"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
