import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="gradient-card rounded-2xl p-10 shadow-card border border-border">
            <p className="text-lg text-center text-foreground/80 mb-10 leading-relaxed">
              I'm currently looking for opportunities in Product Management, Program Management, 
              and Backend Development. Feel free to reach out if you'd like to connect!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <a 
                href="mailto:swapnilpahari04@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium text-foreground">swapnilpahari04@gmail.com</div>
                </div>
              </a>
              
              <a 
                href="tel:+917898978233"
                className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-medium text-foreground">+91 7898978233</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium text-foreground">Jabalpur, Madhya Pradesh</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Currently at</div>
                  <div className="font-medium text-foreground">BITS Pilani, Hyderabad</div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg"
                variant="default"
                className="shadow-glow"
                asChild
              >
                <a href="https://github.com/SWAPNIL72902" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                asChild
              >
                <a href="https://linkedin.com/in/swapnil-pahari" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
