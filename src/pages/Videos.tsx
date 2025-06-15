
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/roure/Logo";

const Videos: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setImageLoaded(true);
    }, 100);

    const contentTimer = setTimeout(() => {
      setContentLoaded(true);
    }, 300);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <main className="max-w-none min-h-screen flex flex-col items-center bg-[#DAD3C5] mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm font-handscript">
      <Logo className="mt-10" animationDelay={0} />
      
      <section className="flex flex-col items-center w-full max-w-[90vw] 2xl:max-w-[1200px] mt-10">
        <h1 
          className={`font-handscript text-[#43362A] text-4xl xl:text-5xl 2xl:text-6xl mb-8 text-center transition-all duration-800 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Videos
        </h1>
        
        <Link 
          to="/home" 
          className={`mb-8 font-handscript text-[#43362A] text-xl hover:text-opacity-80 transition-all duration-800 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          ← Volver
        </Link>
        
        <div 
          className="w-full max-w-[800px] mb-8 overflow-hidden"
          style={{
            clipPath: imageLoaded ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
            transition: 'clip-path 4s ease-in-out'
          }}
        >
          <img
            src="/lovable-uploads/a2a0306c-1588-4029-bd68-eadc52824cbe.png"
            className={`w-full h-auto rounded-lg transition-opacity duration-3000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            alt="Videos"
            style={{
              transition: "opacity 4s ease-in-out"
            }}
          />
        </div>
        
        <div className="w-full max-w-[800px]">
          <p 
            className={`font-handscript text-[#43362A] text-xl xl:text-2xl 2xl:text-3xl leading-relaxed text-center mb-6 transition-all duration-800 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '200ms' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p 
            className={`font-handscript text-[#43362A] text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-center transition-all duration-800 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '300ms' }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Videos;
