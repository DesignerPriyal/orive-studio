"use client";

import { ArrowUpRight } from "lucide-react";

interface ExpertiseCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  isActive: boolean;
  onHover: () => void;
}

export default function ExpertiseCard({
  number,
  title,
  description,
  tags,
  image,
  isActive,
  onHover,
}: ExpertiseCardProps) {
  return (
    <div
      onMouseEnter={onHover}
      className="
        group
        border-t
        border-zinc-800
        hover:border-orange-300
        transition-all
        duration-500
        cursor-pointer
        py-10
      "
    >
      <div className="grid lg:grid-cols-[1.5fr_380px] gap-10 items-center">

        {/* LEFT SIDE */}

        <div>

          <div className="flex items-start justify-between">

            <div>

              <span className="text-zinc-500 text-sm">
                {number}
              </span>

              <h3
                className="
                  mt-2
                  font-serif
                  text-3xl
                  md:text-5xl
                  lg:text-6xl
                  leading-none
                  transition-all
                  duration-500
                  group-hover:text-orange-300
                "
              >
                {title}
              </h3>

            </div>

            <ArrowUpRight
              size={38}
              className="
                transition-all
                duration-500
                group-hover:rotate-45
                group-hover:text-orange-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />

          </div>

          <p
            className="
              mt-8
              max-w-2xl
              text-zinc-400
              leading-8
            "
          >
            {description}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">

            {tags.map((tag) => (

              <span
                key={tag}
                className="
                  border
                  border-zinc-700
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  transition-all
                  duration-300
                  group-hover:border-orange-300
                  group-hover:text-orange-300
                "
              >
                {tag}
              </span>

            ))}

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="hidden lg:block">

          <div
            className={`
              rounded-3xl
              overflow-hidden
              aspect-[4/3]
              border
              transition-all
              duration-500
              ${
                isActive
                  ? "border-orange-300 scale-100 opacity-100"
                  : "border-zinc-800 scale-95 opacity-80"
              }
            `}
          >

            <img
              src={image}
              alt={title}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

          </div>

        </div>

      </div>

    </div>
  );
}