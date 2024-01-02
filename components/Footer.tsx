import { Box, Typography } from "@mui/material";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Box padding="2rem 0.5rem">
      <Typography
        variant="body1"
        fontSize="1.25rem"
        fontWeight="500"
        color="textPrimary"
        align="center"
      >
        © {new Date().getFullYear()} Andor Davoti
      </Typography>
    </Box>
  );
};

export default Footer;
