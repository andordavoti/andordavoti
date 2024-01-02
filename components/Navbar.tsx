"use client";

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { default as NextLink } from "next/link";
import { FC } from "react";
import { MdMailOutline } from "react-icons/md";
import { FaMedium, FaLinkedin, FaGithub } from "react-icons/fa6";
import { links } from "../lib/links";

const Navbar: FC = () => {
  const theme = useTheme();
  return (
    <AppBar
      color="primary"
      position="sticky"
      style={{
        transition: "background-color 0.5s ease",
        color: theme.palette.primary.main,
        boxShadow: "none",
        padding: "1rem 0",
      }}
    >
      <Toolbar>
        <Container
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            maxHeight: "10vh",
          }}
        >
          <NextLink href="/">
            <Typography
              variant="h5"
              fontWeight="500"
              color="textPrimary"
              style={{ fontFamily: "MustangW01-Regular", cursor: "pointer" }}
            >
              Andor Davoti
            </Typography>
          </NextLink>

          <Box>
            <Link target="_blank" href={links.medium}>
              <IconButton color="secondary" aria-label="Medium Button">
                <FaMedium size="2rem" />
              </IconButton>
            </Link>

            <Link target="_blank" href={links.github}>
              <IconButton color="secondary" aria-label="GitHub Button">
                <FaGithub size="2rem" />
              </IconButton>
            </Link>

            <Link target="_blank" href={links.linkedin}>
              <IconButton color="secondary" aria-label="LinkedIn Button">
                <FaLinkedin size="2rem" />
              </IconButton>
            </Link>

            <Link target="_blank" href={links.email}>
              <IconButton color="secondary" aria-label="Email Button">
                <MdMailOutline size="2rem" />
              </IconButton>
            </Link>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
