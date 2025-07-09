import { Home, PaintBucket, Sofa, Building, Ruler, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Interior Design & Planning",
      description: "Complete interior design solutions from concept to execution, tailored to your lifestyle and preferences.",
      features: ["Space Planning", "Color Consultation", "Furniture Selection", "Design Documentation"]
    },
    {
      icon: PaintBucket,
      title: "Modular Kitchen & Wardrobes",
      description: "Custom modular solutions that maximize space efficiency while maintaining aesthetic appeal.",
      features: ["Custom Cabinetry", "Premium Hardware", "Space Optimization", "Modern Finishes"]
    },
    {
      icon: Sofa,
      title: "Furniture Customization",
      description: "Bespoke furniture pieces designed specifically for your space and functional requirements.",
      features: ["Custom Design", "Quality Materials", "Expert Craftsmanship", "Unique Pieces"]
    },
    {
      icon: Building,
      title: "Commercial Interiors",
      description: "Professional commercial space design that enhances productivity and brand identity.",
      features: ["Office Design", "Retail Spaces", "Hospitality", "Brand Integration"]
    },
    {
      icon: Ruler,
      title: "2D & 3D Layouts",
      description: "Detailed visualizations and technical drawings to help you envision your transformed space.",
      features: ["Floor Plans", "3D Renderings", "Technical Drawings", "Virtual Walkthroughs"]
    },
    {
      icon: Wrench,
      title: "Full Turnkey Projects",
      description: "Complete project management from design to installation, ensuring seamless execution.",
      features: ["Project Management", "Quality Control", "Timeline Management", "Installation Services"]
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover-lift border-0 shadow-soft transition-all duration-300 hover:shadow-elegant"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-playfair font-medium text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="ghost" 
                    className="w-full mt-6 text-primary hover:text-primary-foreground hover:bg-primary"
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