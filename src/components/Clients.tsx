import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import rustomjeeLogo from '@/assets/rustomjee-logo.jpg';
import lodhaLogo from '@/assets/lodha-logo.jpg';
import godrejLogo from '@/assets/godrej-logo.jpg';
import kalpataruLogo from '@/assets/kalpataru-logo.jpg';
const Clients = () => {
  const clients = [{
    name: "Rustomjee",
    logo: rustomjeeLogo
  }, {
    name: "Lodha Group",
    logo: lodhaLogo
  }, {
    name: "Godrej Properties",
    logo: godrejLogo
  }, {
    name: "Kalpataru",
    logo: kalpataruLogo
  }];
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by Leading Brands</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've had the privilege to work with some of Mumbai's most prestigious real estate developers
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-4">
                  <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-24">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
export default Clients;