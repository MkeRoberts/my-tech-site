import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import logo from "./assets/IMG-20260412-WA0003.jpg";
import coreopsproLogo from "./assets/coreopspro.jpg";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* FUTURISTIC BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[160px] rounded-full bottom-[-200px] right-[-200px]" />
      </div>

      {/* NAV */}
      <header className={`fixed top-0 w-full z-50 transition ${
        scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10" : ""
      }`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center p-5">

          <div className="flex items-center gap-3">
            <img src={logo} className="w-10 h-10 rounded-xl" />
            <h1 className="font-bold">DJC Solutions</h1>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold">
            Build the Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Digital Systems
            </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Futuristic web platforms, automation systems, and AI-powered infrastructure.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {[
            { title: "AI Automation", desc: "Smart workflows powered by AI." },
            { title: "Cloud Systems", desc: "Scalable infrastructure worldwide." },
            { title: "Security", desc: "Enterprise-grade protection." }
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 mb-4" />
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{f.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* COREOPS PRO */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-28 px-6 bg-white/5 border-y border-white/10 backdrop-blur-xl text-center"
      >
        <img src={coreopsproLogo} className="w-16 h-16 mx-auto mb-6 rounded-xl" />

        <h2 className="text-4xl font-bold">CoreOpsPro</h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Intelligent automation systems that optimize and scale business operations in real time.
        </p>
      </motion.section>

      {/* CONTACT */}
      <section className="py-28 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">Contact</h2>

          <div className="mt-8 max-w-xl mx-auto space-y-4">
            <input className="w-full p-3 rounded-xl bg-white/5 border border-white/10" placeholder="Name" />
            <input className="w-full p-3 rounded-xl bg-white/5 border border-white/10" placeholder="Email" />
            <textarea className="w-full p-3 rounded-xl bg-white/5 border border-white/10" rows="4" placeholder="Message" />

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold hover:scale-105 transition">
              Send
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}