
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import LeftMenu from "./LeftMenu";

const MainContent: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="flex flex-col items-center relative w-full max-w-[90vw] 2xl:max-w-[1800px] mt-10">
      <div className={`relative flex ${isMobile ? 'flex-col items-center' : 'flex-row justify-center'} w-full`}>
        {!isMobile && (
          <>
            <div className="flex flex-col justify-start z-20 absolute left-0 top-0 max-h-full" style={{ minWidth: '20%', maxWidth: '400px' }}>
              <div className="w-full mb-5">
                <p className="font-handscript text-[#43362A] text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed p-4 rounded-[18px] opacity-0 animate-fade-in-80 delay-[3000ms]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <LeftMenu loadingStage={4} />
          </>
        )}
        
        <div className="relative flex justify-center items-center mx-auto">
          <div className="animate-circle-reveal">
            <img
              src="/lovable-uploads/a2a0306c-1588-4029-bd68-eadc52824cbe.png"
              className="w-[40vw] max-w-[800px] min-w-[300px] h-auto"
              alt="Decorative Pattern"
            />
          </div>
        </div>

        {isMobile && (
          <div className="w-[90%] mt-8">
            <p className="font-handscript text-[#43362A] text-xl sm:text-2xl leading-relaxed text-center p-4 rounded-[18px] opacity-0 animate-fade-in-80 delay-[1000ms]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        )}
      </div>
      
      <a
        href="mailto:experienciaelroure@gmail.com"
        className="font-handscript text-[#43362A] text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl hover:text-opacity-80 mt-10 opacity-0 animate-fade-in-80 delay-[12000ms]"
        style={{ textDecoration: 'none' }}
      >
        experienciaelroure@gmail.com
      </a>
    </section>
  );
};

export default MainContent;
