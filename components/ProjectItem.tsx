"use client";

import React from "react";
import { Box, Typography, Card, useTheme } from "@mui/material";
import { Project } from "../lib/projects";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card
        variant="outlined"
        onClick={() => router.push(`project/${path}`)}
        style={{
          width: 250,
          height: "auto",
          backgroundColor: "#242526",
          borderRadius: 10,
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
            border: `0.1px solid ${theme.palette.text.primary}`,
          }}
        />
      </Card>
    </motion.div>
  );
};

export default ProjectItem;
