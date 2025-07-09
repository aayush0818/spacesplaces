import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <Services />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
