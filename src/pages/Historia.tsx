
import React from "react";
import { useNavigate } from "react-router-dom";

const FAMILIA_IMG = "/lovable-uploads/6f2a80a9-32ff-4ded-8ffe-409769d9d45f.png";

const quote = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."`;

const colText = 
  `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`;

const colText2 = 
  `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`;

const Historia: React.FC = () => {
  const navigate = useNavigate();

  // On mount: add popstate handler.
  React.useEffect(() => {
    const handlePopState = () => {
      // Trigger main menu open and skip animations on home page.
      window.dispatchEvent(new Event("openMainMenuInstantly"));
      navigate("/home", { replace: true });
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [navigate]);

  const handleMenuClick = () => {
    // Trigger event that home listens for to open menu instantly and skip animations.
    window.dispatchEvent(new Event("openMainMenuInstantly"));
    navigate("/home", { replace: true });
  };

  return (
    <main className="min-h-screen bg-[#DAD3C5] flex flex-col" style={{ fontFamily: "'Satisfy', cursive" }}>
      <button
        className="self-center mt-8 text-[#43362A] text-2xl font-handscript bg-transparent border-none p-0 cursor-pointer focus:outline-none"
        style={{ textDecoration: "none" }}
        onClick={handleMenuClick}
      >
        MENÚ
      </button>
      <div className="flex flex-row justify-center items-start w-full gap-14 pt-16">
        <img
          src={FAMILIA_IMG}
          className="w-[480px] max-w-[95vw] h-auto object-cover shadow-sm"
          alt="Historia Familia"
        />
        <div className="flex flex-col justify-start w-[540px] max-w-[95vw] gap-5 pt-3">
          <p className="text-[#43362A] text-lg leading-7" style={{ whiteSpace: "pre-line" }}>
            {colText}
          </p>
          <p className="text-[#43362A] text-lg leading-7" style={{ whiteSpace: "pre-line" }}>
            {colText2}
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full mt-8">
        <div className="flex flex-col items-center w-[480px]">
          <div className="italic font-handscript text-2xl text-[#43362A] text-center mt-10 mb-10">{quote}</div>
        </div>
      </div>
    </main>
  );
};

export default Historia;
