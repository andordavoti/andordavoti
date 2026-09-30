import Image from "next/image";
import Link from "next/link";
import { CSSProperties, FC } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { MdArrowOutward, MdLanguage } from "react-icons/md";
import projects from "../lib/projects";

const glowColors: Record<string, string> = {
  sanser: "rgba(74, 222, 128, 0.14)",
  "fast-rhymes": "rgba(212, 243, 107, 0.14)",
};

const Featured: FC = () => {
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow">Featured</span>
            <h2 className="section-title">
              Selected <span className="serif">products</span>
            </h2>
          </div>
        </div>

        <div className="featured-grid">
          {featured.map((project) => (
            <Link
              key={project.path}
              href={`/project/${project.path}`}
              className="featured-card"
              style={
                {
                  "--card-glow": glowColors[project.path],
                } as CSSProperties
              }
            >
              <div className="featured-card__top">
                <Image
                  className="app-icon"
                  src={project.imgUrl}
                  alt=""
                  width={64}
                  height={64}
                />
                <MdArrowOutward size={22} className="featured-card__arrow" />
              </div>

              <div className="featured-card__body">
                {project.role ? (
                  <p className="featured-card__role">{project.role}</p>
                ) : null}
                <h3 className="featured-card__name">{project.name}</h3>
                <p className="featured-card__subtitle">{project.subtitle}</p>
              </div>

              <div className="featured-card__meta">
                <span className="tag">{project.date}</span>
                {project.appStoreUrl ? (
                  <span className="tag">
                    <FaApple size={13} /> iOS
                  </span>
                ) : null}
                {project.playStoreUrl ? (
                  <span className="tag">
                    <FaGooglePlay size={11} /> Android
                  </span>
                ) : null}
                {project.webAppUrl || project.categories.includes("Web") ? (
                  <span className="tag">
                    <MdLanguage size={13} /> Web
                  </span>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
