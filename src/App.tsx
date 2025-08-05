import React from 'react';

function App() {
  const skills = [
    { name: 'Unity', level: 90 },
    { name: 'C# & C++', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'Go', level: 75 },
    { name: 'Web Development', level: 95 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 flex justify-between items-center">
        <div className="text-2xl font-bold">mesa</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            mesa
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
          Developer specializing in Unity, C variants, Java, Go, and Web Technologies
        </p>
        <div className="flex gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-medium transition-colors"
          >
            View My Work
          </a>
          <a 
            href="https://github.com/mesadev-esc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors"
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
                <span>{skill.level}%</span>
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
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-colors">
            <h3 className="text-xl font-bold mb-2">Unity Game</h3>
            <p className="text-gray-300 mb-4">Immersive 3D game built with Unity and C#</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded">Unity</span>
              <span className="px-2 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded">C#</span>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-colors">
            <h3 className="text-xl font-bold mb-2">Web Application</h3>
            <p className="text-gray-300 mb-4">Modern web app with React and TypeScript</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded">React</span>
              <span className="px-2 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded">TypeScript</span>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-colors">
            <h3 className="text-xl font-bold mb-2">Go Microservice</h3>
            <p className="text-gray-300 mb-4">High-performance backend service in Go</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded">Go</span>
              <span className="px-2 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded">Docker</span>
            </div>
          </div>
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
            href="mailto:contact@mesadev.io" 
            className="inline-block px-8 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-medium transition-colors"
          >
            Send Email
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
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;