
import React, { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  animationDelay?: number;
}

const Logo: React.FC<LogoProps> = ({ className, animationDelay = 0 }) => {
  const [isLoaded, setIsLoaded] = useState(() => {
    // Check if we've already shown the animation
    return sessionStorage.getItem('logoAnimationPlayed') === 'true';
  });
  
  useEffect(() => {
    if (!isLoaded) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
        sessionStorage.setItem('logoAnimationPlayed', 'true');
      }, animationDelay);
      
      return () => {
        clearTimeout(timer);
      };
    }
  }, [animationDelay, isLoaded]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2185dcbf3b422a306e071f2b1f886e79bd97d22d"
          className={`w-[400px] h-auto max-sm:w-[300px] max-sm:h-auto transition-opacity duration-5000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          alt="Roure Logo"
          style={{
            clipPath: isLoaded ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
            transition: 'clip-path 6s ease-in-out, opacity 6s ease-in-out'
          }}
        />
      </div>
    </div>
  );
};

export default Logo;
