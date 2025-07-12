import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    // Logo animation
    setTimeout(() => setLogoVisible(true), 200);

    // Progress animation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary-glow/5"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo Animation */}
        <div 
          className={`mb-8 transform transition-all duration-1000 ${
            logoVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-8'
          }`}
        >
          <div className="relative">
            {/* Logo Background Circle */}
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-elegant animate-pulse-glow">
              <div className="text-2xl font-playfair font-bold text-primary-foreground">
                S&P
              </div>
            </div>
            
            {/* Rotating Ring */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-28 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
          </div>
          
          <h1 className="text-2xl font-playfair font-bold text-foreground mb-2">
            Spaces & Places
          </h1>
          <p className="text-muted-foreground text-sm">
            Crafting extraordinary interiors
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-muted-foreground">Loading</span>
            <span className="text-xs text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          
          <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-500 ease-out rounded-full relative"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Loading Text Animation */}
        <div className="mt-6">
          <div className="flex justify-center space-x-1">
            {['P', 'r', 'e', 'p', 'a', 'r', 'i', 'n', 'g', ' ', 'y', 'o', 'u', 'r', ' ', 's', 'p', 'a', 'c', 'e'].map((letter, index) => (
              <span
                key={index}
                className="text-muted-foreground text-sm animate-bounce"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: '2s'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;