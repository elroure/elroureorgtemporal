
import React, { useRef, useEffect } from "react";
import Logo from "@/components/roure/Logo";
import MainContent, { MainContentRef } from "@/components/roure/MainContent";

const Home: React.FC = () => {
  const mainContentRef = useRef<MainContentRef>(null);

  // Custom event for opening menu instantly (used when navigating back from menu item page)
  useEffect(() => {
    function handleOpenMenuInstantly(e: Event) {
      mainContentRef.current?.openMenuInstantly();
    }
    window.addEventListener("openMainMenuInstantly", handleOpenMenuInstantly);
    return () => {
      window.removeEventListener("openMainMenuInstantly", handleOpenMenuInstantly);
    };
  }, []);

  return (
    <main className="max-w-none min-h-screen flex flex-col items-center bg-[#DAD3C5] mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm font-handscript">
      <Logo className="mt-10" animationDelay={1300} showDate={false} />
      <MainContent ref={mainContentRef} />
    </main>
  );
};

export default Home;
