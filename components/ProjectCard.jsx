'use client';

import Image from 'next/image';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';

// Drop a file at the given `image` path under /public to fill the box.
// Until then it renders an empty frame with the expected path, so it's
// obvious where each project's screenshot belongs.
export default function ProjectCard({ title, description, tags = [], image, onClick }) {
  // Raw mouse position, normalized to -0.5..0.5 across the card.
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring-smoothed tilt so it doesn't snap when the cursor jumps.
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    stiffness: 250,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 250,
    damping: 20,
  });

  // The glossy highlight follows the cursor across the card surface.
  const glareX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.16), transparent 55%)`;

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
      <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={onClick}
          whileHover={{ scale: 1.025 }}
          style={{ rotateX, rotateY, transformPerspective: 900 }}
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
      >

      <div
        className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#0e1117]"
        style={{ transform: 'translateZ(20px)' }}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-zinc-600">
            <span className="font-mono text-xs">no image yet</span>
            <span className="font-mono text-[11px] text-zinc-700">public{image ?? '/images/...'}</span>
          </div>
        )}
      </div>

      <div className="p-5" style={{ transform: 'translateZ(10px)' }}>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{description}</p>
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
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
      </div>
    </motion.div>
  );
}
