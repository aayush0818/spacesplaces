import { Home, Building, Sofa, ChefHat, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const mainServices = [{
    icon: Home,
    title: "Residential Interiors",
    subtitle: "Create a space that feels like you",
    description: "Transform your home into a sanctuary that reflects your personality and lifestyle with thoughtful design.",
    portfolioCategory: "residential",
    details: "From complete home makeovers to single-room transformations, we create living spaces that blend comfort with style."
  }, {
    icon: Building,
    title: "Commercial Spaces",
    subtitle: "Designs that work for your business",
    description: "Professional environments that boost productivity while expressing your company's identity and values.",
    portfolioCategory: "commercial",
    details: "We design offices, retail stores, restaurants, and hospitality spaces that enhance brand identity and productivity."
  }, {
    icon: Sofa,
    title: "Custom Furniture",
    subtitle: "Tailor-made pieces that elevate",
    description: "Bespoke furniture designed specifically for your space, lifestyle, and functional requirements.",
    portfolioCategory: "custom-furniture",
    details: "Every piece is crafted to your exact specifications—from wardrobes that maximize storage to statement pieces."
  }, {
    icon: ChefHat,
    title: "Modular Kitchens",
    subtitle: "Ergonomic layouts, beautiful finishes",
    description: "Smart kitchen solutions that blend functionality with style for the heart of your home.",
    portfolioCategory: "modular-kitchen",
    details: "Our modular kitchens feature premium hardware, durable materials, and smart storage solutions."
  }, {
    icon: BookOpen,
    title: "Study Units",
    subtitle: "Elegant, focused workspaces",
    description: "Focused environments designed to boost productivity and creativity in compact, organized spaces.",
    portfolioCategory: "study-units",
    details: "Purpose-built study units with integrated storage, cable management, and ergonomic design."
  }];

  return <section id="services" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-foreground mb-6">
            Our Expertise, Tailored to You
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Design solutions for homes, workspaces, and everything in between.
          </p>
        </div>

        {/* Services Grid with Accordion Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className="bg-card rounded-2xl border border-border p-6 hover:shadow-elegant transition-all duration-300 hover:border-primary/30 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-medium text-foreground">{service.title}</h3>
                    <p className="text-primary font-medium text-sm">{service.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.details}
                </p>
                
                <Link 
                  to={`/portfolio?category=${service.portfolioCategory}`}
                  className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all duration-300"
                >
                  View Projects <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-6">
            We also specialize in <span className="text-primary font-medium">Wardrobes, TV Units, False Ceilings, 2D & 3D Layouts</span> and comprehensive design solutions.
          </p>
          <Button variant="default" className="btn-luxury px-8 py-3" asChild>
            <Link to="/services">Explore Our Services</Link>
          </Button>
        </div>

        {/* Turnkey Execution */}
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
        
      </div>
    </section>;
};

export default Services;
