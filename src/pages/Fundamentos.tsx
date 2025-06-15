
import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/roure/Logo";

const Fundamentos: React.FC = () => {
  return (
    <main className="max-w-none min-h-screen flex flex-col items-center bg-[#DAD3C5] mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm font-handscript">
      <Logo className="mt-10" animationDelay={0} />
      
      <section className="flex flex-col items-center w-full max-w-[90vw] 2xl:max-w-[1200px] mt-10">
        <Link 
          to="/home" 
          className="self-start mb-8 font-handscript text-[#43362A] text-xl hover:text-opacity-80 transition-all duration-300"
        >
          ← Volver
        </Link>
        
        <h1 className="font-handscript text-[#43362A] text-4xl xl:text-5xl 2xl:text-6xl mb-8 text-center">
          Fundamentos
        </h1>
        
        <div className="w-full max-w-[800px] mb-8">
          <img
            src="/lovable-uploads/a2a0306c-1588-4029-bd68-eadc52824cbe.png"
            className="w-full h-auto rounded-lg"
            alt="Fundamentos"
          />
        </div>
        
        <div className="w-full max-w-[800px]">
          <p className="font-handscript text-[#43362A] text-xl xl:text-2xl 2xl:text-3xl leading-relaxed text-center mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-handscript text-[#43362A] text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Fundamentos;
