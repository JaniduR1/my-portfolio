import { ScrollReveal } from "../ScrollReveal";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white flex items-center justify-center py-20"
    >
      <ScrollReveal>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-950 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-blue-950/10 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)] transition">
              <h3 className="text-center text-xl font-bold mb-2 text-blue-900">
                GlyphGateway - AI Hieroglyphics Translator
              </h3>
              <p className="text-blue-950 mb-4">
                A machine learning powered OCR-based hieroglyph translator
                mobile application built using the GlyphNet model as a
                foundation, and optimised by tuning hyperparameters such as
                epochs, batch size, and pooling layers to improve accuracy and
                training performance. Designed and developed a Flutter frontend
                from scratch using Figma, and built a Node.js backend to handle
                API integration and processing.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {[
                  "Python",
                  "Node.js",
                  "ML",
                  "OCR",
                  "Flutter(Dart)",
                  "MongoDB",
                  "REST API",
                  "Figma",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-gradient-to-r from-cyan-300 to-cyan-500 text-blue-950 py-1 px-3 rounded-full text-sm transition hover:from-cyan-500 hover:to-cyan-700 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col items-center mt-auto gap-2">
                <a href="https://github.com/JaniduR1/Back-End-OCR-Stuff"
                className="text-cyan-700 hover:text-cyan-500 transition-colors">
                  OCR (WIP) →
                </a>
                <a href="https://github.com/JaniduR1/glyph_gateway"
                className="text-cyan-700 hover:text-cyan-500 transition-colors"
                >
                  Frontend →
                </a>
                <a href="https://github.com/JaniduR1/NodeServer"
                className="text-cyan-700 hover:text-cyan-500 transition-colors pb-4"
                >
                  Backend [Optimised model's Checkpoint.bin included] →
                </a>
              </div>

            </div>

            <div className="glass p-6 rounded-xl border border-blue-950/10 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_4px_20px_rgba(34,211,238,0.2)] transition flex flex-col">
              <h3 className="text-center text-xl font-bold mb-2 text-blue-900">
                Dynamic RESTful API Design
              </h3>
              <p className="text-blue-950 mb-4">
                Designed and developed two RESTful APIs using ExpressJS and
                Falcon, showcasing skills in backend architecture and
                server-side programming. Built frontend applications to interact
                with these APIs — two using Vue.js and Bootstrap, and another
                using React with TailwindCSS. Containerised both server and
                client components using Docker to enable smooth deployment and
                support CI workflows.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {[
                  "Python",
                  "JavaScript",
                  "Express.js",
                  "Falcon",
                  "Docker",
                  "CI/CD",
                  "REST API",
                  "TailwindCSS",
                  "Bootstrap",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-gradient-to-r from-cyan-300 to-cyan-500 text-blue-950 py-1 px-3 rounded-full text-sm transition hover:from-cyan-500 hover:to-cyan-700 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center mt-auto">
                <a
                  href="https://github.com/JaniduR1/frameworks_and_languages_module"
                  className="text-cyan-700 hover:text-cyan-500 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-blue-950/10 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_4px_20px_rgba(34,211,238,0.2)] transition">
              <h3 className="text-center text-xl font-bold mb-2 text-blue-900">
                Movie Discovery Web App
              </h3>
              <p className="text-blue-950 mb-4">
                Built a React-based movie discovery app powered by the TMDB API.
                Implemented a search bar with debouncing to reduce unnecessary
                API calls and enhance performance. Users can like/dislike
                movies, and trending titles are determined by search frequency,
                stored in an Appwrite database. Developed modular components
                including search, movie cards, and state management for
                interactivity.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {[
                  "React.js",
                  "SQL",
                  "API",
                  "Appwrite",
                  "TailwindCSS",
                  "Node.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-cyan-300 to-cyan-500 text-blue-950 py-1 px-3 rounded-full text-sm transition hover:from-cyan-500 hover:to-cyan-700 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)]"
                    >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center mt-auto">
                <a
                  href="https://github.com/JaniduR1/Movie-App"
                  className="text-cyan-700 hover:text-cyan-500 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-blue-950/10 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_4px_20px_rgba(34,211,238,0.2)] transition">
              <h3 className="text-center text-xl font-bold mb-2 text-blue-900">
                Educational Management Software
              </h3>
              <p className="text-blue-950 mb-4">
                Developed a C# application for managing educational
                organisations, following a test-driven development (TDD)
                approach to ensure code reliability and maintainability. Applied
                object-oriented principles like inheritance and polymorphism to
                implement core features such as course scheduling, module
                management, and interactive test creation.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {["C#", "API", "OOP", ".NET", "Unit Testing"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-cyan-300 to-cyan-500 text-blue-950 py-1 px-3 rounded-full text-sm transition hover:from-cyan-500 hover:to-cyan-700 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)]">
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-center mt-auto">
                <a
                  href="https://github.com/JaniduR1/tmlms"
                  className="text-cyan-700 hover:text-cyan-500 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
