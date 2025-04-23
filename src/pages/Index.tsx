
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/roure/Logo";
import TypewriterText from "@/components/roure/TypewriterText";

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Slower by x5
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 7500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <main className="max-w-none min-h-screen flex flex-col items-center justify-center bg-[#DAD3C5] mx-auto p-5">
      <Logo className="mb-10" />
      <div className="mt-6 mb-0 flex flex-col items-center w-full text-center">
        {loadingComplete && (
          <TypewriterText
            text="1996 - 2025"
            className="font-handscript text-[#43362A] text-3xl mb-4 text-center"
            delay={90}
            as="div"
          />
        )}
        <button
          onClick={handleEnter}
          disabled={!loadingComplete}
          className={`font-handscript text-[#43362A] text-2xl mt-2 cursor-pointer text-center focus:outline-none bg-transparent border-none p-0`}
          style={{ textDecoration: "none" }}
        >
          {loadingComplete && <TypewriterText text="entrar" delay={92} as="div" />}
        </button>
      </div>
    </main>
  );
};

export default Index;
