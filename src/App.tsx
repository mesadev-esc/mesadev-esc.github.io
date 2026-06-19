import { type CSSProperties, useEffect } from 'react';
import pausePleaseImage from './assets/pause-please.png';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
};

type DotStyle = CSSProperties & {
  '--dot-shadows': string;
  '--speed': string;
  '--delay': string;
  '--base-scale': string;
};

const createDotShadows = (seed: number, count = 40) => {
  let value = seed;
  const random = () => {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };

  return Array.from({ length: count + 1 }, () => {
    const x = (-0.5 + random() * 3).toFixed(3);
    const y = (-0.5 + random() * 3).toFixed(3);
    const hue = Math.round(random() * 360);
    return `${x}em ${y}em 7px hsla(${hue}, 100%, 58%, .9)`;
  }).join(', ');
};

const dotFields: DotStyle[] = [
  {
    '--dot-shadows': createDotShadows(1423),
    '--speed': '44s',
    '--delay': '-27s',
    '--base-scale': '12',
  },
  {
    '--dot-shadows': createDotShadows(2491),
    '--speed': '43s',
    '--delay': '-32s',
    '--base-scale': '13',
  },
  {
    '--dot-shadows': createDotShadows(5819),
    '--speed': '42s',
    '--delay': '-23s',
    '--base-scale': '12.5',
  },
  {
    '--dot-shadows': createDotShadows(9617),
    '--speed': '41s',
    '--delay': '-19s',
    '--base-scale': '13.5',
  },
];

const skills = [
  { name: 'Unity', rating: "i only use unity cuz i dont understand blueprints. and whos average pc can actually handle unreal?? overall, im good at it, 7.9/10." },
  { name: 'C# & C++', rating: "these are barely related, but i like both for their own respective reasons. im decent here. 8.3/10." },
  { name: 'Java', rating: "i freaking love java. notch reference. oh and im really good at java. 9.5/10." },
  { name: 'Go', rating: 'used it once. decent. 6/10.' },
  { name: 'Web Development', rating: 'can you tell me this website doesnt look good? exactly. 9/10.' },
];

const projects: Project[] = [
  {
    title: 'Pause Please',
    description: 'A fabric Minecraft mod that makes sure you take breaks while playing Minecraft.',
    technologies: ['Java', 'Fabric', 'Minecraft'],
    image: pausePleaseImage,
    githubUrl: 'https://github.com/mesadev-esc',
  },
  {
    title: 'SMM (Custom Install Support)',
    description: 'Satisfactory Mod Manager fork with built-in support for custom (and cracked) installations.',
    technologies: ['Svelte', 'Go', 'TypeScript'],
    image: 'https://mesadev-esc.github.io/assets/smmcis.png',
    githubUrl: 'https://github.com/mesadev-esc/SMM-CrackSupport',
  },
  {
    title: 'Bread Clicker',
    description: 'bread',
    technologies: [],
    image: 'https://mesadev-esc.github.io/assets/bread_clicker.png',
    githubUrl: 'https://mesadev-esc.github.io/bread-clicker/',
  },
  {
    title: 'Live Profiler',
    description: 'Minecraft in-game performance and timing profiler.',
    technologies: ['Java', 'Groovy'],
    image: 'https://mesadev-esc.github.io/assets/liveprofiler_logo.png',
    githubUrl: 'https://github.com/mesadev-esc/LiveProfiler',
  },
  {
    title: 'Java And-Or',
    description: 'Simple Java library for building and-or trees (this is not efficient in any way).',
    technologies: ['Java'],
    image: 'https://mesadev-esc.github.io/assets/javaandor.png',
    githubUrl: 'https://github.com/mesadev-esc/java-and-or',
  },
];

function App() {
  useEffect(() => {
    const background = document.querySelector<HTMLElement>('.background-wrapper');
    if (!background) return;

    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5).toFixed(4);
      const y = (event.clientY / window.innerHeight - 0.5).toFixed(4);
      background.style.setProperty('--mouse-x', x);
      background.style.setProperty('--mouse-y', y);
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div className="site-shell min-h-screen">
      <div className="background-wrapper" aria-hidden="true">
        {dotFields.map((style, index) => (
          <span className="dot-field" style={style} key={index}>.</span>
        ))}
      </div>

      <header className="site-header">
        <div className="container mx-auto flex items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="brand">mesadev</a>

          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center gap-7">
              {['about', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="nav-link">{item}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="https://github.com/mesadev-esc"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-ghost hidden md:inline-flex"
          >
            GitHub
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section id="about" className="hero-section container mx-auto px-5 text-center">
          <p className="eyebrow">developer / modder / maker of oddly specific things</p>
          <h1 className="hero-title">mesa</h1>
          <p className="hero-copy">
            Full-stack developer specializing in <span>Unity</span>, <span>C variants</span>, <span>Java</span>, <span>Go</span>, and <span>web stuff that hopefully looks less cursed now</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="button button-primary">View My Work</a>
            <a
              href="https://github.com/mesadev-esc"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
            >
              GitHub
            </a>
          </div>
        </section>

        <div className="bottom-notice">
          Hey there! I'm currently open for commissions and collaborations. Please visit{' '}
          <a href="https://github.com/mesadev-esc">this page</a> to learn more.
        </div>

        <section id="skills" className="section container mx-auto px-5">
          <div className="section-heading">
            <p className="eyebrow">capabilities</p>
            <h2>Technical Skills</h2>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
            {skills.map((skill) => (
              <article key={skill.name} className="glass-panel skill-card">
                <h3>{skill.name}</h3>
                <p>{skill.rating}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section container mx-auto px-5">
          <div className="section-heading">
            <p className="eyebrow">selected work</p>
            <h2>Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.technologies.length > 0 && (
                    <div className="tech-list" aria-label={`${project.title} technologies`}>
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  )}
                  <a
                    href={project.githubUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub -&gt;
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-slate-300">
            Check out my other projects on my{' '}
            <a
              href="https://github.com/mesadev-esc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-white"
            >
              GitHub
            </a>
          </p>
        </section>

        <section id="contact" className="section container mx-auto px-5">
          <div className="contact-panel">
            <p className="eyebrow">contact</p>
            <h2>Get In Touch</h2>
            <p>
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out.
            </p>
            <a href="https://discord.gg/" className="button button-primary">Message me on Discord: mesadev</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Copyright {new Date().getFullYear()} mesa. All rights reserved.</p>
        <p>
          Check out my work on{' '}
          <a
            href="https://github.com/mesadev-esc"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
