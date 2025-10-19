const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="gradient-card rounded-2xl p-8 shadow-card">
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I'm a final-year Mechanical Engineering student at BITS Pilani, Hyderabad Campus, 
              with a keen interest in <span className="font-semibold text-primary">Product Management</span>, 
              <span className="font-semibold text-secondary"> Data Analytics</span>, and 
              <span className="font-semibold text-primary"> Backend Development</span>.
            </p>
            
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              My journey blends technical and financial skills, driven by my passion for solving 
              real-world problems using data and technology. I've gained hands-on experience as a 
              Program Manager at Licious and as a Backend Developer at NrityaTech Solutions.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              I enjoy working at the intersection of technology and business, where I can apply 
              quantitative methods and data-driven insights to create impactful solutions that 
              drive growth and enhance user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-glow transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">6.87</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-glow transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Internships</div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-glow transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-glow transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">2026</div>
              <div className="text-sm text-muted-foreground">Graduation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
