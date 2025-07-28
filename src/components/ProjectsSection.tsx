import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Poshak - Nepali Traditional Fashion App",
      tech: "Flutter/Dart",
      date: "June 2025",
      description: "An e-commerce app for traditional Nepali attire, featuring authentication, wishlists, and a custom UI/theme.",
      github: "#"
    },
    {
      title: "Khaja Express - Nepali Food Ordering App", 
      tech: "Flutter/Dart",
      date: "May 2025",
      description: "A food delivery app for browsing and ordering Nepali cuisine, with login/signup, shopping cart, and coupon features.",
      github: "#"
    },
    {
      title: "Car Rental System",
      tech: "Java/OOP", 
      date: "Nov 2024",
      description: "A console-based car rental application applying key Object-Oriented Programming principles like encapsulation, inheritance, and polymorphism.",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 violet-white-gradient">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="fade-in-up glass-effect rounded-2xl overflow-hidden hover-glow group"
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-lg font-medium">600 × 400</span>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold violet-white-gradient mb-3">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                    {project.tech}
                  </span>
                  <span className="px-3 py-1 bg-secondary/50 text-muted-foreground rounded-full text-xs">
                    {project.date}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <button 
                  onClick={() => window.open(project.github, '_blank')}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-lg glass-effect hover-glow transition-all text-sm font-medium violet-white-gradient"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;