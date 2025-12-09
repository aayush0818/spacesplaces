import { Home, Building, Sofa, ChefHat, BookOpen, CheckCircle } from 'lucide-react';
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
    details: "From complete home makeovers to single-room transformations, we create living spaces that blend comfort with style. Our designs incorporate your personal preferences, family needs, and lifestyle requirements."
  }, {
    icon: Building,
    title: "Commercial Spaces",
    subtitle: "Designs that work for your business",
    description: "Professional environments that boost productivity while expressing your company's identity and values.",
    portfolioCategory: "commercial",
    details: "We design offices, retail stores, restaurants, and hospitality spaces that enhance brand identity and employee productivity. Functional layouts meet aesthetic appeal for spaces that work hard for your business."
  }, {
    icon: Sofa,
    title: "Custom Furniture",
    subtitle: "Tailor-made pieces that elevate your space",
    description: "Bespoke furniture designed specifically for your space, lifestyle, and functional requirements.",
    portfolioCategory: "custom-furniture",
    details: "Every piece is crafted to your exact specifications. From wardrobes that maximize storage to statement pieces that become conversation starters, our furniture is built to last and designed to impress."
  }, {
    icon: ChefHat,
    title: "Modular Kitchens",
    subtitle: "Ergonomic layouts with beautiful finishes",
    description: "Smart kitchen solutions that blend functionality with style for the heart of your home.",
    portfolioCategory: "modular-kitchen",
    details: "Our modular kitchens feature premium hardware, durable materials, and smart storage solutions. We optimize workflow with ergonomic layouts while ensuring the kitchen becomes your home's most stylish room."
  }, {
    icon: BookOpen,
    title: "Study Units",
    subtitle: "Ergonomic, elegant workspaces",
    description: "Focused environments designed to boost productivity and creativity in compact, organized spaces.",
    portfolioCategory: "study-units",
    details: "Purpose-built study units with integrated storage, cable management, and ergonomic design. Perfect for home offices, children's study areas, or dedicated workspaces that inspire focus and creativity."
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

        {/* Services Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <AccordionItem 
                  key={service.title} 
                  value={`service-${index}`}
                  className="bg-card border border-border rounded-lg px-6 hover:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-7 w-7 text-primary" />
                      </div>
                      <div className="text-left">
                        <span className="text-xl font-playfair font-medium text-foreground block">{service.title}</span>
                        <span className="text-primary font-medium text-sm">{service.subtitle}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="pl-[4.5rem]">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.details}
                      </p>
                      <Link 
                        to={`/portfolio?category=${service.portfolioCategory}`}
                        className="inline-flex items-center text-primary font-medium hover:underline"
                      >
                        View {service.title} Projects →
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
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
