import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div 
        className={`fixed top-0 left-0 w-full mt-23 bg-[rgba(240,240,240,0.8)] z-40 flex flex-col items-center justify-center 
        transition-all duration-300 ease-in-out 
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="text-blue-900 text-xl hover:text-blue-300 transition-colours my-6">
        Home
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="text-blue-900 text-xl hover:text-blue-300 transition-colours my-6">
        About
      </a>

      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className="text-blue-900 text-xl hover:text-blue-300 transition-colours my-6">
        Projects
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="text-blue-900 text-xl hover:text-blue-300 transition-colours my-6">
        Contact
      </a>

    </div>
  );
};
