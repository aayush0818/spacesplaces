import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Exterior Design", href: "/services" },
        { name: "Architecture Design", href: "/services" },
        { name: "Furniture Design", href: "/services" },
        { name: "2D & 3D Layouts", href: "/services" },
        { name: "Interior Planning", href: "/services" },
        { name: "Design Consultation", href: "/contact" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Process", href: "/about" },
        { name: "Careers", href: "/contact" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Free Consultation", href: "/contact" },
        { name: "FAQ", href: "/contact" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Warranty", href: "/contact" }
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
                <a href="https://instagram.com/spacesplaces" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors hover-lift">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://facebook.com/spacesplaces" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors hover-lift">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/spacesplaces" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors hover-lift">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/company/spacesplaces" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors hover-lift">
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
                    <li key={link.name}>
                      {link.href.startsWith('#') ? (
                        <a href={link.href} className="text-background/80 hover:text-primary transition-colors hover-lift">
                          {link.name}
                        </a>
                      ) : (
                        <Link to={link.href} className="text-background/80 hover:text-primary transition-colors hover-lift">
                          {link.name}
                        </Link>
                      )}
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
                <a href="tel:7506333130" className="font-medium hover:text-primary transition-colors">
                  7506333130 / 9769282895
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start">
              <Mail className="h-5 w-5 text-primary mr-3" />
              <div>
                <div className="text-sm text-background/80">Email Us</div>
                <a href="mailto:info@spacesplaces.in" className="font-medium hover:text-primary transition-colors">
                  info@spacesplaces.in
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="h-5 w-5 text-primary mr-3" />
              <div>
                <div className="text-sm text-background/80">Visit Us</div>
                <div className="font-medium text-sm">348, Powai Plaza, Hiranandani Gardens, Powai, Mumbai 400076</div>
                <div className="text-xs text-background/60 mt-1">Mon - Sat: 09:00 AM - 05:00 PM</div>
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
              <Link to="/contact" className="text-background/60 hover:text-primary text-sm transition-colors hover-lift">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-background/60 hover:text-primary text-sm transition-colors hover-lift">
                Terms of Service
              </Link>
              <Link to="/portfolio" className="text-background/60 hover:text-primary text-sm transition-colors hover-lift">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;