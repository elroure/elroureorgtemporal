
import React, { useEffect, useState } from "react";
import Logo from "@/components/roure/Logo";
import MainContent from "@/components/roure/MainContent";

const ANIMATION_LOCAL_KEY = "roureFirstHomeAnimDone";

const Home: React.FC = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    // Checks for first load after landing
    if (!localStorage.getItem(ANIMATION_LOCAL_KEY)) {
      localStorage.setItem(ANIMATION_LOCAL_KEY, "true");
      setPlayAnimation(true);
    }
  }, []);

  return (
    <main className="max-w-none min-h-screen flex flex-col items-center bg-[#DAD3C5] mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm font-handscript">
      <Logo className="mt-10" animateFade={playAnimation} />
      <MainContent playAnimation={playAnimation} />
    </main>
  );
};

export default Home;
