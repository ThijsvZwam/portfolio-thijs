'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="relative flex min-h-screen items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="max-w-2xl text-center"
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05, duration: 0.5 }}
                    className="font-mono text-xs text-cyan-400"
                >
                    // software developer
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="mt-3 text-5xl font-bold tracking-tight"
                >
                    Hi, I&apos;m Thijs
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="mt-4 text-lg text-zinc-400"
                >
                    I build games, tools, and web apps. From shaders and modding tools
                    to full-stack products.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-8 flex justify-center gap-4"
                >
                    <Link
                        href="/projects"
                        className="rounded-full bg-white px-5 py-2 font-medium text-black transition hover:bg-zinc-200"
                    >
                        View Projects
                    </Link>
                    <a
                        href="/contact"
                        className="rounded-full border border-white/15 px-5 py-2 transition hover:border-white/40"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>
        </main>
    );
}