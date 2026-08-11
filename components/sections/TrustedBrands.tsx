"use client";

import { motion } from "motion/react";

const brandsRowOne = [
  "Ontogenesis Design Studio",
  "HalfOnions",
  "Kommon School",
  "JoshJourney",
  "Evocative",
];

const brandsRowTwo = [
  "Ontogenesis Design Studio",
  "HalfOnions",
  "Kommon School",
  "JoshJourney",
  "Evocative",
];

function BrandMarquee({
  brands,
  reverse = false,
}: {
  brands: string[];
  reverse?: boolean;
}) {
  // Duplicate the list so the animation can loop continuously
  const items = [...brands, ...brands, ...brands];

  return (
    <div className="overflow-hidden border-t border-zinc-800">
      <motion.div
        className="flex w-max items-center"
        animate={{
          x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{
          scale: 1.01,
        }}
      >
        {items.map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="
              flex
              items-center
              shrink-0
            "
          >
            <span
              className="
                px-8
                sm:px-12
                md:px-16
                lg:px-20
                py-8
                md:py-10
                font-serif
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
                tracking-[-0.04em]
                text-zinc-500
                hover:text-orange-300
                transition-colors
                duration-300
                whitespace-nowrap
              "
            >
              {brand}
            </span>

            <span
              className="
                text-orange-300
                text-xl
                md:text-2xl
              "
            >
              •
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TrustedBrands() {
  return (
    <section
      id="brands"
      className="
        bg-black
        text-white
        border-t
        border-zinc-800
        py-24
        md:py-32
        lg:py-40
        overflow-hidden
      "
    >
      {/* HEADER */}

      <div className="px-6 md:px-10 lg:px-14">
        <div
          className="
            grid
            lg:grid-cols-[220px_1fr]
            gap-10
            lg:gap-16
          "
        >
          {/* LABEL */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
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
             COLLABORATIONS
            </p>
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            viewport={{
              once: true,
            }}
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
              Good work
              <br />
              is never made
              <br />
              <span className="text-orange-300">
                alone.
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
              We collaborate with ambitious brands and teams to
              create meaningful identities, digital products, and
              experiences.
            </p>
          </motion.div>
        </div>
      </div>

      {/* BRAND MARQUEES */}

      <div className="mt-24 md:mt-32">

        <BrandMarquee
          brands={brandsRowOne}
        />

        <BrandMarquee
          brands={brandsRowTwo}
          reverse
        />

      </div>

      {/* FOOTNOTE */}

      <div
        className="
          px-6
          md:px-10
          lg:px-14
          mt-8
        "
      >
        <p
          className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-zinc-600
          "
        >
          Selected collaborations & client work
        </p>
      </div>
    </section>
  );
}