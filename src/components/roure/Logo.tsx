
import React, { useEffect, useState } from "react";
import TypewriterText from "./TypewriterText";

interface LogoProps {
  className?: string;
  animationDelay?: number;
}

const Logo: React.FC<LogoProps> = ({ className, animationDelay = 0 }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDateLoaded, setIsDateLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), animationDelay);
    // Make date load later
    const dateTimer = setTimeout(() => setIsDateLoaded(true), animationDelay + 2500); // 2500ms later
    
    return () => {
      clearTimeout(timer);
      clearTimeout(dateTimer);
    };
  }, [animationDelay]);

  return (
    <div className={`flex flex-col items-center ${className}`} style={{ marginLeft: '-3%' }}>
      <div className="overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2185dcbf3b422a306e071f2b1f886e79bd97d22d"
          className={`w-[400px] h-auto max-sm:w-[300px] max-sm:h-auto transition-opacity duration-[8000ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          alt="Roure Logo"
          style={{
            clipPath: isLoaded ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
            transition: 'clip-path 8s ease-in-out, opacity 8s ease-in-out'
          }}
        />
      </div>
      <div 
        className="font-handscript text-[#43362A] text-3xl mt-5 max-sm:text-xl text-center transition-opacity duration-[8000ms]"
        style={{
          transition: 'clip-path 8s ease-in-out, opacity 8s ease-in-out',
          clipPath: isDateLoaded ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)'
        }}
      >
        {isDateLoaded && (
          <TypewriterText text="1996 - 2025" delay={90} as="div"/>
        )}
      </div>
    </div>
  );
};

export default Logo;
