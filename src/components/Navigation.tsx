
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="container-luxury">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <img 
              src="/lovable-uploads/13b534ba-169c-42a2-81b2-db4a755ccb88.png" 
              alt="Spaces & Places Logo" 
              className="h-12 w-auto"
              style={{ filter: 'drop-shadow(0 0 0 transparent)' }}
            />
            <div>
              <h1 className="text-xl font-playfair font-bold text-foreground">
                Spaces & Places
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">Interior Design</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-smooth font-medium hover-lift relative group ${
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex flex-col text-right text-sm">
              <a href="tel:7506333130" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                7506333130 / 9769282895
              </a>
              <a href="mailto:info@spacesplaces.in" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                info@spacesplaces.in
              </a>
            </div>
            <Button className="btn-luxury ml-4" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t shadow-elegant">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-foreground hover:text-primary transition-smooth font-medium hover-lift"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t space-y-2">
                <a href="tel:7506333130" className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  7506333130 / 9769282895
                </a>
                <a href="mailto:info@spacesplaces.in" className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  info@spacesplaces.in
                </a>
                <Button className="btn-luxury w-full mt-4" asChild>
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
