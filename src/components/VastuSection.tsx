import { Compass, Sun, Flame, Leaf, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
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
      description: "Room layouts aligned with cardinal directions",
      details: "We carefully plan each room's placement according to Vastu principles. Living areas face east for morning sunlight, kitchens in the southeast for fire element balance, and bedrooms positioned for restful sleep."
    },
    {
      icon: Sun,
      title: "Light & Air Optimization",
      description: "Thoughtful placement for natural flow",
      details: "Natural light and air circulation are fundamental to Vastu. We design window placements, door orientations, and ventilation systems to maximize positive energy flow throughout your space."
    },
    {
      icon: Flame,
      title: "Elemental Balance",
      description: "Earth, water, fire, air, and space in harmony",
      details: "Each zone of your home represents different elements. We ensure proper placement of water features, kitchen appliances, heavy furniture, and open spaces to create harmony between all five elements."
    },
    {
      icon: Leaf,
      title: "Holistic Wellness",
      description: "Mental clarity and emotional balance",
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
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Vastu-Aligned Design
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-foreground mb-6">
            Interiors Designed for
            <span className="block text-primary">Well-Being</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just design beautiful spaces — we design spaces that feel right, 
            harmonizing your home's energy with natural forces.
          </p>
        </div>

        {/* Vastu Benefits Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-2xl border border-border p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Why Vastu Matters
            </h3>
            <Accordion type="single" collapsible defaultValue="vastu-0" className="space-y-2">
              {vastuBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <AccordionItem 
                    key={index} 
                    value={`vastu-${index}`}
                    className="border-none bg-muted/30 rounded-xl px-4 data-[state=open]:bg-primary/5 transition-colors duration-300"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-data-[state=open]:bg-primary/20">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                          <span className="text-lg font-semibold text-foreground block">{benefit.title}</span>
                          <span className="text-sm text-muted-foreground">{benefit.description}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed pl-16 pr-4">
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
                    <div key={index} className="flex items-start bg-background/50 rounded-xl p-4">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed text-sm">
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
