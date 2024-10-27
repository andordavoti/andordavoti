import { createTheme } from "@mui/material";
import { palette } from "./palette";

export const theme = createTheme({
  palette,
  breakpoints: {
    values: {
      xs: 0, // not used
      sm: 500,
      md: 768,
      lg: 1250,
      xl: 1920, // not used
    },
  },
});

export const ICON_SIZE = "2rem";
