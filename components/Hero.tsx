import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MdArrowDownward, MdMailOutline } from "react-icons/md";
import projects from "../lib/projects";
import { links } from "../lib/links";

const stats = [
  { value: "2014", label: "Building things since" },
  { value: `${projects.length}`, label: "Projects built and shipped" },
  { value: "iOS · Android · Web", label: "Platforms I build for" },
];

const Hero: FC = () => (
  <section className="hero section">
    <div className="container">
      <div className="hero__grid">
        <div>
          <span className="hero__status">
            <span className="hero__status-dot" aria-hidden />
            Based in Oslo, Norway
          </span>

          <h1 className="hero__title">
            I build apps people <span className="serif">actually use.</span>
          </h1>

          <p className="hero__lead">
            I&apos;m Andor, a full stack developer and the founder of{" "}
            <a
              href={links.davotiSolutions}
              target="_blank"
              rel="noopener noreferrer"
            >
              Davoti Solutions
            </a>
            . I design and build for iOS, Android and the web, from my own
            products like Sanser and Fast Rhymes to apps for clients.
          </p>

          <div className="hero__cta">
            <Link href="#projects" className="button button--primary">
              Explore projects
              <MdArrowDownward size={16} />
            </Link>
            <a href={links.email} className="button">
              <MdMailOutline size={18} />
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <Image
            src="/img/profile_img.jpg"
            alt="Portrait of Andor Davoti"
            width={560}
            height={560}
            priority
          />
        </div>
      </div>

      <dl className="stats">
        {stats.map(({ value, label }) => (
          <div key={label} className="stats__item">
            <dt className="stats__label">{label}</dt>
            <dd className="stats__value" style={{ margin: 0 }}>
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Hero;
