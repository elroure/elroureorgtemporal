
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/roure/Logo";

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [loadingComplete, setLoadingComplete] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <main className="max-w-none min-h-screen flex flex-col items-center justify-center bg-[#DAD3C5] mx-auto p-5">
      <Logo className="mb-10" animationDelay={0} />
      
      <button
        onClick={handleEnter}
        className={`font-handscript text-[#43362A] text-2xl mt-10 cursor-pointer transition-opacity duration-[10000ms] text-center ${loadingComplete ? 'opacity-100' : 'opacity-0'}`}
      >
        entrar
      </button>
    </main>
  );
};

export default Index;
