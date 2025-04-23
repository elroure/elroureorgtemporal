
import React, { useState, useEffect } from "react";
import RotatedMenu from "./RotatedMenu";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { text: "Historia", href: "/historia" },
  { text: "Pedagogia", href: "/pedagogia" },
  { text: "Escuela", href: "/escuela" },
  { text: "Formaciones", href: "/formaciones" },
  { text: "Textos y videos", href: "/textos-y-videos" },
];

// Add props for skipping animation and forcing menu open (when returning from inside pages)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skipAnimations, forceMenuOpen]);

  useEffect(() => {
    if (forceMenuOpen) setMenuVisible(true);
  }, [forceMenuOpen]);

  // MENU BTN position: left below long text, aligned with bottom of image
  // Rotated menu: on the left of image, vertically centered between top/bottom of image, but still left of the image
  // The left text NO fade/opacity animation

  return (
    <section className="flex flex-col items-center relative w-full max-w-[1200px] mt-10">
      <div className="relative flex flex-row justify-center w-full">
        {/* Text box and MENU btn column */}
        <div className="flex flex-col justify-between" style={{ minWidth: 250 }}>
          <div className="w-[250px] max-md:w-[90%] mb-5 overflow-hidden">
            <p
              className={`font-handscript text-[#43362A] text-2xl leading-9 max-md:text-center max-sm:text-xl bg-white/60 p-4 rounded-[18px] shadow`}
              // No opacity/fade for left text
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          {/* MENU button aligned w/ image bottom */}
          <button
            onClick={() => setMenuVisible((v) => !v)}
            className={`font-handscript text-[#43362A] text-3xl hover:text-opacity-70 underline transition-all duration-500`}
            style={{
              marginTop: "36px"
            }}
          >
            MENÚ
          </button>
        </div>
        {/* Main image */}
        <div
          className="relative flex justify-center items-center overflow-hidden mx-10"
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
          {/* RotatedMenu, left of image & vertically centered */}
          <div
            className="absolute"
            style={{
              left: "-380px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            <RotatedMenu
              items={menuItems}
              isVisible={menuVisible}
              loadingStage={loadingStage >= 3}
              className=""
            />
          </div>
        </div>
      </div>
      <a
        href="mailto:experienciaelroure@gmail.com"
        className={`font-handscript text-[#43362A] text-2xl underline max-sm:text-xl hover:text-opacity-80 transition-all duration-5000 mt-10 ${loadingStage >= 4 ? 'opacity-100' : 'opacity-0'}`}
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
