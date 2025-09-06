import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette,
  GitBranch,
  Shield
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Generative AI & ML",
      icon: Brain,
      skills: [
        { name: "OpenAI GPT-4/3.5", level: 90 },
        { name: "LangChain", level: 85 },
        { name: "Vector Databases", level: 80 },
        { name: "RAG Systems", level: 85 },
        { name: "Fine-tuning", level: 75 }
      ],
      description: "Building intelligent applications with cutting-edge AI models"
    },
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Material-UI", level: 85 },
        { name: "React Query", level: 80 }
      ],
      description: "Creating responsive and interactive user interfaces"
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js/Express", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Redis", level: 75 },
        { name: "GraphQL", level: 70 }
      ],
      description: "Building scalable server-side applications and APIs"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS (EC2, S3, Lambda)", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Vercel/Netlify", level: 90 },
        { name: "GitHub Actions", level: 75 },
        { name: "Kubernetes", level: 65 }
      ],
      description: "Deploying and managing applications in the cloud"
    }
  ];

  const domains = [
    { name: "E-commerce", icon: Smartphone, projects: 8 },
    { name: "EdTech", icon: Palette, projects: 6 },
    { name: "Healthcare", icon: Shield, projects: 4 },
    { name: "FinTech", icon: GitBranch, projects: 5 },
    { name: "SaaS Platforms", icon: Cloud, projects: 12 },
    { name: "AI/ML Tools", icon: Brain, projects: 10 }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning modern web development and AI technologies
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card-gradient shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in border-0">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Domain Experience */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Domains I've Worked In
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience across diverse industries and project types
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {domains.map((domain, index) => (
            <Card key={index} className="text-center bg-card-gradient shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in group cursor-pointer border-0">
              <CardContent className="p-6 space-y-3">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <domain.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{domain.name}</h4>
                  <p className="text-xs text-muted-foreground">{domain.projects} Projects</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;