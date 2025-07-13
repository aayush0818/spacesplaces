
import Navigation from '@/components/Navigation';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Home, Building, Sofa, ChefHat, Shirt, Tv, Layers, Paintbrush, BookOpen, Ruler, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const ServicesPage = () => {
  const coreServices = [
    {
      icon: Home,
      title: "Residential Interior Design",
      subtitle: "Create a home that feels like you.",
      description: "From cozy apartments to sprawling villas, we design homes that reflect your personality, lifestyle, and aspirations. Our process focuses on optimizing space, comfort, and ambiance — with a perfect blend of modern styling and timeless elegance.",
      features: [
        "Living & dining room design",
        "Bedroom & kitchen planning", 
        "Lighting & decor curation",
        "Modular storage & smart layouts",
        "Custom materials & finish selection",
        "End-to-end home transformation"
      ],
      idealFor: "Homeowners, architects, developers, families",
      highlight: "Most Popular"
    },
    {
      icon: Building,
      title: "Commercial Interior Design",
      subtitle: "Design that drives productivity and defines your brand.",
      description: "We craft immersive environments for offices, studios, retail stores, and commercial spaces. Our commercial designs focus on spatial efficiency, brand expression, and user experience — while ensuring functionality and future scalability.",
      features: [
        "Office & co-working design",
        "Retail/showroom planning",
        "Brand-aligned reception & waiting zones",
        "Breakout & collaboration spaces",
        "Lighting, acoustic, and layout optimization"
      ],
      idealFor: "Startups, companies, clinics, creative studios"
    }
  ];

  const specializedServices = [
    {
      icon: Sofa,
      title: "Custom Furniture Design",
      subtitle: "Crafted to fit your space — and your life.",
      description: "We design and build bespoke furniture that brings your space together — functionally and visually. Each piece is made to measure, tailored to your interiors, and built to last.",
      features: [
        "Modular wardrobes & kitchen units",
        "TV units, beds, study tables, storage solutions",
        "Sofas, chairs, and dining tables",
        "Finish & material consultation",
        "Space-saving, multi-functional designs"
      ],
      idealFor: "Clients seeking customization or space-specific solutions"
    },
    {
      icon: ChefHat,
      title: "Modular Kitchens",
      subtitle: "Where functionality meets finesse.",
      description: "We build ergonomic, stylish, and highly functional modular kitchens designed around how you cook, store, and live. Our kitchens blend smart layouts with curated finishes to make the heart of your home both beautiful and practical.",
      features: [
        "Straight, L-shaped, U-shaped, island & parallel layouts",
        "Built-in appliances & storage optimization",
        "Custom cabinets, handles, and finishes",
        "Soft-close accessories and lighting integration"
      ],
      idealFor: "New homeowners, renovators, kitchen makeovers"
    },
    {
      icon: Shirt,
      title: "Wardrobes",
      subtitle: "Maximize storage with style.",
      description: "Our custom wardrobe solutions are crafted to fit your room's layout, your daily routine, and your aesthetic preferences. From sliding shutters to walk-ins, every wardrobe is built for access, organization, and elegance.",
      features: [
        "Sliding, hinged, loft, corner & walk-in wardrobes",
        "Internal accessory planning (drawers, racks, mirrors)",
        "Modular flexibility for future additions",
        "Material and finish customizations"
      ],
      idealFor: "Bedrooms, hallways, guest rooms, dressing areas"
    }
  ];

  const additionalServices = [
    {
      icon: Tv,
      title: "TV Units",
      subtitle: "Turn your entertainment space into a design statement.",
      features: ["Floating or floor-mounted units", "Panel designs with lighting", "Display & storage integration"]
    },
    {
      icon: Layers,
      title: "False Ceilings",
      subtitle: "Add depth, elegance, and light control.",
      features: ["Gypsum & POP false ceilings", "Cove, recessed, and layered styles", "Lighting integration (LED strips, spotlights)"]
    },
    {
      icon: Paintbrush,
      title: "Wall Treatments",
      subtitle: "Walls that speak your style.",
      features: ["Texture painting & designer wallpapers", "Stone cladding, wood paneling", "Art, mirror, or niche-based highlights"]
    },
    {
      icon: BookOpen,
      title: "Study Units & Workspaces",
      subtitle: "Focused spaces for focused minds.",
      features: ["Wall-mounted or built-in study tables", "Shelving, drawers, and cable management", "Lighting & seating coordination"]
    },
    {
      icon: Ruler,
      title: "2D & 3D Layouts",
      subtitle: "Visualize your space before we build it.",
      features: ["Detailed 2D space planning", "3D modeling & virtual walkthroughs", "Moodboards, color palettes, and concept visuals"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20"></div>
        </div>
        
        <div className="container-luxury relative">
          <div className="text-center max-w-5xl mx-auto fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium text-sm">Complete Interior Design Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-foreground mb-6 animate-in leading-tight">
              Transform Your Space with <span className="text-primary">Expert Design</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 slide-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "0.2s" }}>
              From residential homes to commercial spaces, we create environments that enhance how you live, work, and feel. 
              Every design is crafted with creativity, precision, and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center scale-in" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content with Tabs */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <Tabs defaultValue="core" className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair text-foreground mb-6">
                Our Design Services
              </h2>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="core">Core Services</TabsTrigger>
                <TabsTrigger value="specialized">Specialized</TabsTrigger>
                <TabsTrigger value="additional">Additional</TabsTrigger>
              </TabsList>
            </div>

            {/* Core Services Tab */}
            <TabsContent value="core" className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-8">
                {coreServices.map((service, index) => {
                  const IconComponent = service.icon;
                  
                  return (
                    <Card key={service.title} className="group hover-lift border-0 shadow-soft hover:shadow-elegant transition-all duration-500 relative overflow-hidden">
                      {service.highlight && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          {service.highlight}
                        </div>
                      )}
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6 mb-6">
                          <div className="flex-shrink-0">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl">
                              <IconComponent className="h-8 w-8 text-primary" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-playfair font-medium text-foreground mb-2">
                              {service.title}
                            </h3>
                            <p className="text-primary font-medium text-sm mb-3">
                              {service.subtitle}
                            </p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="font-medium text-foreground text-sm">What's Included:</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="pt-4 border-t border-border">
                            <p className="text-xs text-muted-foreground">
                              <strong>Ideal for:</strong> {service.idealFor}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* Specialized Services Tab */}
            <TabsContent value="specialized" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specializedServices.map((service, index) => {
                  const IconComponent = service.icon;
                  
                  return (
                    <Card key={service.title} className="group hover-lift border-0 shadow-soft hover:shadow-elegant transition-all duration-500">
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                            <IconComponent className="h-7 w-7 text-primary" />
                          </div>
                          <h3 className="text-lg font-playfair font-medium text-foreground mb-2">
                            {service.title}
                          </h3>
                          <p className="text-primary font-medium text-sm mb-3">
                            {service.subtitle}
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {service.description}
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="pt-4 border-t border-border mt-4">
                          <p className="text-xs text-muted-foreground text-center">
                            <strong>Ideal for:</strong> {service.idealFor}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* Additional Services Tab */}
            <TabsContent value="additional" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalServices.map((service, index) => {
                  const IconComponent = service.icon;
                  
                  return (
                    <Card key={service.title} className="group hover-lift border-0 shadow-soft hover:shadow-elegant transition-all duration-500">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-playfair font-medium text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-primary font-medium text-sm mb-4">
                          {service.subtitle}
                        </p>
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 justify-center">
                              <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enhanced Turnkey Execution Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-playfair font-medium text-foreground mb-4">
                Complete Turnkey Execution
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                We handle everything from concept to completion — civil work, vendor coordination, material procurement, and final handover. 
                Your dream space, delivered seamlessly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                { title: "Project Management", desc: "End-to-end coordination" },
                { title: "Quality Control", desc: "Rigorous supervision" },
                { title: "Material Procurement", desc: "Premium sourcing" },
                { title: "Timely Delivery", desc: "On-schedule guarantee" }
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-soft text-center">
                  <CardContent className="p-6">
                    <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-medium text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-primary font-medium">🚀 End-to-End Service Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-accent">
        <div className="container-luxury text-center">
          <h3 className="text-3xl md:text-4xl font-playfair font-medium text-primary-foreground mb-6">
            Ready to Transform Your Space?
          </h3>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let us create something extraordinary together. Every great design starts with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-lg group" asChild>
              <Link to="/portfolio">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;
