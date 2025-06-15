
import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Link to="/home">
        <div
          className={`overflow-hidden`}
          style={{ transform: "translateX(-5%)", cursor: "pointer" }}
        >
          <img
            src="/lovable-uploads/517a4352-7aae-4e38-a7f8-23577996fbf6.png"
            className={`w-[400px] h-auto max-sm:w-[300px] max-sm:h-auto opacity-100`}
            alt="Roure Logo"
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
