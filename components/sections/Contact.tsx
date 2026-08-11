"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-black
        text-white
        px-6
        md:px-10
        lg:px-14
        py-28
        md:py-36
        lg:py-44
      "
    >
      {/* BACKGROUND GLOW */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="
          pointer-events-none
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[350px]
          h-[350px]
          md:w-[550px]
          md:h-[550px]
          lg:w-[700px]
          lg:h-[700px]
          rounded-full
          bg-orange-300/5
          blur-[100px]
        "
      />

      <div
        className="
          relative
          max-w-[1600px]
          ml-auto
          mr-6
          md:mr-10
          lg:mr-14
        "
      >
        {/* TOP LABEL */}

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
        >
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-md
              md:text- lg
              text-zinc-500
            "
          >
        CONTACT
          </p>
        </motion.div>

        {/* MAIN HEADING */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="mt-14 md:mt-20"
        >
          <h2
            className="
              font-serif
              text-[58px]
              sm:text-[76px]
              md:text-[100px]
              lg:text-[135px]
              xl:text-[170px]
              leading-[0.86]
              tracking-[-0.06em]
              max-w-[1200px]
            "
          >
            Have something
            <br />
            worth
            <br />
            <span className="text-orange-300">
              building?
            </span>
          </h2>
        </motion.div>

        {/* SUPPORTING COPY */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-12
            max-w-xl
            text-base
            md:text-lg
            leading-8
            text-zinc-400
          "
        >
          Whether you're building a new brand, launching a digital
          product, or looking to make an existing experience better,
          let's create something people remember.
        </motion.p>

        {/* CTA */}

        <motion.a
          href="work@orivedesignstudio.com"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
          viewport={{
            once: true,
          }}
          className="
            group
            mt-12
            inline-flex
            items-center
            gap-5
            rounded-full
            bg-orange-300
            text-black
            px-7
            py-5
            md:px-9
            md:py-6
            text-sm
            md:text-base
            uppercase
            tracking-[0.2em]
            transition-all
            duration-500
            hover:bg-orange-200
            hover:scale-[1.03]
          "
        >
          <Mail
            className="
              w-5
              h-5
              transition-transform
              duration-500
              group-hover:rotate-12
            "
          />

          <span>
            Start a project
          </span>

          <ArrowUpRight
            className="
              w-5
              h-5
              transition-transform
              duration-500
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </motion.a>

        {/* EMAIL */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="mt-10"
        >
          <a
            href="mailto:hello@orive.design"
            className="
              text-sm
              md:text-base
              text-zinc-600
              hover:text-orange-300
              transition-colors
              duration-300
            "
          >
            work@orivedesignstudio.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}