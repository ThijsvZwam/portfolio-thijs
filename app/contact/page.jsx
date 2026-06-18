'use client';

import { motion } from 'motion/react';

function XIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
        </svg>
    );
}

function GitHubIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3 6 21M16 3l-2 18M4 8h16M3 16h16" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function YouTubeIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="6" width="18" height="12" rx="3" />
            <path d="M11 9.5v5l4-2.5-4-2.5Z" fill="currentColor" stroke="none" />
        </svg>
    );
}

function DiscordIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="6" width="16" height="12" rx="6" />
            <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
            <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

const socials = [
    { label: 'Twitter / X', sub: '@ThijsvZwam', href: 'https://twitter.com/thijsvzwam', icon: XIcon },
    { label: 'GitHub', sub: 'ThijsvZwam', href: 'https://github.com/thijsvzwam', icon: GitHubIcon },
    { label: 'YouTube', sub: '@ThijsGamingYT', href: 'https://youtube.com/@thijsgamingyt', icon: YouTubeIcon },
    { label: 'Discord', sub: 'TVMG server', href: 'https://discord.com/invite/xZmSt8SG47', icon: DiscordIcon },
    { label: 'Email', sub: 'you@example.com', href: 'mailto:dev@morsenity.com', icon: MailIcon },
];

export default function ContactPage() {
    return (
        <main className="relative flex min-h-screen items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full max-w-md text-center"
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05, duration: 0.5 }}
                    className="font-mono text-xs text-cyan-400"
                >
                    // contact
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="mt-3 text-5xl font-bold tracking-tight"
                >
                    Let&apos;s talk
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="mt-4 text-lg text-zinc-400"
                >
                    The fastest way to reach me is below — happy to talk projects,
                    collabs, or just Beat Saber modding.
                </motion.p>

                <div className="mt-10 flex flex-col gap-3">
                    {socials.map((social, i) => {
                        const Icon = social.icon;
                        return (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                                whileHover={{ scale: 1.02 }}
                                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-white/25"
                            >
                <span className="flex items-center gap-3">
                  <Icon />
                  <span className="text-left">
                    <span className="block text-sm font-medium text-white">
                      {social.label}
                    </span>
                    <span className="block text-xs text-zinc-500">{social.sub}</span>
                  </span>
                </span>
                                <span className="text-zinc-500 transition group-hover:text-cyan-400">
                  <ArrowIcon />
                </span>
                            </motion.a>
                        );
                    })}
                </div>
            </motion.div>
        </main>
    );
}
