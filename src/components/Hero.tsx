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
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-Width Luxury Interior Carousel */}
      <Carousel className="absolute inset-0 w-full h-full" opts={{
      align: "start",
      loop: true
    }} plugins={[Autoplay({
      delay: 6000
    })]}>
        <CarouselContent className="h-full">
          {carouselImages.map((image, index) => <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full overflow-hidden">
                <img src={image} alt={`Luxury Interior Design ${index + 1}`} className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out hover:scale-105" />
              </div>
            </CarouselItem>)}
        </CarouselContent>
        
        {/* Elegant Navigation */}
        <CarouselPrevious className="left-8 bg-background/20 border-white/30 text-white hover:bg-primary hover:border-primary backdrop-blur-sm transition-all duration-300" />
        <CarouselNext className="right-8 bg-background/20 border-white/30 text-white hover:bg-primary hover:border-primary backdrop-blur-sm transition-all duration-300" />
      </Carousel>

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>

      {/* Static Content with Luxury Enhancements */}
      <div className="relative z-20 container-luxury">
        <div className="max-w-5xl">
          <div className="fade-in slide-up text-center">
            <h1 className="text-hero font-playfair text-white drop-shadow-2xl mb-6 animate-in">
              Transform Your
              <span className="block bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent drop-shadow-lg">Spaces & Places</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12 drop-shadow-lg">
              We create extraordinary interior experiences that blend luxury with functionality. From concept to completion, every space tells your unique story through thoughtful design and unparalleled craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 scale-in justify-center">
              <Button className="btn-luxury group hover-lift shadow-glow" asChild>
                <Link to="/portfolio">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button variant="outline" className="btn-outline-luxury group hover-lift bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-md" asChild>
                <Link to="/contact">
                  <Quote className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>

          {/* Enhanced Luxury Stats with Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto fade-in" style={{
          animationDelay: "0.6s"
        }}>
            <div className="text-center group hover-lift bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 transition-all duration-300 hover:bg-white/20">
              <div className="text-4xl font-playfair font-bold text-primary-glow drop-shadow-lg mb-2 transition-transform group-hover:scale-110">150+</div>
              <div className="text-white/90 font-medium">Projects Completed</div>
              <div className="text-white/60 text-sm mt-1">Luxury Spaces Crafted</div>
            </div>
            <div className="text-center group hover-lift bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 transition-all duration-300 hover:bg-white/20">
              <div className="text-4xl font-playfair font-bold text-primary-glow drop-shadow-lg mb-2 transition-transform group-hover:scale-110">12+</div>
              <div className="text-white/90 font-medium">Years Experience</div>
              <div className="text-white/60 text-sm mt-1">Design Excellence</div>
            </div>
            <div className="text-center group hover-lift bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 transition-all duration-300 hover:bg-white/20">
              <div className="text-4xl font-playfair font-bold text-primary-glow drop-shadow-lg mb-2 transition-transform group-hover:scale-110">98%</div>
              <div className="text-white/90 font-medium">Client Satisfaction</div>
              <div className="text-white/60 text-sm mt-1">Happy Homeowners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA with Enhanced Animation */}
      <div className="fixed bottom-8 right-8 z-50 float">
        <Button className="btn-luxury rounded-full shadow-glow hover-lift hover:shadow-elegant transition-all duration-300" asChild>
          <Link to="/contact">Free Consultation</Link>
        </Button>
      </div>
    </section>;
};
export default Hero;