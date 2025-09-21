import { CheckCircle, Award, Wrench, Package, Home, Palette } from 'lucide-react';

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

        {/* Sourcing of Raw Materials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sourcing of Raw Materials
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Quality is at the heart of our modular furniture. We source only the best raw materials from trusted suppliers:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {rawMaterials.map((material, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm mr-3">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{material.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">{material.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h3>
          </div>
          
          <div className="space-y-8">
            {processStages.map((stage, index) => {
              const IconComponent = stage.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-2 md:min-w-[120px]">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-medium text-primary">{stage.stage}</span>
                        <h4 className="text-lg md:text-xl font-semibold text-foreground mt-1">
                          {stage.title}
                        </h4>
                      </div>
                    </div>
                    
                    <div className="flex-1">
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
                  </div>
                </div>
              );
            })}
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