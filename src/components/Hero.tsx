import { ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import heroImage from '@/assets/hero-interior.jpg';
import bedroomImage from '@/assets/bedroom-project.jpg';
import kitchenImage from '@/assets/kitchen-project.jpg';
import officeImage from '@/assets/office-project.jpg';

const Hero = () => {
  const carouselImages = [
    {
      image: heroImage,
      title: "Transform Your",
      subtitle: "Space & Place",
      description: "We create extraordinary interior experiences that blend luxury with functionality. From concept to completion, every space tells your unique story through thoughtful design."
    },
    {
      image: bedroomImage,
      title: "Luxury",
      subtitle: "Bedrooms",
      description: "Create your perfect sanctuary with our bespoke bedroom designs that combine comfort with sophisticated style."
    },
    {
      image: kitchenImage,
      title: "Modern",
      subtitle: "Kitchens",
      description: "Functional and beautiful kitchen spaces designed for both culinary creativity and social gatherings."
    },
    {
      image: officeImage,
      title: "Executive",
      subtitle: "Offices",
      description: "Professional workspaces that inspire productivity while reflecting your company's values and vision."
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-Width Luxury Interior Carousel */}
      <Carousel
        className="absolute inset-0 w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent className="h-full">
          {carouselImages.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src={slide.image}
                  alt={`Luxury ${slide.subtitle} Design`}
                  className="w-full h-full object-cover scale-105 transition-transform duration-[8000ms] ease-out hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Elegant Navigation */}
        <CarouselPrevious className="left-8 bg-background/20 border-white/30 text-white hover:bg-primary hover:border-primary backdrop-blur-sm transition-all duration-300" />
        <CarouselNext className="right-8 bg-background/20 border-white/30 text-white hover:bg-primary hover:border-primary backdrop-blur-sm transition-all duration-300" />
      </Carousel>

      {/* Content with Synchronized Text Carousel */}
      <div className="relative z-20 container-luxury">
        <div className="max-w-4xl">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 6000,
              }),
            ]}
          >
            <CarouselContent>
              {carouselImages.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="fade-in slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <h1 className="text-hero font-playfair text-white drop-shadow-2xl mb-6 animate-in">
                      {slide.title}
                      <span className="block text-primary-glow drop-shadow-lg">{slide.subtitle}</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mb-8 drop-shadow-lg">
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12 scale-in" style={{ animationDelay: `${index * 0.3}s` }}>
                      <Button className="btn-luxury group hover-lift">
                        Explore Our Work
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                      
                      <Button variant="outline" className="btn-outline-luxury group hover-lift bg-white/10 border-white/50 text-white hover:bg-white hover:text-primary">
                        <Quote className="mr-2 h-5 w-5" />
                        Get Free Quote
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center group hover-lift">
              <div className="text-3xl font-playfair font-bold text-primary-glow drop-shadow-lg mb-2 transition-transform group-hover:scale-110">150+</div>
              <div className="text-sm text-white/80 drop-shadow">Projects Completed</div>
            </div>
            <div className="text-center group hover-lift">
              <div className="text-3xl font-playfair font-bold text-primary-glow drop-shadow-lg mb-2 transition-transform group-hover:scale-110">12+</div>
              <div className="text-sm text-white/80 drop-shadow">Years Experience</div>
            </div>
            <div className="text-center group hover-lift">
              <div className="text-3xl font-playfair font-bold text-primary-glow drop-shadow-lg mb-2 transition-transform group-hover:scale-110">98%</div>
              <div className="text-sm text-white/80 drop-shadow">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA with Enhanced Animation */}
      <div className="fixed bottom-8 right-8 z-50 float">
        <Button className="btn-luxury rounded-full shadow-glow hover-lift hover:shadow-elegant transition-all duration-300">
          Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default Hero;