"use client";

import { motion } from "motion/react";

const toolsRowOne = [
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe XD",
  "After Effects",
];

const toolsRowTwo = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer",
  "GSAP",
];

function ToolMarquee({
  tools,
  reverse = false,
}: {
  tools: string[];
  reverse?: boolean;
}) {
  const items = [...tools, ...tools, ...tools];

  return (
    <div className="overflow-hidden border-t border-zinc-800">
      <motion.div
        className="flex w-max items-center py-7 md:py-9"
        animate={{
          x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{
          animationPlayState: "paused",
        }}
      >
        {items.map((tool, index) => (
          <div
            key={`${tool}-${index}`}
            className="
              flex
              items-center
              whitespace-nowrap
            "
          >
            <span
              className="
                px-6
                md:px-10
                font-serif
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                tracking-[-0.03em]
                text-zinc-500
                transition-colors
                duration-300
                hover:text-orange-300
              "
            >
              {tool}
            </span>

            <span className="text-orange-300 text-xl md:text-2xl">
              •
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Tools() {
  return (
    <section
      id="tools"
      className="
        bg-black
        text-white
        border-t
        border-zinc-800
        py-24
        md:py-32
        lg:py-32
        overflow-hidden
      "
    >
      {/* HEADER */}

      <div className="px-6 md:px-10 lg:px-14">
        <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-16">

          {/* LABEL */}

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
              TOOLS
            </p>
          </motion.div>

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
              The tools
              <br />
              behind the
              <br />
              <span className="text-orange-300">
                craft.
              </span>
            </h2>

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
              From strategy and design to development and motion,
              we use a flexible toolkit to turn ideas into thoughtful
              digital experiences.
            </p>
          </motion.div>
        </div>
      </div>

      {/* MARQUEES */}

      <div className="mt-24 md:mt-24 lg:mt-24">

        <ToolMarquee tools={toolsRowOne} />

        <ToolMarquee tools={toolsRowTwo} reverse />
      </div>
    </section>
  );
}