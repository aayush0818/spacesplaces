import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ImageViewer from '@/components/ImageViewer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Filter, Grid, List } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || 'all';
  
  const [filter, setFilter] = useState(categoryFromUrl);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  // Update filter when URL params change
  useEffect(() => {
    setFilter(categoryFromUrl);
  }, [categoryFromUrl]);

  const projects = [
    // Commercial Projects
    {
      id: 1,
      title: "Modern Retail Store Design",
      category: "commercial",
      year: "2024",
      image: "/lovable-uploads/bb0abc41-9d61-4c3b-8098-5e910afa819d.png",
      tags: ["Retail", "Modern", "Commercial", "Track Lighting"]
    },
    {
      id: 2,
      title: "Contemporary Sports Store Layout",
      category: "commercial",
      year: "2024",
      image: "/lovable-uploads/fde04e11-8a8d-483a-a9e6-6b88fc880c23.png",
      tags: ["Sports Store", "Commercial", "Display Systems", "Retail Design"]
    },
    {
      id: 32,
      title: "Vibrant Retail Store with Geometric Design",
      category: "commercial",
      year: "2024",
      image: "/lovable-uploads/11d9766c-e1d1-46bc-8f07-dbab1a04409e.png",
      tags: ["Retail", "Geometric Design", "Vibrant", "Commercial Display"]
    },
    {
      id: 33,
      title: "Modern Office Workspace Design",
      category: "commercial",
      year: "2024",
      image: "/lovable-uploads/862a58fc-43aa-49ec-b26f-a361b509d77d.png",
      tags: ["Office", "Workspace", "Modern", "Commercial Interior"]
    },
    {
      id: 34,
      title: "Contemporary Restaurant Interior",
      category: "commercial",
      year: "2024",
      image: "/lovable-uploads/755bad57-4a45-4088-ba3a-74988367d642.png",
      tags: ["Restaurant", "Dining", "Contemporary", "Commercial"]
    },
    
    // Residential Projects
    {
      id: 3,
      title: "Elegant Living Room with Crystal Chandelier",
      category: "residential",
      year: "2024",
      image: "/lovable-uploads/33079f5b-2cb1-4a9c-8b2b-576ebb30018a.png",
      tags: ["Luxury", "Chandelier", "Living Room"]
    },
    {
      id: 6,
      title: "Luxury Open Living Space",
      category: "residential",
      year: "2024",
      image: "/lovable-uploads/fcc525e6-b663-4098-b889-1bb10d0803ed.png",
      tags: ["Luxury", "Open Plan", "Modern"]
    },
    {
      id: 7,
      title: "Serene Master Bedroom Suite",
      category: "residential",
      year: "2024",
      image: "/lovable-uploads/6d240345-fb7f-4115-a724-6adfad014099.png",
      tags: ["Bedroom", "Serene", "Ambient Lighting"]
    },
    {
      id: 10,
      title: "Traditional Pooja Room Design",
      category: "residential",
      year: "2024",
      image: "/lovable-uploads/a44d1cfb-6e31-49d2-a279-6e1ea332fca2.png",
      tags: ["Traditional", "Pooja Room", "Sacred Space"]
    },
    {
      id: 13,
      title: "Elegant Arched Doorway Design",
      category: "residential",
      year: "2024",
      image: "/lovable-uploads/1064d50e-b7d4-4aac-ba16-ae02dddae5e3.png",
      tags: ["Doorway", "Elegant", "Architectural Detail"]
    },
    {
      id: 16,
      title: "Space-Themed Children's Bedroom",
      category: "residential",
      year: "2024",
      image: "/lovable-uploads/90f00acc-8701-4177-99c9-2f6c5bb409ef.png",
      tags: ["Kids Room", "Space Theme", "Playful"]
    },
    {
      id: 17,
      title: "Contemporary Bedroom with Murphy Bed",
      category: "residential",
      year: "2024",
      image: "/lovable-uploads/08fd3178-62b5-40ac-8be1-0ed0f3c658a9.png",
      tags: ["Bedroom", "Murphy Bed", "Space Saving"]
    },
    {
      id: 19,
      title: "Luxury Bathroom with LED Mirrors",
      category: "residential",
      year: "2024",
      image: "/lovable-uploads/a4b932f3-a065-4eaa-8bd5-7f36fc267ad2.png",
      tags: ["Bathroom", "Luxury", "LED Lighting"]
    },
    {
      id: 20,
      title: "Traditional Pooja Room with Ornate Design",
      category: "residential",
      year: "2024",
      image: "/lovable-uploads/15b998f4-d4c9-491f-b5bc-81cd56f3fcff.png",
      tags: ["Pooja Room", "Traditional", "Ornate"]
    },
    {
      id: 21,
      title: "Modern Wall Art Feature",
      category: "residential",
      year: "2024",
      image: "/lovable-uploads/b48b3b85-2acc-46fb-9f43-8f68a117b7cf.png",
      tags: ["Wall Art", "Modern", "Statement Piece"]
    },

    // Study Units Category (moved and added from office/workspace images)
    {
      id: 4,
      title: "Modern Home Office Design",
      category: "study-units",
      year: "2024",
      image: "/lovable-uploads/6cacc49f-0656-415e-9433-7e2b3933a288.png",
      tags: ["Modern", "Office", "Workspace", "Study Units"]
    },
    {
      id: 15,
      title: "Kids Study Room with Creative Storage",
      category: "study-units",
      year: "2024",
      image: "/lovable-uploads/8de7986c-e31c-46be-8b10-f00c0dfa73e6.png",
      tags: ["Kids Room", "Study", "Storage", "Study Units"]
    },
    {
      id: 18,
      title: "Compact Home Office Nook",
      category: "study-units",
      year: "2024",
      image: "/lovable-uploads/48a21fec-c60b-456b-a0be-8c2c4b9e1e3a.png",
      tags: ["Home Office", "Compact", "Efficient", "Study Units"]
    },
    {
      id: 22,
      title: "Integrated Study & Entertainment Unit",
      category: "study-units",
      year: "2024",
      image: "/lovable-uploads/892cf518-b06c-442a-8434-972b53f07077.png",
      tags: ["Study Units", "TV Unit", "Workspace", "Modern"]
    },
    {
      id: 23,
      title: "Dual Study Station Design",
      category: "study-units",
      year: "2024",
      image: "/lovable-uploads/65e20ced-14a9-4097-9c33-f15e02fb5260.png",
      tags: ["Study Units", "Dual Workstation", "Kids Study", "Storage"]
    },

    // Modular Kitchen Category (all kitchen images now properly categorized)
    {
      id: 8,
      title: "Contemporary Kitchen Design",
      category: "modular-kitchen",
      year: "2024",
      image: "/lovable-uploads/301e6616-bd72-46d7-af39-cbd2af69e499.png",
      tags: ["Kitchen", "Contemporary", "Functional", "Modular Kitchen"]
    },
    {
      id: 9,
      title: "Modern Kitchen with Island",
      category: "modular-kitchen",
      year: "2024",
      image: "/lovable-uploads/a2d52684-ade1-4bff-ab46-9d063164e91b.png",
      tags: ["Kitchen", "Island", "Modern", "Modular Kitchen"]
    },
    {
      id: 12,
      title: "Luxury Kitchen with Decorative Elements",
      category: "modular-kitchen",
      year: "2024",
      image: "/lovable-uploads/7f3f75de-9ac6-43df-8e17-73616d407665.png",
      tags: ["Kitchen", "Luxury", "Decorative", "Modular Kitchen"]
    },
    {
      id: 24,
      title: "Contemporary L-Shaped Kitchen",
      category: "modular-kitchen",
      year: "2024",
      image: "/lovable-uploads/642a6353-6879-44e8-8701-3d609e3c800e.png",
      tags: ["Modular Kitchen", "L-Shaped", "Contemporary", "Marble Backsplash"]
    },
    {
      id: 25,
      title: "Modern Mint Green Kitchen",
      category: "modular-kitchen",
      year: "2024",
      image: "/lovable-uploads/b4b788e4-2e39-4d3f-9a69-7c5bf08b32d1.png",
      tags: ["Modular Kitchen", "Mint Green", "Modern", "Granite Countertops"]
    },
    {
      id: 26,
      title: "Luxury Kitchen with Wood Accents",
      category: "modular-kitchen",
      year: "2024",
      image: "/lovable-uploads/83ce39cf-6c94-44c4-9be2-eb35ee35728b.png",
      tags: ["Modular Kitchen", "Wood Accents", "Island", "Premium"]
    },
    {
      id: 27,
      title: "Compact Kitchen with Glass Cabinets",
      category: "modular-kitchen",
      year: "2024",
      image: "/lovable-uploads/4d9dca5b-3460-42f0-af3a-ab950dc46065.png",
      tags: ["Modular Kitchen", "Glass Cabinets", "LED Lighting", "Compact"]
    },
    {
      id: 28,
      title: "Sleek Galley Kitchen Design",
      category: "modular-kitchen",
      year: "2024",
      image: "/lovable-uploads/73a45d79-e709-477a-9874-17af6b2f5a12.png",
      tags: ["Modular Kitchen", "Galley Design", "Dark Countertops", "Efficient"]
    },

    // Custom Furniture Category (moved and added furniture images)
    {
      id: 5,
      title: "Contemporary Storage Solutions",
      category: "custom-furniture",
      year: "2024",
      image: "/lovable-uploads/89dc1d00-3dca-43e9-ac8b-07c431cc05cf.png",
      tags: ["Storage", "Contemporary", "Functional", "Custom Furniture"]
    },
    {
      id: 11,
      title: "Modern Wardrobe Solutions",
      category: "custom-furniture",
      year: "2024",
      image: "/lovable-uploads/37c89905-d8f3-4a2b-b2aa-2eda3505ce72.png",
      tags: ["Wardrobe", "Modern", "Storage", "Custom Furniture"]
    },
    {
      id: 14,
      title: "Modern Bar and Entertainment Unit",
      category: "custom-furniture",
      year: "2024",
      image: "/lovable-uploads/bc80cd73-b042-4e91-8405-c935b69c7f7c.png",
      tags: ["Bar", "Entertainment", "Modern", "Custom Furniture"]
    },
    {
      id: 29,
      title: "Custom Bedside Table Design",
      category: "custom-furniture",
      year: "2024",
      image: "/lovable-uploads/9e05084e-c902-4702-af80-1eb33523484f.png",
      tags: ["Custom Furniture", "Bedside Table", "Elegant", "Drawers"]
    },
    {
      id: 30,
      title: "Multi-Functional Coffee Table",
      category: "custom-furniture",
      year: "2024",
      image: "/lovable-uploads/48377d5b-523e-4073-8573-8418254da1f7.png",
      tags: ["Custom Furniture", "Coffee Table", "Storage", "Multi-Functional"]
    },
    {
      id: 31,
      title: "Modern Geometric Side Table",
      category: "custom-furniture",
      year: "2024",
      image: "/lovable-uploads/16d7d39c-4ddd-4855-a264-121bc08f9721.png",
      tags: ["Custom Furniture", "Side Table", "Geometric", "Modern"]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'modular-kitchen', label: 'Modular Kitchen' },
    { value: 'study-units', label: 'Study Units' },
    { value: 'custom-furniture', label: 'Custom Furniture' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleImageClick = (image: string, title: string) => {
    setSelectedImage({ src: image, alt: title });
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
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
                <div className="relative cursor-pointer aspect-[4/3]" onClick={() => handleImageClick(project.image, project.title)}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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

      <ImageViewer
        src={selectedImage?.src || ''}
        alt={selectedImage?.alt || ''}
        isOpen={!!selectedImage}
        onClose={closeImageViewer}
      />

      <Footer />
    </div>
  );
};

export default Portfolio;
