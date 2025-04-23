import React, { useState, useEffect } from "react";
import RotatedMenu from "./RotatedMenu";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { text: "Historia", href: "/historia" },
  { text: "Fundamentos", href: "/pedagogia" },
  { text: "Escuela", href: "/escuela" },
  { text: "Formaciones y Asesoramientos", href: "/formaciones" },
  { text: "Textos y Videos", href: "/textos-y-videos" },
];

type MainContentProps = {
  skipAnimations?: boolean;
  forceMenuOpen?: boolean;
};

const MainContent: React.FC<MainContentProps> = ({
  skipAnimations = false,
  forceMenuOpen = false,
}) => {
  const [menuVisible, setMenuVisible] = useState(forceMenuOpen);
  const [loadingStage, setLoadingStage] = useState(skipAnimations ? 4 : 0);

  useEffect(() => {
    if (skipAnimations) {
      setLoadingStage(4);
      setMenuVisible(forceMenuOpen);
      return;
    }
    const imageTimer = setTimeout(() => setLoadingStage(1), 1500);
    const textBoxTimer = setTimeout(() => setLoadingStage(2), 5000);
    const menuBtnTimer = setTimeout(() => setLoadingStage(3), 8500);
    const emailTimer = setTimeout(() => setLoadingStage(4), 11500);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(textBoxTimer);
      clearTimeout(menuBtnTimer);
      clearTimeout(emailTimer);
    };
  }, [skipAnimations, forceMenuOpen]);

  useEffect(() => {
    if (forceMenuOpen) setMenuVisible(true);
  }, [forceMenuOpen]);

  return (
    <section className="flex flex-col items-center relative w-full max-w-[1200px] mt-10">
      <div className="relative flex flex-row justify-center w-full">
        <div className="flex flex-col justify-between z-20 absolute left-0" style={{ minWidth: 250 }}>
          <div className="w-[250px] max-md:w-[90%] mb-5 overflow-hidden">
            <p className="font-handscript text-[#43362A] text-2xl leading-9 max-md:text-center max-sm:text-xl p-4 rounded-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <button
            onClick={() => setMenuVisible((v) => !v)}
            className="font-handscript text-[#43362A] text-3xl hover:text-opacity-70 transition-all duration-500"
            style={{
              marginTop: "36px"
            }}
          >
            MENÚ
          </button>
        </div>
        
        <div
          className="relative flex justify-center items-center overflow-hidden"
          style={{
            clipPath: loadingStage >= 1 ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
            transition: 'clip-path 6s ease-in-out'
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d793843044aaa109d1d24be12b99cf118583ded"
            className={`w-[649px] h-[642px] max-md:w-[90%] max-md:h-auto transition-opacity duration-5000 ${loadingStage >= 1 ? 'opacity-100' : 'opacity-0'}`}
            alt="Decorative Pattern"
          />
        </div>
        
        <div 
          className="absolute z-10 w-[300px] right-0"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <RotatedMenu
            items={menuItems}
            isVisible={menuVisible}
            loadingStage={loadingStage >= 3}
          />
        </div>
      </div>
      
      <a
        href="mailto:experienciaelroure@gmail.com"
        className={`font-handscript text-[#43362A] text-2xl max-sm:text-xl hover:text-opacity-80 transition-all duration-5000 mt-10 ${loadingStage >= 4 ? 'opacity-100' : 'opacity-0'}`}
        style={{
          clipPath: loadingStage >= 4 ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
          transition: 'clip-path 6s ease-in-out, opacity 6s ease-in-out'
        }}
      >
        experienciaelroure@gmail.com
      </a>
    </section>
  );
};

export default MainContent;
