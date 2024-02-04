import React from "react";

import Navbar from "../components/Navbar";

import { Typography, Box } from "@mui/material";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Box padding="64px">
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
      </Box>
    </>
  );
};

export default Profile;
