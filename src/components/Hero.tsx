import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-interior.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury">
        <div className="max-w-4xl">
          <div className="fade-in">
            <h1 className="text-hero font-playfair text-foreground mb-6">
              Transform Your
              <span className="block text-primary">Space & Place</span>
            </h1>
            
            <p className="text-luxury max-w-2xl mb-8">
              We create extraordinary interior experiences that blend luxury with functionality. 
              From concept to completion, every space tells your unique story through thoughtful design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="btn-luxury group">
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" className="btn-outline-luxury group">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">12+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button className="btn-luxury rounded-full shadow-elegant float">
          Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default Hero;