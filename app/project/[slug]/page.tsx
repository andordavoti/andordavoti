import { Metadata } from "next";
import { FC } from "react";
import { notFound } from "next/navigation";
import projects from "../../../lib/projects";
import ProjectDetails from "../../../components/ProjectDetails";

interface Props {
  params: { slug: string };
}

const findProject = (slug: string) =>
  projects.find((project) => project.path === slug);

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.path }));

export const generateMetadata = ({ params: { slug } }: Props): Metadata => {
  const project = findProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.subtitle,
    openGraph: {
      title: `${project.name} · Andor Davoti`,
      description: project.subtitle,
      images: [project.imgUrl],
    },
  };
};

const Page: FC<Props> = ({ params: { slug } }) => {
  const activeProject = findProject(slug);

  if (!activeProject) {
    notFound();
  }

  return <ProjectDetails project={activeProject} />;
};

export default Page;
