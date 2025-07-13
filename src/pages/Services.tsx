import Navigation from '@/components/Navigation';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, Building, Sofa, ChefHat, Shirt, Tv, Layers, Paintbrush, BookOpen, Ruler, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const detailedServices = [
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
      idealFor: "Homeowners, architects, developers, families"
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
    },
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
      icon: Ruler,
      title: "2D & 3D Layouts",
      subtitle: "Visualize your space before we build it.",
      description: "Our design team creates professional floor plans and hyper-realistic 3D renders to help you see the final space before execution. This ensures smarter decisions, better material coordination, and more aligned results.",
      features: [
        "Detailed 2D space planning",
        "3D modeling & virtual walkthroughs",
        "Moodboards, color palettes, and concept visuals",
        "Space zoning and furniture mapping"
      ],
      idealFor: "Builders, homeowners, interior planners"
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
    },
    {
      icon: Tv,
      title: "TV Units",
      subtitle: "Turn your entertainment space into a design statement.",
      description: "From minimal wall-mounted consoles to integrated living room feature walls, we design custom TV units that elevate your space while hiding wires, organizing accessories, and maintaining aesthetic flow.",
      features: [
        "Floating or floor-mounted units",
        "Panel designs with lighting",
        "Display & storage integration",
        "Texture, veneer, and PU finish options"
      ],
      idealFor: "Living rooms, bedrooms, home theaters"
    },
    {
      icon: Layers,
      title: "False Ceilings",
      subtitle: "Add depth, elegance, and light control.",
      description: "False ceilings can transform the look and feel of a room while also improving insulation, sound, and lighting. We design them to suit your theme — be it modern, classic, or minimalist.",
      features: [
        "Gypsum & POP false ceilings",
        "Cove, recessed, and layered styles",
        "Lighting integration (LED strips, spotlights)",
        "Acoustic and thermal enhancement"
      ],
      idealFor: "Living rooms, bedrooms, offices, commercial spaces"
    },
    {
      icon: Paintbrush,
      title: "Wall Treatments",
      subtitle: "Walls that speak your style.",
      description: "From accent walls to texture painting, wallpapers to wooden panels — we create customized wall treatments that become focal points in your space.",
      features: [
        "Texture painting & designer wallpapers",
        "Stone cladding, wood paneling, or laminate finishes",
        "Wall moldings & trims",
        "Art, mirror, or niche-based highlights"
      ],
      idealFor: "Living spaces, feature walls, brand backdrops"
    },
    {
      icon: BookOpen,
      title: "Study Units & Workspaces",
      subtitle: "Focused spaces for focused minds.",
      description: "We design functional, clutter-free, and ergonomic study units and home workstations that boost focus, productivity, and creativity — even in compact spaces.",
      features: [
        "Wall-mounted or built-in study tables",
        "Shelving, drawers, and cable management",
        "Lighting & seating coordination",
        "Kid-friendly or multi-use units"
      ],
      idealFor: "Homes, student rooms, home offices"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section for Services Page */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20"></div>
        </div>
        
        <div className="container-luxury relative">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-foreground mb-6 animate-in leading-tight">
              Interior Design Services for <span className="text-primary">Homes, Workspaces & More</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 slide-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "0.2s" }}>
              At Spaces & Places, every design begins with one goal — to create environments that enhance how you live, work, and feel. 
              Whether you are building from scratch, renovating, or reimagining, we offer comprehensive interior design services 
              backed by creativity, precision, and care.
            </p>
            <div className="flex justify-center scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-primary font-medium">✨ Complete Interior Design Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid gap-12 lg:gap-16">
            {detailedServices.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <Card key={service.title} className="group hover-lift border-0 shadow-soft hover:shadow-elegant transition-all duration-500">
                  <CardContent className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                      {/* Service Icon & Title */}
                      <div className="lg:col-span-1">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
                          <IconComponent className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-playfair font-medium text-foreground mb-4">
                          {service.title}
                        </h3>
                        <p className="text-primary font-medium text-lg mb-4">
                          {service.subtitle}
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="inline-flex items-center px-4 py-2 bg-muted/50 rounded-full border border-muted">
                          <span className="text-muted-foreground text-sm">
                            <strong>Ideal for:</strong> {service.idealFor}
                          </span>
                        </div>
                      </div>

                      {/* Service Features */}
                      <div className="lg:col-span-2">
                        <h4 className="text-xl font-medium text-foreground mb-6">Services Include:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Turnkey Execution Section */}
      <section className="section-padding bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="container-luxury">
          <Card className="bg-background/50 backdrop-blur border-primary/20">
            <CardContent className="p-12 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-2xl mb-8">
                  <CheckCircle className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-playfair font-medium text-foreground mb-6">
                  Optional Add-On: Turnkey Execution
                </h3>
                <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                  We take care of everything — from civil work to decor — so you enjoy a seamless, stress-free design journey. 
                  Site visits, vendor management, installation, and handover: all handled by us.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {[
                    "Civil & electrical work coordination",
                    "Material procurement & quality control", 
                    "Vendor management & supervision",
                    "Installation & final handover"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
                  <span className="text-primary font-medium">🚀 Complete Project Management</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-accent">
        <div className="container-luxury text-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium text-primary-foreground mb-6">
            No matter your vision — we will bring it to life.
          </h3>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let us turn your space into something truly special. Every project starts with understanding your unique needs and aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-lg font-medium" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
            <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg font-medium" asChild>
              <Link to="/contact">Book a Free Design Consultation</Link>
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