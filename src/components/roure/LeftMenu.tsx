
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
    { text: "Videos", href: "/videos" },
    { text: "Textos", href: "/textos" },
  ];

  return (
    <div className="flex flex-col justify-center z-20 absolute right-0 top-1/2 transform -translate-y-1/2"
      style={{ right: '15%', maxWidth: '400px' }}>
      <nav>
        <ul className="space-y-6">
          {menuItems.map((item) => {
            return (
              <li key={item.text}>
                <Link
                  to={item.href}
                  className="font-handscript text-[#43362A] text-xl xl:text-2xl 2xl:text-3xl hover:text-opacity-80 opacity-100 block"
                  style={{ textDecoration: 'none' }}
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
