
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <>
      <SEO 
        title="Spaces & Places - Premier Interior Design Services in Mumbai"
        description="Transform your space with Spaces & Places, Mumbai's leading interior design company. Residential & commercial design, custom furniture, 3D layouts. 150+ projects completed."
        keywords="interior design mumbai, residential interior design, commercial interior design, custom furniture, 3D layouts, home renovation, office design"
        url="https://spacesandplaces.com"
      />
      <div className="w-full overflow-x-hidden">
        <Navigation />
        
        {/* Hero Section - Full Screen */}
        <section className="relative">
          <Hero />
        </section>

        {/* Main Content Sections */}
        <main className="relative z-10">
          {/* Featured Projects Section */}
          <section className="relative">
            <FeaturedProjects />
          </section>

          {/* Services Section */}
          <section className="relative">
            <Services />
          </section>

          {/* Clients Section */}
          <section className="relative">
            <Clients />
          </section>

          {/* Testimonials Section */}
          <section className="relative">
            <Testimonials />
          </section>

          {/* Contact CTA Section */}
          <section className="relative">
            <ContactCTA />
          </section>
        </main>

        {/* Footer */}
        <footer className="relative">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Index;
