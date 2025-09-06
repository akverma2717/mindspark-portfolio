import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Bot, Database, MessageSquare, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Builder",
      description: "Intelligent resume builder using OpenAI GPT-4 to generate tailored resumes based on job descriptions. Features real-time editing, ATS optimization, and PDF export.",
      icon: Bot,
      technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Tailwind CSS"],
      features: ["AI-powered content generation", "ATS score optimization", "Real-time collaboration", "Multiple templates"],
      github: "#",
      live: "#",
      status: "Live"
    },
    {
      title: "Smart Student Hub",
      description: "Comprehensive MERN stack platform for students with AI-powered study assistant, assignment tracker, and collaborative features.",
      icon: Users,
      technologies: ["React", "Express.js", "MongoDB", "LangChain", "Socket.io"],
      features: ["AI study assistant", "Assignment management", "Group collaboration", "Progress tracking"],
      github: "#",
      live: "#",
      status: "Live"
    },
    {
      title: "AI Knowledge Assistant",
      description: "RAG-powered knowledge base with LangChain integration. Upload documents and get intelligent answers with source citations.",
      icon: Database,
      technologies: ["Next.js", "LangChain", "Pinecone", "OpenAI", "Prisma"],
      features: ["Document ingestion", "Vector similarity search", "Source citations", "Multi-format support"],
      github: "#",
      live: "#",
      status: "Beta"
    },
    {
      title: "Real-time Chat App",
      description: "Modern chat application with real-time messaging, file sharing, and AI moderation features built with MERN stack and Socket.io.",
      icon: MessageSquare,
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Cloudinary"],
      features: ["Real-time messaging", "File sharing", "AI content moderation", "Group chats"],
      github: "#",
      live: "#",
      status: "Live"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Beta":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      default:
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work combining MERN stack expertise with AI innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-card-gradient shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in border-0 overflow-hidden">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(project.status)} border`}>
                    {project.status}
                  </Badge>
                </div>
                
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-muted-foreground">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <Button size="sm" className="bg-hero-gradient hover:opacity-90 flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Source
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;