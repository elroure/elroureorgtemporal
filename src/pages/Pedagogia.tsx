
import React from "react";
import { useNavigate } from "react-router-dom";

const imgUrl = "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=650&q=80";
const longText = `La pedagogía es el arte de guiar a los niños y niñas en la exploración y el juego...
Curabitur pharetra varius magna, a facilisis nisi imperdiet sed. Integer vel varius justo, nec consequat turpis. Integer at pretium nulla. Quisque facilisis massa metus, nec scelerisque mauris sollicitudin ut. Praesent quis augue sapien.`;

const Pedagogia: React.FC = () => {
  const navigate = useNavigate();

  const handleMenu = () => {
    navigate("/home?skipAnimations=1&menu=open");
  };

  return (
    <main className="min-h-screen bg-[#DAD3C5] flex flex-col items-center justify-between p-5 font-handscript">
      <section className="w-full max-w-[850px] flex flex-col items-center mt-10">
        <img
          src={imgUrl}
          alt="Pedagogia"
          className="rounded-lg shadow-md mb-8 object-cover w-full max-h-80"
        />
        <p className="text-[#43362A] text-2xl leading-9 max-md:text-xl p-6 rounded-[18px] max-w-full text-center"
           style={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
          {longText}
        </p>
      </section>
      <button
        onClick={handleMenu}
        className="font-handscript text-[#43362A] text-3xl hover:text-opacity-70 transition-all duration-300 mt-20 mb-4"
        style={{ textDecoration: 'none' }}
      >
        Atrás
      </button>
    </main>
  );
};

export default Pedagogia;
