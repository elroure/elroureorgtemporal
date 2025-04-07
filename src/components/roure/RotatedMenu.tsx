
import React, { useState, useEffect } from "react";

interface MenuItem {
  text: string;
  href?: string;
}

interface RotatedMenuProps {
  items: MenuItem[];
  className?: string;
  isVisible: boolean;
}

const RotatedMenu: React.FC<RotatedMenuProps> = ({ items, className, isVisible }) => {
  return (
    <nav className={`${className} ${isVisible ? 'block' : 'hidden'}`}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href || "#"}
          className={`block font-handscript text-[#43362A] text-2xl leading-9 rotate-[-15deg] mb-10 max-md:text-center max-sm:text-xl hover:underline animate-slide-in`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
};

export default RotatedMenu;
