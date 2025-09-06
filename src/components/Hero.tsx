import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Alex Chen
                </span>{" "}
                👋
              </h1>
              
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                MERN Stack & Generative AI Developer
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I build lovable digital products with AI-driven intelligence — from full-stack applications 
                to smart assistants. Passionate about crafting scalable solutions that bridge the gap between 
                cutting-edge AI and seamless user experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="flex space-x-8">
              <div>
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">AI Solutions Built</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-hero-gradient hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/20 hover:bg-primary/5"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Collaborate
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-hero-gradient rounded-full blur-3xl opacity-20 animate-glow"></div>
              <img
                src={profilePhoto}
                alt="Alex Chen - Gen AI Developer"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-elegant border-4 border-background animate-float"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold animate-bounce">
                AI
              </div>
              
              <div className="absolute -bottom-2 -left-4 bg-accent text-accent-foreground rounded-lg px-3 py-1 text-sm font-medium animate-pulse">
                MERN Stack
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;