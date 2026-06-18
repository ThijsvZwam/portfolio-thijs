'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function ProjectsGrid({ projects }) {
    const [openTitle, setOpenTitle] = useState(null);
    const selected = projects.find((p) => p.title === openTitle) ?? null;

    useEffect(() => {
        document.body.style.overflow = openTitle ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [openTitle]);

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === 'Escape') setOpenTitle(null);
        }
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    return (
        <>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        {...project}
                        onClick={() => setOpenTitle(project.title)}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selected && (
                    <ProjectModal project={selected} onClose={() => setOpenTitle(null)} />
                )}
            </AnimatePresence>
        </>
    );
}