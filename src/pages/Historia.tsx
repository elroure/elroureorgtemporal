
import React from "react";
import { useNavigate } from "react-router-dom";

const imgUrl = "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=650&q=80";
const longText = `Nuestra historia comienza mucho antes de lo que puedes imaginar, entre raíces profundas y sueños compartidos...
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac egestas urna, in dictum justo. Etiam porttitor, mi vel laoreet aliquam, risus lectus pretium enim, vel imperdiet metus leo nec ipsum. Suspendisse potenti. Quisque tempor placerat cursus. Vestibulum aliquam, magna at cursus pretium, velit orci maximus purus, vitae euismod ante enim nec justo.
Vivamus ac enim ac erat varius elementum. Aliquam erat volutpat. Pellentesque euismod justo justo, in sollicitudin nulla blandit ac. Integer et commodo elit.`;

const Historia: React.FC = () => {
  const navigate = useNavigate();

  const handleMenu = () => {
    navigate("/home?skipAnimations=1&menu=open");
  };

  return (
    <main className="min-h-screen bg-[#DAD3C5] flex flex-col items-center justify-between p-5 font-handscript">
      <section className="w-full max-w-[850px] flex flex-col items-center mt-10">
        <img
          src={imgUrl}
          alt="Historia"
          className="rounded-lg shadow-md mb-8 object-cover w-full max-h-80"
        />
        <p className="text-[#43362A] text-2xl leading-9 max-md:text-xl p-6 rounded-[18px] max-w-full text-center">
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

export default Historia;
