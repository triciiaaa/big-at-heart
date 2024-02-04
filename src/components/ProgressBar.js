import React from 'react';
import { LinearProgress, Typography, Container } from '@mui/material';

const ProgressBar = ({ value }) => {
  const containerStyle = {
    width: '30%', // Adjust the width as needed
    margin: 'auto',
  };

  const progressBarStyle = {
    height: 12, // Adjust the height as needed
    borderRadius: 8, // Adjust the borderRadius as needed
  };

  return (
    <Container style={containerStyle}>
      <LinearProgress variant="determinate" value={value} style={progressBarStyle} />
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {`${value}%`}
      </Typography>
    </Container>
  );
};

export default ProgressBar;
