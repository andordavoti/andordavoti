"use client";

import { FC } from "react";
import {
  Box,
  Container,
  Link,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { Project } from "../lib/projects";

const StoreIcon = styled("img")(({ theme }) => ({
  width: 250,
  margin: 10,
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

interface Props {
  project: Project;
}

const ProjectDetails: FC<Props> = ({ project }) => {
  const theme = useTheme();

  const renderLinks = () => {
    if (project.links) {
      return (
        <>
          <Box m="1rem" />

          <Typography color="textPrimary" variant="h5" fontWeight="bold">
            Links:
          </Typography>

          {project.links.map((link) => (
            <div key={link.name}>
              <Box m="1rem" />
              <Typography color="textPrimary" variant="body1" fontWeight="bold">
                {link.name}:{" "}
                <Link
                  style={{ wordWrap: "break-word", fontWeight: "normal" }}
                  rel="noopener noreferrer"
                  target="_blank"
                  color="textSecondary"
                  href={link.link}
                >
                  {link.link}
                </Link>
              </Typography>
            </div>
          ))}
        </>
      );
    }
  };

  const renderTechnologiesUsed = () => {
    if (project.technologies) {
      return (
        <>
          <Box m="2rem" />

          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Typography color="textPrimary" variant="h5" fontWeight="bold">
              Technologies used:
            </Typography>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {project.technologies.map((technology, index: number) => (
                <Typography key={technology.name}>
                  <Link
                    style={{ marginRight: 5 }}
                    color="textSecondary"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={technology.link}
                  >
                    {technology.name}
                    {index !== project.technologies!.length - 1 ? ", " : ""}
                  </Link>
                </Typography>
              ))}
            </div>
          </Box>
        </>
      );
    }
  };

  const renderAppBadges = () => {
    if (project.appStoreUrl || project.playStoreUrl || project.webAppUrl)
      return (
        <>
          <Box m="2rem" />

          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
          >
            {project.playStoreUrl ? (
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={project.playStoreUrl}
              >
                <StoreIcon
                  src="/img/badges/google-play-badge.png"
                  alt="Play Store Link"
                />
              </Link>
            ) : null}

            {project.appStoreUrl ? (
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={project.appStoreUrl}
              >
                <StoreIcon
                  src="/img/badges/app-store-badge.svg"
                  alt="App Store Link"
                />
              </Link>
            ) : null}

            {project.webAppUrl ? (
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={project.webAppUrl}
              >
                <StoreIcon
                  src="/img/badges/web-app-badge.png"
                  alt="Web App Link"
                />
              </Link>
            ) : null}
          </Box>
        </>
      );
  };

  return (
    <Box style={{ padding: "2rem" }}>
      <Typography color="textPrimary" align="center" variant="h3">
        {project.name}
      </Typography>

      <Box m="0.5rem" />

      <Typography color="textSecondary" align="center" variant="h5">
        {project.date}
      </Typography>

      <Box m="1rem" />

      <img
        src={project.imgUrl}
        alt="Project Image"
        style={{
          width: "75%",
          maxWidth: 400,
          borderRadius: "18.75%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          border: `1px solid ${theme.palette.text.primary}`,
        }}
      />

      <Box m="2rem" />

      <Container maxWidth="md">
        {project.description.map((paragraph: string) => (
          <div key={paragraph}>
            <Typography color="textPrimary" variant="body1">
              {paragraph}
            </Typography>
            <Box m="1rem" />
          </div>
        ))}
        {renderLinks()}
        {renderTechnologiesUsed()}
        {renderAppBadges()}
      </Container>
    </Box>
  );
};

export default ProjectDetails;
