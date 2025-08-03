
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import LazyImage from '@/components/LazyImage';
import ImageViewer from '@/components/ImageViewer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const FeaturedProjects = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const projects = [
    {
      id: 1,
      title: "Elegant Living Space",
      category: "Residential",
      description: "Luxurious living room featuring crystal chandelier and premium ambient lighting.",
      image: "/lovable-uploads/382c0b5b-f081-4cec-bce9-e4122ae28d96.png",
    },
    {
      id: 2,
      title: "Contemporary Modular Kitchen",
      category: "Modular Kitchen",
      description: "Sleek L-shaped kitchen design with marble backsplash and modern finishes.",
      image: "/lovable-uploads/642a6353-6879-44e8-8701-3d609e3c800e.png",
    },
    {
      id: 3,
      title: "Luxury Bedroom Suite",
      category: "Residential",
      description: "Sophisticated bedroom design with custom wardrobes and ambient lighting.",
      image: "/lovable-uploads/5427d652-158b-44f6-b446-46b0921e71e3.png",
    },
    {
      id: 4,
      title: "Modern Study & TV Unit Design",
      category: "Study Units",
      description: "Ergonomic workspace with integrated storage and contemporary TV unit design.",
      image: "/lovable-uploads/892cf518-b06c-442a-8434-972b53f07077.png",
    },
    {
      id: 5,
      title: "Executive Office Interior",
      category: "Commercial",
      description: "Professional workspace with premium finishes and modern design elements.",
      image: "/lovable-uploads/862a58fc-43aa-49ec-b26f-a361b509d77d.png",
    },
    {
      id: 6,
      title: "Premium Modular Kitchen",
      category: "Modular Kitchen",
      description: "Modern kitchen with wood accents, island design, and premium appliances.",
      image: "/lovable-uploads/83ce39cf-6c94-44c4-9be2-eb35ee35728b.png",
    }
  ];

  const handleImageClick = (image: string, title: string) => {
    setSelectedImage({ src: image, alt: title });
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="portfolio" className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our most celebrated interior design projects that showcase our commitment 
              to excellence, innovation, and timeless elegance.
            </p>
          </div>

          {/* Projects Carousel */}
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card 
                      className="group project-card hover-lift border-0 shadow-soft overflow-hidden cursor-pointer"
                      onClick={() => handleImageClick(project.image, project.title)}
                    >
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <LazyImage
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={90}
                        />
                        
                        {/* Overlay with gradient and text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        
                        {/* Category badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-md backdrop-blur-sm">
                            {project.category}
                          </span>
                        </div>
                        
                        {/* Text overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                          <h3 className="text-xl md:text-2xl font-playfair font-medium mb-2 group-hover:text-primary/90 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-white/90 leading-relaxed text-sm md:text-base">
                            {project.description}
                          </p>
                        </div>
                        
                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      <ImageViewer
        src={selectedImage?.src || ''}
        alt={selectedImage?.alt || ''}
        isOpen={!!selectedImage}
        onClose={closeImageViewer}
      />
    </>
  );
};

export default FeaturedProjects;
