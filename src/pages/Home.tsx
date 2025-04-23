
import React from "react";
import Logo from "@/components/roure/Logo";
import MainContent from "@/components/roure/MainContent";

const Home: React.FC = () => {
  return (
    <main className="max-w-none min-h-screen flex flex-col items-center bg-[#DAD3C5] mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm font-handscript">
      <Logo className="mt-10" animationDelay={1300} showDate={false} />
      <MainContent />
    </main>
  );
};

export default Home;
