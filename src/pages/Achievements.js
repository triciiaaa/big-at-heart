import React from "react";

import Navbar from "../components/Navbar";
import AchievementItem from "../components/AchievementItem";

import { Typography, Box, List } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Achievements = () => {
  return (
    <>
      <Navbar />
      <Box padding="64px">
        <Typography variant="h4" gutterBottom>
          Achievements Board
        </Typography>
        <List>
          <AchievementItem
            title="Volunteer Newbie"
            description="Volunteered for 1 event at Big at Heart"
            icon={<StarIcon color="primary" />} // You can customize the icon color
          />
          <AchievementItem
            title="Volunteer XXX"
            description="Volunteered for 5 events at Big at Heart"
          />
          {/* Add more achievements as needed */}
        </List>
      </Box>
    </>
  );
};

export default Achievements;
