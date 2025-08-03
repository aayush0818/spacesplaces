
import { Compass, Sun, Flame, Leaf, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const VastuSection = () => {
  const vastuBenefits = [
    {
      icon: Compass,
      title: "Directional Harmony",
      description: "Room layouts aligned with cardinal directions for natural energy flow"
    },
    {
      icon: Sun,
      title: "Light & Air Optimization",
      description: "Thoughtful placement of openings for sunlight and ventilation"
    },
    {
      icon: Flame,
      title: "Elemental Balance",
      description: "Design that respects the five natural elements: earth, water, fire, air, and space"
    },
    {
      icon: Leaf,
      title: "Holistic Wellness",
      description: "Interiors that support mental clarity, restful sleep, and emotional balance"
    }
  ];

  const includedFeatures = [
    "Personalized guidance from certified Vastu consultants",
    "Integrated seamlessly into your design plan — no extra cost",
    "Tailored to your lifestyle, not just tradition"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-foreground mb-6">
            Vastu-Infused Interiors,
            <span className="block text-primary">Designed for Well-Being</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
            We don't just design beautiful spaces — we design spaces that feel right.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our Vastu-aligned interiors are crafted to harmonize your home's energy with natural forces, 
            bringing balance, peace, and prosperity into your everyday life.
          </p>
        </div>

        {/* Why It Matters */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-playfair text-center text-foreground mb-12">
            Why It Matters
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vastuBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-playfair font-medium text-foreground mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Included With Every Project */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-playfair text-center text-foreground mb-8">
                  Included With Every Project
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {includedFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-lg font-medium text-foreground mb-6">
                    Let's create a space that feels as good as it looks.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="btn-luxury group" asChild>
                      <Link to="/contact">
                        Book a Free Consultation
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    
                    <Button variant="outline" className="btn-outline-luxury" asChild>
                      <Link to="/services">
                        Explore Our Process
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VastuSection;
