
import React, { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  animationDelay?: number;
}

const Logo: React.FC<LogoProps> = ({ className, animationDelay = 0 }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDateLoaded, setIsDateLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), animationDelay);
    const dateTimer = setTimeout(() => setIsDateLoaded(true), animationDelay + 2500); // 500 * 5 = 2500
    
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
          className={`w-[266px] h-[91px] max-sm:w-[200px] max-sm:h-auto transition-opacity duration-5000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          alt="Roure Logo"
          style={{
            clipPath: isLoaded ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
            transition: 'clip-path 6s ease-in-out, opacity 6s ease-in-out'
          }}
        />
      </div>
      <div 
        className={`font-handscript text-[#43362A] text-2xl mt-5 max-sm:text-xl transition-opacity duration-5000 ${isDateLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          clipPath: isDateLoaded ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
          transition: 'clip-path 6s ease-in-out, opacity 6s ease-in-out'
        }}
      >
        1996 - 2025
      </div>
    </div>
  );
};

export default Logo;
