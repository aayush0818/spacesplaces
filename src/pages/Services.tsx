
import Navigation from '@/components/Navigation';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Home, Building, Sofa, ChefHat, Shirt, Tv, Layers, Paintbrush, BookOpen, Ruler, CheckCircle, ArrowRight, Sparkles, Star, Clock, Award, Users, Target, Zap } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

const ServicesPage = () => {
  // Count up animations for stats
  const { count: projectsCount, elementRef: projectsRef } = useCountUp({ end: 150, duration: 2500 });
  const { count: yearsCount, elementRef: yearsRef } = useCountUp({ end: 5, duration: 2000 });
  const { count: clientsCount, elementRef: clientsRef } = useCountUp({ end: 98, duration: 2300 });
  const { count: sqftCount, elementRef: sqftRef } = useCountUp({ end: 250000, duration: 3000 });

  const coreServices = [
    {
      icon: Home,
      title: "Residential Interior Design",
      subtitle: "Transform your house into a home",
      description: "From cozy apartments to luxury villas, we create living spaces that reflect your personality and lifestyle. Our residential designs blend comfort, functionality, and aesthetics to create environments where memories are made.",
      features: [
        "Complete home makeovers",
        "Living & dining room design",
        "Master bedroom suites", 
        "Kitchen & bathroom renovations",
        "Smart home integration",
        "Sustainable design solutions"
      ],
      idealFor: "Homeowners, families, investors",
      highlight: "Most Popular",
      price: "Starting from ₹8 Lakhs",
      timeline: "8-12 weeks"
    },
    {
      icon: Building,
      title: "Commercial Interior Design",
      subtitle: "Spaces that drive business success",
      description: "Create productive, brand-aligned commercial environments that enhance employee satisfaction and customer experience. From corporate offices to retail spaces, we design for success.",
      features: [
        "Corporate office design",
        "Retail store planning",
        "Restaurant & hospitality design",
        "Co-working spaces",
        "Healthcare facilities",
        "Brand experience centers"
      ],
      idealFor: "Businesses, startups, retail chains",
      price: "Starting from ₹15 Lakhs",
      timeline: "10-16 weeks"
    }
  ];

  const specializedServices = [
    {
      icon: Sofa,
      title: "Custom Furniture Design",
      subtitle: "Bespoke pieces for unique spaces",
      description: "Every piece is crafted to perfection, designed specifically for your space and needs. From concept to creation, we bring your furniture dreams to life.",
      features: [
        "Modular furniture systems",
        "Luxury seating solutions",
        "Storage-integrated designs",
        "Multi-functional pieces"
      ],
      idealFor: "Luxury homes, unique spaces",
      price: "₹50K - ₹5L per piece",
      badge: "Premium"
    },
    {
      icon: ChefHat,
      title: "Modular Kitchens",
      subtitle: "The heart of modern homes",
      description: "Ergonomic, stylish kitchens that make cooking a joy. Smart storage, premium finishes, and cutting-edge appliances integrated seamlessly.",
      features: [
        "All layout configurations",
        "Premium appliance integration",
        "Smart storage solutions",
        "Italian & German hardware"
      ],
      idealFor: "Modern homes, cooking enthusiasts",
      price: "₹2L - ₹12L",
      badge: "Bestseller"
    },
    {
      icon: Shirt,
      title: "Designer Wardrobes",
      subtitle: "Organized luxury storage",
      description: "Custom wardrobes that maximize space while maintaining elegance. From walk-ins to sliding door solutions, every inch is optimized.",
      features: [
        "Walk-in closets",
        "Sliding door systems",
        "Smart organization",
        "Premium accessories"
      ],
      idealFor: "Bedrooms, dressing rooms",
      price: "₹80K - ₹4L",
      badge: "Space-Saver"
    }
  ];

  const processSteps = [
    {
      icon: Target,
      title: "Consultation",
      description: "We understand your vision, requirements, and budget",
      duration: "1-2 days"
    },
    {
      icon: Ruler,
      title: "Design Development",
      description: "Create detailed 2D & 3D designs with material selection",
      duration: "1-2 weeks"
    },
    {
      icon: CheckCircle,
      title: "Approval & Planning",
      description: "Finalize designs, timeline, and procurement planning",
      duration: "3-5 days"
    },
    {
      icon: Zap,
      title: "Execution",
      description: "Professional installation with quality monitoring",
      duration: "6-12 weeks"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Award-Winning Designs",
      description: "Recognized for excellence in interior design",
      stat: "15+ Awards"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced designers and skilled craftsmen",
      stat: "25+ Experts"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Only the finest materials and finishes",
      stat: "5-Star Rating"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Guaranteed project completion within timeline",
      stat: "98% On-Time"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium text-sm">Complete Interior Design Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-playfair text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Design Services That
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Transform Lives
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              From concept to completion, we create extraordinary spaces that enhance how you live, work, and feel. 
              Every design is crafted with passion, precision, and purpose.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-2 hover:bg-muted/50" asChild>
                <Link to="/portfolio">View Our Portfolio</Link>
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div ref={projectsRef} className="text-center p-4 bg-card/50 backdrop-blur rounded-xl border border-border/50">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{projectsCount}+</div>
                <div className="text-xs text-muted-foreground">Projects Completed</div>
              </div>
              <div ref={yearsRef} className="text-center p-4 bg-card/50 backdrop-blur rounded-xl border border-border/50">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{yearsCount}+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div ref={clientsRef} className="text-center p-4 bg-card/50 backdrop-blur rounded-xl border border-border/50">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{clientsCount}%</div>
                <div className="text-xs text-muted-foreground">Client Satisfaction</div>
              </div>
              <div ref={sqftRef} className="text-center p-4 bg-card/50 backdrop-blur rounded-xl border border-border/50">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{Math.floor(sqftCount/1000)}K+</div>
                <div className="text-xs text-muted-foreground">Sq Ft Designed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive design solutions tailored to your unique vision and lifestyle
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreServices.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <Card key={service.title} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-card to-card/50 overflow-hidden">
                  {service.highlight && (
                    <div className="absolute top-6 right-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full z-10">
                      {service.highlight}
                    </div>
                  )}
                  
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full"></div>
                    
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-playfair font-semibold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-primary font-medium mb-3">
                          {service.subtitle}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-sm">What's Included:</h4>
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-muted/50 rounded-lg p-4">
                          <div className="text-xs text-muted-foreground mb-1">Starting Price</div>
                          <div className="font-bold text-foreground">{service.price}</div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4">
                          <div className="text-xs text-muted-foreground mb-1">Timeline</div>
                          <div className="font-bold text-foreground">{service.timeline}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <strong>Ideal for:</strong> {service.idealFor}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair text-foreground mb-4">
              Specialized Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert craftsmanship for specific design needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {specializedServices.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <Card key={service.title} className="group hover:shadow-xl transition-all duration-500 border-0 shadow-md bg-card overflow-hidden">
                  {service.badge && (
                    <div className="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-primary to-primary-glow text-white text-xs font-medium rounded-full">
                      {service.badge}
                    </div>
                  )}
                  
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 justify-center">
                          <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-3 mb-4">
                      <div className="text-xs text-muted-foreground mb-1">Price Range</div>
                      <div className="font-bold text-foreground text-sm">{service.price}</div>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">
                      <strong>Ideal for:</strong> {service.idealFor}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair text-foreground mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach that ensures your vision becomes reality
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                
                return (
                  <div key={index} className="text-center group">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">{index + 1}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full">
                      <Clock className="h-3 w-3 text-primary mr-1" />
                      <span className="text-xs text-primary font-medium">{step.duration}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair text-foreground mb-4">
              Why Choose Spaces & Places
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence, innovation, and dedication in every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              
              return (
                <Card key={index} className="text-center border-0 shadow-lg bg-card/50 backdrop-blur hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{item.stat}</div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's create something extraordinary together. Every great design starts with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur" asChild>
              <Link to="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
