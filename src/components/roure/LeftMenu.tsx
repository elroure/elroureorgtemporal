
import React from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

type LeftMenuProps = {
  loadingStage: number;
};

const LeftMenu: React.FC<LeftMenuProps> = ({ loadingStage }) => {
  const isMobile = useIsMobile();
  
  const menuItems = [
    { text: "Historia", href: "/historia" },
    { text: "Fundamentos", href: "/fundamentos" },
    { text: "Escuela", href: "/escuela" },
    { text: "Formaciones", href: "/formaciones" },
    { text: "Asesoramientos", href: "/asesoramientos" },
    { text: "Videos", href: "/videos" },
    { text: "Textos", href: "/textos" },
  ];

  // Don't render on mobile - mobile menu is handled in MainContent
  if (isMobile) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center z-20 absolute right-0 top-1/2 transform -translate-y-1/2 md:right-[15%] lg:right-[15%]" style={{ maxWidth: '400px' }}>
      <nav 
        className={`transition-all duration-1000 ${loadingStage >= 4 ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: loadingStage >= 4 ? 'translateX(0)' : 'translateX(50px)',
          transition: 'transform 1s ease-out, opacity 1s ease-out'
        }}
      >
        <ul className="space-y-4 md:space-y-6">
          {menuItems.map((item, index) => (
            <li key={item.text}>
              <Link
                to={item.href}
                className={`font-handscript text-[#43362A] text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-opacity-80 transition-all duration-300 block ${loadingStage >= 4 ? 'animate-pulse' : ''}`}
                style={{
                  textDecoration: 'none',
                  animationDelay: loadingStage >= 4 ? `${index * 0.2 + 2}s` : '0s'
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
