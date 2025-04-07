
import React, { useState } from "react";
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
  
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <section className="flex flex-col items-center relative w-full max-w-[1200px] mt-10">
      <div className="relative flex justify-center w-full">
        <div className="absolute left-0 top-0 w-[300px] max-md:static max-md:w-[90%] max-md:mb-5">
          <p className="font-handscript text-[#43362A] text-2xl leading-9 max-md:text-center max-sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d793843044aaa109d1d24be12b99cf118583ded"
          className="w-[649px] h-[642px] max-md:w-[90%] max-md:h-auto"
          alt="Decorative Pattern"
        />
        
        <button 
          onClick={toggleMenu}
          className="absolute left-0 bottom-0 font-handscript text-[#43362A] text-3xl hover:text-opacity-70 transition-colors cursor-pointer"
        >
          MENÚ
        </button>

        <RotatedMenu
          items={menuItems}
          isVisible={menuVisible}
          className="absolute right-0 top-[50px] max-md:static max-md:mt-5"
        />
      </div>
      
      <a
        href="mailto:experienciaelroure@gmail.com"
        className="font-handscript text-[#43362A] text-2xl underline max-sm:text-xl hover:text-opacity-80 transition-colors mt-10"
      >
        experienciaelroure@gmail.com
      </a>
    </section>
  );
};

export default MainContent;
