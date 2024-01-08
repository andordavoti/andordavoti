"use client";

import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  Button,
  ButtonGroup,
} from "@mui/material";
import { motion } from "framer-motion";
import projects, { ProjectCategory } from "../lib/projects";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>(
    "All"
  );
  const [activeProjects, setActiveProjects] = useState(projects);

  useEffect(() => {
    filterProjects(activeCategory);
  }, [activeCategory]);

  const filterProjects = (category: "All" | ProjectCategory) => {
    if (category === "All") {
      setActiveProjects(projects);
    } else {
      const filteredProjects = projects.filter((project) =>
        project.categories.includes(category)
      );
      setActiveProjects(filteredProjects);
    }
  };

  const categories: ("All" | ProjectCategory)[] = [
    "All",
    "Native",
    "Web",
    "Hardware",
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

      <Box m="0.5rem" />

      <ButtonGroup
        style={{ flexWrap: "wrap", justifyContent: "center" }}
        variant="text"
        color="secondary"
        aria-label="text primary button group"
      >
        {categories.map((category, index) => (
          <Button
            variant={category === activeCategory ? "contained" : "outlined"}
            key={index}
            onClick={() => setActiveCategory(category)}
            style={{
              borderTopLeftRadius: index === 0 ? "1rem" : "0rem",
              borderBottomLeftRadius: index === 0 ? "1rem" : "0rem",
              borderTopRightRadius:
                index === categories.length - 1 ? "1rem" : "0rem",
              borderBottomRightRadius:
                index === categories.length - 1 ? "1rem" : "0rem",
              textTransform: "none",
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
              <ProjectCard
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
