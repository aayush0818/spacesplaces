
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import rustomjeeLogo from '@/assets/rustomjee-logo.jpg';
import lodhaLogo from '@/assets/lodha-logo.jpg';
import godrejLogo from '@/assets/godrej-logo.jpg';
import kalpataruLogo from '@/assets/kalpataru-logo.jpg';

const Clients = () => {
  const clients = [
    {
      name: "Rustomjee",
      logo: rustomjeeLogo,
    },
    {
      name: "Lodha Group",
      logo: lodhaLogo,
    },
    {
      name: "Godrej Properties",
      logo: godrejLogo,
    },
    {
      name: "Kalpataru",
      logo: kalpataruLogo,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-foreground mb-6">
            Our Trusted Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're proud to have worked with some of India's most prestigious real estate developers, 
            creating exceptional interior experiences for their premium projects.
          </p>
        </div>

        {/* Client Logos Carousel */}
        <div className="relative">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent className="-ml-4">
              {clients.map((client) => (
                <CarouselItem key={client.name} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <div className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 hover-lift group">
                    <div className="flex items-center justify-center h-20 mb-4">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-center font-playfair font-medium text-foreground group-hover:text-primary transition-colors">
                      {client.name}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-4 bg-background/90 border-border hover:bg-primary hover:border-primary hover:text-primary-foreground" />
            <CarouselNext className="right-4 bg-background/90 border-border hover:bg-primary hover:border-primary hover:text-primary-foreground" />
          </Carousel>
        </div>

        {/* Trust Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-background rounded-2xl px-8 py-6 shadow-soft">
            <div className="text-center">
              <div className="text-2xl font-playfair font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Projects with Premium Developers</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-playfair font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Years of Partnership</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-playfair font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
