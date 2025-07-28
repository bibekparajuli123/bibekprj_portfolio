import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-gradient relative">
      <div className="container mx-auto px-6 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold violet-white-gradient leading-tight">
                Hello! I Am{' '}
                <span className="violet-white-gradient block">
                  Bibek Parajuli.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl gray-text font-light max-w-2xl">
                Aspiring software engineer and Java developer.
              </p>
            </div>

            {/* Motivational Quote */}
            <div className="space-y-3 max-w-3xl">
              <blockquote className="text-lg md:text-xl violet-white-gradient italic font-light">
                "Strive not to be a success, but rather to be of value."
              </blockquote>
              <p className="text-base gray-text">
                Also I am working as a Technical Recruiter in US IT Staffing.
              </p>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="profile-glow w-80 h-80">
                <img 
                  src="/lovable-uploads/ee56a0b5-859e-4872-83ba-0ef2b23cb050.png"
                  alt="Bibek Parajuli"
                />
              </div>
            </div>
          </div>
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