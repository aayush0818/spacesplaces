
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import Services from '@/components/Services';

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
      <div className="w-full">
        <Navigation />
        
        {/* Hero Section */}
        <Hero />

        {/* Main Content Sections */}
        <main className="overflow-hidden">
          {/* Featured Projects Section */}
          <FeaturedProjects />

          {/* Services Section */}
          <Services />


          {/* Testimonials Section */}
          <Testimonials />

          {/* Contact CTA Section */}
          <ContactCTA />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
