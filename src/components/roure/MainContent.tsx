
import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import LeftMenu from "./LeftMenu";

type MainContentProps = {
  playAnimation?: boolean;
};

const MainContent: React.FC<MainContentProps> = ({ playAnimation }) => {
  const isMobile = useIsMobile();
  const [showImg, setShowImg] = useState(!playAnimation);
  const [showText, setShowText] = useState(!playAnimation);
  const [showMenu, setShowMenu] = useState(!playAnimation);
  const [showEmail, setShowEmail] = useState(!playAnimation);

  // Only animate on first load if playAnimation true
  useEffect(() => {
    if (playAnimation) {
      setTimeout(() => setShowImg(true), 50);     // 1. appear image (circle)
      setTimeout(() => setShowText(true), 1550);  // 2. text
      setTimeout(() => setShowMenu(true), 2550);  // 3. menu
      setTimeout(() => setShowEmail(true), 3350); // 5. email (logo is handled in Logo.tsx)
    }
  }, [playAnimation]);

  return (
    <section className="flex flex-col items-center relative w-full max-w-[90vw] 2xl:max-w-[1800px] mt-10">
      <div className={`relative flex ${isMobile ? 'flex-col items-center' : 'flex-row justify-center'} w-full`}>
        {!isMobile && (
          <>
            <div className="flex flex-col justify-start z-20 absolute left-0 top-0 max-h-full" style={{ minWidth: '20%', maxWidth: '400px' }}>
              <div className="w-full mb-5">
                <p 
                  className={`font-handscript text-[#43362A] text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed p-4 rounded-[18px] ${
                    playAnimation
                      ? showText ? "fade-in-80" : "opacity-0"
                      : ""
                  }`}
                  style={{
                    animationDelay: playAnimation ? "1.6s" : undefined,
                    opacity: playAnimation && !showText ? 0 : undefined,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <LeftMenu
              loadingStage={4}
              playAnimation={playAnimation}
              startMenu={showMenu}
            />
          </>
        )}
        
        <div
          className={`relative flex justify-center items-center overflow-hidden mx-auto ${
            playAnimation && !showImg ? "opacity-0" : ""
          }`}
          style={{
            clipPath: playAnimation
              ? showImg
                ? undefined
                : "circle(0% at 50% 50%)"
              : "circle(150% at 50% 50%)",
            transform: 'translateX(0)',
            animation:
              playAnimation && showImg
                ? "circle-reveal 1.5s cubic-bezier(0.4,0,0.2,1) forwards"
                : undefined,
            opacity: playAnimation && !showImg ? 0 : 1,
          }}
        >
          <img
            src="/lovable-uploads/a2a0306c-1588-4029-bd68-eadc52824cbe.png"
            className="w-[40vw] max-w-[800px] min-w-[300px] h-auto"
            alt="Decorative Pattern"
          />
        </div>

        {isMobile && (
          <div className="w-[90%] mt-8">
            <p 
              className={`font-handscript text-[#43362A] text-xl sm:text-2xl leading-relaxed text-center p-4 rounded-[18px] ${
                playAnimation
                  ? showText ? "fade-in-80" : "opacity-0"
                  : ""
              }`}
              style={{
                animationDelay: playAnimation ? "1.6s" : undefined,
                opacity: playAnimation && !showText ? 0 : undefined,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        )}
      </div>
      
      <a
        href="mailto:experienciaelroure@gmail.com"
        className={`font-handscript text-[#43362A] text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl hover:text-opacity-80 mt-10 ${
          playAnimation
            ? showEmail ? "fade-in-80" : "opacity-0"
            : ""
        }`}
        style={{
          animationDelay: playAnimation ? "3.7s" : undefined,
          opacity: playAnimation && !showEmail ? 0 : undefined,
          textDecoration: 'none'
        }}
      >
        experienciaelroure@gmail.com
      </a>
    </section>
  );
};

export default MainContent;
