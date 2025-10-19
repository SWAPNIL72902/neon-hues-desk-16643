import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Product Analytics Dashboard for EdTech Recorded Lectures",
    description: "Built an interactive dashboard to track user engagement, course distribution, skills, and language preferences. Identified correlations between viewer retention and course duration.",
    technologies: ["Tableau", "Data Analytics", "SQL"],
    link: "#",
    date: "May 2025"
  },
  {
    title: "E-commerce Sales Data Analytics",
    description: "Developed an interactive sales dashboard with advanced filters and parameters. Conducted cohort and segmentation analysis to uncover customer purchase behavior trends.",
    technologies: ["PowerBI", "Python", "Excel"],
    link: "#",
    date: "April 2025"
  },
  {
    title: "Apple's Global Supply Chain Analysis",
    description: "Evaluated Apple's vertical integration strategy and stakeholder management practices. Analyzed key performance metrics such as inventory turnover, cost optimization, and sustainability.",
    technologies: ["Supply Chain", "Business Analysis"],
    link: "#",
    date: "February 2025"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="gradient-card rounded-2xl p-6 shadow-card border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{project.date}</span>
              </div>
              
              <p className="text-foreground/80 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm"
                className="w-full group"
                asChild
              >
                <a href={project.link} className="flex items-center justify-center gap-2">
                  View Project
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
