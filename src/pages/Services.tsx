import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import officeImage from '@/assets/office-project.jpg';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section for Services Page */}
      <section className="relative pt-32 pb-16 min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={officeImage}
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
        </div>
        
        <div className="container-luxury relative z-10">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-hero font-playfair text-white drop-shadow-2xl mb-6 animate-in">
              Our <span className="text-primary-glow">Services</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 slide-up drop-shadow-lg" style={{ animationDelay: "0.2s" }}>
              From concept to completion, we provide comprehensive interior design services 
              that transform your vision into extraordinary living spaces.
            </p>
            <div className="flex justify-center scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-primary-glow font-medium">✨ Premium Design Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;