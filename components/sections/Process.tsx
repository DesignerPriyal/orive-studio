"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, audience, challenges, and ambitions.",
    tags: ["Research", "Strategy", "User Insights"],
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn insights into a clear direction, defining the priorities and opportunities that matter most.",
    tags: ["Positioning", "Planning", "Direction"],
  },
  {
    number: "03",
    title: "Design",
    description:
      "We shape the experience through thoughtful interaction, visual language, and meaningful details.",
    tags: ["UX/UI", "Branding", "Prototyping"],
  },
  {
    number: "04",
    title: "Build",
    description:
      "We bring the approved experience to life with responsive, scalable, and carefully crafted technology.",
    tags: ["Development", "Animation", "Responsive"],
  },
  {
    number: "05",
    title: "Refine",
    description:
      "We test, polish, and improve the experience until every important detail feels right.",
    tags: ["Testing", "Iteration", "Launch"],
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-black text-white border-t border-zinc-800 px-6 md:px-10 lg:px-14 py-24 md:py-32 lg:py-40"
    >
      <div className="grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-16">
        
        {/* LEFT LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-md
              md:text-lg
              text-zinc-500
            "
          >
            PROCESS
          </p>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>
          
          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2
              className="
                font-serif
                text-[52px]
                sm:text-[68px]
                md:text-[88px]
                lg:text-[120px]
                xl:text-[145px]
                leading-[0.9]
                tracking-[-0.05em]
                max-w-6xl
              "
            >
              How we turn
              <br />
              ideas into
              <br />
              <span className="text-orange-300">experiences.</span>
            </h2>
          </motion.div>

          {/* INTRO */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="
              mt-10
              max-w-2xl
              text-zinc-400
              text-base
              md:text-lg
              leading-8
            "
          >
            Every project starts with a question. We combine strategy,
            creativity, and technology to turn that question into something
            useful, meaningful, and memorable.
          </motion.p>

          {/* PROCESS LIST */}
          <div className="mt-20 md:mt-28">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="
                  group
                  relative
                  border-t
                  border-zinc-800
                  py-8
                  md:py-10
                  lg:py-12
                  transition-colors
                  duration-500
                  hover:border-zinc-500
                "
              >
                {/* MAIN ROW */}
                <div
                  className="
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-start
                    gap-6
                    lg:gap-10
                  "
                >
                  {/* NUMBER */}
                  <div className="lg:w-20 shrink-0">
                    <span className="text-sm tracking-[0.25em] text-zinc-600 group-hover:text-orange-300 transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>

                  {/* TITLE */}
                  <div className="flex-1">
                    <h3
                      className="
                        font-serif
                        text-5xl
                        sm:text-6xl
                        md:text-7xl
                        lg:text-8xl
                        tracking-[-0.04em]
                        leading-none
                        transition-transform
                        duration-500
                        group-hover:translate-x-2
                      "
                    >
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-5
                        max-w-xl
                        text-zinc-500
                        group-hover:text-zinc-300
                        transition-colors
                        duration-500
                        text-base
                        md:text-lg
                        leading-7
                      "
                    >
                      {step.description}
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            border
                            border-zinc-800
                            rounded-full
                            px-4
                            py-2
                            text-xs
                            uppercase
                            tracking-[0.15em]
                            text-zinc-600
                            group-hover:text-zinc-300
                            group-hover:border-zinc-600
                            transition-all
                            duration-300
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ARROW */}
                  <div className="lg:w-16 shrink-0">
                    <div
                      className="
                        w-12
                        h-12
                        md:w-14
                        md:h-14
                        rounded-full
                        border
                        border-zinc-800
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-500
                        group-hover:bg-orange-300
                        group-hover:border-orange-300
                        group-hover:rotate-45
                      "
                    >
                      <ArrowUpRight
                        className="
                          w-5
                          h-5
                          text-zinc-500
                          group-hover:text-black
                          transition-colors
                          duration-300
                        "
                      />
                    </div>
                  </div>
                </div>

                {/* HOVER LINE */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-orange-300
                    group-hover:w-full
                    transition-all
                    duration-700
                  "
                />
              </motion.div>
            ))}

            {/* FINAL BORDER */}
            <div className="border-t border-zinc-800" />
          </div>
        </div>
      </div>
    </section>
  );
}