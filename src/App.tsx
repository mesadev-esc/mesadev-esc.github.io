function App() {
  const skills = [
    { name: 'Unity', level: 90 },
    { name: 'C# & C++', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'Go', level: 75 },
    { name: 'Web Development', level: 95 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 flex justify-between items-center">
        <div className="text-2xl font-bold">mesa</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
            mesa
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
          Developer specializing in Unity, C variants, Java, Go, and Web Technologies
        </p>
        <div className="flex gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20 tracking-wide"
          >
            View My Work
          </a>
          <a 
            href="https://github.com/mesadev-esc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all duration-300 border border-gray-700 tracking-wide"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-16 text-center">Technical Skills</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div 
                  className="h-full bg-cyan-500 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-16 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-300 mb-10">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out!
          </p>
          <a 
            href="https://discord.gg/" 
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20 tracking-wide"
          >
            Message me on Discord: mesadev
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-10 border-t border-gray-800 text-center text-gray-400">
        <p>© {new Date().getFullYear()} mesa. All rights reserved.</p>
        <p className="mt-2">
          Check out my work on{' '}
          <a 
            href="https://github.com/mesadev-esc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-blue-400 transition-colors duration-300"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;