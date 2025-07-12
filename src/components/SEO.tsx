import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title = "Spaces & Places - Premier Interior Design Services in Mumbai",
  description = "Transform your space with Spaces & Places, Mumbai's leading interior design company. Residential & commercial design, custom furniture, 3D layouts. 150+ projects completed.",
  keywords = "interior design mumbai, residential interior design, commercial interior design, custom furniture, 3D layouts, home renovation, office design",
  image = "/og-image.jpg",
  url = "https://spacesandplaces.com",
  type = "website"
}: SEOProps) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://spacesandplaces.com/#business",
    "name": "Spaces & Places Interior Design",
    "alternateName": "Spaces & Places",
    "description": "Premier interior design services in Mumbai specializing in residential and commercial spaces, custom furniture design, and complete home transformations.",
    "url": "https://spacesandplaces.com",
    "telephone": "+91-98765-43210",
    "email": "info@spacesandplaces.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Design Street, Bandra West",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400050",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0596",
      "longitude": "72.8295"
    },
    "openingHours": [
      "Mo-Sa 09:00-18:00"
    ],
    "priceRange": "₹₹₹",
    "image": [
      "https://spacesandplaces.com/images/logo.jpg",
      "https://spacesandplaces.com/images/showroom.jpg"
    ],
    "logo": "https://spacesandplaces.com/images/logo.jpg",
    "sameAs": [
      "https://www.facebook.com/spacesandplaces",
      "https://www.instagram.com/spacesandplaces",
      "https://www.linkedin.com/company/spacesandplaces"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Interior Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Interior Design",
            "description": "Complete home interior design and renovation services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Interior Design",
            "description": "Office and commercial space design solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Furniture Design",
            "description": "Bespoke furniture design and manufacturing"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Priya Sharma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Exceptional interior design service! They transformed our 3BHK apartment into a masterpiece. Highly professional team and stunning results.",
        "datePublished": "2024-01-15"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajesh Patel"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Outstanding commercial office design. The team understood our brand perfectly and created a space that impresses clients and motivates employees.",
        "datePublished": "2024-02-20"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://spacesandplaces.com/#organization",
    "name": "Spaces & Places Interior Design",
    "url": "https://spacesandplaces.com",
    "logo": "https://spacesandplaces.com/images/logo.jpg",
    "description": "Mumbai's premier interior design company with 12+ years of experience and 150+ completed projects.",
    "founder": {
      "@type": "Person",
      "name": "Design Team"
    },
    "foundingDate": "2012",
    "numberOfEmployees": "15-25",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    }
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Featured Interior Design Projects",
    "description": "Showcase of our best residential and commercial interior design projects",
    "numberOfItems": 3,
    "itemListElement": [
      {
        "@type": "CreativeWork",
        "position": 1,
        "name": "Elegant Living Space",
        "description": "Luxurious living room featuring crystal chandelier and premium ambient lighting",
        "image": "https://spacesandplaces.com/projects/elegant-living.jpg",
        "creator": {
          "@type": "Organization",
          "name": "Spaces & Places Interior Design"
        },
        "keywords": "luxury living room, crystal chandelier, premium design"
      },
      {
        "@type": "CreativeWork", 
        "position": 2,
        "name": "Contemporary Kitchen Design",
        "description": "Modern kitchen with sleek finishes and functional layout for everyday living",
        "image": "https://spacesandplaces.com/projects/modern-kitchen.jpg",
        "creator": {
          "@type": "Organization",
          "name": "Spaces & Places Interior Design"
        },
        "keywords": "modern kitchen, contemporary design, functional layout"
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Spaces & Places Interior Design" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Spaces & Places" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@spacesandplaces" />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai" />
      <meta name="geo.position" content="19.0596;72.8295" />
      <meta name="ICBM" content="19.0596, 72.8295" />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(portfolioSchema)}
      </script>

      {/* Performance Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* Critical CSS for above-the-fold content */}
      <style>{`
        .critical-loading { 
          background: linear-gradient(135deg, hsl(0 0% 100%), hsl(0 0% 97%)); 
          min-height: 100vh; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
        }
      `}</style>
    </Helmet>
  );
};

export default SEO;