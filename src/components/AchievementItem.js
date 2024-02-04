import React from 'react';

import ProgressBar from './ProgressBar'

import { ListItem, ListItemText, ListItemIcon } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const AchievementItem = ({ title, description, icon }) => {
  return (
    <ListItem>
      <ListItemIcon>
        {icon ? icon : <StarIcon />} {/* You can customize the icon or use a default one */}
      </ListItemIcon>
      <ListItemText primary={title} secondary={description} />
      <ProgressBar value={50} />
    </ListItem>
  );
};

export default AchievementItem;
