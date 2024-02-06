import React from 'react'

import "../pages/VolunteerHomePage.css";
import big_at_heart_logo from '../graphics/Big At Heart Logo.png'

import { Stack, Link } from '@mui/material';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="center" gap="64px" padding="26px" bgcolor="#b81111">
        <img src={big_at_heart_logo} alt="Nav" class="nav-image" />
        <Link href="/volunteer-homepage" fontFamily="Inter" color="#ffffff" underline="none">Home</Link>
        <Link href="/events" fontFamily="Inter" color="#ffffff" underline="none">Events</Link>
        <Link href="/blog" fontFamily="Inter" color="#ffffff" underline="none">Blog</Link>
        <Link href="/achievements" fontFamily="Inter" color="#ffffff" underline="none">Achievements</Link>
        {/* <Link href="profile" fontFamily="Inter" color="#ffffff" underline="none">Profile</Link> */}
        <div class="profile-button"><a href="/profile">P</a></div>
    </Stack>
  )
}

export default Navbar