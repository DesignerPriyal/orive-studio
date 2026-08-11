"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  image,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="group mb-28"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-3xl">
        <Image
          src={image}
          alt={title}
          width={1600}
          height={900}
          className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mt-8 gap-8">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-3">
            {category}
          </p>

          <h3 className="font-serif text-4xl md:text-6xl mb-4">
            {title}
          </h3>

          <p className="text-zinc-400 leading-8 text-lg">
            {description}
          </p>
        </div>

        <button className="flex items-center gap-3 text-white group/button">
          <span className="uppercase tracking-[0.25em] text-sm">
            View Project
          </span>

          <ArrowUpRight
            className="
              w-6
              h-6
              transition-transform
              duration-300
              group-hover/button:translate-x-1
              group-hover/button:-translate-y-1
            "
          />
        </button>
      </div>

      <div className="border-b border-zinc-800 mt-14"></div>
    </motion.div>
  );
}