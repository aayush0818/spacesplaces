import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
const Clients = () => {
  const clients = [{
    name: "Hafele",
    logo: "/lovable-uploads/2ff1727d-23f1-413e-b38f-5e0194c0934a.png"
  }, {
    name: "Hettich",
    logo: "/lovable-uploads/137993d4-4736-473d-a2b1-b81fab964aeb.png"
  }, {
    name: "Gyproc",
    logo: "/lovable-uploads/451df624-589e-4d35-8bfa-479a52a84aa8.png"
  }, {
    name: "Century",
    logo: "/lovable-uploads/5f6bb806-a4d1-4138-89a1-de25a4c6b816.png"
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