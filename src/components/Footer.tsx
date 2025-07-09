import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        "Interior Design",
        "Modular Kitchen",
        "Bedroom Design", 
        "Office Interior",
        "Furniture Customization",
        "3D Visualization"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Team",
        "Portfolio",
        "Process",
        "Careers",
        "Blog"
      ]
    },
    {
      title: "Support",
      links: [
        "Contact Us",
        "Free Consultation",
        "FAQ",
        "Privacy Policy",
        "Terms of Service",
        "Warranty"
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-luxury">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Spaces & Places
              </h3>
              <p className="text-background/80 mb-6 leading-relaxed">
                Creating beautiful, functional spaces that reflect your personality and enhance your lifestyle. 
                Professional interior design services with a personal touch.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-medium mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-background/80 hover:text-primary transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-background/20 py-8">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <Phone className="h-5 w-5 text-primary mr-3" />
              <div>
                <div className="text-sm text-background/80">Call Us</div>
                <a href="tel:+91-9876543210" className="font-medium hover:text-primary transition-colors">
                  +91-9876543210
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start">
              <Mail className="h-5 w-5 text-primary mr-3" />
              <div>
                <div className="text-sm text-background/80">Email Us</div>
                <a href="mailto:hello@spacesandplaces.com" className="font-medium hover:text-primary transition-colors">
                  hello@spacesandplaces.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="h-5 w-5 text-primary mr-3" />
              <div>
                <div className="text-sm text-background/80">Visit Us</div>
                <div className="font-medium">Mumbai, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © {currentYear} Spaces & Places Interior. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;