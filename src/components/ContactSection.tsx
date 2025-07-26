import { Mail, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "parajulibibek275@gmail.com",
      link: "mailto:parajulibibek275@gmail.com",
      color: "text-accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/bibekprj/",
      color: "text-primary"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@bibek__parajuli2",
      link: "https://www.instagram.com/bibek__parajuli2/",
      color: "text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Ready to collaborate or discuss opportunities? Feel free to reach out through any of these channels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            
            return (
              <a 
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="fade-in-up glass-effect rounded-2xl p-8 hover-glow group transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full glass-effect flex items-center justify-center group-hover:scale-110 transition-transform ${method.color}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {method.label}
                </h3>
                
                <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Open to full-time opportunities, freelance projects, and collaboration
          </p>
          <a 
            href="mailto:parajulibibek275@gmail.com"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover-glow transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;