import React from "react";

import Navbar from "../components/Navbar";

import { Typography, Box } from "@mui/material";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Box padding="64px">
        <Typography variant="h4" gutterBottom>
          Blog
        </Typography>
      </Box>
    </>
  );
};

export default Blog;
