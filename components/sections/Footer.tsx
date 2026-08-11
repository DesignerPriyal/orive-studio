"use client";

import { motion } from "motion/react";
import { ArrowUpRight, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/orivedesignstudio?igsh=ejg4czYxYjNpeWxo",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/orivedesignstudio.com",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        bg-black
        text-white
        px-6
        md:px-10
        lg:px-14
        pt-20
        md:pt-28
        lg:pt-32
        overflow-hidden
      "
    >
      <div className="max-w-[1600px] ml-auto mr-6 md:mr-10 lg:mr-14">

        {/* TOP CONTENT */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-[1.5fr_1fr_1fr]
            gap-12
            lg:gap-20
          "
        >

          {/* BRAND */}

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
                tracking-[0.3em]
                text-xs
                text-zinc-600
              "
            >
              Independent Design Studio
            </p>

            <h2
              className="
                mt-6
                font-serif
                text-6xl
                sm:text-7xl
                md:text-8xl
                lg:text-9xl
                xl:text-[150px]
                leading-none
                tracking-[-0.06em]
              "
            >
              ORIVE
            </h2>

            <p
              className="
                mt-6
                max-w-sm
                text-zinc-500
                text-sm
                md:text-base
                leading-7
              "
            >
              Building brands, products and digital experiences
              people remember.
            </p>
          </motion.div>

          {/* SOCIAL */}

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
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
          >
            <p
              className="
                uppercase
                tracking-[0.3em]
                text-xs
                text-zinc-600
              "
            >
              Follow
            </p>

            <div className="mt-6 flex flex-col">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    max-w-[220px]
                    py-2
                    text-zinc-400
                    hover:text-white
                    transition-colors
                    duration-300
                  "
                >
                  <span>{social.name}</span>

                  <ArrowUpRight
                    className="
                      w-4
                      h-4
                      opacity-0
                      -translate-x-2
                      translate-y-2
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      group-hover:translate-y-0
                      transition-all
                      duration-300
                    "
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* CONTACT */}

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
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
          >
            <p
              className="
                uppercase
                tracking-[0.3em]
                text-xs
                text-zinc-600
              "
            >
              Get in touch
            </p>

            <a
              href="mailto:hello@orive.design"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-2
                text-zinc-300
                hover:text-orange-300
                transition-colors
                duration-300
                break-all
              "
            >
              hello@orive.design

              <ArrowUpRight
                className="
                  w-4
                  h-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </motion.div>

        </div>

        {/* LARGE WORDMARK */}

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
            delay: 0.15,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-24
            md:mt-32
            lg:mt-40
            select-none
          "
        >
          <div
            className="
              font-serif
              text-[24vw]
              md:text-[22vw]
              lg:text-[20vw]
              leading-[0.65]
              tracking-[-0.08em]
              text-zinc-900
              whitespace-nowrap
              -ml-[0.04em]
            "
          >
            ORIVE
          </div>
        </motion.div>

        {/* BOTTOM */}

        <div
          className="
            mt-16
            md:mt-20
            pb-8
            flex
            flex-col
            md:flex-row
            md:items-center
            justify-between
            gap-6
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-zinc-700
            "
          >
            © 2026 Orive Studio
          </p>

          <button
            onClick={scrollToTop}
            className="
              group
              flex
              items-center
              gap-3
              text-xs
              uppercase
              tracking-[0.2em]
              text-zinc-600
              hover:text-white
              transition-colors
              duration-300
            "
          >
            Back to top

            <span
              className="
                w-9
                h-9
                rounded-full
                border
                border-zinc-800
                flex
                items-center
                justify-center
                group-hover:border-zinc-500
                transition-colors
                duration-300
              "
            >
              <ArrowUp
                className="
                  w-4
                  h-4
                  group-hover:-translate-y-1
                  transition-transform
                  duration-300
                "
              />
            </span>
          </button>

        </div>

      </div>
    </footer>
  );
}