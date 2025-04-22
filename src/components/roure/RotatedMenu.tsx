
import React from "react";
import TypewriterText from "./TypewriterText";

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
    <nav className={`${className} ${isVisible ? 'block' : 'hidden'} mt-0`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`block font-handscript text-[#43362A] text-2xl leading-9 rotate-[-15deg] mb-10 max-md:text-center max-sm:text-xl`}
          style={{
            transitionDelay: `${index * 0.5}s`,
            clipPath: isVisible ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
            transition: 'clip-path 6s ease-in-out, backdrop-filter 2.5s ease-out',
            backdropFilter: loadingStage && !isVisible ? 'blur(10px)' : 'blur(0px)'
          }}
        >
          <a
            href={item.href || "#"}
            className="pointer-events-auto focus:outline-none"
            style={{ textDecoration: "none" }}
          >
            <TypewriterText text={item.text} delay={70} />
          </a>
        </div>
      ))}
    </nav>
  );
};

export default RotatedMenu;
