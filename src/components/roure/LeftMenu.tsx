
import React from "react";
import { Link } from "react-router-dom";

type LeftMenuProps = {
  loadingStage: number;
  playAnimation?: boolean;
  startMenu?: boolean;
};

const LeftMenu: React.FC<LeftMenuProps> = ({
  loadingStage,
  playAnimation,
  startMenu,
}) => {
  const menuItems = [
    { text: "Historia", href: "/historia" },
    { text: "Fundamentos", href: "/fundamentos" },
    { text: "Escuela", href: "/escuela" },
    { text: "Formaciones", href: "/formaciones" },
    { text: "Asesoramientos", href: "/asesoramientos" },
    { text: "Videos", href: "/videos" },
    { text: "Textos", href: "/textos" },
  ];

  return (
    <div className="flex flex-col justify-center z-20 absolute right-0 top-1/2 transform -translate-y-1/2"
      style={{ right: '15%', maxWidth: '400px' }}>
      <nav>
        <ul className="space-y-6">
          {menuItems.map((item, index) => {
            let className = "font-handscript text-[#43362A] text-xl xl:text-2xl 2xl:text-3xl hover:text-opacity-80 transition-all duration-[2000ms] block";
            let style: React.CSSProperties = { textDecoration: 'none' };
            
            if (playAnimation) {
              className += startMenu ? " opacity-80" : " opacity-0";
              // Staggered delay for each menu item
              if (startMenu) {
                style.transitionDelay = `${index * 400}ms`;
              }
            } else {
              className += " opacity-100";
            }
            
            return (
              <li key={item.text}>
                <Link
                  to={item.href}
                  className={className}
                  style={style}
                >
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default LeftMenu;
