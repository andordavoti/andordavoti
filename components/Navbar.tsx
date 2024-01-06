"use client";

import {
  AppBar,
  Box,
  Container,
  SwipeableDrawer,
  IconButton,
  Link,
  List,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  ListItemButton,
} from "@mui/material";
import { default as NextLink } from "next/link";
import { FC, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaMedium, FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdMailOutline, MdClose } from "react-icons/md";
import { ICON_SIZE } from "../lib/theme";
import { links } from "../lib/links";

const Navbar: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery("only screen and (max-width: 768px)");

  return (
    <AppBar
      color="primary"
      position="sticky"
      style={{
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

          {isMobile ? (
            <Box>
              <IconButton
                color="secondary"
                onClick={() => setDrawerOpen(true)}
                aria-label="Side Drawer Open Button"
              >
                <HiMenuAlt3 size={ICON_SIZE} />
              </IconButton>

              <SwipeableDrawer
                anchor="right"
                open={drawerOpen}
                onOpen={() => setDrawerOpen(true)}
                onClose={() => setDrawerOpen(false)}
              >
                <div
                  style={{ width: 250, marginLeft: 15 }}
                  onClick={() => setDrawerOpen(false)}
                  onKeyDown={() => setDrawerOpen(false)}
                >
                  <div
                    style={{
                      width: 250,
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <IconButton
                      style={{ marginTop: 15, marginRight: 15 }}
                      color="secondary"
                      aria-label="Side Drawer Close Button"
                    >
                      <MdClose color="#fff" size={ICON_SIZE} />
                    </IconButton>
                  </div>

                  <List>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={links.medium}
                    >
                      <ListItemButton aria-label="Medium Button">
                        <ListItemIcon>
                          <FaMedium color="#fff" size={ICON_SIZE} />
                        </ListItemIcon>
                        <ListItemText primary="Medium" />
                      </ListItemButton>
                    </Link>

                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={links.github}
                    >
                      <ListItemButton aria-label="GitHub Button">
                        <ListItemIcon>
                          <FaGithub color="#fff" size={ICON_SIZE} />
                        </ListItemIcon>
                        <ListItemText primary="GitHub" />
                      </ListItemButton>
                    </Link>

                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={links.linkedin}
                    >
                      <ListItemButton aria-label="LinkedIn Button">
                        <ListItemIcon>
                          <FaLinkedin color="#fff" size={ICON_SIZE} />
                        </ListItemIcon>
                        <ListItemText primary="LinkedIn" />
                      </ListItemButton>
                    </Link>

                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={links.email}
                    >
                      <ListItemButton aria-label="Email Button">
                        <ListItemIcon>
                          <MdMailOutline color="#fff" size={ICON_SIZE} />
                        </ListItemIcon>
                        <ListItemText primary="Email" />
                      </ListItemButton>
                    </Link>
                  </List>
                </div>
              </SwipeableDrawer>
            </Box>
          ) : (
            <Box>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={links.medium}
              >
                <IconButton color="secondary" aria-label="Medium Button">
                  <FaMedium size={ICON_SIZE} />
                </IconButton>
              </Link>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={links.github}
              >
                <IconButton color="secondary" aria-label="GitHub Button">
                  <FaGithub size={ICON_SIZE} />
                </IconButton>
              </Link>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={links.linkedin}
              >
                <IconButton color="secondary" aria-label="LinkedIn Button">
                  <FaLinkedin size={ICON_SIZE} />
                </IconButton>
              </Link>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={links.email}
              >
                <IconButton color="secondary" aria-label="Email Button">
                  <MdMailOutline size={ICON_SIZE} />
                </IconButton>
              </Link>
            </Box>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
