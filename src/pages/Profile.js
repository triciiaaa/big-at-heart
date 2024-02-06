import React, { useState } from "react";

import Navbar from "../components/VolunteerNavbar";
import profile_image from "../graphics/profile_image.png";
import footsteps from "../graphics/footsteps.svg";
import workshop1 from "../graphics/workshop-1.png";
import workshop2 from "../graphics/workshop-2.png";
import workshop3 from "../graphics/workshop-3.png";

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
      title: "Digital Marketing Essentials",
      description:
        "Explore the fundamentals of digital marketing in this workshop. Learn the basics of social media management, content creation, and online advertising. Acquire practical skills to enhance your organization's online presence and effectively communicate its mission.",
      image: workshop1,
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      description:
        "Dive into the world of web development with our intensive bootcamp. Whether you're a beginner or looking to refine your skills, this workshop covers HTML, CSS, and JavaScript essentials. Participants will have the opportunity to build a basic website and contribute to enhancing their organization's online platforms.",
      image: workshop2,
    },
    {
      id: 3,
      title: "Effective Communication for Volunteer Leaders",
      description:
        "Elevate your leadership skills through effective communication techniques. This workshop focuses on interpersonal communication, team collaboration, and conflict resolution. Volunteers will gain valuable insights to lead and inspire their teams, fostering a positive and productive volunteering environment.",
      image: workshop3,
    },
  ];

  return (
    <>
      <Navbar />
      <Box padding="64px" bgcolor="#FEE9E0">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Profile
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Stack gap="32px">
            <Card sx={{ width: 450, height: 650 }}>
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
                        <Typography
                          variant="body1"
                          component="div"
                          fontWeight="bold"
                          gutterBottom
                        >
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
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#CD3301",
                      "&:hover": { bgcolor: "#992200" },
                    }}
                  >
                    Edit Profile
                  </Button>
                </Stack>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Stack margin="32px" gap="32px">
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Badges Earned
                  </Typography>
                  <img src={footsteps} alt="Logo" width="50px" />
                </Stack>
              </CardContent>
            </Card>
          </Stack>
          <Card sx={{ maxWidth: "500px" }}>
            <CardContent>
              <Stack margin="32px">
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Recommended Workshops
                </Typography>
                <Stack gap="32px">
                  {workshops.map((workshop) => (
                    <Stack
                      key={workshop.id}
                      direction="column"
                      gap="16px"
                      marginBottom={2}
                    >
                      <img
                        src={workshop.image}
                        alt="Logo"
                        width="200px"
                        height="200px"
                      />
                      <Typography variant="h6">{workshop.title}</Typography>
                      <Typography variant="body1" color="text.secondary">
                        {workshop.description}
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#CD3301",
                          "&:hover": { bgcolor: "#992200" },
                        }}
                      >
                        Sign Up
                      </Button>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: "350px" }}>
            <CardContent>
              <Stack margin="32px">
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Skills
                </Typography>
                <Stack direction="row" gap="8px" flexWrap="wrap">
                  {skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      onDelete={() => handleRemoveSkill(skill)}
                      sx={{
                        bgcolor: "#CD3301",
                        "&:hover": { bgcolor: "#992200" },
                        color: "white",
                      }}
                    />
                  ))}
                </Stack>
                <Stack gap="32px">
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
                    sx={{
                      bgcolor: "#CD3301",
                      "&:hover": { bgcolor: "#992200" },
                    }}
                    onClick={handleAddSkill}
                  >
                    Add Skill
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </>
  );
};

export default ProfilePage;
