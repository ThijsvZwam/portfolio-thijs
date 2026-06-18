import ProjectCard from '@/components/ProjectCard';
import ProjectsGrid from '@/components/ProjectsGrid';

const projects = [
  {
    title: 'Finite',
    description:
        'A social media app built around intentional use, with a daily time-limiting feature.',
    longDescription:
        "Finite is a social media app with intentional-use baked into the core experience rather than bolted on as a screen-time nag. It tracks how long you've spent in the app and gently limits you once you hit your daily budget.\n\nBuilt with Next.js (App Router) and Supabase, it covers posts, comments, voting, follows, notifications, and hashtags, with image storage on Cloudflare R2.",
    tags: ['Next.js', 'Supabase'],
    image: '/images/finite-home.png',
    images: ['/images/finite-home.png', '/images/finite-profile.png', '/images/finite-post.png'],
    links: [
      { label: 'GitHub', url: 'https://github.com/thijsvzwam/finite' },
      { label: 'Live demo', url: 'https://finite.vercel.app' },
    ],
  },
  {
    title: 'Maps',
    description:
        'Various Beat Saber modcharts made by me. Using the Heck suite  mods.',
    longDescription:
        'I have made various Beat Saber modcharts, using the Heck suite mods Vivify, NoodleExtensions, and Chroma to create the ultimate experience for the player. Unity was used to create different environments and shaders which were then exported into an AssetBundle usable with Vivify.\n\nCheckout my BeatSaver profile for more maps.',
    tags: ['Unity', 'HLSL', 'TypeScript'],
    image: '/images/AOA-map.png',
    images: ['/images/AOA-map.png','/images/MP-map.png','/images/SM-map.png','/images/TM-map.png'],
    links: [{ label: 'BeatSaver', url: 'https://beatsaver.com/profile/268475' }],
  },
  {
    title: 'Border of Life',
    description:
        'A Persona 5-styled action JRPG built in Unreal Engine 5, with full combat and cutscene systems.',
    longDescription:
        "Border of Life is an action JRPG built in Unreal Engine 5, mixing Persona 5's UI energy with Zenless Zone Zero-style hack-and-slash combat. The protagonist, Onyx/REDDUSK, has lock-on targeting, combo chains, and an AI-driven enemy behavior tree.\n\nCutscenes are built with Sequencer, paired with an adaptive music system that shifts with combat intensity.",
    tags: ['Unreal Engine 5', 'Blueprints'],
    image: '/images/border-of-life.png',
    images: ['/images/border-of-life.png', '/images/border-of-life2.png'],
    links: [],
  },
];


export default function ProjectsPage() {
  return (
      <main className="min-h-screen px-6 pb-24 pt-36">
        <div className="mx-auto max-w-5xl">
          <span className="font-mono text-xs text-cyan-400">// projects</span>
          <h1 className="mt-3 text-4xl font-bold">Things I&apos;ve built</h1>
          <p className="mt-2 max-w-xl text-zinc-400">
            A mix of full-stack apps, game dev, and experiences for the Beat Saber community.
          </p>

          <ProjectsGrid projects={projects} />
        </div>
      </main>
  );
}
