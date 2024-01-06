import projects from "../../../lib/projects";
import { FC, useMemo } from "react";
import ProjectDetails from "../../../components/ProjectDetails";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

const Page: FC<Props> = ({ params: { slug } }) => {
  const activeProject = useMemo(
    () => projects.find((project) => project.path === slug),
    [slug]
  );

  if (!activeProject) {
    notFound();
  }

  return <ProjectDetails project={activeProject} />;
};

export default Page;
