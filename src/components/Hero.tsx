import { ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import heroImage from '@/assets/hero-interior.jpg';
import bedroomImage from '@/assets/bedroom-project.jpg';
import kitchenImage from '@/assets/kitchen-project.jpg';
import officeImage from '@/assets/office-project.jpg';
const Hero = () => {
  const carouselImages = [heroImage, bedroomImage, kitchenImage, officeImage];
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Full-Width Luxury Interior Carousel */}
      <Carousel className="absolute inset-0 w-full h-full" opts={{
        align: "start",
        loop: true
      }} plugins={[Autoplay({
        delay: 6000
      })]}>
        <CarouselContent className="h-full">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src={image} 
                  alt={`Luxury Interior Design ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out hover:scale-105" 
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Elegant Navigation */}
        <CarouselPrevious className="left-4 md:left-8 bg-black/40 border-white/30 text-white hover:bg-primary hover:border-primary backdrop-blur-sm transition-all duration-300 z-30" />
        <CarouselNext className="right-4 md:right-8 bg-black/40 border-white/30 text-white hover:bg-primary hover:border-primary backdrop-blur-sm transition-all duration-300 z-30" />
      </Carousel>

      {/* Subtle Gradient Overlays for Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-black/40 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10"></div>

      {/* Static Content with Enhanced Positioning */}
      <div className="relative z-20 container-luxury px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in slide-up text-center">
            {/* Hero Title with Better Contrast */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 animate-in leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent mt-2 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Spaces & Places
              </span>
            </h1>
            
            {/* Description with Enhanced Readability */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-medium filter drop-shadow-lg">
                We create extraordinary interior experiences that blend luxury with functionality. From concept to completion, every space tells your unique story through thoughtful design and unparalleled craftsmanship.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 scale-in justify-center">
              <Button className="btn-luxury group hover-lift shadow-glow text-lg px-8 py-3" asChild>
                <Link to="/portfolio">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="group hover-lift bg-white/15 border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-md text-lg px-8 py-3 font-medium" 
                asChild
              >
                <Link to="/contact">
                  <Quote className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>

          {/* Enhanced Stats Section with Better Visibility */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center group hover-lift bg-black/25 backdrop-blur-md border border-white/30 rounded-xl p-6 transition-all duration-300 hover:bg-black/35 hover:border-primary/50">
              <div className="text-4xl lg:text-5xl font-playfair font-bold text-primary-glow mb-2 transition-transform group-hover:scale-110 filter drop-shadow-lg">150+</div>
              <div className="text-white font-medium text-lg">Projects Completed</div>
              <div className="text-white/70 text-sm mt-1">Luxury Spaces Crafted</div>
            </div>
            <div className="text-center group hover-lift bg-black/25 backdrop-blur-md border border-white/30 rounded-xl p-6 transition-all duration-300 hover:bg-black/35 hover:border-primary/50">
              <div className="text-4xl lg:text-5xl font-playfair font-bold text-primary-glow mb-2 transition-transform group-hover:scale-110 filter drop-shadow-lg">12+</div>
              <div className="text-white font-medium text-lg">Years Experience</div>
              <div className="text-white/70 text-sm mt-1">Design Excellence</div>
            </div>
            <div className="text-center group hover-lift bg-black/25 backdrop-blur-md border border-white/30 rounded-xl p-6 transition-all duration-300 hover:bg-black/35 hover:border-primary/50">
              <div className="text-4xl lg:text-5xl font-playfair font-bold text-primary-glow mb-2 transition-transform group-hover:scale-110 filter drop-shadow-lg">98%</div>
              <div className="text-white font-medium text-lg">Client Satisfaction</div>
              <div className="text-white/70 text-sm mt-1">Happy Homeowners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA with Enhanced Animation */}
      <div className="fixed bottom-8 right-4 md:right-8 z-50 float">
        <Button className="btn-luxury rounded-full shadow-glow hover-lift hover:shadow-elegant transition-all duration-300 px-6 py-3" asChild>
          <Link to="/contact">Free Consultation</Link>
        </Button>
      </div>
    </section>
  );
};
export default Hero;