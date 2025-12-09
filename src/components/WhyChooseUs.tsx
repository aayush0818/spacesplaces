import { CheckCircle, Award, Wrench, Package, Home, Palette } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WhyChooseUs = () => {
  const rawMaterials = [
    {
      title: "Plywood and Laminates",
      description: "Brands like Greenply, Century, and Merino ensure durability and premium finish."
    },
    {
      title: "Adhesives",
      description: "We use Fevicol (Marine Grade) for robust and lasting joints."
    },
    {
      title: "Hardware and Fittings",
      description: "Our products feature trusted names like Hettich and Hafele for joint and operational hardware."
    }
  ];

  const processStages = [
    {
      stage: "Stage 1",
      title: "Personalized Design",
      description: "Every project is unique. Our in-house design team works closely with each client to create fully customized furniture solutions:",
      points: [
        "Detailed discussions and coordination with the client to understand specific requirements and preferences.",
        "Custom designs developed using professional software.",
        "A transparent, tailored quotation is shared after the final design approval."
      ],
      icon: Palette
    },
    {
      stage: "Stage 2",
      title: "In-House Manufacturing with Best-in-Class Machines",
      description: "We produce all furniture in our facility using best-in-class machines, ensuring superb quality, precision, and efficiency.",
      points: [],
      icon: Wrench
    },
    {
      stage: "Stage 3",
      title: "Assembly & Quality Testing",
      description: "Each piece is assembled and tested for quality in our factory to guarantee a flawless product.",
      points: [],
      icon: CheckCircle
    },
    {
      stage: "Stage 4",
      title: "Packaging & Dispatch",
      description: "We use proven packaging techniques to safeguard every order during shipping.",
      points: [],
      icon: Package
    },
    {
      stage: "Stage 5",
      title: "Final Assembly & Onsite Testing",
      description: "Our team completes final assembly and installation onsite, performing a last round of quality checks for perfect results.",
      points: [],
      icon: Home
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Us?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Enjoy the unmatched quality and reliability of professional modular furniture manufacturing 
            while paying prices comparable to local carpenters. Clients get the best of both worlds—high 
            standards, advanced machinery, and customization at affordable rates.
          </p>
        </div>

        {/* Sourcing of Raw Materials - Accordion */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sourcing of Raw Materials
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Quality is at the heart of our modular furniture. We source only the best raw materials from trusted suppliers:
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {rawMaterials.map((material, index) => (
                <AccordionItem 
                  key={index} 
                  value={`material-${index}`}
                  className="bg-card border border-border rounded-lg px-6 hover:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-xl font-semibold text-foreground text-left">{material.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <p className="text-muted-foreground leading-relaxed pl-11">{material.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Our Process - Accordion */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="process-0" className="space-y-4">
              {processStages.map((stage, index) => {
                const IconComponent = stage.icon;
                return (
                  <AccordionItem 
                    key={index} 
                    value={`process-${index}`}
                    className="bg-card border border-border rounded-lg px-6 hover:shadow-lg transition-all duration-300"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                          <span className="text-sm font-medium text-primary block">{stage.stage}</span>
                          <span className="text-lg md:text-xl font-semibold text-foreground">{stage.title}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="pl-16">
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {stage.description}
                        </p>
                        {stage.points.length > 0 && (
                          <ul className="space-y-2">
                            {stage.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>

        {/* Complete Customization */}
        <div className="text-center bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-12">
          <Award className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Complete Customization
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            All furniture is customized—from design to finish—according to every client's unique needs and preferences
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;