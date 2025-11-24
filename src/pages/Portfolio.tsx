import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import ImageViewer from '@/components/ImageViewer';
import LazyImage from '@/components/LazyImage';
import SEO from '@/components/SEO';
import { supabase } from '@/integrations/supabase/client';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Filter } from 'lucide-react';

const hardcodedProjects = [
  { id: '1', title: "Modern Retail Store Design", category: "commercial", year: "2024", image: "/lovable-uploads/bb0abc41-9d61-4c3b-8098-5e910afa819d.png", tags: ["Retail", "Modern"] },
  { id: '2', title: "Contemporary Sports Store Layout", category: "commercial", year: "2024", image: "/lovable-uploads/fde04e11-8a8d-483a-a9e6-6b88fc880c23.png", tags: ["Sports Store"] },
  { id: '3', title: "Elegant Living Room", category: "residential", year: "2024", image: "/lovable-uploads/33079f5b-2cb1-4a9c-8b2b-576ebb30018a.png", tags: ["Luxury"] },
  { id: '4', title: "Modern Home Office", category: "study-units", year: "2024", image: "/lovable-uploads/6cacc49f-0656-415e-9433-7e2b3933a288.png", tags: ["Office"] },
  { id: '5', title: "Contemporary Storage", category: "custom-furniture", year: "2024", image: "/lovable-uploads/89dc1d00-3dca-43e9-ac8b-07c431cc05cf.png", tags: ["Storage"] },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [projects, setProjects] = useState<typeof hardcodedProjects>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const formattedProjects = (data || []).map((item) => ({
        id: item.id,
        title: item.title,
        category: item.category,
        year: item.year,
        image: item.image_url,
        tags: item.tags || [],
      }));

      setProjects(formattedProjects.length > 0 ? formattedProjects : hardcodedProjects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects(hardcodedProjects);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const categoryLabels: Record<string, string> = {
    'all': 'All Projects',
    'residential': 'Residential',
    'commercial': 'Commercial',
    'modular-kitchen': 'Modular Kitchen',
    'study-units': 'Study Units',
    'custom-furniture': 'Custom Furniture'
  };

  return (
    <>
      <SEO 
        title="Portfolio | Spaces & Places"
        description="Explore our collection of residential, commercial, and custom interior design projects."
      />
      <div className="min-h-screen">
        <Navigation />
        
        <section className="section-padding bg-gradient-hero">
          <div className="container-luxury">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-section-title font-playfair text-foreground mb-6">
                Our <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-luxury">
                Explore our collection of thoughtfully designed spaces that showcase our commitment 
                to creating extraordinary interiors.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 border-b">
          <div className="container-luxury">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {categoryLabels[category] || category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-luxury">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="aspect-[4/3] w-full rounded-lg" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="hover-lift overflow-hidden">
                    <div 
                      className="relative cursor-pointer aspect-[4/3]" 
                      onClick={() => setSelectedImage(project.image)}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 text-primary-foreground capitalize">
                          {project.category.replace('-', ' ')}
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
            )}
          </div>
        </section>

        <ImageViewer
          src={selectedImage || ''}
          alt="Portfolio Image"
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
        />

        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
