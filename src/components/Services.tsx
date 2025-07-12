import { Home, Building, Sofa, Ruler, CheckCircle, Users, Layout, Lightbulb, ChefHat, Shirt, Tv, Layers, Paintbrush, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      icon: Home,
      title: "Residential Interior Design",
      subtitle: "Create a home that feels like you.",
      description: "From cozy 1BHK apartments to luxurious villas, we design spaces that reflect your personality and maximize comfort."
    },
    {
      icon: Building,
      title: "Commercial Interior Design", 
      subtitle: "Design that boosts productivity and brand identity.",
      description: "We craft dynamic office spaces, showrooms, studios, and retail interiors that align with your business goals."
    },
    {
      icon: Sofa,
      title: "Custom Furniture Design",
      subtitle: "Furniture made for you, not off the shelf.",
      description: "We design and produce custom furniture that fits your space perfectly — in style, size, and function."
    },
    {
      icon: Ruler,
      title: "2D & 3D Layouts",
      subtitle: "Visualize your dream space before we build it.",
      description: "Professional floor plans, moodboards, and immersive 3D renders to help you make informed decisions."
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-foreground mb-6">
            Our Expertise, Tailored to Your Space
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Spaces & Places, every design begins with one goal — to create environments that enhance how you live, work, and feel. 
            Whether you're building from scratch, renovating, or reimagining, we offer a full suite of interior design services 
            backed by creativity, precision, and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
            We also specialize in <span className="text-primary font-medium">Modular Kitchens, Wardrobes, TV Units, False Ceilings, Wall Treatments, Study Units</span> and more.
          </p>
          <Button className="px-8 py-3" asChild>
            <Link to="/services">View All Our Services</Link>
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