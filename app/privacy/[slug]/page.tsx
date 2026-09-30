import { Metadata } from "next";
import Link from "next/link";
import { FC } from "react";
import { notFound } from "next/navigation";
import { MdArrowBack } from "react-icons/md";
import projects from "../../../lib/projects";

interface Props {
  params: { slug: string };
}

const findProject = (slug: string) =>
  projects.find((project) => project.path === slug);

export const generateStaticParams = () =>
  projects
    .filter((project) => project.privacy && project.terms)
    .map((project) => ({ slug: project.path }));

export const generateMetadata = ({ params: { slug } }: Props): Metadata => {
  const project = findProject(slug);
  if (!project) return {};

  return {
    title: `${project.name} privacy policy & terms`,
  };
};

const Page: FC<Props> = ({ params: { slug } }) => {
  const activeProject = findProject(slug);

  if (!activeProject || !activeProject.privacy || !activeProject.terms) {
    notFound();
  }

  return (
    <article className="section legal" style={{ paddingTop: "2.5rem" }}>
      <div className="container container--narrow">
        <Link href={`/project/${activeProject.path}`} className="back-link">
          <MdArrowBack size={16} />
          {activeProject.name}
        </Link>

        <h1>{activeProject.name}</h1>

        <div className="prose">
          <h2>Privacy Policy</h2>
          {activeProject.privacy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <h2>Terms of Service</h2>
          {activeProject.terms.map((term) => (
            <div key={term.content}>
              <h3>{term.title}</h3>
              <p>{term.content}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Page;
