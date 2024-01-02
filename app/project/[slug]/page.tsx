import projects from "../../../lib/projects";
import { useMemo } from "react";
import ProjectDetails from "../../../components/ProjectDetails";
import { notFound } from "next/navigation";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const activeProject = useMemo(
    () => projects.find((project) => project.path === slug),
    [slug]
  );

  if (!activeProject) {
    notFound();
  }

  return <ProjectDetails project={activeProject} />;
}
