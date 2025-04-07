
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2185dcbf3b422a306e071f2b1f886e79bd97d22d"
        className="w-[266px] h-[91px] max-sm:w-[200px] max-sm:h-auto"
        alt="Roure Logo"
      />
      <div className="font-handscript text-[#43362A] text-2xl mt-5 max-sm:text-xl">
        1996 - 2025
      </div>
    </div>
  );
};

export default Logo;
