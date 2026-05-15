import { useState, useEffect } from "react";
import logo from "./assets/IMG-20260412-WA0003.jpg";
import coreopsproLogo from "./assets/coreopspro.jpg";

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-cyan-500/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-500/20 blur-[150px] rounded-full animate-pulse" />
      </div>

      {/* NAV */}
      <header className={`fixed top-0 w-full z-50 transition ${
        scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10" : ""
      }`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center p-5">

          <div className="flex items-center gap-3">
            <img src={logo} className="w-10 h-10 rounded-xl" />
            <h1 className="font-bold tracking-wide text-lg">DJC Solutions</h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#core" className="hover:text-white transition">CoreOpsPro</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <button className="md:hidden text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>
            ☰
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden px-6 py-4 bg-black/90 border-t border-white/10">
            <a className="block py-2" href="#features">Features</a>
            <a className="block py-2" href="#core">CoreOpsPro</a>
            <a className="block py-2" href="#contact">Contact</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Build the Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Digital Systems
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Futuristic web systems, automation tools, and AI-powered infrastructure
            built for modern businesses.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
              Explore
            </button>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-28 px-6">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl font-bold">Next-Gen Features</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            {
              title: "AI Automation",
              desc: "Smart systems that automate workflows and operations.",
            },
            {
              title: "Cloud Infrastructure",
              desc: "Scalable, secure, and high-performance cloud systems.",
            },
            {
              title: "Cyber Security",
              desc: "Advanced protection for modern digital assets.",
            },
          ].map((f, i) => (
            <div key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-[1.03] transition"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 mb-4" />
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{f.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* COREOPS PRO */}
      <section id="core" className="py-28 px-6 bg-white/5 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-5xl mx-auto text-center">

          <img
            src={coreopsproLogo}
            className="w-16 h-16 mx-auto rounded-2xl mb-6 shadow-lg"
          />

          <h2 className="text-4xl font-bold">
            CoreOpsPro
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Intelligent operational systems designed to automate, scale,
            and optimize business workflows in real time.
          </p>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-xl mx-auto text-center">

          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-gray-400 mt-2">Let’s build something futuristic.</p>

          <div className="mt-8 space-y-4">

            <input className="w-full p-3 rounded-xl bg-white/5 border border-white/10" placeholder="Name" />
            <input className="w-full p-3 rounded-xl bg-white/5 border border-white/10" placeholder="Email" />
            <textarea className="w-full p-3 rounded-xl bg-white/5 border border-white/10" rows="4" placeholder="Message" />

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold hover:scale-105 transition">
              Send Message
            </button>

          </div>
        </div>
      </section>

    </div>
  );
}