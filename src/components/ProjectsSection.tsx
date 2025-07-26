import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Poshak",
      tech: "Flutter/Dart",
      date: "2023",
      description: "Traditional Nepali fashion e-commerce app with cultural design elements, wishlist functionality, secure authentication, and modern UI/UX focused on traditional clothing market.",
      features: ["E-commerce functionality", "Cultural UI design", "Wishlist & favorites", "Secure authentication", "Traditional fashion focus"],
      github: "#",
      demo: "#"
    },
    {
      title: "Khaja Express",
      tech: "Flutter/Dart",
      date: "2023",
      description: "Modern food ordering application with seamless login/signup flow, shopping cart management, coupon system, and intuitive user experience for food delivery services.",
      features: ["User authentication", "Shopping cart", "Coupon system", "Modern UI flow", "Food ordering workflow"],
      github: "#",
      demo: "#"
    },
    {
      title: "Car Rental System",
      tech: "Java/OOP",
      date: "2022",
      description: "Console-based car rental management system built with object-oriented programming principles, featuring modular design and comprehensive car fleet management capabilities.",
      features: ["OOP principles", "Modular design", "Car fleet management", "Console interface", "Rental tracking"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="fade-in-up glass-effect rounded-2xl p-6 hover-glow group"
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-primary font-medium">{project.tech}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{project.date}</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button 
                    onClick={() => window.open(project.github, '_blank')}
                    className="p-2 rounded-lg glass-effect hover-glow transition-all"
                    title="View Code"
                  >
                    <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </button>
                  <button 
                    onClick={() => window.open(project.demo, '_blank')}
                    className="p-2 rounded-lg glass-effect hover-glow transition-all"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </button>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Project Features */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;