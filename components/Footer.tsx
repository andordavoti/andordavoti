import { FC } from "react";
import { MdArrowOutward, MdMailOutline } from "react-icons/md";
import { links } from "../lib/links";
import SocialLinks from "./SocialLinks";

const Footer: FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__cta">
        <div>
          <h2 className="footer__title">
            Have an idea? <span className="serif">Let&apos;s build it.</span>
          </h2>
          <p className="footer__text">
            I&apos;m always happy to talk about apps, products and side
            projects. For client work, reach out through Davoti Solutions.
          </p>
        </div>

        <div className="hero__cta" style={{ marginTop: 0 }}>
          <a href={links.email} className="button button--primary">
            <MdMailOutline size={18} />
            Send an email
          </a>
          <a
            href={links.davotiSolutions}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Davoti Solutions
            <MdArrowOutward size={16} />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Andor Davoti · Oslo, Norway</span>
        <div className="footer__links">
          <SocialLinks />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
