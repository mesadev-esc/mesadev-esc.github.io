import { useEffect } from 'react';

function App() {
  // Define more subtle color schemes based on your site's cyan/blue palette
  const colorSchemes = {
    cyan: ['#152a2d', '#1a3a3d', '#1f4a4d', '#245a5d', '#296a6d', '#2e7a7d'], // Very subtle cyan variations
    blue: ['#152533', '#1a3040', '#1f3b4d', '#24465a', '#295167', '#2e5c74'], // Subtle blue variations
    teal: ['#152a2a', '#1a3a3a', '#1f4a4a', '#245a5a', '#296a6a', '#2e7a7a'], // Subtle teal variations
    purple: ['#201a2d', '#27203d', '#2e264d', '#352c5d', '#3c326d', '#43387d'], // Subtle purple variations
    indigo: ['#1a1a33', '#222240', '#2a2a4d', '#32325a', '#3a3a67', '#424274'], // Subtle indigo variations
    sky: ['#152533', '#1a3040', '#1f3b4d', '#24465a', '#295167', '#2e5c74'], // Subtle sky blue variations
    slate: ['#20252d', '#27303d', '#2e3b4d', '#35465d', '#3c516d', '#435c7d'], // Subtle slate variations
    neutral: ['#1a1a1a', '#222222', '#2a2a2a', '#333333', '#3b3b3b', '#444444'] // Subtle neutral variations
  };

  const columns = Object.keys(colorSchemes);

  useEffect(() => {
    // Create background grid
    const createColumns = () => {
      const wrapper = document.getElementById('background-wrapper');
      if (!wrapper) return;
      
      wrapper.innerHTML = '';
      
      columns.forEach((columnColor, _index) => {
        const column = document.createElement('div');
        column.className = 'bg-column';
        column.dataset.colorScheme = columnColor;
        
        // Create boxes for each column
        const boxCount = Math.ceil(window.innerHeight / 16); // 1rem = 16px
        for (let i = 0; i < boxCount; i++) {
          const box = document.createElement('div');
          box.className = 'bg-box';
          column.appendChild(box);
        }
        
        wrapper.appendChild(column);
      });
    };

    const animateColumn = (column: HTMLElement, direction = 1) => {
      const boxes = Array.from(column.querySelectorAll('.bg-box')) as HTMLElement[];
      const colorScheme = colorSchemes[(column as HTMLElement).dataset.colorScheme as keyof typeof colorSchemes];
      
      // Get current colors
      const currentColors = boxes.map(box => {
        const color = box.style.backgroundColor;
        return color; // We'll work directly with the styles
      });

      // Shift colors
      if (direction > 0) {
        const lastColor = currentColors.pop();
        if (lastColor) currentColors.unshift(lastColor);
      } else {
        const firstColor = currentColors.shift();
        if (firstColor) currentColors.push(firstColor);
      }

      // Apply new colors
      boxes.forEach((box, i) => {
        box.style.backgroundColor = currentColors[i] || colorScheme[0];
      });
    };

    const initializeColumns = () => {
      const columns = document.querySelectorAll('.bg-column');
      columns.forEach(column => {
        const boxes = column.querySelectorAll('.bg-box');
        const colorScheme = colorSchemes[(column as HTMLElement).dataset.colorScheme as keyof typeof colorSchemes];
        
        boxes.forEach((box, index) => {
          const colorIndex = index % colorScheme.length;
          (box as HTMLElement).style.backgroundColor = colorScheme[colorIndex];
        });
      });
    };

    // Initial setup
    createColumns();
    initializeColumns();

    // Animate each column independently with chain reaction effect
    const intervalIds: number[] = [];
    document.querySelectorAll('.bg-column').forEach((column, index) => {
      // Create a delayed animation sequence for each column to create chain reaction
      const animateChain = () => {
        // Alternate direction based on column index
        const direction = index % 2 === 0 ? 1 : -1;
        animateColumn(column as HTMLElement, direction);
      };
      
      // Each column starts with a delay relative to its position
      const initialDelay = index * 100; // 100ms delay between each column
      
      // Set up the initial animation
      setTimeout(() => {
        // Run the animation immediately once
        animateChain();
        
        // Then continue with the interval
        const intervalId = window.setInterval(animateChain, 800); // Slower speed for more noticeable chain effect
        intervalIds.push(intervalId);
      }, initialDelay);
    });

    // Recreate grid on window resize
    const handleResize = () => {
      createColumns();
      initializeColumns();
      
      // Clear existing intervals
      intervalIds.forEach(id => clearInterval(id));
      
      // Restart animations with chain effect
      document.querySelectorAll('.bg-column').forEach((column, index) => {
        const animateChain = () => {
          const direction = index % 2 === 0 ? 1 : -1;
          animateColumn(column as HTMLElement, direction);
        };
        
        const initialDelay = index * 100;
        
        setTimeout(() => {
          animateChain();
          const intervalId = window.setInterval(animateChain, 800);
          intervalIds.push(intervalId);
        }, initialDelay);
      });
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      intervalIds.forEach(id => clearInterval(id));
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const skills = [
    { name: 'Unity', rating: "i only use unity cuz i dont understand blueprints. and whos average pc can actually handle unreal?? overall, im good at it, 7.9/10." },
    { name: 'C# & C++', rating: "these are barely related, but i like both for their own respective reasons. im decent here. 8.3/10." },
    { name: 'Java', rating: "i freaking love java. notch reference. oh and im really good at java. 9.5/10." },
    { name: 'Go', rating: "used it once. decent. 6/10." },
    { name: 'Web Development', rating: "can you tell me this website doesnt look good? exactly. 9/10." },
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
      description: "Simple Java library for building and-or trees (this is not efficient in any way)",
      technologies: ["Java"],
      image: "https://mesadev-esc.github.io/assets/javaandor.png",
      githubUrl: "https://github.com/mesadev-esc/java-and-or",
      liveUrl: "#"
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background grid */}
      <div id="background-wrapper" className="background-wrapper"></div>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-950/95 to-slate-950/70 backdrop-blur-lg border-b border-gradient-to-r border-cyan-500/20 to-blue-500/20 shadow-lg shadow-cyan-500/10">
        <div className="flex justify-between items-center px-6 md:px-12 py-5">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">mesadev</div>
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
      <section className="container mx-auto px-4 py-24 md:py-40 flex flex-col items-center text-center relative z-10">
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
      <section id="skills" className="container mx-auto px-4 py-24 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 relative z-10">Technical Skills</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group">
              <div className="flex justify-between mb-4">
                <span className="font-semibold text-lg group-hover:text-cyan-300 transition-colors">{skill.name}</span>
              </div>
              <p className="text-cyan-300 text-sm leading-relaxed">
                {skill.rating}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-24 relative z-10">
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
      <section id="contact" className="container mx-auto px-4 py-24 relative z-10">
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
      <footer className="container mx-auto px-4 py-10 border-t border-cyan-500/10 text-center text-gray-400 mt-12 relative z-10">
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