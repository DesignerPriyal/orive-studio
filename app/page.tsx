"use client";

import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import Studio from "@/components/sections/Studio";
import Expertise from "@/components/sections/Expertise";
import SelectedWork from "@/components/sections/SelectedWork";
import Process from "@/components/sections/Process";
import Tools from "@/components/sections/Tools";
import TrustedBrands from "@/components/sections/TrustedBrands";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Navigation */}
      <Navbar />

      {/* 01 — Hero */}
      <Hero />

      {/* 02 — Studio */}
      <Studio />

      {/* 03 — Expertise */}
      <Expertise />

      {/* 04 — Selected Work */}
      <SelectedWork />

      {/* 05 — Process */}
      <Process />

      {/* 06 — Tools */}
      <Tools />

      {/* 07 — Collaborations */}
      <TrustedBrands />


      {/* 08 — Testimonials */}
      <Testimonials />

      {/* 09 — Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

    </main>
  );
}