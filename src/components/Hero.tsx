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
      {/* Carousel Background */}
      <Carousel
        className="absolute inset-0"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {carouselImages.map((slide, index) => (
            <CarouselItem key={index}>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content */}
      <div className="relative z-10 container-luxury">
        <div className="max-w-4xl">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent>
              {carouselImages.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="fade-in">
                    <h1 className="text-hero font-playfair text-foreground mb-6">
                      {slide.title}
                      <span className="block text-primary">{slide.subtitle}</span>
                    </h1>
                    
                    <p className="text-luxury max-w-2xl mb-8">
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                      <Button className="btn-luxury group">
                        Explore Our Work
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                      
                      <Button variant="outline" className="btn-outline-luxury group">
                        <Quote className="mr-2 h-5 w-5" />
                        Get Free Quote
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-primary mb-2">12+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button className="btn-luxury rounded-full shadow-elegant float">
          Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default Hero;