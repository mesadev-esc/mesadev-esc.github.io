import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Minecraft Projects",
      description: "Coming soon...",
      tags: ["Java", "Modding", "Plugin Development"]
    },
    {
      title: "Unity Projects",
      description: "Coming soon...",
      tags: ["C#", "Game Development", "Scripting"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent game development projects that showcase my skills 
            in programming, design, and creating engaging player experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:border-purple-400 transition-all duration-300 hover:scale-105 group overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent opacity-60"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;