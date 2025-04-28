import React, { useState, useEffect } from "react";
import RotatedMenu from "./RotatedMenu";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  const [loadingStage, setLoadingStage] = useState(() => {
    const hasPlayed = sessionStorage.getItem('mainContentAnimationPlayed') === 'true';
    return hasPlayed || skipAnimations ? 5 : 0;
  });

  useEffect(() => {
    if (skipAnimations) {
      setLoadingStage(5);
      return;
    }
    
    if (sessionStorage.getItem('mainContentAnimationPlayed') !== 'true') {
      const imageTimer = setTimeout(() => setLoadingStage(1), 100);  // Image starts immediately
      const logoTimer = setTimeout(() => setLoadingStage(2), 2000);  // Logo appears after image animation
      const textBoxTimer = setTimeout(() => setLoadingStage(3), 3500); // Text appears after logo
      const menuTimer = setTimeout(() => setLoadingStage(4), 5000);  // Menu appears after text
      const emailTimer = setTimeout(() => {
        setLoadingStage(5);
        sessionStorage.setItem('mainContentAnimationPlayed', 'true');
      }, 6500);  // Email appears last

      return () => {
        clearTimeout(imageTimer);
        clearTimeout(logoTimer);
        clearTimeout(textBoxTimer);
        clearTimeout(menuTimer);
        clearTimeout(emailTimer);
      };
    }
  }, [skipAnimations]);

  useEffect(() => {
    console.log("Current loading stage:", loadingStage);
  }, [loadingStage]);

  return (
    <section className="flex flex-col items-center relative w-full max-w-[1200px] mt-10">
      <div className={`relative flex ${isMobile ? 'flex-col items-center' : 'flex-row justify-center'} w-full`}>
        {!isMobile && (
          <div className="flex flex-col justify-start z-20 absolute left-0" style={{ minWidth: 250 }}>
            <div className="w-[250px] mb-5 overflow-hidden">
              <p 
                className={`font-handscript text-[#43362A] text-2xl leading-9 p-4 rounded-[18px] transition-opacity duration-1000 ${loadingStage >= 3 ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  transform: loadingStage >= 3 ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'transform 1s ease-out, opacity 1s ease-out'
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        )}
        
        <div
          className="relative flex justify-center items-center overflow-hidden"
          style={{
            clipPath: loadingStage >= 1 ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
            transition: 'clip-path 3s ease-in-out'
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d793843044aaa109d1d24be12b99cf118583ded"
            className={`w-[649px] h-[642px] max-md:w-[90%] max-md:h-auto transition-opacity duration-3000 ${loadingStage >= 1 ? 'opacity-100' : 'opacity-0'}`}
            alt="Decorative Pattern"
          />
        </div>

        {!isMobile ? (
          <div 
            className="absolute z-10 w-[300px]"
            style={{
              top: "50%",
              right: "-5%",
              transform: "translateY(-50%)",
            }}
          >
            <RotatedMenu
              items={menuItems}
              isVisible={loadingStage >= 4 || forceMenuOpen}
              loadingStage={loadingStage >= 4}
            />
          </div>
        ) : (
          <>
            <div className="mt-8 w-full flex justify-center">
              <RotatedMenu
                items={menuItems}
                isVisible={loadingStage >= 4 || forceMenuOpen}
                loadingStage={loadingStage >= 4}
              />
            </div>
            <div className="w-[90%] mt-8">
              <p 
                className={`font-handscript text-[#43362A] text-2xl leading-9 text-center p-4 rounded-[18px] transition-opacity duration-1000 ${loadingStage >= 3 ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  transform: loadingStage >= 3 ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'transform 1s ease-out, opacity 1s ease-out'
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </>
        )}
      </div>
      
      <a
        href="mailto:experienciaelroure@gmail.com"
        className={`font-handscript text-[#43362A] text-2xl max-sm:text-xl hover:text-opacity-80 transition-all duration-1000 mt-10 ${loadingStage >= 5 ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: loadingStage >= 5 ? 'translateY(0)' : 'translateY(20px)',
          transition: 'transform 1s ease-out, opacity 1s ease-out',
          textDecoration: 'none'
        }}
      >
        experienciaelroure@gmail.com
      </a>
    </section>
  );
};

export default MainContent;
