import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechFlow Inc.",
      avatar: "",
      rating: 5,
      content: "Alex delivered an exceptional AI-powered chatbot that transformed our customer service. His expertise in LangChain and OpenAI integration is outstanding. The solution reduced our response times by 60% and improved customer satisfaction significantly.",
      project: "AI Customer Service Bot"
    },
    {
      name: "Michael Chen",
      role: "Product Manager", 
      company: "StartupLab",
      avatar: "",
      rating: 5,
      content: "Working with Alex was a game-changer for our platform. He built a robust MERN stack application that handles thousands of users seamlessly. His attention to detail and problem-solving skills are exceptional.",
      project: "Student Management Platform"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "EduTech Solutions",
      avatar: "",
      rating: 5,
      content: "Alex's AI knowledge assistant revolutionized how our team accesses information. The RAG implementation with Pinecone is incredibly fast and accurate. He's not just a developer, he's a true AI architect.",
      project: "AI Knowledge Base"
    },
    {
      name: "David Kim",
      role: "Engineering Lead",
      company: "InnovateNow",
      avatar: "",
      rating: 5,
      content: "Alex's full-stack development skills are top-tier. He delivered a complex real-time chat application with AI moderation features ahead of schedule. His code quality and documentation are exemplary.",
      project: "Real-time Chat Platform"
    },
    {
      name: "Lisa Zhang",
      role: "VP of Technology",
      company: "Digital Dynamics",
      avatar: "",
      rating: 5,
      content: "The AI resume builder Alex created for us is phenomenal. The GPT-4 integration is seamless, and the user experience is intuitive. Our users love the ATS optimization features. Highly recommend!",
      project: "AI Resume Builder"
    },
    {
      name: "James Wilson",
      role: "Senior Developer",
      company: "CodeCraft Agency",
      avatar: "",
      rating: 5,
      content: "Alex's mentorship and code reviews have been invaluable to our team. His deep understanding of both traditional web development and modern AI technologies makes him an exceptional collaborator.",
      project: "Team Collaboration & Code Review"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me on AI and full-stack projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card-gradient shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in border-0 relative overflow-hidden">
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 text-primary/10">
                <Quote className="w-8 h-8" />
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Project badge */}
                <Badge variant="outline" className="text-xs bg-primary/5 border-primary/20">
                  {testimonial.project}
                </Badge>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Project Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24h</div>
            <div className="text-muted-foreground">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;