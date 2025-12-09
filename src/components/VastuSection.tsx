import { Compass, Sun, Flame, Leaf, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VastuSection = () => {
  const vastuBenefits = [
    {
      icon: Compass,
      title: "Directional Harmony",
      description: "Room layouts aligned with cardinal directions for natural energy flow",
      details: "We carefully plan each room's placement according to Vastu principles. Living areas face east for morning sunlight, kitchens in the southeast for fire element balance, and bedrooms positioned for restful sleep."
    },
    {
      icon: Sun,
      title: "Light & Air Optimization",
      description: "Thoughtful placement of openings for sunlight and ventilation",
      details: "Natural light and air circulation are fundamental to Vastu. We design window placements, door orientations, and ventilation systems to maximize positive energy flow throughout your space."
    },
    {
      icon: Flame,
      title: "Elemental Balance",
      description: "Design that respects the five natural elements: earth, water, fire, air, and space",
      details: "Each zone of your home represents different elements. We ensure proper placement of water features, kitchen appliances, heavy furniture, and open spaces to create harmony between all five elements."
    },
    {
      icon: Leaf,
      title: "Holistic Wellness",
      description: "Interiors that support mental clarity, restful sleep, and emotional balance",
      details: "Vastu-aligned spaces promote overall well-being. From color psychology to furniture arrangement, every detail is designed to reduce stress, improve focus, and create a peaceful living environment."
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

        {/* Why It Matters - Accordion */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-playfair text-center text-foreground mb-12">
            Why It Matters
          </h3>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {vastuBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <AccordionItem 
                    key={index} 
                    value={`vastu-${index}`}
                    className="bg-card border border-border rounded-lg px-6 hover:shadow-lg transition-all duration-300"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                          <span className="text-lg font-playfair font-medium text-foreground block">{benefit.title}</span>
                          <span className="text-sm text-muted-foreground">{benefit.description}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <p className="text-muted-foreground leading-relaxed pl-16">
                        {benefit.details}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
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
