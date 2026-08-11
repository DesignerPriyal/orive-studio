"use client";

import { motion } from "motion/react";
export default function Navbar() {
  return (
<motion.header
  initial={{ y: -300, opacity: 0 }}
  animate={{
  y: 0,
  opacity: 1,
  scale: 1,
}}
  transition={{
    duration: 2,
    ease: "easeOut",
  }}
  className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800"
>
  <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-14 py-5 md:py-8 flex items-center justify-between">

    {/* Logo */}
    <a
      href="#"
      className="text-white tracking-[0.28em] md:tracking-[0.35em] text-[15px] md:text-[18px] font-medium"
    >
      ORIVE/STUDIO
    </a>

    {/* Navigation */}
    <nav className="hidden md:flex items-center gap-10 lg:gap-16">
      <a
        href="#studio"
        className="text-zinc-400 hover:text-white transition-colors duration-300"
      >
        Studio
      </a>

      <a
        href="#expertise"
        className="text-zinc-400 hover:text-white transition-colors duration-300"
      >
        Expertise
      </a>

      <a
        href="#selected-work"
        className="text-zinc-400 hover:text-white transition-colors duration-300"
      >
        Work
      </a>
      <a
        href="#process"
        className="text-zinc-400 hover:text-white transition-colors duration-300"
      >
        Process
      </a>
      <a
        href="#contact"
        className="text-zinc-400 hover:text-white transition-colors duration-300"
      >
        Contact
      </a>
    </nav>

    {/* CTA Button */}
<a
  href="#contact"
  className="hidden md:block px-6 lg:px-8 py-3 lg:py-4 border border-zinc-800 rounded-full text-white hover:bg-orange-300 hover:text-black transition-all duration-300"
>
  Let's Talk →
</a>

{/* Mobile Menu Button */}
<button className="md:hidden text-white text-3xl">
  ☰
</button>

</div>
</motion.header>

  );
}