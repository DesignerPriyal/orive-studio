"use client";

import { useState } from "react";
import FadeUp from "@/components/animations/FadeUp";
import ExpertiseCard from "@/components/ui/ExpertiseCard";
import { expertiseData } from "@/components/data/expertiseData";

export default function Expertise() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="expertise"
      className="border-t border-zinc-800 bg-black text-white px-6 md:px-10 lg:px-14 py-20 md:py-28"
    >
      <div className="grid lg:grid-cols-[220px_1fr] gap-10">

        {/* Left Label */}

        <FadeUp delay={0.1}>
          <div>
            <p className="uppercase tracking-[0.35em] text-[20px] text-zinc-500">
              EXPERTISE
            </p>
          </div>
        </FadeUp>

        {/* Right Side */}

        <div>

          {/* Heading */}

          <FadeUp delay={0.2}>
            <h2
              className="
                font-serif
                text-[52px]
                sm:text-[68px]
                md:text-[82px]
                lg:text-[110px]
                xl:text-[135px]
                leading-[0.92]
                tracking-[-0.05em]
                max-w-5xl
              "
            >
              Building
              <br />
              experiences
              <br />
              that
              <span className="text-orange-300">
                {" "}matter.
              </span>
            </h2>
          </FadeUp>

          {/* Description */}

          <FadeUp delay={0.4}>
            <p
              className="
                mt-10
                max-w-2xl
                text-zinc-400
                text-base
                md:text-lg
                leading-8
              "
            >
              We combine strategy, creativity and technology to craft
              memorable brands, websites and digital products that
              connect with people and help businesses grow.
            </p>
          </FadeUp>

          {/* Cards */}

          <div className="mt-24">

            {expertiseData.map((item, index) => (

              <FadeUp
                key={item.id}
                delay={0.15 * index}
              >

                <ExpertiseCard
                  {...item}
                  isActive={active === index}
                  onHover={() => setActive(index)}
                />

              </FadeUp>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}