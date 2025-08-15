
import React from "react";
import Logo from "@/components/roure/Logo";

const Index: React.FC = () => {
  return (
    <main className="max-w-none min-h-screen flex flex-col items-center justify-center bg-[#DAD3C5] mx-auto p-5">
      <Logo className="mb-10" animationDelay={0} />
      
      <div className="text-center mt-10">
        <p className="font-handscript text-[#43362A] text-2xl mb-4">
          Nueva web en construcción...
        </p>
        <p className="font-handscript text-[#43362A] text-xl">
          contacto: info@elroure.org
        </p>
      </div>
    </main>
  );
};

export default Index;
