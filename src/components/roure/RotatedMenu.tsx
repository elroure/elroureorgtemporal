
import React from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  text: string;
  href?: string;
}

interface RotatedMenuProps {
  items: MenuItem[];
  className?: string;
  isVisible: boolean;
  loadingStage?: boolean;
}

const RotatedMenu: React.FC<RotatedMenuProps> = ({
  items,
  className,
  isVisible,
  loadingStage = true,
}) => {
  return (
    <nav className={className}>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href || "#"}
          className={`block font-handscript text-[#43362A] text-2xl leading-9 rotate-[-15deg] mb-10 max-md:text-center max-sm:text-xl transition-all duration-1000 opacity-${isVisible ? '100' : '0'} hover:text-opacity-70`}
          style={{
            transform: isVisible 
              ? 'rotate(-15deg) translateX(0)' 
              : 'rotate(-15deg) translateX(-50px)',
            transitionDelay: `${index * 0.5}s`,
            clipPath: isVisible
              ? "circle(150% at 50% 50%)"
              : "circle(0% at 50% 50%)",
            transition:
              "clip-path 1s ease-in-out, opacity 1s ease-in-out, transform 1s ease-in-out, backdrop-filter 1s ease-out",
            backdropFilter: loadingStage && !isVisible ? "blur(10px)" : "blur(0px)",
            textDecoration: "none"
          }}
        >
          {item.text}
        </Link>
      ))}
    </nav>
  );
};

export default RotatedMenu;
