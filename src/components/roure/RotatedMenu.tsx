
import React from "react";

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

const RotatedMenu: React.FC<RotatedMenuProps> = ({ items, className, isVisible, loadingStage = true }) => {
  return (
    <nav className={`${className} ${isVisible ? 'block' : 'hidden'}`}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href || "#"}
          className={`block font-handscript text-[#43362A] text-2xl leading-9 rotate-[-15deg] mb-10 max-md:text-center max-sm:text-xl hover:underline transition-opacity duration-5000 opacity-${isVisible ? '100' : '0'}`}
          style={{ 
            transitionDelay: `${index * 0.5}s`,
            clipPath: isVisible ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
            transition: 'clip-path 6s ease-in-out, opacity 6s ease-in-out, backdrop-filter 2.5s ease-out',
            backdropFilter: loadingStage && !isVisible ? 'blur(10px)' : 'blur(0px)'
          }}
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
};

export default RotatedMenu;
