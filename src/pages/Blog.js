import React from "react";

import Navbar from "../components/Navbar";

import { Typography, Box } from "@mui/material";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Box padding="64px" bgcolor="#FEE9E0">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Blog
        </Typography>
      </Box>
    </>
  );
};

export default Blog;
