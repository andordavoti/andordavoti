"use client";

import Image from "next/image";
import { Box, Typography, styled } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
}));

const ProfileImage = styled(Image)(({ theme }) => ({
  borderRadius: "50%",
  border: "2px solid white",
  borderColor: theme.palette.text.primary,
  marginLeft: "2rem",
  [theme.breakpoints.down("md")]: {
    margin: "2rem",
  },
}));

const TopIntro: React.FC = () => {
  return (
    <Container>
      <div style={{ maxWidth: 330 }}>
        <Typography color="textPrimary" variant="h5" fontWeight="500">
          I am a full stack developer from Oslo, Norway.
        </Typography>

        <Box m="2rem" />

        <Typography color="textPrimary" variant="subtitle1">
          With a passion for building things, I've built several software and
          hardware projects over the years, which you can check out bellow.
        </Typography>
      </div>

      <ProfileImage
        width={200}
        height={200}
        src="/img/profile_img.jpg"
        alt="Profile Image"
      />
    </Container>
  );
};

export default TopIntro;
