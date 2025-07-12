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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 animate-in leading-tight">
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
              <div className="text-4xl lg:text-5xl font-montserrat font-bold text-primary-glow mb-2 transition-transform group-hover:scale-110 filter drop-shadow-lg">150+</div>
              <div className="text-white font-medium text-lg">Projects Completed</div>
              <div className="text-white/70 text-sm mt-1">Luxury Spaces Crafted</div>
            </div>
            <div className="text-center group hover-lift bg-black/25 backdrop-blur-md border border-white/30 rounded-xl p-6 transition-all duration-300 hover:bg-black/35 hover:border-primary/50">
              <div className="text-4xl lg:text-5xl font-montserrat font-bold text-primary-glow mb-2 transition-transform group-hover:scale-110 filter drop-shadow-lg">12+</div>
              <div className="text-white font-medium text-lg">Years Experience</div>
              <div className="text-white/70 text-sm mt-1">Design Excellence</div>
            </div>
            <div className="text-center group hover-lift bg-black/25 backdrop-blur-md border border-white/30 rounded-xl p-6 transition-all duration-300 hover:bg-black/35 hover:border-primary/50">
              <div className="text-4xl lg:text-5xl font-montserrat font-bold text-primary-glow mb-2 transition-transform group-hover:scale-110 filter drop-shadow-lg">98%</div>
              <div className="text-white font-medium text-lg">Client Satisfaction</div>
              <div className="text-white/70 text-sm mt-1">Happy Homeowners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTAs */}
      {/* Free Consultation - Bottom Left */}
      <div className="fixed bottom-8 left-4 md:left-8 z-50 float">
        <Button className="btn-luxury rounded-full shadow-glow hover-lift hover:shadow-elegant transition-all duration-300 px-6 py-3" asChild>
          <Link to="/contact">Free Consultation</Link>
        </Button>
      </div>

      {/* WhatsApp - Bottom Right */}
      <div className="fixed bottom-8 right-4 md:right-8 z-50 float">
        <Button className="bg-[#25D366] hover:bg-[#128C7E] rounded-full p-4 shadow-glow hover-lift hover:shadow-elegant transition-all duration-300" asChild>
          <a href="https://wa.me/+919876543210" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 175.216 175.552" className="w-6 h-6 text-white fill-current">
              <path d="M146.064 29.152C130.368 13.456 108.832 4.672 86.704 4.672c-44.256 0-80.224 35.968-80.224 80.224 0 14.144 3.696 27.936 10.736 40.048L6.64 170.88l47.248-12.384c11.696 6.384 24.864 9.744 38.384 9.744h.032c44.224 0 80.192-35.968 80.192-80.224 0-21.44-8.352-41.584-23.536-56.8l.064-.064zm-59.36 123.392h-.032c-11.968 0-23.712-3.216-33.968-9.296l-2.432-1.44-25.312 6.64 6.752-24.672-1.584-2.528c-6.688-10.624-10.208-22.912-10.208-35.632 0-36.832 29.984-66.816 66.848-66.816 17.856 0 34.656 6.944 47.296 19.552 12.64 12.608 19.584 29.408 19.584 47.264-.032 36.864-30.016 66.848-66.88 66.848l-.064.08z"/>
              <path d="M125.888 103.264c-2.016-1.008-11.936-5.888-13.792-6.56s-3.2-1.008-4.544 1.008c-1.344 2.016-5.216 6.56-6.4 7.904-1.152 1.344-2.304 1.52-4.32.512s-8.416-3.104-16.032-9.888c-5.92-5.28-9.92-11.808-11.072-13.824s-.128-3.104.88-4.096c.912-.896 2.016-2.304 3.024-3.456s1.344-2.016 2.016-3.36c.672-1.344.336-2.528-.176-3.536s-4.544-10.944-6.224-14.976c-1.632-3.936-3.296-3.392-4.544-3.456-.176 0-2.688-.176-5.12-.176s-4.672.672-7.136 3.36c-2.464 2.688-9.408 9.2-9.408 22.432s9.632 26.016 10.976 27.808c1.344 1.792 18.944 28.928 45.888 40.576 6.4 2.784 11.392 4.448 15.296 5.696 6.432 2.048 12.288 1.76 16.912 1.072 5.152-.768 11.936-4.88 13.616-9.584s1.68-8.752.032-9.6c-1.648-.816-1.664-.832-3.68-1.84z"/>
            </svg>
          </a>
        </Button>
      </div>
    </section>
  );
};
export default Hero;