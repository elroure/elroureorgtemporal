
import React, { useState, useEffect } from "react";
import RotatedMenu from "./RotatedMenu";
import TypewriterText from "./TypewriterText";

const menuItems = [
  { text: "Historia", href: "/historia" },
  { text: "Pedagogia", href: "/pedagogia" },
  { text: "Escuela", href: "/escuela" },
  { text: "Formaciones", href: "/formaciones" },
  { text: "Textos y videos", href: "/textos-y-videos" },
];

const paragraphText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

const MainContent: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);

  useEffect(() => {
    // Sequentially load elements with timing - make it 5x slower
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
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <section className="flex flex-col items-center relative w-full max-w-[1200px] mt-10">
      <div className="relative flex justify-center w-full">
        {/* Make Box longer and less wide */}
        <div className="absolute left-0 top-0 w-[200px] h-[640px] max-md:static max-md:w-[90%] max-md:mb-5 overflow-hidden flex flex-col justify-center">
          <div
            className={`font-handscript text-[#43362A] text-xl leading-9 max-md:text-center max-sm:text-lg transition-opacity duration-[8000ms] ${loadingStage >= 2 ? 'opacity-100' : 'opacity-0'}`}
            style={{
              clipPath: loadingStage >= 2 ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
              transition: 'clip-path 8s ease-in-out'
            }}
          >
            {loadingStage >= 2 && (
              <TypewriterText text={paragraphText} delay={25} as="div" />
            )}
          </div>
        </div>
        <div
          className="relative flex justify-center items-center overflow-hidden"
          style={{
            clipPath: loadingStage >= 1 ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
            transition: 'clip-path 8s ease-in-out'
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d793843044aaa109d1d24be12b99cf118583ded"
            className={`w-[649px] h-[642px] max-md:w-[90%] max-md:h-auto transition-opacity duration-[8000ms] ${loadingStage >= 1 ? 'opacity-100' : 'opacity-0'}`}
            alt="Decorative Pattern"
          />
        </div>
        {/* Position menu button where it was before */}
        <button
          onClick={toggleMenu}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 font-handscript text-[#43362A] text-3xl bg-transparent border-none p-0 focus:outline-none cursor-pointer`}
          style={{
            clipPath: loadingStage >= 3 ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
            transition: 'clip-path 8s ease-in-out',
            textDecoration: "none",
          }}
        >
          {loadingStage >= 3 && (
            <TypewriterText text="MENÚ" delay={140} as="div" />
          )}
        </button>
        {/* Position menu items higher from the center of the image */}
        <RotatedMenu
          items={menuItems}
          isVisible={menuVisible}
          loadingStage={loadingStage >= 3}
          className="absolute right-0 top-[200px] max-md:static max-md:mt-5"
        />
      </div>
      <a
        href="mailto:experienciaelroure@gmail.com"
        style={{ textDecoration: "none" }}
        className={`font-handscript text-[#43362A] text-2xl max-sm:text-xl mt-10`}
      >
        {loadingStage >= 4 && (
          <TypewriterText text="experienciaelroure@gmail.com" delay={19} as="div" />
        )}
      </a>
    </section>
  );
};

export default MainContent;
