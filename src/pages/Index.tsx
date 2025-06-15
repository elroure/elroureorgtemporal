
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/roure/Logo";

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [loadingComplete, setLoadingComplete] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 500); // Show entrar button after 0.5s
    
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <main className="max-w-none min-h-screen flex flex-col items-center justify-center bg-[#DAD3C5] mx-auto p-5">
      <Logo className="mb-10" />
      
      <button
        onClick={handleEnter}
        className={`font-handscript text-[#43362A] text-2xl mt-10 cursor-pointer text-center transition-all duration-1000 ${loadingComplete ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: loadingComplete ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
          transition: 'transform 0.8s ease-out, opacity 1s ease-out',
          position: 'relative',
        }}
      >
        <span className="relative z-10 hover:text-opacity-80 transition-colors duration-300">
          entrar
        </span>
        {/* Removed the underline span element that was here */}
      </button>
    </main>
  );
};

export default Index;
