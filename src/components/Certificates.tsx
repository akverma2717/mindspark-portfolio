import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Calendar, Building2 } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-2023-001",
      description: "Comprehensive certification covering AWS cloud architecture, security, and best practices for scalable applications.",
      skills: ["AWS EC2", "S3", "Lambda", "RDS", "CloudFormation"],
      verifyUrl: "#",
      status: "Active"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2023",
      credentialId: "MDB-DEV-2023-045",
      description: "Advanced database design, query optimization, and application development with MongoDB.",
      skills: ["MongoDB", "Aggregation", "Indexing", "Schema Design"],
      verifyUrl: "#",
      status: "Active"
    },
    {
      title: "OpenAI GPT-4 API Specialist",
      issuer: "OpenAI",
      date: "2023",
      credentialId: "OPENAI-GPT4-2023-078",
      description: "Specialized training in GPT-4 integration, prompt engineering, and AI application development.",
      skills: ["GPT-4", "Prompt Engineering", "AI Integration", "API Usage"],
      verifyUrl: "#",
      status: "Active"
    },
    {
      title: "React Professional Certificate",
      issuer: "Meta (Facebook)",
      date: "2022",
      credentialId: "META-REACT-2022-156",
      description: "Advanced React development including hooks, context, performance optimization, and testing.",
      skills: ["React", "Redux", "Testing", "Performance", "Hooks"],
      verifyUrl: "#",
      status: "Active"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PCD-2022-089",
      description: "Cloud-native application development, containerization, and serverless architectures.",
      skills: ["GCP", "Kubernetes", "Docker", "Cloud Functions"],
      verifyUrl: "#",
      status: "Active"
    },
    {
      title: "LangChain Certified Developer",
      issuer: "LangChain",
      date: "2023",
      credentialId: "LC-DEV-2023-034",
      description: "Advanced LLM application development with LangChain framework for production systems.",
      skills: ["LangChain", "Vector DBs", "RAG", "LLM Chains"],
      verifyUrl: "#",
      status: "Active"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications validating expertise in modern technologies and AI development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="bg-card-gradient shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in border-0 group">
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                    {cert.status}
                  </Badge>
                </div>
                
                <div>
                  <CardTitle className="text-lg font-bold leading-tight">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-2">
                    <Building2 className="w-4 h-4" />
                    {cert.issuer}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Issued: {cert.date}</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <p className="text-xs text-muted-foreground">
                    Credential ID: <span className="font-mono">{cert.credentialId}</span>
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full hover:bg-primary/5"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Continuously learning and staying updated with the latest technologies
          </p>
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
            <Award className="w-5 h-5 mr-2" />
            View All Credentials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;