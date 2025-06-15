
import React, { useEffect, useState } from "react";
import Logo from "@/components/roure/Logo";
import MainContent from "@/components/roure/MainContent";

const ANIMATION_LOCAL_KEY = "roureFirstHomeAnimDone";

const Home: React.FC = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    // Check if this is the first load after landing
    const hasAnimated = localStorage.getItem(ANIMATION_LOCAL_KEY);
    console.log("Has animated before:", hasAnimated);
    
    if (!hasAnimated) {
      console.log("Starting first-time animations");
      localStorage.setItem(ANIMATION_LOCAL_KEY, "true");
      setPlayAnimation(true);
    } else {
      console.log("Skipping animations - already shown");
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
