"use client";

import FadeUp from "@/components/animations/FadeUp";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData } from "@/components/data/projectsData";

export default function SelectedWork() {
  return (
    <section
      id="selected-work"
      className="border-t border-zinc-800 bg-black text-white px-6 md:px-10 lg:px-14 py-20 md:py-28"
    >
      <div className="grid lg:grid-cols-[220px_1fr] gap-10">

        {/* Left Label */}

        <FadeUp delay={0.1}>
          <div>
            <p
            className="
              uppercase
              tracking-[0.35em]
              text-md
              md:text-lg
              text-zinc-500
            "
          >
          SELECTED WORK
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
              Featured
              <br />
              projects
              <br />
              that
              <span className="text-orange-300">
                {" "}create impact.
              </span>
            </h2>
          </FadeUp>

          {/* Description */}

          <FadeUp delay={0.35}>
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
              Every project is built with strategy, creativity and
              attention to detail. From branding to digital products,
              our work focuses on creating memorable experiences that
              deliver real business value.
            </p>
          </FadeUp>

          {/* Projects */}

          <div className="mt-24">

            {projectsData.map((project) => (

              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
              />

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}