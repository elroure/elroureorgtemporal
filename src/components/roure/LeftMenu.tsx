
import React from "react";
import { Link } from "react-router-dom";

type LeftMenuProps = {
  loadingStage: number;
};

const LeftMenu: React.FC<LeftMenuProps> = ({ loadingStage }) => {
  const menuItems = [
    { text: "Historia", href: "/historia" },
    { text: "Fundamentos", href: "/fundamentos" },
    { text: "Escuela", href: "/escuela" },
    { text: "Formaciones", href: "/formaciones" },
    { text: "Asesoramientos", href: "/asesoramientos" },
    { text: "Textos", href: "/textos" },
    { text: "Videos", href: "/videos" },
  ];

  return (
    <div className="flex flex-col justify-center z-20 absolute left-0 top-1/2 transform -translate-y-1/2">
      <nav 
        className={`transition-all duration-1000 ${loadingStage >= 4 ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: loadingStage >= 4 ? 'translateX(0)' : 'translateX(-50px)',
          transition: 'transform 1s ease-out, opacity 1s ease-out'
        }}
      >
        <ul className="space-y-6">
          {menuItems.map((item, index) => (
            <li key={item.text}>
              <Link
                to={item.href}
                className="font-handscript text-[#43362A] text-xl xl:text-2xl 2xl:text-3xl hover:text-opacity-80 transition-all duration-300 block"
                style={{
                  textDecoration: 'none'
                }}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default LeftMenu;
