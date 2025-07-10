import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Building, Sofa, Ruler, CheckCircle, Users, Clock, Heart, Lightbulb } from 'lucide-react';
import designerImage from '@/assets/designer-portrait.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Interior Design",
      description: "Create a home that feels like you"
    },
    {
      icon: Building,
      title: "Commercial Interior Design", 
      description: "Design that boosts productivity and brand identity"
    },
    {
      icon: Sofa,
      title: "Custom Furniture Design",
      description: "Furniture made for you, not off the shelf"
    },
    {
      icon: Ruler,
      title: "2D & 3D Layout Planning",
      description: "Visualize your dream space before we build it"
    },
    {
      icon: CheckCircle,
      title: "Turnkey Interior Solutions",
      description: "Complete transformation from consultation to installation"
    }
  ];

  const approach = [
    {
      step: "01",
      title: "Discovery",
      description: "We listen and learn. Every project begins with a deep dive into your lifestyle, goals, and taste."
    },
    {
      step: "02", 
      title: "Design",
      description: "Moodboards, layout planning, 3D models, and curated material palettes come together to shape your dream space."
    },
    {
      step: "03",
      title: "Execution", 
      description: "We manage timelines, vendors, and quality checks, ensuring flawless on-site execution."
    },
    {
      step: "04",
      title: "Delivery",
      description: "You walk into a space that feels like home — or like the next chapter in your brand's journey."
    }
  ];

  const promises = [
    {
      icon: Heart,
      title: "Personalization in every inch",
      description: "Every design element is carefully chosen to reflect your unique style and needs."
    },
    {
      icon: Clock,
      title: "Honest timelines and transparent pricing",
      description: "No hidden costs or unrealistic deadlines - we believe in clear communication."
    },
    {
      icon: Lightbulb,
      title: "Function-first, emotion-led design",
      description: "Beautiful spaces that work perfectly for how you live and work."
    },
    {
      icon: Users,
      title: "End-to-end service",
      description: "From consultation to installation, we handle every detail of your transformation."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20"></div>
        </div>
        
        <div className="container-luxury relative">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-foreground mb-6 animate-in leading-tight">
              We Design Spaces That <span className="text-primary">Tell Your Story</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 slide-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "0.2s" }}>
              At Spaces & Places, interior design is not just about how a space looks — it's about how it makes you feel. 
              Every room we create is a reflection of your identity, aspirations, and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Core Brand Statement */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              <p>
                We don't just create beautiful designs — we translate your essence into every line, layout, and layer. 
                Our team works closely with homeowners, business owners, and builders to understand their vision, 
                functional needs, and unique style. The result? Bespoke interiors that are deeply personal and effortlessly functional.
              </p>
              <p>
                Whether it's a cozy residence, a cutting-edge workspace, or a custom furniture piece, we transform ideas 
                into tangible environments that inspire, connect, and elevate everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-foreground mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive interior design services and custom furniture solutions tailored to your space
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="group hover-lift hover-shimmer border-0 shadow-soft transition-all duration-500 hover:shadow-elegant hover:border-primary/20"
                >
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-primary-glow" />
                    </div>
                    <h3 className="text-xl font-playfair font-medium text-foreground mb-3 transition-colors group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground/80">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-foreground mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven process that ensures every project exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <div key={step.step} className="relative group">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-all duration-300">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-playfair font-medium text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connection line for desktop */}
                {index < approach.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-foreground mb-6">
              Our Promise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What you can expect when you work with Spaces & Places
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {promises.map((promise, index) => {
              const IconComponent = promise.icon;
              return (
                <div key={index} className="flex items-start space-x-6 p-6 bg-background/50 rounded-xl hover:bg-background/80 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-playfair font-medium text-foreground mb-2">
                      {promise.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {promise.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl lg:text-6xl font-playfair font-bold text-primary">150+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-6xl font-playfair font-bold text-primary">12+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-6xl font-playfair font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-6xl font-playfair font-bold text-primary">25+</div>
              <div className="text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-gradient-accent">
        <div className="container-luxury">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-medium text-primary-foreground mb-6">
              Let's design a space that feels like you
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Ready to transform your space into something extraordinary? Let's start the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-lg" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;