import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Licious",
    role: "Program Management Intern",
    duration: "July 2025 - Present",
    location: "Bengaluru, Karnataka, India",
    responsibilities: [
      "Owned P&L analysis for city-specific categories, driving growth strategies to enhance customer basket size and demand penetration",
      "Designed Tableau dashboards for actionable insights, optimizing user acquisition metrics",
      "Collaborated with stakeholders to standardize best practices across cities, aligning initiatives with business objectives",
      "Automated reporting to streamline workflows and improve data-driven decision-making"
    ]
  },
  {
    company: "NrityaTech Solutions",
    role: "Python Django Backend Developer",
    duration: "May 2024 - June 2024",
    location: "Lucknow, Uttar Pradesh, India",
    responsibilities: [
      "Developed and maintained a robust Python-Django backend for client-facing web applications, handling over 1,000 API requests/day with 99.8% uptime",
      "Optimized complex MySQL queries, reducing average database response time from 750ms to 320ms (57% improvement)",
      "Implemented technical concepts such as Django, REST-API, and ORM",
      "Conducted 12+ code reviews/week, contributing to team-level best practices"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="gradient-card rounded-2xl p-8 shadow-card border border-border hover:shadow-glow transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <Briefcase className="w-5 h-5" />
                    <span>{exp.company}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{exp.location}</p>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground mt-4 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.duration}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground/80">
                    <span className="text-primary mt-1.5">▸</span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
