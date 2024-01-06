import projects from "../../../lib/projects";
import { FC, useMemo } from "react";
import { notFound } from "next/navigation";
import { Box, Container, Typography } from "@mui/material";

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

  if (!activeProject.privacy || !activeProject.terms)
    throw new Error("Page Not Found");

  const renderPrivacy = () => {
    if (activeProject.privacy) {
      return (
        <Container maxWidth="md">
          <Typography
            style={{ fontWeight: "bold" }}
            color="textPrimary"
            variant="h5"
          >
            Privacy Policy:
          </Typography>

          <Box m="1rem" />

          {activeProject.privacy.map((paragraph: string) => (
            <div key={paragraph}>
              <Typography color="textPrimary" variant="body1">
                {paragraph}
              </Typography>
              <Box m="1rem" />
            </div>
          ))}
        </Container>
      );
    }

    return null;
  };

  const renderTerms = () => {
    if (activeProject.terms) {
      return (
        <Container maxWidth="md">
          <Typography
            style={{ fontWeight: "bold" }}
            color="textPrimary"
            variant="h5"
          >
            Terms of Service:
          </Typography>

          <Box m="1rem" />

          {activeProject.terms.map((term) => (
            <div key={term.content}>
              <div>
                <Typography
                  style={{ fontWeight: "bold" }}
                  color="textPrimary"
                  variant="body1"
                >
                  {term.title}
                </Typography>
                <Box m="0.5rem" />

                <Typography color="textPrimary" variant="body1">
                  {term.content}
                </Typography>
                <Box m="1rem" />
              </div>
            </div>
          ))}
        </Container>
      );
    }

    return null;
  };

  return (
    <Box style={{ padding: "2rem" }}>
      <Typography color="textPrimary" align="center" variant="h3">
        {activeProject.name}
      </Typography>

      <Box m="1rem" />

      {renderPrivacy()}

      {renderTerms()}
    </Box>
  );
};

export default Page;
