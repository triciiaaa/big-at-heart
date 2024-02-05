import React from "react";

import ProgressBar from "./ProgressBar";

import {
  ListItem,
  ListItemText,
  ListItemIcon,
  CardContent,
  Card,
} from "@mui/material";

const AchievementItem = ({ title, description, icon, progress }) => {
  const cardStyle = {
    borderRadius: 3, // Adjust the border-radius as needed
  };

  return (
    <Card sx={cardStyle}>
      <CardContent>
        <ListItem>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} secondary={description} />
          <ProgressBar value={progress} />
        </ListItem>
      </CardContent>
    </Card>
  );
};

export default AchievementItem;
