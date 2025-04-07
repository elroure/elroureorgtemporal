import React from "react";
import RotatedMenu from "./RotatedMenu";

const menuItems = [
  { text: "Historia" },
  { text: "Pedagogia" },
  { text: "Escuela" },
  { text: "Formaciones" },
  { text: "Textos y videos" },
];

const MainContent: React.FC = () => {
  return (
    <section className="flex relative w-full max-w-[1200px] mt-10 max-md:flex-col max-md:items-center">
      <article className="text-[#43362A] text-2xl leading-9 w-[304px] ml-5 max-md:w-[90%] max-md:mx-0 max-md:my-5 max-sm:text-xl">
        Tempor incididunt ut labore et dolore magna aliqua. Ut enim adtempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisitempor incididunt ut
        labore et dolore magna aliqua.
      </article>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d793843044aaa109d1d24be12b99cf118583ded"
        className="w-[649px] h-[642px] mx-5 my-0 max-md:w-[90%] max-md:h-auto max-md:mx-0 max-md:my-5"
        alt="Decorative Pattern"
      />

      <RotatedMenu
        items={menuItems}
        className="absolute right-0 top-[50px] max-md:static max-md:mt-5"
      />
    </section>
  );
};

export default MainContent;
