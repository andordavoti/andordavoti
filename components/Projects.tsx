"use client";

import { FC, useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import projects, { ProjectCategory } from "../lib/projects";
import ProjectCard from "./ProjectCard";

type Filter = "All" | ProjectCategory;

const categories: Filter[] = ["All", "Native", "Web", "Hardware"];

const labels: Record<Filter, string> = {
  All: "All",
  Native: "Mobile",
  Web: "Web",
  Hardware: "Hardware",
};

const countFor = (category: Filter) =>
  category === "All"
    ? projects.length
    : projects.filter((project) => project.categories.includes(category))
        .length;

const Projects: FC = () => {
  const [activeCategory, setActiveCategory] = useState<Filter>("All");

  const activeProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) =>
            project.categories.includes(activeCategory)
          ),
    [activeCategory]
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow">Archive</span>
            <h2 className="section-title">
              All <span className="serif">projects</span>
            </h2>
          </div>

          <LayoutGroup id="filters">
            <div className="filters" role="group" aria-label="Filter projects">
              {categories.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    className="filters__button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category)}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="filter-pill"
                        className="filters__pill"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 40,
                        }}
                      />
                    ) : null}
                    <span className="filters__label">{labels[category]}</span>
                    <span className="filters__count">
                      {countFor(category)}
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </div>

        <motion.div layout className="project-grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {activeProjects.map(({ path, name, subtitle, date, imgUrl }) => (
              <motion.div
                layout
                key={path}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard
                  path={path}
                  name={name}
                  subtitle={subtitle}
                  date={date}
                  imgUrl={imgUrl}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
