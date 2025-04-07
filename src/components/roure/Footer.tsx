import React from "react";

interface FooterProps {
  email: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ email, className }) => {
  return (
    <footer
      className={`w-full max-w-[1200px] flex flex-col items-center mt-10 ${className}`}
    >
      <div className="text-[#43362A] text-2xl mb-5 max-sm:text-lg">MENÚ</div>
      <a
        href={`mailto:${email}`}
        className="text-[#43362A] text-2xl underline max-sm:text-lg hover:text-opacity-80 transition-colors"
      >
        {email}
      </a>
    </footer>
  );
};

export default Footer;
