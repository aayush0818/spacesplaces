import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      project: "Complete Home Interior",
      rating: 5,
      text: "Spaces & Places transformed our home beyond our wildest dreams. Their attention to detail and understanding of our lifestyle made the entire process seamless. The quality of work is exceptional, and we couldn't be happier with the results.",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      project: "Modular Kitchen",
      rating: 5,
      text: "The modular kitchen they designed for us is not just beautiful but incredibly functional. Every inch of space is utilized perfectly, and the quality of materials is top-notch. Highly recommended for anyone looking for premium interior solutions.",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Bangalore",
      project: "Office Interior",
      rating: 5,
      text: "Our office transformation has significantly improved our team's productivity and morale. The modern design aesthetic combined with practical solutions has created an inspiring work environment. Professional service from start to finish.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title font-playfair text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-luxury max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with Spaces & Places Interior.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="h-12 w-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-playfair font-medium text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.project}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-playflair font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-playfair font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-playfair font-bold text-primary mb-2">12+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-playfair font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;