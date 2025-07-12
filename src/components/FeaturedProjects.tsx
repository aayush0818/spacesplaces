
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef } from 'react';
import LazyImage from '@/components/LazyImage';

const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        sectionRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Elegant Living Space",
      category: "Residential",
      description: "Luxurious living room featuring crystal chandelier and premium ambient lighting.",
      image: "/lovable-uploads/33079f5b-2cb1-4a9c-8b2b-576ebb30018a.png",
      tags: ["Luxury Living", "Crystal Lighting", "Premium Design"]
    },
    {
      id: 2,
      title: "Contemporary Kitchen Design",
      category: "Residential",
      description: "Modern kitchen with sleek finishes and functional layout for everyday living.",
      image: "/lovable-uploads/301e6616-bd72-46d7-af39-cbd2af69e499.png",
      tags: ["Modern Kitchen", "Functional Design", "Contemporary"]
    },
    {
      id: 3,
      title: "Home Office Setup",
      category: "Residential",
      description: "Efficient workspace design promoting productivity and comfort.",
      image: "/lovable-uploads/6cacc49f-0656-415e-9433-7e2b3933a288.png",
      tags: ["Home Office", "Workspace", "Productivity"]
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/30" ref={sectionRef}>
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title font-playfair text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-luxury max-w-3xl mx-auto">
            Discover our most celebrated interior design projects that showcase our commitment 
            to excellence, innovation, and timeless elegance.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`group project-card hover-lift hover-shimmer border-0 shadow-soft overflow-hidden stagger-fade cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3] project-image-container"
                   onMouseEnter={(e) => {
                     const img = e.currentTarget.querySelector('img');
                     if (img) {
                       img.style.transform = 'scale(1.1) rotate(1deg)';
                     }
                   }}
                   onMouseLeave={(e) => {
                     const img = e.currentTarget.querySelector('img');
                     if (img) {
                       img.style.transform = 'scale(1) rotate(0deg)';
                     }
                   }}
              >
                <LazyImage
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-out"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <Button variant="outline" className="bg-background/95 hover:bg-background backdrop-blur-sm shadow-lg">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="absolute top-4 left-4 transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6 transform group-hover:translate-y-[-2px] transition-transform duration-300">
                <h3 className="text-xl font-playfair font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tag}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium transform group-hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                      style={{ transitionDelay: `${tagIndex * 50}ms` }}
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
          <Button className="btn-outline-luxury group hover:shadow-glow">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
