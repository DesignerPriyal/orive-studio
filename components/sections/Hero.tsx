"use client";

import FadeUp from "@/components/animations/FadeUp";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-10 lg:px-14 pt-28 md:pt-36 lg:pt-40 pb-16 flex flex-col justify-center">

      {/* Small Heading */}

      <FadeUp delay={0.1}>
        <p className="uppercase tracking-[0.3em] text-zinc-600 text-xs md:text-sm mb-8">
          Independent Design Studio — Est. 2023
        </p>
      </FadeUp>

      {/* Line 1 */}

      <div className="overflow-hidden">
        <FadeUp delay={0.3}>
          <h1
            className="
            font-serif
            text-[52px]
            sm:text-[72px]
            md:text-[100px]
            lg:text-[180px]
            leading-[0.9]
            tracking-[-0.05em]
            text-white
          "
          >
            We build brands
          </h1>
        </FadeUp>
      </div>

      {/* Line 2 */}

      <div className="overflow-hidden">
        <FadeUp delay={0.5}>
          <h1
            className="
            font-serif
            text-[52px]
            sm:text-[72px]
            md:text-[100px]
            lg:text-[180px]
            leading-[0.9]
            tracking-[-0.05em]
            text-white
          "
          >
            that{" "}
            <span className="text-orange-300">
              people
            </span>{" "}
            remember.
          </h1>
        </FadeUp>
      </div>

    </section>
  );
}