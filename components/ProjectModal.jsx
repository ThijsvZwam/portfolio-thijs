'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

function CloseIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
        </svg>
    );
}

function ChevronLeft() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ChevronRight() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ExternalLinkIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function ProjectModal({ project, onClose }) {
    const { title, longDescription, description, tags = [], links = [] } = project;
    const gallery = project.images?.length ? project.images : [project.image].filter(Boolean);
    const [activeImage, setActiveImage] = useState(0);

    function showPrev(e) {
        e.stopPropagation();
        setActiveImage((i) => (i - 1 + gallery.length) % gallery.length);
    }

    function showNext(e) {
        e.stopPropagation();
        setActiveImage((i) => (i + 1) % gallery.length);
    }

    const paragraphs = (longDescription ?? description ?? '').split('\n').filter(Boolean);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />

            <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0e1117]"
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-zinc-300 hover:text-white"
                    aria-label="Close"
                >
                    <CloseIcon />
                </button>

                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                    {gallery[activeImage] ? (
                        <Image
                            src={gallery[activeImage]}
                            alt={`${title} screenshot ${activeImage + 1}`}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center font-mono text-xs text-zinc-600">
                            no image yet
                        </div>
                    )}

                    {gallery.length > 1 && (
                        <>
                            <button
                                onClick={showPrev}
                                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                                aria-label="Previous image"
                            >
                                <ChevronLeft />
                            </button>
                            <button
                                onClick={showNext}
                                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                                aria-label="Next image"
                            >
                                <ChevronRight />
                            </button>
                            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                                {gallery.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveImage(i);
                                        }}
                                        className={`h-1.5 w-1.5 rounded-full transition ${
                                            i === activeImage ? 'bg-white' : 'bg-white/30'
                                        }`}
                                        aria-label={`Go to image ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-white">{title}</h2>

                    {tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                                >
                  {tag}
                </span>
                            ))}
                        </div>
                    )}

                    <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-400">
                        {paragraphs.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>

                    {links.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-3">
                            {links.map((link) => (
                                <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-200 transition hover:border-cyan-400/50 hover:text-cyan-400"
                                >
                            {link.label}
                                <ExternalLinkIcon />
                                </a>
                                ))}
                        </div>
                        )}
                </div>
            </motion.div>
        </motion.div>
    );
}