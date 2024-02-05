import React, { useState } from "react";

import Navbar from "../components/Navbar";
import profile_image from "../graphics/profile_image.png";

import {
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Chip,
  Stack,
} from "@mui/material";

const ProfilePage = () => {
  const [newSkill, setNewSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const workshops = [
    {
      id: 1,
      title: "Introduction to React",
      description:
        "Learn the basics of React.js and build your first React app.",
    },
    {
      id: 2,
      title: "Node.js Fundamentals",
      description:
        "Explore the fundamentals of Node.js for server-side JavaScript development.",
    },
    // Add more workshops as needed
  ];

  return (
    <>
      <Navbar />
      <Box padding="64px" bgcolor="#FEE9E0">
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Card>
            <CardContent>
              <Stack margin="32px" gap="32px">
                <Stack
                  direction="row"
                  gap="64px"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" alignItems="center" gap="24px">
                    <img src={profile_image} alt="Logo" width="150px" />
                    <Stack>
                      <Typography variant="body1" component="div" fontWeight="bold" gutterBottom>
                        NAME
                      </Typography>
                      <Typography variant="h4">Linda Tan</Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Box>
                  <Typography variant="body1" color="text.secondary">
                    Email: lindatan@gmail.com
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Handphone No: +65 94372949
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Date of Birth: 31 December 2001
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Gender: Female
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Occupation: Student
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    School: National University of Singapore (NUS)
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Educational Background:
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Availability: Mon-Thurs 4-6pm
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Driving/Non-driving: Non-driving
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Own Vehicle: No
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Commitment Level: Ad-hoc, 4 hours a week
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Immigration Status: Singapore Citizen
                  </Typography>
                </Box>
                <Button variant="contained" sx={{ bgcolor: "#CD3301", "&:hover": { bgcolor: "#992200" } }}>Edit Profile</Button>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: "400px" }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Recommended Workshops
              </Typography>
              {workshops.map((workshop) => (
                <Stack
                  key={workshop.id}
                  direction="column"
                  spacing={1}
                  marginBottom={2}
                >
                  <Typography variant="h6">{workshop.title}</Typography>
                  <Typography variant="body1" color="text.secondary">
                    {workshop.description}
                  </Typography>
                  <Button variant="contained" sx={{ bgcolor: "#CD3301", "&:hover": { bgcolor: "#992200" } }}>
                    Sign Up
                  </Button>
                </Stack>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Skills
              </Typography>
              <Stack direction="row" spacing={1}>
                {skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    onDelete={() => handleRemoveSkill(skill)}
                    sx={{ bgcolor: "#CD3301", "&:hover": { bgcolor: "#992200" }, color:"white"}}
                  />
                ))}
              </Stack>
              <TextField
                label="Add Skill"
                variant="outlined"
                margin="normal"
                fullWidth
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <Button
                variant="contained"
                sx={{ bgcolor: "#CD3301", "&:hover": { bgcolor: "#992200" } }}
                onClick={handleAddSkill}
              >
                Add Skill
              </Button>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </>
  );
};

export default ProfilePage;
