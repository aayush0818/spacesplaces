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
      <div>
        <Navigation />
        <Hero />
        <FeaturedProjects />
        <Services />
        <Clients />
        <Testimonials />
        <ContactCTA />
        <Footer />
      </div>
    </>
  );
};

export default Index;
