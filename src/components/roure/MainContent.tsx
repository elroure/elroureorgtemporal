
import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
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

export interface MainContentRef {
  openMenuInstantly: () => void;
}

const MainContent = forwardRef<MainContentRef, {}>((props, ref) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);

  useEffect(() => {
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

  useImperativeHandle(ref, () => ({
    openMenuInstantly: () => {
      setLoadingStage(4); // Show everything instantly
      setMenuVisible(true);
    }
  }));

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <section className="flex flex-col items-center relative w-full max-w-[1200px] mt-10">
      <div className="relative flex justify-center w-full">
        {/* Left text: align to top of image, no fade */}
        <div className="absolute left-0 top-0 w-[300px] h-[642px] max-md:static max-md:w-[90%] max-md:mb-5 overflow-visible flex flex-col justify-start">
          <div
            className="font-handscript text-[#43362A] text-xl leading-9 max-md:text-center max-sm:text-lg"
            style={{
              // Removed all fade/clipPath for text
              marginTop: 0
            }}
          >
            {loadingStage >= 2 && (
              <TypewriterText text={paragraphText} delay={25} as="div" />
            )}
          </div>
          {/* Menú button: left, below the text, aligned with image's bottom */}
          <button
            onClick={toggleMenu}
            className="mt-auto mb-4 font-handscript text-[#43362A] text-3xl bg-transparent border-none p-0 focus:outline-none cursor-pointer self-start"
            style={{
              // Place "MENÚ" word at the bottom, left of central area
              textDecoration: "none",
              marginLeft: 0,
              minHeight: "60px" // helps keep placement
            }}
          >
            {loadingStage >= 3 && (
              <TypewriterText text="MENÚ" delay={140} as="div" />
            )}
          </button>
        </div>
        {/* Center image */}
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
          {/* Menu items: position to right, centered vertically, *beside* image */}
          <RotatedMenu
            items={menuItems}
            isVisible={menuVisible}
            loadingStage={loadingStage >= 3}
            className="absolute -right-[270px] top-1/2 -translate-y-1/2 max-md:static max-md:mt-5"
          />
        </div>
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
});

export default MainContent;
