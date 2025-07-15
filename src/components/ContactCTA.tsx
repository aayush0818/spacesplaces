import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const ContactCTA = () => {
  return <section id="contact" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair text-foreground mb-6">
              Let's Create Something
              <span className="block text-primary">Beautiful Together</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Ready to transform your space? Get in touch with us for a free consultation. 
              We'll discuss your vision, requirements, and how we can bring your dream interior to life.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <a href="tel:9699578902" className="text-muted-foreground hover:text-primary transition-colors">90821699969</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <a href="mailto:info@spacesplacesinterior.com" className="text-muted-foreground hover:text-primary transition-colors">info@spacesplacesinterior.in</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p className="text-muted-foreground">
                    Design Studio, Mumbai, India
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-luxury">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" className="btn-outline-luxury">
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-medium text-foreground mb-6">
                Get Your Free Quote
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input placeholder="Enter your name" className="border-border focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input placeholder="Enter your phone" type="tel" className="border-border focus:border-primary" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input placeholder="Enter your email" type="email" className="border-border focus:border-primary" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <Textarea placeholder="Tell us about your project requirements, timeline, etc." rows={4} className="border-border focus:border-primary resize-none" />
                </div>

                <Button className="btn-luxury w-full group">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. 
                  We'll contact you within 24 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactCTA;