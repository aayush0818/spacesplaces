import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import kitchenProject from '@/assets/kitchen-project.jpg';
import bedroomProject from '@/assets/bedroom-project.jpg';
import officeProject from '@/assets/office-project.jpg';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Transformation",
      category: "Residential",
      description: "Complete modular kitchen redesign with custom cabinetry and premium finishes.",
      image: kitchenProject,
      tags: ["Modular Kitchen", "Custom Design", "Luxury Finishes"]
    },
    {
      id: 2,
      title: "Serene Master Bedroom",
      category: "Residential",
      description: "Elegant bedroom suite with custom wardrobes and ambient lighting solutions.",
      image: bedroomProject,
      tags: ["Bedroom Design", "Custom Furniture", "Lighting"]
    },
    {
      id: 3,
      title: "Corporate Office Redesign",
      category: "Commercial",
      description: "Modern office space promoting productivity and employee well-being.",
      image: officeProject,
      tags: ["Commercial", "Workspace", "Modern Design"]
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
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
              className={`group hover-lift hover-shimmer border-0 shadow-soft overflow-hidden stagger-fade`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="bg-background/90 hover:bg-background">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-medium text-foreground mb-2">
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
          <Button className="btn-outline-luxury group">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;