import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Filter, Grid, List } from 'lucide-react';
import { useState } from 'react';
import heroImage from '@/assets/hero-interior.jpg';
import bedroomImage from '@/assets/bedroom-project.jpg';
import kitchenImage from '@/assets/kitchen-project.jpg';
import officeImage from '@/assets/office-project.jpg';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const projects = [
    {
      id: 1,
      title: "Modern Luxury Living Room",
      category: "residential",
      location: "Manhattan, NY",
      year: "2024",
      image: heroImage,
      tags: ["Modern", "Luxury", "Living Room"]
    },
    {
      id: 2,
      title: "Serene Master Bedroom",
      category: "residential",
      location: "Beverly Hills, CA",
      year: "2023",
      image: bedroomImage,
      tags: ["Contemporary", "Bedroom", "Minimalist"]
    },
    {
      id: 3,
      title: "Gourmet Kitchen Design",
      category: "residential",
      location: "Austin, TX",
      year: "2024",
      image: kitchenImage,
      tags: ["Modern", "Kitchen", "Functional"]
    },
    {
      id: 4,
      title: "Executive Office Suite",
      category: "commercial",
      location: "Downtown LA",
      year: "2023",
      image: officeImage,
      tags: ["Professional", "Office", "Corporate"]
    },
    {
      id: 5,
      title: "Penthouse Living Space",
      category: "residential",
      location: "Miami, FL",
      year: "2024",
      image: heroImage,
      tags: ["Luxury", "Penthouse", "Contemporary"]
    },
    {
      id: 6,
      title: "Boutique Hotel Lobby",
      category: "hospitality",
      location: "San Francisco, CA",
      year: "2023",
      image: officeImage,
      tags: ["Hospitality", "Lobby", "Elegant"]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'hospitality', label: 'Hospitality' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative section-padding min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Our Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
        </div>
        
        <div className="container-luxury relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-section-title font-playfair text-white drop-shadow-2xl mb-6">
              Our <span className="text-primary-glow">Portfolio</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed drop-shadow-lg">
              Explore our collection of thoughtfully designed spaces that showcase our commitment 
              to creating extraordinary interiors.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and View Options */}
      <section className="py-8 border-b">
        <div className="container-luxury">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={filter === category.value ? "default" : "outline"}
                  onClick={() => setFilter(category.value)}
                  className="rounded-full"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {filteredProjects.map((project) => (
              <Card key={project.id} className="hover-lift overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair font-medium text-lg text-foreground">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.location}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;