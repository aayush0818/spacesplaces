import { Home, Building, Sofa, ChefHat, Paintbrush, BookOpen, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      icon: Home,
      title: "Residential Interiors",
      subtitle: "Create a space that feels like you",
      description: "Transform your home into a sanctuary that reflects your personality and lifestyle with thoughtful design."
    },
    {
      icon: Building,
      title: "Commercial Spaces", 
      subtitle: "Designs that work for your business — and your brand",
      description: "Professional environments that boost productivity while expressing your company's identity and values."
    },
    {
      icon: Sofa,
      title: "Custom Furniture",
      subtitle: "Tailor-made pieces that elevate your space and purpose",
      description: "Bespoke furniture designed specifically for your space, lifestyle, and functional requirements."
    },
    {
      icon: ChefHat,
      title: "Modular Kitchens",
      subtitle: "Ergonomic layouts with beautiful finishes built to last",
      description: "Smart kitchen solutions that blend functionality with style for the heart of your home."
    },
    {
      icon: Paintbrush,
      title: "Wall Treatments",
      subtitle: "Add texture, mood, and design depth",
      description: "Transform walls into focal points with textures, colors, and materials that speak your style."
    },
    {
      icon: BookOpen,
      title: "Study Units",
      subtitle: "Ergonomic, elegant workspaces",
      description: "Focused environments designed to boost productivity and creativity in compact, organized spaces."
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-foreground mb-6">
            Our Expertise, Tailored to You
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Design solutions for homes, workspaces, and everything in between.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service) => {
            const IconComponent = service.icon;
            
            return (
              <Card key={service.title} className="group hover-lift border-0 shadow-soft hover:shadow-elegant transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-medium text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services Call-out */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-6">
            We also specialize in <span className="text-primary font-medium">Wardrobes, TV Units, False Ceilings, 2D & 3D Layouts</span> and comprehensive design solutions.
          </p>
          <Button className="px-8 py-3" asChild>
            <Link to="/services">Explore Our Services</Link>
          </Button>
        </div>

        {/* Turnkey Execution Add-on */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
            <CardContent className="p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-playfair font-medium text-foreground mb-4">
                  Turnkey Execution
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Leave it all to us — from civil to styling. Our team handles the complete transformation, 
                  including vendor coordination, material procurement, site management, and handover.
                </p>
                <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
                  <span className="text-primary font-medium">✨ Complete Project Management</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-accent rounded-3xl p-12">
          <h3 className="text-2xl md:text-3xl font-playfair font-medium text-primary-foreground mb-4">
            Let's build a space that reflects your purpose
          </h3>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-lg">
            Ready to transform your space with our expert interior design services? Let's discuss your vision and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-lg" asChild>
              <Link to="/portfolio">View Our Projects</Link>
            </Button>
            <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg" asChild>
              <Link to="/contact">Contact Our Design Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;