
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
            let fadeClass = "";
            let style: React.CSSProperties = {};
            if (playAnimation) {
              fadeClass = startMenu ? "fade-in-80" : "opacity-0";
              // Staggered delay: base delay of 4.4s + 300ms per item
              style.animationDelay = `${4.4 + index * 0.3}s`;
              if (!startMenu) style.opacity = 0;
            }
            return (
              <li key={item.text}>
                <Link
                  to={item.href}
                  className={
                    `font-handscript text-[#43362A] text-xl xl:text-2xl 2xl:text-3xl hover:text-opacity-80 transition-all duration-300 block ${fadeClass}`
                  }
                  style={{
                    textDecoration: 'none',
                    ...style,
                  }}
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
