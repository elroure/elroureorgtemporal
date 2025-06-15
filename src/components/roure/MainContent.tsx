
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

  useEffect(() => {
    if (playAnimation) {
      // 1. Center image appears first (circle reveal) - starts immediately
      setTimeout(() => setShowImg(true), 100);
      
      // 2. Left text appears after image animation (2s + 500ms delay)
      setTimeout(() => setShowText(true), 2600);
      
      // 3. Menu items start appearing after text (2.6s + 1.5s + 300ms delay)
      setTimeout(() => setShowMenu(true), 4400);
      
      // 4. Email appears last (after all menu items have animated)
      setTimeout(() => setShowEmail(true), 6500);
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
                    opacity: playAnimation && !showText ? 0 : playAnimation ? undefined : 1,
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
                ? "circle-reveal 2s ease-out forwards"
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
                opacity: playAnimation && !showText ? 0 : playAnimation ? undefined : 1,
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
          opacity: playAnimation && !showEmail ? 0 : playAnimation ? undefined : 1,
          textDecoration: 'none'
        }}
      >
        experienciaelroure@gmail.com
      </a>
    </section>
  );
};

export default MainContent;
