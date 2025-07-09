import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section for Services Page */}
      <section className="relative pt-32 pb-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20"></div>
        </div>
        
        <div className="container-luxury relative">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-hero font-playfair text-foreground mb-6 animate-in">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-luxury mb-8 slide-up" style={{ animationDelay: "0.2s" }}>
              From concept to completion, we provide comprehensive interior design services 
              that transform your vision into extraordinary living spaces.
            </p>
            <div className="flex justify-center scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-primary font-medium">✨ Premium Design Solutions</span>
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