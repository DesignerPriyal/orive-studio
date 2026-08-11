"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const impactData = [
  {
    value: 25,
    suffix: "+",
    label: "Projects",
  },
  {
    value: 12,
    suffix: "+",
    label: "Brands",
  },
  {
    value: 4,
    suffix: "+",
    label: "Years",
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfaction",
  },
];

function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Math.floor(value * easedProgress)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Studio() {
  return (
    <section
      id="studio"
      className="
        bg-black
        text-white
        overflow-hidden
        px-6
        sm:px-8
        md:px-10
        lg:px-14
        py-20
        sm:py-24
        md:py-28
        lg:py-32
      "
    >
      <div
        className="
          w-full
          max-w-[1500px]
          ml-auto
          mr-0
        "
      >

        {/* =========================
            SECTION LABEL
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            amount: 0.3,
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
          STUDIO
          </p>
        </motion.div>

        {/* =========================
            MAIN HEADING
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            mt-10
            sm:mt-12
            md:mt-14
            lg:mt-16
          "
        >
          <h2
            className="
              font-serif
              text-[42px]
              leading-[0.92]
              tracking-[-0.045em]

              sm:text-[52px]

              md:text-[68px]

              lg:text-[88px]

              xl:text-[108px]

              2xl:text-[120px]

              max-w-[1200px]
            "
          >
            We are an independent
            <br />

            design studio building
            <br />

            <span className="text-orange-300">
              things people remember.
            </span>
          </h2>
        </motion.div>

        {/* =========================
            DESCRIPTION
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            mt-8
            sm:mt-10
            md:mt-12
            lg:mt-14

            w-full

            sm:max-w-[560px]

            md:max-w-[600px]

            lg:max-w-[620px]

            ml-0

            lg:ml-auto
          "
        >
          <p
            className="
              text-zinc-400
              text-sm
              sm:text-base
              md:text-lg
              leading-7
              md:leading-8
            "
          >
            We bring strategy, design and technology together
            to create brands, digital products and experiences
            that feel as good as they work.
          </p>
        </motion.div>

        {/* =========================
            IMPACT NUMBERS
        ========================== */}

        <div
          className="
            mt-16
            sm:mt-20
            md:mt-24
            lg:mt-28

            grid

            grid-cols-2

            sm:grid-cols-2

            md:grid-cols-4

            gap-x-6
            sm:gap-x-8
            md:gap-x-10
            lg:gap-x-12

            gap-y-10

            max-w-[1050px]

            ml-0

            md:ml-auto
          "
        >
          {impactData.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="group min-w-0"
            >
              {/* NUMBER */}

              <div
                className="
                  font-serif

                  text-[52px]

                  sm:text-[62px]

                  md:text-[72px]

                  lg:text-[88px]

                  xl:text-[100px]

                  leading-none

                  tracking-[-0.06em]

                  text-white

                  group-hover:text-orange-300

                  transition-colors
                  duration-500
                "
              >
                <Counter
                  value={item.value}
                  suffix={item.suffix}
                />
              </div>

              {/* LABEL */}

              <p
                className="
                  mt-3

                  uppercase

                  tracking-[0.2em]
                  sm:tracking-[0.25em]

                  text-[9px]
                  sm:text-[10px]
                  md:text-xs

                  text-zinc-600

                  group-hover:text-zinc-400

                  transition-colors
                  duration-300
                "
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* =========================
            CLOSING STATEMENT
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            mt-14
            sm:mt-16
            md:mt-18
            lg:mt-20

            max-w-[620px]
          "
        >
          <p
            className="
              font-serif

              text-[22px]

              sm:text-[26px]

              md:text-[32px]

              lg:text-[38px]

              leading-[1.15]

              tracking-[-0.025em]

              text-zinc-500
            "
          >
            Small numbers.
            <span className="text-white">
              {" "}Meaningful work.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}