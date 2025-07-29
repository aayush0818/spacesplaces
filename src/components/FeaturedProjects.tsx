
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LazyImage from '@/components/LazyImage';
import ImageViewer from '@/components/ImageViewer';

const FeaturedProjects = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const projects = [
    {
      id: 1,
      title: "Living Spaces",
      category: "Residential",
      description: "Luxurious living rooms featuring crystal chandeliers and premium ambient lighting.",
      images: [
        "/lovable-uploads/33079f5b-2cb1-4a9c-8b2b-576ebb30018a.png",
        "/lovable-uploads/90f00acc-8701-4177-99c9-2f6c5bb409ef.png",
        "/lovable-uploads/8da9d656-24a0-4167-86f9-56957330650a.png",
        "/lovable-uploads/fcc525e6-b663-4098-b889-1bb10d0803ed.png"
      ],
      tags: ["Luxury Living", "Crystal Lighting", "Premium Design"]
    },
    {
      id: 2,
      title: "Kitchen Designs",
      category: "Residential",
      description: "Modern kitchens with sleek finishes and functional layouts for everyday living.",
      images: [
        "/lovable-uploads/301e6616-bd72-46d7-af39-cbd2af69e499.png",
        "/lovable-uploads/6758e494-f0c1-4824-89b5-b93e2eda51f3.png",
        "/lovable-uploads/37c89905-d8f3-4a2b-b2aa-2eda3505ce72.png"
      ],
      tags: ["Modern Kitchen", "Functional Design", "Contemporary"]
    },
    {
      id: 3,
      title: "Office Spaces",
      category: "Commercial",
      description: "Efficient workspace designs promoting productivity and comfort.",
      images: [
        "/lovable-uploads/6cacc49f-0656-415e-9433-7e2b3933a288.png",
        "/lovable-uploads/a44d1cfb-6e31-49d2-a279-6e1ea332fca2.png",
        "/lovable-uploads/bb0abc41-9d61-4c3b-8098-5e910afa819d.png"
      ],
      tags: ["Home Office", "Workspace", "Productivity"]
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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group project-card hover-lift hover-shimmer border-0 shadow-soft overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {project.images.map((image, imageIndex) => (
                        <CarouselItem key={imageIndex}>
                          <div 
                            className="relative w-full h-full cursor-pointer"
                            onClick={() => handleImageClick(image, `${project.title} - Image ${imageIndex + 1}`)}
                          >
                            <LazyImage
                              src={image} 
                              alt={`${project.title} - Image ${imageIndex + 1}`}
                              className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                              priority={index === 0 && imageIndex === 0}
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              quality={90}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                <Button variant="outline" className="bg-background/95 hover:bg-background backdrop-blur-sm shadow-lg">
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  View Project
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Carousel>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-md">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center">
            <Button className="btn-outline-luxury group hover:shadow-glow" asChild>
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-2" />
              </Link>
            </Button>
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
