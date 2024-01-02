"use client";

import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  Button,
  useTheme,
  ButtonGroup,
} from "@mui/material";
import { AnimateSharedLayout, motion } from "framer-motion";
import projects, { ProjectCategory } from "../lib/projects";
import ProjectItem from "./ProjectItem";

const Projects: React.FC = () => {
  const theme = useTheme();

  const [activeCategory, setActiveCategory] = useState<"all" | ProjectCategory>(
    "all"
  );
  const [activeProjects, setActiveProjects] = useState(projects);

  useEffect(() => {
    filterProjects(activeCategory);
  }, [activeCategory]);

  const filterProjects = (category: "all" | ProjectCategory) => {
    if (category === "all") {
      setActiveProjects(projects);
    } else {
      const filteredProjects = projects.filter((project) =>
        project.categories.includes(category)
      );
      setActiveProjects(filteredProjects);
    }
  };

  const categories: ("all" | ProjectCategory)[] = [
    "all",
    "native",
    "web",
    "full stack",
    "hardware",
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingTop="2rem"
    >
      <Typography
        color="textPrimary"
        align="center"
        variant="h4"
        fontWeight="500"
      >
        Projects
      </Typography>

      <Box m="1rem" />

      <ButtonGroup
        style={{ flexWrap: "wrap", justifyContent: "center" }}
        variant="text"
        color="secondary"
        aria-label="text primary button group"
      >
        {categories.map((category, index) => (
          <Button
            key={index}
            onClick={() => setActiveCategory(category)}
            style={{
              color:
                category === activeCategory
                  ? theme.palette.text.primary
                  : theme.palette.text.secondary,
            }}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>

      <Box m="0.5rem" />

      <Container maxWidth="lg">
        <Grid
          container
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          {activeProjects.map(({ path, name, subtitle, date, imgUrl }) => (
            <motion.div layout key={name}>
              <ProjectItem
                path={path}
                name={name}
                subtitle={subtitle}
                date={date}
                imgUrl={imgUrl}
              />
            </motion.div>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
