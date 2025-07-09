import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target, Heart } from 'lucide-react';
import designerImage from '@/assets/designer-portrait.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We pursue perfection in every detail, from initial concept to final execution."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for design drives us to create spaces that truly inspire and delight."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to ensure their vision becomes reality."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We stay ahead of trends while creating timeless designs that endure."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-luxury">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-section-title font-playfair text-foreground mb-6">
              About <span className="text-primary">Spaces & Places</span>
            </h1>
            <p className="text-luxury">
              For over a decade, we've been transforming ordinary spaces into extraordinary experiences. 
              Our passion for design and commitment to excellence has made us a trusted name in luxury interior design.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-section-title font-playfair text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-luxury">
                <p>
                  Founded in 2012 by award-winning designer Sarah Chen, Spaces & Places began with a simple 
                  vision: to create interiors that not only look beautiful but feel like home.
                </p>
                <p>
                  What started as a boutique design studio has grown into a full-service interior design firm, 
                  yet we've never lost sight of our core mission - creating personalized spaces that reflect 
                  our clients' unique stories and lifestyles.
                </p>
                <p>
                  Today, our team of talented designers, architects, and craftspeople work together to deliver 
                  exceptional results that exceed expectations. Every project is a collaboration, every space 
                  is a masterpiece.
                </p>
              </div>
              <Button className="btn-luxury mt-8">
                View Our Portfolio
              </Button>
            </div>
            <div className="relative">
              <img 
                src={designerImage} 
                alt="Sarah Chen, Founder" 
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-playfair font-medium text-foreground">Sarah Chen</h3>
                <p className="text-sm text-muted-foreground">Founder & Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-luxury">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-section-title font-playfair text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-luxury">
              These core principles guide everything we do and shape the way we work with our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-playfair font-medium text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-6xl font-playfair font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-6xl font-playfair font-bold text-primary mb-2">12+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl lg:text-6xl font-playfair font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl lg:text-6xl font-playfair font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;