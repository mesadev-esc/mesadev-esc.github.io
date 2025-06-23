import { Code, Gamepad2, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Programming",
      description: "Unity, C#, JavaScript, Python, Java"
    },
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Game Design",
      description: "Mechanics, Level Design, User Experience"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Art & Animation",
      description: "2D/3D Art, Character Animation, VFX"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Optimization",
      description: "Performance Tuning, Memory Management"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-purple-400">mesa</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm a passionate game developer who loves bringing ideas to life through interactive experiences. 
            With years of experience in the industry, I specialize in creating engaging gameplay mechanics 
            and polished user experiences that keep players engaged.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;