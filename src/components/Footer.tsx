
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
        { name: "Free Consultation", href: "/contact" }
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
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/6758e494-f0c1-4824-89b5-b93e2eda51f3.png" 
                  alt="Spaces & Places Logo" 
                  className="h-10 w-auto"
                />
                <div>
                  <h3 className="text-xl font-playfair font-bold">
                    Spaces & Places
                  </h3>
                </div>
              </div>
              <p className="text-background/80 mb-6 leading-relaxed">
                Creating beautiful, functional spaces that reflect your personality and enhance your lifestyle. 
                Professional interior design services with a personal touch.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/spacesplacesdesigns?utm_source=qr&igsh=MW10cTNiM3I4czNhdA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors hover-lift">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61565562218535&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors hover-lift">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://youtube.com/@spacesplaces-r3p?si=yJG_LM2HYahAevHq" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors hover-lift">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
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
                <div className="text-sm text-background/80">Primary: <a href="tel:+919082169969" className="font-medium hover:text-primary transition-colors">+91 9082169969</a></div>
                <div className="text-sm text-background/80">Secondary: <a href="tel:9699578902" className="font-medium hover:text-primary transition-colors">9699578902</a></div>
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
