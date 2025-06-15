
import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import LeftMenu from "./LeftMenu";

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
    return hasPlayed || skipAnimations ? 4 : 0;
  });

  useEffect(() => {
    if (skipAnimations) {
      setLoadingStage(4);
      return;
    }
    
    if (sessionStorage.getItem('mainContentAnimationPlayed') !== 'true') {
      const imageTimer = setTimeout(() => setLoadingStage(1), 100);
      const logoTimer = setTimeout(() => setLoadingStage(2), 2000);
      const emailTimer = setTimeout(() => setLoadingStage(3), 3500);
      const menuTimer = setTimeout(() => {
        setLoadingStage(4);
        sessionStorage.setItem('mainContentAnimationPlayed', 'true');
      }, 4500);

      return () => {
        clearTimeout(imageTimer);
        clearTimeout(logoTimer);
        clearTimeout(emailTimer);
        clearTimeout(menuTimer);
      };
    }
  }, [skipAnimations, isMobile]);

  useEffect(() => {
    console.log("Current loading stage:", loadingStage);
  }, [loadingStage]);

  return (
    <section className="flex flex-col items-center relative w-full max-w-[90vw] 2xl:max-w-[1800px] mt-10">
      <div className={`relative flex ${isMobile ? 'flex-col items-center' : 'flex-row justify-center'} w-full`}>
        {!isMobile && (
          <div className="flex flex-col justify-start z-20 absolute left-0 top-0 max-h-full" style={{ minWidth: '20%', maxWidth: '400px' }}>
            <div className="w-full mb-5">
              <p 
                className={`font-handscript text-[#43362A] text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed p-4 rounded-[18px] transition-opacity duration-1000 ${loadingStage >= 2 ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  transform: loadingStage >= 2 ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'transform 1s ease-out, opacity 1s ease-out'
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        )}
        
        {/* Menu for desktop/tablet */}
        <LeftMenu loadingStage={loadingStage} />
        
        <div
          className="relative flex justify-center items-center overflow-hidden mx-auto"
          style={{
            clipPath: loadingStage >= 1 ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
            transition: 'clip-path 4s ease-in-out',
            transform: 'translateX(0)'
          }}
        >
          <img
            src="/lovable-uploads/a2a0306c-1588-4029-bd68-eadc52824cbe.png"
            className={`w-[40vw] max-w-[800px] min-w-[300px] h-auto transition-opacity duration-3000 ${loadingStage >= 1 ? 'opacity-100' : 'opacity-0'}`}
            alt="Decorative Pattern"
            style={{
              transition: "opacity 4s ease-in-out"
            }}
          />
        </div>

        {isMobile && (
          <div className="w-[90%] mt-8">
            <p 
              className={`font-handscript text-[#43362A] text-xl sm:text-2xl leading-relaxed text-center p-4 rounded-[18px] transition-opacity duration-1000 ${loadingStage >= 2 ? 'opacity-100' : 'opacity-0'}`}
              style={{
                transform: loadingStage >= 2 ? 'translateY(0)' : 'translateY(20px)',
                transition: 'transform 1s ease-out, opacity 1s ease-out'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        )}
      </div>
      
      {/* Menu for mobile - centered single column */}
      {isMobile && (
        <div className="mt-8 w-full flex justify-center">
          <nav 
            className={`transition-all duration-1000 ${loadingStage >= 4 ? 'opacity-100' : 'opacity-0'}`}
            style={{
              transform: loadingStage >= 4 ? 'translateY(0)' : 'translateY(20px)',
              transition: 'transform 1s ease-out, opacity 1s ease-out'
            }}
          >
            <ul className="flex flex-col items-center gap-4">
              {[
                { text: "Historia", href: "/historia" },
                { text: "Fundamentos", href: "/fundamentos" },
                { text: "Escuela", href: "/escuela" },
                { text: "Formaciones", href: "/formaciones" },
                { text: "Asesoramientos", href: "/asesoramientos" },
                { text: "Videos", href: "/videos" },
                { text: "Textos", href: "/textos" },
              ].map((item, index) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="font-handscript text-[#43362A] text-lg sm:text-xl hover:text-opacity-80 transition-all duration-300 block text-center"
                    style={{
                      textDecoration: 'none'
                    }}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      
      <a
        href="mailto:experienciaelroure@gmail.com"
        className={`font-handscript text-[#43362A] text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl hover:text-opacity-80 transition-all duration-1000 mt-10 ${loadingStage >= 3 ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transition: 'opacity 1s ease-out',
          textDecoration: 'none'
        }}
      >
        experienciaelroure@gmail.com
      </a>
    </section>
  );
};

export default MainContent;
