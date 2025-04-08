
import React, { useState, useEffect } from "react";
import RotatedMenu from "./RotatedMenu";

const menuItems = [
  { text: "Historia" },
  { text: "Pedagogia" },
  { text: "Escuela" },
  { text: "Formaciones" },
  { text: "Textos y videos" },
];

const MainContent: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);
  
  useEffect(() => {
    // Sequentially load elements with timing
    const imageTimer = setTimeout(() => setLoadingStage(1), 300); // Image
    const textBoxTimer = setTimeout(() => setLoadingStage(2), 1000); // Text box
    const menuBtnTimer = setTimeout(() => setLoadingStage(3), 1700); // Menu button
    const emailTimer = setTimeout(() => setLoadingStage(4), 2300); // Email
    
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
        <div className="absolute left-0 top-0 w-[300px] h-[400px] max-md:static max-md:w-[90%] max-md:mb-5 overflow-hidden">
          <p 
            className={`font-handscript text-[#43362A] text-2xl leading-9 max-md:text-center max-sm:text-xl transition-opacity duration-1000 ${loadingStage >= 2 ? 'opacity-100' : 'opacity-0'}`}
            style={{
              clipPath: loadingStage >= 2 ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
              transition: 'clip-path 1.2s ease-in-out, opacity 1.2s ease-in-out'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        
        <div 
          className="relative flex justify-center items-center overflow-hidden"
          style={{
            clipPath: loadingStage >= 1 ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
            transition: 'clip-path 1.2s ease-in-out'
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d793843044aaa109d1d24be12b99cf118583ded"
            className={`w-[649px] h-[642px] max-md:w-[90%] max-md:h-auto transition-opacity duration-1000 ${loadingStage >= 1 ? 'opacity-100' : 'opacity-0'}`}
            alt="Decorative Pattern"
          />
        </div>
        
        <button 
          onClick={toggleMenu}
          className={`absolute left-0 bottom-0 font-handscript text-[#43362A] text-3xl hover:text-opacity-70 transition-all duration-1000 cursor-pointer ${loadingStage >= 3 ? 'opacity-100' : 'opacity-0'}`}
          style={{
            clipPath: loadingStage >= 3 ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
            transition: 'clip-path 1.2s ease-in-out, opacity 1.2s ease-in-out'
          }}
        >
          MENÚ
        </button>

        <RotatedMenu
          items={menuItems}
          isVisible={menuVisible}
          className="absolute right-0 top-[200px] max-md:static max-md:mt-5"
        />
      </div>
      
      <a
        href="mailto:experienciaelroure@gmail.com"
        className={`font-handscript text-[#43362A] text-2xl underline max-sm:text-xl hover:text-opacity-80 transition-all duration-1000 mt-10 ${loadingStage >= 4 ? 'opacity-100' : 'opacity-0'}`}
        style={{
          clipPath: loadingStage >= 4 ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
          transition: 'clip-path 1.2s ease-in-out, opacity 1.2s ease-in-out'
        }}
      >
        experienciaelroure@gmail.com
      </a>
    </section>
  );
};

export default MainContent;
