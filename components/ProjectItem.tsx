"use client";

import React from "react";
import { Box, Typography, Card, useTheme, styled } from "@mui/material";
import { Project } from "../lib/projects";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProjectCard = styled(Card)(({ theme }) => ({
  width: 250,
  height: "auto",
  backgroundColor: theme.palette.background.paper,
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "1.5rem",
  boxShadow: "0",
  margin: "1rem",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

type Props = Pick<Project, "path" | "date" | "name" | "imgUrl" | "subtitle">;

const ProjectItem: React.FC<Props> = ({
  path,
  name,
  subtitle,
  date,
  imgUrl,
}) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <ProjectCard
      variant="outlined"
      onClick={() => router.push(`project/${path}`)}
    >
      <Typography color="textPrimary" align="center" variant="h6">
        {name}
      </Typography>

      <Box m="0.25rem" />

      <Typography color="textPrimary" variant="body2" textAlign="center">
        {subtitle}
      </Typography>

      <Box m="0.25rem" />

      <Typography
        color="textPrimary"
        align="center"
        variant="body2"
        fontStyle="italic"
      >
        {date}
      </Typography>

      <Box m="0.5rem" />

      <Image
        width={200}
        height={200}
        src={imgUrl}
        alt={name}
        style={{
          borderRadius: "18.75%",
          border: `0.1px solid ${theme.palette.text.primary}`,
        }}
      />
    </ProjectCard>
  );
};

export default ProjectItem;
