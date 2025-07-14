import { ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import LazyImage from '@/components/LazyImage';
import { useCountUp } from '@/hooks/useCountUp';
import heroImage from '@/assets/hero-interior.jpg';
import bedroomImage from '@/assets/bedroom-project.jpg';
import kitchenImage from '@/assets/kitchen-project.jpg';
import officeImage from '@/assets/office-project.jpg';
const Hero = () => {
  const carouselImages = [heroImage, bedroomImage, kitchenImage, officeImage];
  
  // Count up animations for stats
  const { count: projectsCount, elementRef: projectsRef } = useCountUp({ end: 150, duration: 2500 });
  const { count: yearsCount, elementRef: yearsRef } = useCountUp({ end: 5, duration: 2000 });
  const { count: satisfactionCount, elementRef: satisfactionRef } = useCountUp({ end: 98, duration: 2300 });
  return <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Carousel */}
      <Carousel className="absolute inset-0 w-full h-full" opts={{
      align: "start",
      loop: true
    }} plugins={[Autoplay({
      delay: 6000
    })]}>
        <CarouselContent className="h-full">
          {carouselImages.map((image, index) => <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full">
                <LazyImage src={image} alt={`Luxury Interior Design ${index + 1}`} className="w-full h-full object-cover" priority={index === 0} sizes="100vw" quality={95} />
              </div>
            </CarouselItem>)}
        </CarouselContent>
        
        <CarouselPrevious className="left-4 bg-black/40 border-white/30 text-white hover:bg-primary hover:border-primary backdrop-blur-sm transition-all duration-300 z-30" />
        <CarouselNext className="right-4 bg-black/40 border-white/30 text-white hover:bg-primary hover:border-primary backdrop-blur-sm transition-all duration-300 z-30" />
      </Carousel>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70 z-10"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="w-full max-w-6xl mx-auto text-center">
          
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent mt-2 drop-shadow-2xl">
                Spaces & Places
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="mb-8">
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-medium drop-shadow-lg max-w-3xl mx-auto">
              We create extraordinary interior experiences that blend luxury with functionality. 
              From concept to completion, every space tells your unique story.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center">
            <Button className="btn-luxury group hover-lift shadow-glow text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3" asChild>
              <Link to="/portfolio">
                Explore Our Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button variant="outline" className="group hover-lift bg-white/15 border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-md text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 font-medium" asChild>
              <Link to="/contact">
                <Quote className="mr-2 h-4 w-4" />
                Get Free Quote
              </Link>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
            <div ref={projectsRef} className="text-center group hover-lift bg-black/30 backdrop-blur-md border border-white/30 rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-black/40 hover:border-primary/50">
              <div className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-primary-glow mb-1 sm:mb-2 transition-transform group-hover:scale-110 drop-shadow-lg">{projectsCount}+</div>
              <div className="text-white font-semibold text-xs sm:text-sm mb-1">Projects Completed</div>
              <div className="text-white/80 text-xs hidden sm:block">Luxury Spaces Crafted</div>
            </div>
            <div ref={yearsRef} className="text-center group hover-lift bg-black/30 backdrop-blur-md border border-white/30 rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-black/40 hover:border-primary/50">
              <div className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-primary-glow mb-1 sm:mb-2 transition-transform group-hover:scale-110 drop-shadow-lg">{yearsCount}+</div>
              <div className="text-white font-semibold text-xs sm:text-sm mb-1">Years Experience</div>
              <div className="text-white/80 text-xs hidden sm:block">Design Excellence</div>
            </div>
            <div ref={satisfactionRef} className="text-center group hover-lift bg-black/30 backdrop-blur-md border border-white/30 rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-black/40 hover:border-primary/50">
              <div className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-primary-glow mb-1 sm:mb-2 transition-transform group-hover:scale-110 drop-shadow-lg">{satisfactionCount}%</div>
              <div className="text-white font-semibold text-xs sm:text-sm mb-1">Client Satisfaction</div>
              <div className="text-white/80 text-xs hidden sm:block">Happy Homeowners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute bottom-6 left-6 z-50 hidden lg:block">
        <Button className="btn-luxury rounded-full shadow-glow hover-lift hover:shadow-elegant transition-all duration-300 px-4 py-2 text-sm" asChild>
          <Link to="/contact">Free Consultation</Link>
        </Button>
      </div>

      <div className="absolute bottom-6 right-6 z-50 hidden lg:block">
        <Button className="bg-[#25D366] hover:bg-[#128C7E] rounded-full p-3 shadow-glow hover-lift hover:shadow-elegant transition-all duration-300" asChild>
          <a href="https://wa.me/+919876543210" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 175.216 175.552" className="w-5 h-5 text-white fill-current">
              <path d="M146.064 29.152C130.368 13.456 108.832 4.672 86.704 4.672c-44.256 0-80.224 35.968-80.224 80.224 0 14.144 3.696 27.936 10.736 40.048L6.64 170.88l47.248-12.384c11.696 6.384 24.864 9.744 38.384 9.744h.032c44.224 0 80.192-35.968 80.192-80.224 0-21.44-8.352-41.584-23.536-56.8l.064-.064zm-59.36 123.392h-.032c-11.968 0-23.712-3.216-33.968-9.296l-2.432-1.44-25.312 6.64 6.752-24.672-1.584-2.528c-6.688-10.624-10.208-22.912-10.208-35.632 0-36.832 29.984-66.816 66.848-66.816 17.856 0 34.656 6.944 47.296 19.552 12.64 12.608 19.584 29.408 19.584 47.264-.032 36.864-30.016 66.848-66.88 66.848l-.064.08z" />
              <path d="M125.888 103.264c-2.016-1.008-11.936-5.888-13.792-6.56s-3.2-1.008-4.544 1.008c-1.344 2.016-5.216 6.56-6.4 7.904-1.152 1.344-2.304 1.52-4.32.512s-8.416-3.104-16.032-9.888c-5.92-5.28-9.92-11.808-11.072-13.824s-.128-3.104.88-4.096c.912-.896 2.016-2.304 3.024-3.456s1.344-2.016 2.016-3.36c.672-1.344.336-2.528-.176-3.536s-4.544-10.944-6.224-14.976c-1.632-3.936-3.296-3.392-4.544-3.456-.176 0-2.688-.176-5.12-.176s-4.672.672-7.136 3.36c-2.464 2.688-9.408 9.2-9.408 22.432s9.632 26.016 10.976 27.808c1.344 1.792 18.944 28.928 45.888 40.576 6.4 2.784 11.392 4.448 15.296 5.696 6.432 2.048 12.288 1.76 16.912 1.072 5.152-.768 11.936-4.88 13.616-9.584s1.68-8.752.032-9.6c-1.648-.816-1.664-.832-3.68-1.84z" />
            </svg>
          </a>
        </Button>
      </div>
    </section>;
};
export default Hero;