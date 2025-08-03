import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const Clients = () => {
  const clients = [{
    name: "Hafele",
    logo: "/lovable-uploads/35bb6429-6a56-47cb-a18e-e8177513e430.png"
  }, {
    name: "Hettich",
    logo: "/lovable-uploads/99f9d281-af96-4536-b17a-1013e86823b4.png"
  }, {
    name: "Gyproc",
    logo: "/lovable-uploads/c6aa735f-68ef-4ca7-b766-4c5eaa71aba9.png"
  }, {
    name: "Century 21",
    logo: "/lovable-uploads/5b1a5a20-0d10-4637-9aa9-181e4ee3065d.png"
  }];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Brand Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work with industry-leading brands to deliver exceptional quality and innovation
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
