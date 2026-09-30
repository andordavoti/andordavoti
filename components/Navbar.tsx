import Link from "next/link";
import { FC } from "react";
import { MdMailOutline } from "react-icons/md";
import { links } from "../lib/links";
import SocialLinks from "./SocialLinks";

const Navbar: FC = () => (
  <header className="navbar">
    <div className="container navbar__inner">
      <Link href="/" className="navbar__logo" aria-label="Andor Davoti, home">
        Andor Davoti
      </Link>

      <nav className="navbar__actions" aria-label="Social links">
        <SocialLinks hideOnSmall />
        <a href={links.email} className="button button--sm">
          <MdMailOutline size={16} />
          <span>Contact</span>
        </a>
      </nav>
    </div>
  </header>
);

export default Navbar;
