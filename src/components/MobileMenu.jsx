import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return(
            <div 
            className={`fixed top-0 left-0 w-full mt-23 bg-[rgb(41, 40, 40)] z-40 flex flex-col items-center justify-center 
            transition-all duration-300 ease-in-out 
            ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>

            <a href="#home"
            className="text-blue-950 text-xl hover:text-blue-300 transition-colours my-7">
                Home
            </a>

            <a href="#about"
            className="text-blue-950 text-xl hover:text-blue-300 transition-colours my-7">
                About
            </a>

            <a href="#projects"
            className="text-blue-950 text-xl hover:text-blue-300 transition-colours my-7">
                Projects
            </a>

            <a href="#contact"
            className="text-blue-950 text-xl hover:text-blue-300 transition-colours my-7">
                Contact
            </a>
        </div>
    );
};
