
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
    <nav
      className={`flex flex-col ${isMobile || !isOnRight ? 'items-center' : 'items-start'} w-full ${isMobile ? 'gap-y-4' : 'gap-y-8'} ${className}`}
    >
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href || "#"}
          className={`block font-handscript text-[#43362A] text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed transition-all duration-1000 hover:text-opacity-70 ${isMobile || !isOnRight ? 'text-center' : 'text-left'}`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible 
              ? `${!isMobile && isOnRight ? 'rotate(-15deg)' : 'rotate(0deg)'} translateX(0)` 
              : `${!isMobile && isOnRight ? 'rotate(-15deg)' : 'rotate(0deg)'} translateX(-50px)`,
            transitionDelay: `${index * 0.1}s`,
            transition: "all 1s ease-out",
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
