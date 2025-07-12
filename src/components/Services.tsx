import { Home, Building, Sofa, Ruler, CheckCircle, Users, Layout, Lightbulb, ChefHat, Shirt, Tv, Layers, Paintbrush, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Interior Design",
      subtitle: "Create a home that feels like you.",
      description: "From cozy 1BHK apartments to luxurious villas, we design spaces that reflect your personality and maximize comfort. Expect thoughtful layouts, elegant finishes, smart storage, and customized aesthetics tailored to your lifestyle.",
      includes: ["Living & dining room design", "Bedroom & kitchen planning", "Lighting & decor curation", "Modular furniture", "Full home transformations"],
      perfectFor: "Homeowners, Builders, Architects"
    },
    {
      icon: Building,
      title: "Commercial Interior Design",
      subtitle: "Design that boosts productivity and brand identity.",
      description: "We craft dynamic office spaces, showrooms, studios, and retail interiors that align with your business goals and visual identity. Our focus is on spatial efficiency, branding integration, and lasting impressions.",
      includes: ["Office & co-working space design", "Retail/storefront planning", "Reception & waiting area styling", "Acoustic & lighting optimization"],
      perfectFor: "Startups, Corporates, Studios, Clinics"
    },
    {
      icon: Sofa,
      title: "Custom Furniture Design",
      subtitle: "Furniture made for you, not off the shelf.",
      description: "We design and produce custom furniture that fits your space perfectly — in style, size, and function. Whether it's a statement piece or an entire collection, our furniture designs blend utility with craftsmanship.",
      includes: ["Modular wardrobes & kitchens", "TV units, beds, storage systems", "Sofas, chairs, dining tables", "Finish selection & material sourcing"],
      perfectFor: "Space-specific needs or aesthetic customizations"
    },
    {
      icon: Ruler,
      title: "2D & 3D Layouts",
      subtitle: "Visualize your dream space before we build it.",
      description: "We provide professional floor plans, moodboards, and immersive 3D renders that help you make informed decisions and see the final result before execution begins.",
      includes: ["2D floor planning", "3D renders & walkthroughs", "Moodboards & style guides", "Space zoning and layout optimization"],
      perfectFor: "Planning, presentations, builder coordination"
    },
    {
      icon: ChefHat,
      title: "Modular Kitchen",
      subtitle: "Cook in style with smart storage solutions.",
      description: "Transform your cooking space with our premium modular kitchen designs featuring smart storage, durable materials, and ergonomic layouts. From compact galley kitchens to spacious island designs, we create kitchens that balance functionality with aesthetic appeal.",
      includes: ["Custom cabinet designs", "Counter & backsplash selection", "Appliance integration", "Storage optimization", "Lighting & ventilation planning"],
      perfectFor: "New homes, kitchen renovations, space optimization"
    },
    {
      icon: Shirt,
      title: "Wardrobes",
      subtitle: "Organized storage that fits your lifestyle.",
      description: "Custom wardrobe solutions designed to maximize storage while complementing your bedroom aesthetics. Our wardrobes feature smart compartments, premium finishes, and thoughtful organization systems tailored to your clothing and accessory needs.",
      includes: ["Walk-in & built-in wardrobes", "Custom compartment design", "Sliding & hinged door options", "Mirror & lighting integration", "Shoe racks & accessory storage"],
      perfectFor: "Bedrooms, dressing rooms, compact spaces"
    },
    {
      icon: Tv,
      title: "TV Unit",
      subtitle: "Entertainment centers that make a statement.",
      description: "Stylish TV units and entertainment centers that seamlessly blend technology with design. Our custom TV units feature cable management, storage for media devices, and elegant finishes that enhance your living space.",
      includes: ["Wall-mounted & floor units", "Cable management systems", "Media storage solutions", "Integrated lighting", "Floating & traditional designs"],
      perfectFor: "Living rooms, bedrooms, entertainment areas"
    },
    {
      icon: Layers,
      title: "False Ceilings",
      subtitle: "Add depth and character to your interiors.",
      description: "Elegant false ceiling designs that enhance your space with layered lighting, improved acoustics, and architectural interest. From simple gypsum boards to intricate coffered designs, we create ceilings that are both functional and beautiful.",
      includes: ["Gypsum & POP ceiling designs", "Recessed lighting integration", "Acoustic treatment options", "Decorative moldings", "Multi-level ceiling designs"],
      perfectFor: "Living rooms, bedrooms, offices, restaurants"
    },
    {
      icon: Paintbrush,
      title: "Wall Treatment",
      subtitle: "Walls that tell your story.",
      description: "Transform blank walls into stunning focal points with our diverse wall treatment options. From textured paints and wallpapers to stone cladding and wood paneling, we create surfaces that add personality and sophistication to your space.",
      includes: ["Textured paint finishes", "Wallpaper & wall decals", "Stone & brick cladding", "Wood paneling & wainscoting", "Accent wall designs"],
      perfectFor: "Feature walls, commercial spaces, luxury interiors"
    },
    {
      icon: BookOpen,
      title: "Study Unit",
      subtitle: "Productive spaces for learning and work.",
      description: "Custom study units and home office solutions designed to boost productivity and organization. Our designs feature ergonomic workstations, ample storage, and inspiring environments that make work and study enjoyable.",
      includes: ["Built-in desks & workstations", "Bookshelf & file storage", "Ergonomic seating integration", "Lighting & power management", "Multi-functional designs"],
      perfectFor: "Home offices, student rooms, professional spaces"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-foreground mb-6">
            Our Expertise, Tailored to Your Space
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Spaces & Places, every design begins with one goal — to create environments that enhance how you live, work, and feel. 
            Whether you're building from scratch, renovating, or reimagining, we offer a full suite of interior design services 
            backed by creativity, precision, and care.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={service.title} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-playfair font-medium text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Includes:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Perfect for:</span> {service.perfectFor}
                    </p>
                  </div>
                </div>

                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <Card className="group hover-lift border-0 shadow-soft hover:shadow-elegant transition-all duration-500">
                    <CardContent className="p-8">
                      <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-24 w-24 text-primary/30" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* Turnkey Execution Add-on */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
            <CardContent className="p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-playfair font-medium text-foreground mb-4">
                  Turnkey Execution
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Leave it all to us — from civil to styling. Our team handles the complete transformation, 
                  including vendor coordination, material procurement, site management, and handover.
                </p>
                <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
                  <span className="text-primary font-medium">✨ Complete Project Management</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-accent rounded-3xl p-12">
          <h3 className="text-2xl md:text-3xl font-playfair font-medium text-primary-foreground mb-4">
            Let's build a space that reflects your purpose
          </h3>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-lg">
            Ready to transform your space with our expert interior design services? Let's discuss your vision and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-lg" asChild>
              <Link to="/portfolio">View Our Projects</Link>
            </Button>
            <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg" asChild>
              <Link to="/contact">Contact Our Design Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;