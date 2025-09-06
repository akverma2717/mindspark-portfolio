import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter, 
  Send,
  Calendar,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "alex.chen@example.com",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm PST"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      description: "Available for remote work worldwide"
    }
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "#", username: "@alexchen" },
    { icon: Linkedin, name: "LinkedIn", url: "#", username: "/in/alexchen" },
    { icon: Twitter, name: "Twitter", url: "#", username: "@alexchen_dev" }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your AI-powered project to life? Let's discuss how we can collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card-gradient shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Send Me a Message
              </CardTitle>
              <CardDescription>
                Tell me about your project and let's start the conversation
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" placeholder="Your Company" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option>Select project type</option>
                    <option>AI/ML Integration</option>
                    <option>Full Stack Web App</option>
                    <option>MERN Stack Development</option>
                    <option>API Development</option>
                    <option>Consulting</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project, timeline, and requirements..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-hero-gradient hover:opacity-90 transition-opacity">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card-gradient shadow-card border-0 hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-lg font-medium text-primary mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="bg-card-gradient shadow-card border-0">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Alternative ways to connect</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-3" />
                  Schedule a Call
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-3" />
                  Email Directly
                </Button>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card-gradient shadow-card border-0">
              <CardHeader>
                <CardTitle>Connect on Social</CardTitle>
                <CardDescription>Follow my journey and latest projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <social.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium">{social.name}</div>
                        <div className="text-sm text-muted-foreground">{social.username}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;