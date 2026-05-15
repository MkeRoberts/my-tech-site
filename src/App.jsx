import { useState, useEffect } from "react";

// MAIN LOGO (top left)
import logo from "./assets/IMG-20260412-WA0003.jpg";

// COREOPS PRO LOGO (feature card icon)
import coreopsproLogo from "./assets/coreopspro.jpg";

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/80 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-xl object-cover shadow-lg border border-white/10"
            />
            <h1 className="text-2xl font-bold tracking-wide">
              DJC Solutions
            </h1>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 space-y-4 text-gray-300">
            <a href="#features" className="block">Features</a>
            <a href="#contact" className="block">Contact</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative flex items-center justify-center min-h-screen px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-pink-500/20 blur-3xl" />

        <div className="relative text-center max-w-5xl">
          <h2 className="text-5xl md:text-7xl font-extrabold">
            DJC Solutions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Modern Tech Systems
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            We build modern websites, automation systems, and business tools.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-28 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h3 className="text-4xl font-bold">What We Do</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 mb-6" />
            <h4 className="text-2xl font-semibold mb-4">Web Development</h4>
            <p className="text-gray-400">
              Fast, responsive, modern websites built for businesses.
            </p>
          </div>

          {/* CARD 2 (COREOPS PRO LOGO HERE) */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <img
              src={coreopsproLogo}
              alt="CoreOpsPro"
              className="w-14 h-14 rounded-2xl object-cover mb-6"
            />
            <h4 className="text-2xl font-semibold mb-4">CoreOpsPro</h4>
            <p className="text-gray-400">
              Advanced automation and operational systems for businesses.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 mb-6" />
            <h4 className="text-2xl font-semibold mb-4">Cyber Security</h4>
            <p className="text-gray-400">
              Secure systems and protection for your digital assets.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 bg-black border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">

          <h3 className="text-4xl font-bold">Contact Us</h3>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5 text-left">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
              required
            />

            <button
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold"
              type="submit"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>

    </div>
  );
}