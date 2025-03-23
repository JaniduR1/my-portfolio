import { useEffect } from "react";
import logo from "../assets/logo.svg";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
  
    return (

        <nav className="fixed top-0 w-full z-40 bg-white border-b border-cyan-600 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-23">
            
            <a href="#home" onClick={() => setMenuOpen(false)}>
                <img src={logo} alt="Janidu Rathnayaka Logo" className="h-20" />
            </a>


            <div className="w-12 h-6 relative cursor-pointer z-40 md:hidden text-blue-950 text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <span>&times;</span> : <span>&#9776;</span>}
            </div>

            <div className="hidden md:flex items-center space-x-8">
                <a href="#home"
                className="text-blue-950 text-xl hover:text-blue-300 transition-colours">
                    Home
                </a>

                <a href="#about"
                className="text-blue-950 text-xl hover:text-blue-300 transition-colours">
                    About
                </a>

                <a href="#projects"
                className="text-blue-950 text-xl hover:text-blue-300 transition-colours">
                    Projects
                </a>

                <a href="#contact"
                className="text-blue-950 text-xl hover:text-blue-300 transition-colours">
                    Contact
                </a>
            </div>
        </div>
        </div>
    </nav>
  );
};
