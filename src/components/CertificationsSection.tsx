import { ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Java Course - Mastering the Fundamentals",
      provider: "Professional Development",
      link: "#",
      description: "Comprehensive Java programming course covering core concepts"
    },
    {
      title: "Data Structures and Algorithms",
      provider: "Scaler",
      link: "#",
      description: "Advanced DSA concepts and problem-solving techniques"
    },
    {
      title: "Inbound Marketing Certification Course",
      provider: "HubSpot",
      link: "#",
      description: "Digital marketing strategies and customer acquisition"
    },
    {
      title: "Create and Design Digital Products using Canva",
      provider: "Design Institute",
      link: "#",
      description: "Digital design and creative content development"
    },
    {
      title: "TCS iON Career Edge - Young Professional",
      provider: "TCS",
      link: "#",
      description: "Professional development and industry readiness"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="fade-in-up glass-effect rounded-2xl p-6 hover-glow group cursor-pointer"
              onClick={() => window.open(cert.link, '_blank')}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {cert.provider}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;