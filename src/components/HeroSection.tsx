import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative hero-gradient">
      <div className="text-center space-y-8 px-6">
        {/* Profile Image */}
        <div className="relative inline-block">
          <div className="profile-glow w-48 h-48 mx-auto">
            <img 
              src="/lovable-uploads/ee56a0b5-859e-4872-83ba-0ef2b23cb050.png"
              alt="Bibek Parajuli"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Hello! I Am{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Bibek Parajuli
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            Aspiring <span className="text-primary font-medium">Software Engineer</span> and{' '}
            <span className="text-accent font-medium">Java Developer</span>
          </p>
        </div>

        {/* Motivational Quote */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <blockquote className="text-lg md:text-xl text-foreground/80 italic font-light">
            "Code is like humor. When you have to explain it, it's bad."
          </blockquote>
          <p className="text-base text-muted-foreground">
            Passionate about creating efficient solutions and connecting talent with opportunities
          </p>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-arrow hover-glow p-3 rounded-full glass-effect"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default HeroSection;