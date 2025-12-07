const IntroSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6 animate-fade-in">
          Transform Your
          <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mt-2">
            Spaces & Places
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-medium max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          We create extraordinary interior experiences that blend luxury with functionality. 
          From concept to completion, every space tells your unique story.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
