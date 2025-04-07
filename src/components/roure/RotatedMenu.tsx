import React from "react";

interface MenuItem {
  text: string;
  href?: string;
}

interface RotatedMenuProps {
  items: MenuItem[];
  className?: string;
}

const RotatedMenu: React.FC<RotatedMenuProps> = ({ items, className }) => {
  return (
    <nav className={`${className}`}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href || "#"}
          className="block text-[#43362A] text-2xl leading-9 rotate-[-15deg] mb-10 max-md:text-center max-sm:text-xl hover:underline"
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
};

export default RotatedMenu;
