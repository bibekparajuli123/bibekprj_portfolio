const ExperienceSection = () => {
  const experiences = [
    {
      title: "US IT Sales Recruiter",
      company: "Excellent Pro Group",
      period: "Current",
      responsibilities: [
        "Executed full-cycle IT recruitment including bench, C2C/W2 placements",
        "Managed ATS/CRM systems for comprehensive candidate tracking",
        "Collaborated with vendors and clients for optimal talent placement",
        "Built strong candidate pipelines across various tech stacks",
        "Aligned vendor and hiring manager requirements for Agile/Waterfall projects",
        "Ensured compliance with recruitment standards and regulations"
      ]
    },
    {
      title: "Flutter Developer",
      company: "Self-Placed",
      period: "2023 - Present",
      responsibilities: [
        "Built cross-platform mobile applications with custom UI/UX designs",
        "Implemented robust state management using Provider, Riverpod, and Bloc",
        "Integrated Firebase services (Authentication, Firestore, Storage, Push Notifications)",
        "Applied industry best practices for code structure and performance optimization",
        "Developed responsive designs with Material Design principles",
        "Maintained clean architecture patterns for scalable app development"
      ]
    },
    {
      title: "Java Backend Developer",
      company: "Self-Taught",
      period: "2022 - Present",
      responsibilities: [
        "Mastered Core Java fundamentals and advanced concepts",
        "Built robust server-side systems using Spring Boot framework",
        "Developed RESTful APIs and microservices architecture",
        "Implemented MySQL database design for data integrity and efficiency",
        "Created secure authentication and authorization systems",
        "Documented APIs using Swagger for comprehensive development workflow",
        "Deployed applications with proper error handling and background job processing"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 violet-white-gradient">
          Professional Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="fade-in-up glass-effect rounded-2xl p-8 hover-glow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold violet-white-gradient mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl violet-white-gradient font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="violet-white-gradient leading-relaxed">
                      {responsibility}
                    </span>
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

export default ExperienceSection;