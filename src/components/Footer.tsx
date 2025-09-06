import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" }, 
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" }
  ];

  const services = [
    "AI Integration",
    "MERN Stack Development", 
    "API Development",
    "Cloud Deployment",
    "Technical Consulting"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Alex Chen</h3>
              <p className="text-sm text-background/70">
                Gen AI Developer crafting intelligent solutions with MERN stack expertise.
              </p>
            </div>
            
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-sm text-background/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Get In Touch</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p>San Francisco, CA</p>
              <p>alex.chen@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p className="mt-4 text-xs">
                Available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-sm text-background/70">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <p className="text-sm text-background/70">
              © 2024 Alex Chen. All rights reserved.
            </p>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-background hover:text-primary hover:bg-background/10"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Inspiring Quote */}
      <div className="border-t border-background/20 py-4 text-center">
        <p className="text-sm text-background/70 italic">
          "Code + Intelligence → Future."
        </p>
      </div>
    </footer>
  );
};

export default Footer;