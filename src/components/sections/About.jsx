import { ScrollReveal } from "../ScrollReveal";

export const About = () => {

    const skills = [
        "Python", "JavaScript", "TypeScript", "C#", "SQL", "NoSQL", "MongoDB",
        "React", "VueJS", "TailwindCSS", "Bootstrap",
        "Django", "ExpressJS", "NodeJS",
        "Docker", "Git", "Jira", "CI/CD", "REST APIs",
        "Bash", "SDLC", "Scrum", "Kanban"
    ];


    return (
        <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
        >
        <ScrollReveal>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-950 to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-blue-950/10 border hover:-translate-y-1 transition-all justify-center text-center">

                    <p className="text-blue-950 mb-6">
                    I’m a software engineer who enjoys learning by building. I’ve worked on everything from AI-powered translators to full-stack apps, 
                    and I’m always exploring new tech to level up my skills. Most of what I know comes from breaking things, 
                    fixing them, and then figuring out how to make them better.
                    </p>

                    <h3 className="text-xl font-bold mb-4 text-blue-950">
                    🧪 Languages and Technologies I’ve Worked With
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {skills.map((skill, index) => (
                        <span
                        key={index}
                        className="bg-gradient-to-r from-cyan-100 to-cyan-300 text-blue-950 py-1 px-3 rounded-full text-sm hover:from-cyan-300 hover:to-cyan-600 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)] transition">
                            {skill}
                        </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 flex flex-col justify-center rounded-xl border-blue-950/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-2xl font-bold mb-4 text-center text-blue-950">🏫 Education</h3>
                        <p className="list-disc list-inside text-blue-950 space-y-2 text-center text-lg">
                            <strong>B.Eng. Software Engineering</strong><br />First-Class (Hons)
                        </p>
                    </div>
                    <div className="p-6 rounded-xl border-blue-950/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-center text-blue-950">💻 My Projects</h3>
                        <ul className="list-disc list-inside text-blue-950 space-y-2 text-left">
                            <li>
                                Designed an AI-powered hieroglyphics translator using PyTorch and a custom CNN, paired with a Flutter frontend and NodeJS backend.
                            </li>
                            <li>
                                Built scalable REST APIs using ExpressJS and Falcon, with responsive frontends in Vue and React.
                            </li>
                            <li>
                                Containerised client-server apps with Docker to streamline deployment and CI workflows.
                            </li>
                            <li>
                                Created Bash scripts to automate file management and system tasks in a Linux environment.
                            </li>
                            <li>
                                Applied test-driven development in a C# educational app using OOP principles.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </ScrollReveal>
        </section>
    );
};