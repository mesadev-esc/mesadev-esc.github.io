function App() {
  const skills = [
    { name: 'Unity', level: 90 },
    { name: 'C# & C++', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'Go', level: 75 },
    { name: 'Web Development', level: 95 },
  ];

  const projects = [
    {
      title: "SMM (Custom Install Support)",
      description: "Satisfactory Mod Manager fork with built-in support for custom (and cracked) installations.",
      technologies: ["Svelte", "Go", "TypeScript"],
      image: "https://mesadev-esc.github.io/assets/smmcis.png",
      githubUrl: "https://github.com/mesadev-esc/SMM-CrackSupport",
      liveUrl: "#"
    },
    {
      title: "Bread Clicker",
      description: "bread",
      technologies: [],
      image: "https://mesadev-esc.github.io/assets/bread_clicker.png",
      githubUrl: "https://mesadev-esc.github.io/bread-clicker/",
      liveUrl: "#"
    },
    {
      title: "Live Profiler",
      description: "Minecraft in-game performance and timing profiler",
      technologies: ["Java", "Groovy"],
      image: "https://mesadev-esc.github.io/assets/liveprofiler_logo.png",
      githubUrl: "https://github.com/mesadev-esc/LiveProfiler",
      liveUrl: "#"
    },
    {
      title: "Java And-Or",
      description: "Simple Java library for building and-or trees",
      technologies: ["Java"],
      image: "https://mesadev-esc.github.io/assets/javaandor.png",
      githubUrl: "https://github.com/mesadev-esc/java-and-or",
      liveUrl: "#"
    },,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, // peak tsx syntax
  ];;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white font-sans scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-950/95 to-slate-950/70 backdrop-blur-lg border-b border-gradient-to-r border-cyan-500/20 to-blue-500/20 shadow-lg shadow-cyan-500/10">
        <div className="flex justify-between items-center px-6 md:px-12 py-5">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">mesa</div>
          </div>
          
          {/* Nav Links */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#about" className="relative group text-gray-300 hover:text-cyan-300 transition-colors duration-300 font-medium">
                <span>About</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#skills" className="relative group text-gray-300 hover:text-cyan-300 transition-colors duration-300 font-medium">
                <span>Skills</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#projects" className="relative group text-gray-300 hover:text-cyan-300 transition-colors duration-300 font-medium">
                <span>Projects</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#contact" className="relative group text-gray-300 hover:text-cyan-300 transition-colors duration-300 font-medium">
                <span>Contact</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a></li>
            </ul>
          </nav>

          {/* CTA Button */}
          <a 
            href="https://github.com/mesadev-esc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 text-cyan-300 rounded-lg font-semibold transition-all duration-300 border border-cyan-500/50 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 hidden md:inline-block"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-40 flex flex-col items-center text-center">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20"></div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500">
              mesa
            </span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
          Full-stack developer specializing in <span className="text-cyan-300">Unity</span>, <span className="text-blue-400">C variants</span>, <span className="text-cyan-300">Java</span>, <span className="text-blue-400">Go</span>, and <span className="text-cyan-300">Web Technologies</span>
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 tracking-wide transform hover:scale-105"
          >
            View My Work
          </a>
          <a 
            href="https://github.com/mesadev-esc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white rounded-lg font-semibold transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/60 tracking-wide transform hover:scale-105"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">Technical Skills</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group">
              <div className="flex justify-between mb-4">
                <span className="font-semibold text-lg group-hover:text-cyan-300 transition-colors">{skill.name}</span>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden border border-cyan-500/10">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50 transition-all duration-700" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 relative z-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 border border-cyan-500/20 hover:border-cyan-400/50 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project?.image} 
                    alt={project?.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">{project?.title}</h3>
                  <p className="text-gray-300 mb-4 flex-1">{project?.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project?.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30 hover:border-cyan-400/60 transition-all">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project?.githubUrl} 
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-gray-300 relative z-10">
          Check out my other projects on my{' '}
          <a 
            href="https://github.com/mesadev-esc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold"
          >
            GitHub
          </a>
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out!
          </p>
          <a 
            href="https://discord.gg/" 
            className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 tracking-wide transform hover:scale-105"
          >
            Message me on Discord: mesadev
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-10 border-t border-cyan-500/10 text-center text-gray-400 mt-12">
        <p>© {new Date().getFullYear()} mesa. All rights reserved.</p>
        <p className="mt-4">
          Check out my work on{' '}
          <a 
            href="https://github.com/mesadev-esc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;