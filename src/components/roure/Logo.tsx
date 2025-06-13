
import React, { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  animationDelay?: number;
}

const Logo: React.FC<LogoProps> = ({ className, animationDelay = 0 }) => {
  const [isLoaded, setIsLoaded] = useState(() => {
    // Only use sessionStorage for subsequent loads, not first load
    return false;
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
      <div className="overflow-hidden" style={{ transform: "translateX(-5%)" }}>
        <img
          src="/lovable-uploads/517a4352-7aae-4e38-a7f8-23577996fbf6.png"
          className={`w-[400px] h-auto max-sm:w-[300px] max-sm:h-auto transition-all duration-3000`}
          alt="Roure Logo"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 3s ease-in-out"
          }}
        />
      </div>
    </div>
  );
};

export default Logo;
