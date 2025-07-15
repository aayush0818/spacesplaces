
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
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="relative">
              <img 
                src="/lovable-uploads/6758e494-f0c1-4824-89b5-b93e2eda51f3.png" 
                alt="Spaces & Places Logo" 
                className="h-12 w-12 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-playfair font-bold text-foreground">
                Spaces & Places
              </h1>
              <p className="text-xs text-primary font-medium hidden lg:block">Premium Interior Design</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
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
          <div className="hidden xl:flex items-center space-x-4">
            <div className="flex flex-col text-right text-xs">
              <a href="tel:+919082169969" className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-1">
                <Phone className="h-3 w-3 mr-1" />
                +91 9082169969
              </a>
              <a href="mailto:info@spacesplaces.in" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-3 w-3 mr-1" />
                info@spacesplaces.in
              </a>
            </div>
            <Button className="btn-luxury ml-3 px-4 py-2 text-sm" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t shadow-elegant">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-foreground hover:text-primary transition-smooth font-medium hover-lift py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t space-y-3">
                <a href="tel:+919082169969" className="flex items-center text-muted-foreground py-2">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 9082169969
                </a>
                <a href="mailto:info@spacesplaces.in" className="flex items-center text-muted-foreground py-2">
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
