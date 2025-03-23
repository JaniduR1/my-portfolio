import { useState } from "react";
import { ScrollReveal } from "../ScrollReveal";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oh No! Looks like something went wrong. Please try again!"));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ScrollReveal>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-950 to-cyan-400 bg-clip-text text-transparent text-center">
                Contact Me<br />
                <span className="text-lg italic">(No API Key Needed)</span>
            </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-blue-50 border border-blue-950/10 rounded-lg px-4 py-3 text-blue-950 transition focus:outline-none focus:border-cyan-400"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-blue-50 border border-blue-950/10 rounded-lg px-4 py-3 text-blue-950 transition focus:outline-none focus:border-cyan-400"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-blue-50 border border-blue-950/10 rounded-lg px-4 py-3 text-blue-950 transition focus:outline-none focus:border-cyan-400"
                placeholder="Type something human readable… or JSON, I won’t judge."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
};