import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack & AI Developer",
      company: "TechFlow Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: [
        "Led development of AI-powered customer service chatbot using OpenAI GPT-4 and LangChain, reducing response time by 60%",
        "Built scalable MERN stack applications serving 100K+ daily active users",
        "Implemented RAG (Retrieval-Augmented Generation) systems with Pinecone vector database",
        "Deployed microservices architecture on AWS with Docker and Kubernetes"
      ],
      technologies: ["React", "Node.js", "MongoDB", "OpenAI API", "LangChain", "AWS", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupLab",
      location: "Remote",
      period: "2021 - 2022",
      type: "Full-time",
      description: [
        "Developed and maintained 5+ React applications with TypeScript and Material-UI",
        "Created RESTful APIs using Express.js and integrated with MongoDB Atlas",
        "Implemented real-time features using Socket.io for collaborative editing platform",
        "Optimized application performance, achieving 40% faster load times"
      ],
      technologies: ["React", "TypeScript", "Express.js", "MongoDB", "Socket.io", "Material-UI"]
    },
    {
      title: "Frontend Developer",
      company: "DigitalCraft Agency",
      location: "New York, NY",
      period: "2020 - 2021",
      type: "Full-time",
      description: [
        "Built responsive web applications using React and modern CSS frameworks",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Integrated third-party APIs and payment gateways (Stripe, PayPal)",
        "Maintained code quality with comprehensive testing using Jest and React Testing Library"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Sass", "Jest", "Webpack"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            4+ years of professional experience building modern web applications and AI solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card-gradient shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in border-0">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                    <CardDescription className="text-lg flex items-center gap-2 mt-1">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </CardDescription>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <Badge variant="secondary">{exp.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="bg-tech-gradient text-white border-0">
                      {tech}
                    </Badge>
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

export default Experience;