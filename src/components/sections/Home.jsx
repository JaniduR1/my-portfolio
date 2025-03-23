import { ScrollReveal } from "../ScrollReveal";

export const Home = () => {
    return (
        <section
        id="home"
        className="min-h-screen bg-white flex items-center justify-center relative pt-24 md:pt-0">
            <ScrollReveal>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-950 to-cyan-400 bg-clip-text text-transparent leading-right">
                        Hi, I'm Janidu Rathnayaka
                    </h1>

                    <p className="text-blue-950 text-lg mb-8 max-w-lg mx-auto font-bold">
                        I’m a software engineer who enjoys building clean, efficient, and modern web applications. 
                        Whether it’s developing APIs, designing user interfaces, or putting together full-stack solutions, 
                        I like figuring things out and making stuff that works — and works well.
                        <br />
                        <span className="italic text-sm text-cyan-600">
                            {" "}
                            Most of the time, anyway… after quite a few "why isn’t this working?!" moments 
                            and 47 {" "}
                            <span className="bg-gray-200 text-blue-950 px-1 py-0.5 rounded-none font-mono">
                                print("here")
                            </span>
                            {" "} statements later
                        </span>
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a
                        href="#projects"
                        className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-blue-950 text-white py-2 px-4 lg:py-3 lg:px-6 rounded-full font-medium transition relative 
                        overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:from-cyan-600 hover:to-cyan-900">
                        View Projects
                        </a>

                        <a  
                        href="#contact"
                        className="border border-blue-950/50 text-blue-950 py-2 px-4 lg:py-3 lg:px-6 rounded-full font-medium 
                        transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-950/10">
                        Contact Me
                        </a>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
};