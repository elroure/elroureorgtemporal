
import React from "react";
import Logo from "@/components/roure/Logo";
import MainContent from "@/components/roure/MainContent";
import { useLocation } from "react-router-dom";

const Home: React.FC = () => {
  const location = useLocation();
  // Detect if skipAnimations & menu should be open (for Menu button return)
  const params = new URLSearchParams(location.search);
  const skipAnimations = params.get("skipAnimations") === "1";
  const menuOpen = params.get("menu") === "open";

  return (
    <main className="max-w-none min-h-screen flex flex-col items-center bg-[#DAD3C5] mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm font-handscript">
      <Logo className="mt-10" animationDelay={1300} />
      <MainContent skipAnimations={skipAnimations} forceMenuOpen={menuOpen} />
    </main>
  );
};

export default Home;
