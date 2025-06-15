
import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  animationDelay?: number;
  animateFade?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, animateFade }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Link to="/home">
        <div
          className={`overflow-hidden`}
          style={{ transform: "translateX(-5%)", cursor: "pointer" }}
        >
          <img
            src="/lovable-uploads/517a4352-7aae-4e38-a7f8-23577996fbf6.png"
            className={`w-[400px] h-auto max-sm:w-[300px] max-sm:h-auto transition-opacity duration-[2000ms] ${
              animateFade ? "opacity-80" : "opacity-100"
            }`}
            style={{
              transitionDelay: animateFade ? "6600ms" : undefined,
            }}
            alt="Roure Logo"
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
