import { CheckCircle, Award, Wrench, Package, Home, Palette, Layers } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WhyChooseUs = () => {
  const rawMaterials = [
    {
      title: "Plywood & Laminates",
      description: "Brands like Greenply, Century, and Merino ensure durability and premium finish.",
      icon: Layers
    },
    {
      title: "Adhesives",
      description: "We use Fevicol (Marine Grade) for robust and lasting joints.",
      icon: Package
    },
    {
      title: "Hardware & Fittings",
      description: "Our products feature trusted names like Hettich and Hafele for joint and operational hardware.",
      icon: Wrench
    }
  ];

  const processStages = [
    {
      stage: "01",
      title: "Personalized Design",
      description: "Every project is unique. Our in-house design team works closely with each client to create fully customized furniture solutions:",
      points: [
        "Detailed discussions to understand specific requirements",
        "Custom designs developed using professional software",
        "Transparent, tailored quotation after design approval"
      ],
      icon: Palette
    },
    {
      stage: "02",
      title: "In-House Manufacturing",
      description: "We produce all furniture in our facility using best-in-class machines, ensuring superb quality, precision, and efficiency.",
      points: [],
      icon: Wrench
    },
    {
      stage: "03",
      title: "Assembly & Quality Testing",
      description: "Each piece is assembled and tested for quality in our factory to guarantee a flawless product.",
      points: [],
      icon: CheckCircle
    },
    {
      stage: "04",
      title: "Packaging & Dispatch",
      description: "We use proven packaging techniques to safeguard every order during shipping.",
      points: [],
      icon: Package
    },
    {
      stage: "05",
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
            while paying prices comparable to local carpenters.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Raw Materials */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Layers className="w-5 h-5 text-primary" />
              </span>
              Premium Materials
            </h3>
            <Accordion type="single" collapsible defaultValue="material-0">
              {rawMaterials.map((material, index) => {
                const IconComponent = material.icon;
                return (
                  <AccordionItem key={index} value={`material-${index}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 text-primary" />
                        <span className="text-lg font-semibold">{material.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed pl-8">
                        {material.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* Process Steps */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-primary" />
              </span>
              Our 5-Stage Process
            </h3>
            <Accordion type="single" collapsible defaultValue="process-0">
              {processStages.map((stage, index) => {
                const IconComponent = stage.icon;
                return (
                  <AccordionItem key={index} value={`process-${index}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {stage.stage}
                        </span>
                        <span className="text-lg font-semibold text-left">{stage.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-11">
                        <p className="text-muted-foreground leading-relaxed mb-3">
                          {stage.description}
                        </p>
                        {stage.points.length > 0 && (
                          <ul className="space-y-2">
                            {stage.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start gap-2 text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{point}</span>
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
        <div className="text-center bg-gradient-to-r from-primary/5 to-primary-glow/5 border border-primary/20 rounded-2xl p-8 md:p-12">
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