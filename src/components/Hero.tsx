import { ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import LazyImage from '@/components/LazyImage';
import { useCountUp } from '@/hooks/useCountUp';
import heroImage from '@/assets/hero-interior.jpg';
import bedroomImage from '@/assets/bedroom-project.jpg';
import kitchenImage from '@/assets/kitchen-project.jpg';
import officeImage from '@/assets/office-project.jpg';
const Hero = () => {
  const carouselImages = [heroImage, bedroomImage, kitchenImage, officeImage];
  
  // Count up animations for stats
  const { count: projectsCount, elementRef: projectsRef } = useCountUp({ end: 150, duration: 2500 });
  const { count: yearsCount, elementRef: yearsRef } = useCountUp({ end: 5, duration: 2000 });
  const { count: satisfactionCount, elementRef: satisfactionRef } = useCountUp({ end: 100, duration: 2300 });
  return <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Carousel */}
      <Carousel className="absolute inset-0 w-full h-full" opts={{
      align: "start",
      loop: true
    }} plugins={[Autoplay({
      delay: 6000
    })]}>
        <CarouselContent className="h-full">
          {carouselImages.map((image, index) => <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full">
                <LazyImage src={image} alt={`Luxury Interior Design ${index + 1}`} className="w-full h-full object-cover" priority={index === 0} sizes="100vw" quality={95} />
              </div>
            </CarouselItem>)}
        </CarouselContent>
        
        <CarouselPrevious className="left-4 bg-black/40 border-white/30 text-white hover:bg-primary hover:border-primary backdrop-blur-sm transition-all duration-300 z-30" />
        <CarouselNext className="right-4 bg-black/40 border-white/30 text-white hover:bg-primary hover:border-primary backdrop-blur-sm transition-all duration-300 z-30" />
      </Carousel>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50 z-10"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-end justify-center px-4 pb-12 sm:pb-16 md:pb-20">
        <div className="w-full max-w-6xl mx-auto text-center">

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center">
            <Button className="btn-luxury group hover-lift shadow-glow text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3" asChild>
              <Link to="/portfolio">
                Explore Our Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button variant="outline" className="group hover-lift bg-white/15 border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-md text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 font-medium" asChild>
              <Link to="/contact">
                <Quote className="mr-2 h-4 w-4" />
                Get Free Quote
              </Link>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
            <div ref={projectsRef}>
              <Link to="/portfolio" className="text-center group hover-lift bg-black/30 backdrop-blur-md border border-white/30 rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-black/40 hover:border-primary/50 cursor-pointer block">
                <div className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-primary-glow mb-1 sm:mb-2 transition-transform group-hover:scale-110 drop-shadow-lg">{projectsCount}+</div>
                <div className="text-white font-semibold text-xs sm:text-sm mb-1">Projects Completed</div>
                <div className="text-white/80 text-xs hidden sm:block">Luxury Spaces Crafted</div>
              </Link>
            </div>
            <div ref={yearsRef}>
              <Link to="/about" className="text-center group hover-lift bg-black/30 backdrop-blur-md border border-white/30 rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-black/40 hover:border-primary/50 cursor-pointer block">
                <div className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-primary-glow mb-1 sm:mb-2 transition-transform group-hover:scale-110 drop-shadow-lg">{yearsCount}+</div>
                <div className="text-white font-semibold text-xs sm:text-sm mb-1">Years Experience</div>
                <div className="text-white/80 text-xs hidden sm:block">Design Excellence</div>
              </Link>
            </div>
            <div 
              ref={satisfactionRef} 
              className="text-center group hover-lift bg-black/30 backdrop-blur-md border border-white/30 rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-black/40 hover:border-primary/50 cursor-pointer"
              onClick={() => {
                const testimonialsSection = document.getElementById('testimonials');
                if (testimonialsSection) {
                  testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-primary-glow mb-1 sm:mb-2 transition-transform group-hover:scale-110 drop-shadow-lg">{satisfactionCount}%</div>
              <div className="text-white font-semibold text-xs sm:text-sm mb-1">Client Satisfaction</div>
              <div className="text-white/80 text-xs hidden sm:block">Happy Homeowners</div>
            </div>
          </div>
        </div>
      </div>

    </section>;
};
export default Hero;