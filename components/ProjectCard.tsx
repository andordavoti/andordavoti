import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Project } from "../lib/projects";

type Props = Pick<Project, "path" | "date" | "name" | "imgUrl" | "subtitle">;

const ProjectCard: FC<Props> = ({ path, name, subtitle, date, imgUrl }) => (
  <Link href={`/project/${path}`} className="project-card">
    <Image
      className="app-icon"
      src={imgUrl}
      alt=""
      width={56}
      height={56}
    />
    <div className="project-card__body">
      <div className="project-card__header">
        <h3 className="project-card__name">{name}</h3>
        <span className="project-card__date">{date}</span>
      </div>
      <p className="project-card__subtitle">{subtitle}</p>
    </div>
  </Link>
);

export default ProjectCard;
