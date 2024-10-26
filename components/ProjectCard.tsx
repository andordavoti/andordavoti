import React from "react";
import { Box, Typography, Card } from "@mui/material";
import { Project } from "../lib/projects";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { palette } from "../lib/theme";

type Props = Pick<Project, "path" | "date" | "name" | "imgUrl" | "subtitle">;

const ProjectCard: React.FC<Props> = ({
  path,
  name,
  subtitle,
  date,
  imgUrl,
}) => {
  const router = useRouter();
  return (
    <Card
      className="scale-on-hover"
      variant="outlined"
      onClick={() => router.push(`project/${path}`)}
      style={{
        width: 250,
        height: "auto",
        backgroundColor: "#242526",
        borderRadius: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "1.5rem",
        boxShadow: "0",
        margin: "1rem",
        cursor: "pointer",
      }}
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
          border: `0.1px solid ${palette.text?.primary}`,
        }}
      />
    </Card>
  );
};

export default ProjectCard;
