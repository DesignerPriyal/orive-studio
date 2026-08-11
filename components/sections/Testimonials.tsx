"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with Orive was the easiest creative decision we've made. They understood our audience and turned our ideas into something that felt clear, thoughtful, and memorable.",
    name: "Nitin",
    role: "Founder, Josh Journey",
  },
  {
    quote:
      "The team delivered beyond expectations. Every detail—from branding to our website—felt intentional and beautifully executed.",
    name: "Priyanshi",
    role: "Principal Architect, Ontogenesis",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previousTestimonial = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section
      id="testimonials"
      className="
        bg-black
        text-white
        px-6
        md:px-10
        lg:px-14
        py-20
        md:py-28
        lg:py-32
      "
    >
      <div className="max-w-[1400px] ml-auto mr-6 md:mr-10 lg:mr-14">

        {/* TOP ROW */}

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
          }}
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            justify-between
            gap-6
          "
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
        WORDS
          </p>

          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-zinc-600
            "
          >
            What our collaborators say
          </p>
        </motion.div>

        {/* TESTIMONIAL */}

        <div className="mt-16 md:mt-20 lg:mt-24">

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -30,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >

              {/* QUOTE MARK */}

              <div
                className="
                  font-serif
                  text-7xl
                  md:text-8xl
                  lg:text-9xl
                  leading-none
                  text-orange-300
                  h-16
                  md:h-20
                "
              >
                “
              </div>

              {/* QUOTE */}

              <blockquote
                className="
                  font-serif
                  text-[42px]
                  sm:text-[52px]
                  md:text-[64px]
                  lg:text-[78px]
                  xl:text-[92px]
                  leading-[0.98]
                  tracking-[-0.045em]
                  max-w-6xl
                  text-zinc-100
                "
              >
                {testimonial.quote}
              </blockquote>

              {/* CLIENT */}

              <div className="mt-12 md:mt-16">

                <p
                  className="
                    text-base
                    md:text-lg
                    text-white
                  "
                >
                  {testimonial.name}
                </p>

                <p
                  className="
                    mt-2
                    uppercase
                    tracking-[0.2em]
                    text-xs
                    md:text-sm
                    text-zinc-600
                  "
                >
                  {testimonial.role}
                </p>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}

          <div
            className="
              mt-14
              md:mt-16
              flex
              items-center
              justify-between
              max-w-6xl
            "
          >

            {/* PROGRESS */}

            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className="
                    group
                    h-8
                    flex
                    items-center
                  "
                >
                  <span
                    className={`
                      block
                      h-[2px]
                      transition-all
                      duration-500
                      ${
                        index === current
                          ? "w-12 bg-orange-300"
                          : "w-6 bg-zinc-800 group-hover:bg-zinc-500"
                      }
                    `}
                  />
                </button>
              ))}
            </div>

            {/* ARROWS */}

            <div className="flex items-center gap-3">

              <button
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
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
                  hover:border-zinc-500
                  hover:bg-zinc-900
                  transition-all
                  duration-300
                "
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="
                  w-12
                  h-12
                  md:w-14
                  md:h-14
                  rounded-full
                  bg-orange-300
                  text-black
                  flex
                  items-center
                  justify-center
                  hover:bg-orange-200
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}