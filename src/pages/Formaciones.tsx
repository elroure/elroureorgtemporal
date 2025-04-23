
import React from "react";
import { useNavigate } from "react-router-dom";

const imgUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=650&q=80";
const longText = `Las formaciones son procesos de acompañamiento y crecimiento conjunto...
Sed malesuada sed justo eget finibus. Maecenas porta felis vel enim scelerisque, eu dignissim massa sodales. Nullam dictum, sem quis laoreet tempus, augue sem tristique turpis, eu gravida metus diam vitae dolor.`;

const Formaciones: React.FC = () => {
  const navigate = useNavigate();

  const handleMenu = () => {
    navigate("/home?skipAnimations=1&menu=open");
  };

  return (
    <main className="min-h-screen bg-[#DAD3C5] flex flex-col items-center justify-between p-5 font-handscript">
      <section className="w-full max-w-[850px] flex flex-col items-center mt-10">
        <img
          src={imgUrl}
          alt="Formaciones"
          className="rounded-lg shadow-md mb-8 object-cover w-full max-h-80"
        />
        <p className="text-[#43362A] text-2xl leading-9 max-md:text-xl bg-white/60 p-6 rounded-[18px] shadow max-w-full text-center">
          {longText}
        </p>
      </section>
      <button
        onClick={handleMenu}
        className="font-handscript text-[#43362A] text-3xl underline hover:text-opacity-70 transition-all duration-300 mt-20 mb-4"
      >
        MENÚ
      </button>
    </main>
  );
};

export default Formaciones;
