import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section for Services Page */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20"></div>
        </div>
        
        <div className="container-luxury relative">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-foreground mb-6 animate-in leading-tight">
              Interior Design Services for <span className="text-primary">Homes, Workspaces & More</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 slide-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "0.2s" }}>
              At Spaces & Places, every design begins with one goal — to create environments that enhance how you live, work, and feel. 
              Whether you're building from scratch, renovating, or reimagining, we offer comprehensive interior design services 
              backed by creativity, precision, and care.
            </p>
            <div className="flex justify-center scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-primary font-medium">✨ Complete Interior Design Solutions</span>
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