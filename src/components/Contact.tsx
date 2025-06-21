
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next game project? Let's discuss how we can create 
            something amazing together. I'm always open to new opportunities and challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your Name" 
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                  <Input 
                    placeholder="Your Email" 
                    type="email"
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>
                <Input 
                  placeholder="Subject" 
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                />
                <Textarea 
                  placeholder="Your message..."
                  rows={6}
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                />
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:scale-105 group"
                >
                  <Mail className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400">mesa@gamedev.com</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:scale-105 group"
                >
                  <Github className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-white font-semibold">GitHub</p>
                    <p className="text-gray-400">github.com/mesa</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:scale-105 group"
                >
                  <Linkedin className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-white font-semibold">LinkedIn</p>
                    <p className="text-gray-400">linkedin.com/in/mesa</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:scale-105 group"
                >
                  <Twitter className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-white font-semibold">Twitter</p>
                    <p className="text-gray-400">@mesa_gamedev</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
