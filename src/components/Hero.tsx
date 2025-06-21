
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              mesa
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Game Developer & Digital Artist
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Crafting immersive gaming experiences with code, creativity, and passion. 
            Building worlds that players never want to leave.
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Mail className="mr-2 h-5 w-6" />
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-2.5 right-1/2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
