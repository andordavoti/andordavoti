import { FC } from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";
import { links } from "../lib/links";

interface Props {
  hideOnSmall?: boolean;
}

const socials = [
  { name: "GitHub", href: links.github, Icon: FaGithub },
  { name: "LinkedIn", href: links.linkedin, Icon: FaLinkedin },
  { name: "Medium", href: links.medium, Icon: FaMedium },
];

const SocialLinks: FC<Props> = ({ hideOnSmall }) => (
  <>
    {socials.map(({ name, href, Icon }) => (
      <a
        key={name}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        title={name}
        className={`icon-button${
          hideOnSmall && name === "Medium" ? " navbar__hide-sm" : ""
        }`}
      >
        <Icon size={18} />
      </a>
    ))}
  </>
);

export default SocialLinks;
