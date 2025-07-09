import { Home, PaintBucket, Sofa, Building, Ruler, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Exterior Design",
      description: "Transform your building's facade and outdoor spaces with stunning exterior design solutions.",
      features: ["Facade Design", "Landscape Planning", "Outdoor Lighting", "Material Selection"]
    },
    {
      icon: Home,
      title: "Architecture Design",
      description: "Comprehensive architectural planning and design services for residential and commercial projects.",
      features: ["Structural Planning", "Space Optimization", "Building Permits", "Code Compliance"]
    },
    {
      icon: Sofa,
      title: "Furniture Design",
      description: "Custom furniture pieces crafted to perfectly complement your interior spaces and lifestyle needs.",
      features: ["Bespoke Furniture", "Material Selection", "Ergonomic Design", "Quality Craftsmanship"]
    },
    {
      icon: Ruler,
      title: "2D & 3D Layouts",
      description: "Detailed visualizations and technical drawings to help you envision your transformed space.",
      features: ["Floor Plans", "3D Renderings", "Technical Drawings", "Virtual Walkthroughs"]
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title font-playfair text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-luxury max-w-3xl mx-auto">
            From initial concept to final installation, we offer comprehensive interior design services 
            that transform your vision into reality with meticulous attention to detail.
          </p>
        </div>

        {/* Enhanced Services Grid with Animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className={`group hover-lift hover-shimmer border-0 shadow-soft transition-all duration-500 hover:shadow-elegant hover:border-primary/20 stagger-fade`}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 hover-glow">
                      <IconComponent className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-primary-glow" />
                    </div>
                    <h3 className="text-xl font-playfair font-medium text-foreground mb-3 transition-colors group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 transition-colors group-hover:text-foreground/80">
                      {service.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={feature} 
                        className="flex items-center text-sm text-muted-foreground transition-all duration-300 hover:text-foreground fade-in"
                        style={{ animationDelay: `${(index * 0.15) + (featureIndex * 0.05)}s` }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover:bg-primary-glow group-hover:shadow-glow"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="ghost" 
                    className="w-full mt-6 text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300 hover-lift group-hover:shadow-elegant"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-accent rounded-3xl p-12">
          <h3 className="text-2xl font-playfair font-medium text-primary-foreground mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Let's discuss your project and create a space that perfectly reflects your style and needs.
          </p>
          <Button className="bg-background text-foreground hover:bg-background/90">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;