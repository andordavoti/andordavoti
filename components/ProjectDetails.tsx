import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { MdArrowBack, MdArrowOutward, MdLanguage } from "react-icons/md";
import projects, { Project } from "../lib/projects";

interface Props {
  project: Project;
}

const categoryLabels: Record<Project["categories"][number], string> = {
  Native: "Mobile",
  Web: "Web",
  Hardware: "Hardware",
};

const ProjectDetails: FC<Props> = ({ project }) => {
  const index = projects.findIndex(({ path }) => path === project.path);
  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  const hasActions =
    project.appStoreUrl || project.playStoreUrl || project.webAppUrl;

  return (
    <article className="section" style={{ paddingTop: "2.5rem" }}>
      <div className="container">
        <Link href="/#projects" className="back-link">
          <MdArrowBack size={16} />
          All projects
        </Link>

        <header className="project-hero">
          <Image
            className="app-icon project-hero__icon"
            src={project.imgUrl}
            alt={`${project.name} icon`}
            width={280}
            height={280}
            priority
          />
          <div>
            {project.role ? (
              <p className="project-hero__role">{project.role}</p>
            ) : null}
            <h1 className="project-hero__title">{project.name}</h1>
            <p className="project-hero__subtitle">{project.subtitle}</p>
            <div className="project-hero__meta">
              <span className="tag">{project.date}</span>
              {project.categories.map((category) => (
                <span key={category} className="tag">
                  {categoryLabels[category]}
                </span>
              ))}
            </div>
          </div>
        </header>

        {hasActions ? (
          <div className="project-actions">
            {project.appStoreUrl ? (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary"
              >
                <FaApple size={18} />
                App Store
              </a>
            ) : null}
            {project.playStoreUrl ? (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`button${
                  project.appStoreUrl ? "" : " button--primary"
                }`}
              >
                <FaGooglePlay size={15} />
                Google Play
              </a>
            ) : null}
            {project.webAppUrl ? (
              <a
                href={project.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`button${
                  project.appStoreUrl || project.playStoreUrl
                    ? ""
                    : " button--primary"
                }`}
              >
                <MdLanguage size={18} />
                Open web app
              </a>
            ) : null}
          </div>
        ) : null}

        <div className="project-layout">
          <div className="prose">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="sidebar">
            {project.technologies ? (
              <div>
                <h2 className="sidebar__title">Built with</h2>
                <div className="sidebar__tags">
                  {project.technologies.map((technology) => (
                    <a
                      key={technology.name}
                      href={technology.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tag"
                    >
                      {technology.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

            {project.links || project.privacy ? (
              <div>
                <h2 className="sidebar__title">Links</h2>
                <ul className="link-list">
                  {project.links?.map((link) => (
                    <li key={link.link}>
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                        <MdArrowOutward size={16} />
                      </a>
                    </li>
                  ))}
                  {project.privacy ? (
                    <li>
                      <Link href={`/privacy/${project.path}`}>
                        Privacy policy & terms
                        <MdArrowOutward size={16} />
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>

        <nav className="project-nav" aria-label="More projects">
          {previous ? (
            <Link href={`/project/${previous.path}`}>
              <span className="project-nav__label">← Previous</span>
              <span className="project-nav__name">{previous.name}</span>
            </Link>
          ) : null}
          {next ? (
            <Link
              href={`/project/${next.path}`}
              className="project-nav__next"
            >
              <span className="project-nav__label">Next →</span>
              <span className="project-nav__name">{next.name}</span>
            </Link>
          ) : null}
        </nav>
      </div>
    </article>
  );
};

export default ProjectDetails;
