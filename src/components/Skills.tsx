import { Code, Database, BarChart3, Briefcase } from "lucide-react";

const skillCategories = [
  {
    title: "Data Analysis",
    icon: BarChart3,
    skills: ["Excel", "PowerBI", "Python (NumPy, Matplotlib)", "SQL", "Tableau"]
  },
  {
    title: "Backend Development",
    icon: Code,
    skills: ["Python", "Django", "REST API", "MySQL", "Git & GitHub"]
  },
  {
    title: "Financial Modeling",
    icon: Database,
    skills: ["DCF", "LBO", "Startup Valuation", "Basel III", "IFRS 9"]
  },
  {
    title: "Business Skills",
    icon: Briefcase,
    skills: ["Product Management", "P&L Analysis", "Stakeholder Management", "Business Intelligence"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="gradient-card rounded-2xl p-8 shadow-card border border-border hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="gradient-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="text-xl font-bold mb-4 text-center">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Supply Chain Management", "PowerBI", "Excel", "SQL", "Bloomberg Market Concepts (2024)", "Python (2023)"].map((cert, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
