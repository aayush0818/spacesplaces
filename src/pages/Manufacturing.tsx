import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import LazyImage from '@/components/LazyImage';
import { Factory, Cog, Layers, Wrench, CheckCircle, MapPin } from 'lucide-react';

const Manufacturing = () => {
  const manufacturingSteps = [
    {
      title: "Laminate Press Machine",
      image: "/lovable-uploads/9b32efd6-8f4e-407f-be64-a3c6ca3c7a21.png",
      description: "Applying high-pressure laminates or curved finishes before cutting",
      advantages: [
        "Uniform bonding",
        "No bubbles or peeling", 
        "Ensures edge integrity during cutting"
      ],
      details: "Laminate is pressed first to ensure clean cuts with precision. Cutting raw plywood and laminating later can lead to misalignment, chipping, and uneven edges.",
      icon: Layers
    },
    {
      title: "Multi-Boring/Drilling Machine",
      image: "/lovable-uploads/f7d8a6b6-bf59-4a92-9cb6-7f6ab6580ac7.png",
      description: "Drilling accurate holes for hinges, dowels, and joinery",
      advantages: [
        "Pre-set drilling patterns",
        "Consistent hole depth and spacing",
        "Reduced human error"
      ],
      icon: Cog
    },
    {
      title: "Panel Saw Machine",
      image: "/lovable-uploads/548f2a27-997e-4cf8-bfbf-dbbac9515a5d.png",
      description: "Cutting large laminated plywood with precision",
      advantages: [
        "Precise cuts with 0.1 mm tolerance",
        "Minimizes material wastage",
        "Faster and cleaner than manual sawing"
      ],
      details: "Technology Used: Diamond Cutter Blade provides sharper, long-lasting cuts. Two-Blade System: Scoring blade prevents chipping, main blade for final cut.",
      icon: Factory
    },
    {
      title: "Edge Banding Machine",
      image: "/lovable-uploads/07c77af4-da44-4339-b180-00b00ae8215b.png",
      description: "Seals and finishes edges of furniture boards",
      advantages: [
        "Seamless finish with no glue marks",
        "Stronger bond with durability",
        "Water-resistant edge sealing"
      ],
      icon: Wrench
    },
    {
      title: "Assembly Line & Quality Check",
      image: "/lovable-uploads/935f905f-4ba0-41dc-91eb-b8722b0e0376.png",
      description: "Final assembly, finishing & quality check process",
      advantages: [
        "Panels assembled with pre-drilled joints",
        "Quality hardware installation",
        "Polishing and cleaning for dust-free finish",
        "Reduced on-site labor and quick assembly",
        "Functionality of hinges and sliders"
      ],
      icon: CheckCircle
    },
    {
      title: "Site Installation",
      image: "/lovable-uploads/128344b8-edfa-47d8-b310-d37a179430cd.png",
      description: "Professional installation by trained technicians",
      advantages: [
        "Assembled by trained technicians",
        "Dust-free and fast installation", 
        "Post-assembly clean-up"
      ],
      icon: MapPin
    }
  ];

  return (
    <>
      <SEO 
        title="Manufacturing Process - State-of-the-Art Furniture Production | Spaces & Places"
        description="Discover our advanced manufacturing facility featuring European machinery, precision cutting, laminate pressing, and quality assembly processes for custom furniture."
        keywords="furniture manufacturing, precision cutting, laminate pressing, quality assembly, European machinery, custom furniture production, Mumbai manufacturing"
        url="https://spacesandplaces.com/manufacturing"
      />
      
      <div className="w-full">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Factory className="w-12 h-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Manufacturing Excellence
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                We bring your designs to life in our state-of-the-art facility using advanced European and Indian machinery to ensure accuracy, speed, and long-lasting quality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Advanced Machines</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">0.1mm</div>
                  <div className="text-muted-foreground">Precision Tolerance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Manufacturing Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From raw materials to finished furniture, every step is executed with precision and care
              </p>
            </div>

            <div className="space-y-20">
              {manufacturingSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <LazyImage
                          src={step.image}
                          alt={step.title}
                          className="w-full h-[400px] object-cover"
                          priority={index < 2}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2">
                      <div className="flex items-center mb-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mr-4">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-primary font-semibold text-lg">Step {index + 1}</span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-xl text-muted-foreground mb-6">
                        {step.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-foreground mb-3">
                          Advantages over Traditional Methods:
                        </h4>
                        <ul className="space-y-2">
                          {step.advantages.map((advantage, advIndex) => (
                            <li key={advIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{advantage}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {step.details && (
                        <div className="bg-secondary/20 rounded-lg p-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {step.details}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience Manufacturing Excellence
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to see how our advanced manufacturing process can bring your design vision to life?
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors">
              Schedule Factory Visit
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Manufacturing;