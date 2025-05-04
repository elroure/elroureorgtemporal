
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
  isMobile?: boolean;
  isOnRight?: boolean;
}

const RotatedMenu: React.FC<RotatedMenuProps> = ({
  items,
  className,
  isVisible,
  loadingStage = true,
  isMobile = false,
  isOnRight = false,
}) => {
  return (
    <nav className={`flex flex-col ${isMobile || !isOnRight ? 'items-center' : 'items-start'} w-full ${className}`}>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href || "#"}
          className={`block font-handscript text-[#43362A] text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed mb-4 transition-all duration-1000 opacity-${isVisible ? '100' : '0'} hover:text-opacity-70 ${isMobile || !isOnRight ? 'text-center' : 'text-left'}`}
          style={{
            transform: isVisible 
              ? `${!isMobile && isOnRight ? 'rotate(-15deg)' : 'rotate(0deg)'} translateX(0)` 
              : `${!isMobile && isOnRight ? 'rotate(-15deg)' : 'rotate(0deg)'} translateX(-50px)`,
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
