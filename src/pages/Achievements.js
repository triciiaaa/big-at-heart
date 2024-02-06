import React from "react";

import Navbar from "../components/VolunteerNavbar";
import AchievementItem from "../components/AchievementItem";
import superhero from "../graphics/superhero.svg";
import child from "../graphics/child.svg";
import elderly from "../graphics/elderly.svg";
import footsteps from "../graphics/footsteps.svg";
import lightbulb from "../graphics/lightbulb.svg";
import megaphone from "../graphics/megaphone.svg";
import star from "../graphics/star.svg";
import trophy from "../graphics/trophy.svg";

import { Typography, Box, List, Stack } from "@mui/material";

const Achievements = () => {
  return (
    <>
      <Navbar />
      <Box padding="64px" bgcolor="#FEE9E0">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Achievements Board
        </Typography>
        <List>
          <Stack gap="10px">
          <AchievementItem
            title="Volunteer Newbie"
            description="Volunteered for 1 event at Big at Heart"
            icon={<img src={footsteps} alt="Logo" width="50px" />}
            progress={100}
            />
          <AchievementItem
            title="Love for Children"
            description="Volunteered for 5 children-related events at Big at Heart"
            icon={<img src={child} alt="Logo" width="50px" />}
            progress={20}
            />
          <AchievementItem
            title="Love for Elderly"
            description="Volunteered for 5 elderly-related events at Big at Heart"
            icon={<img src={elderly} alt="Logo" width="50px" />}
            progress={0}
            />
          <AchievementItem
            title="Innovative Volunteer"
            description="Planned and directed 5 events at Big at Heart"
            icon={<img src={lightbulb} alt="Logo" width="50px" />}
            progress={0}
            />
          <AchievementItem
            title="Volunteering Enthusiast"
            description="Wrote a blog for 5 events at Big at Heart"
            icon={<img src={megaphone} alt="Logo" width="50px" />}
            progress={0}
            />
          <AchievementItem
            title="Volunteer Starlight"
            description="Volunteered for 10 events at Big at Heart"
            icon={<img src={star} alt="Logo" width="50px" />}
            progress={10}
          />
          <AchievementItem
            title="Volunteer Superhero"
            description="Volunteered for 25 events at Big at Heart"
            icon={<img src={superhero} alt="Logo" width="50px" />}
            progress={4}
          />
          <AchievementItem
            title="Volunteer Champ"
            description="Volunteered for 50 events at Big at Heart"
            icon={<img src={trophy} alt="Logo" width="50px" />}
            progress={2}
            />
            </Stack>
        </List>
      </Box>
    </>
  );
};

export default Achievements;
