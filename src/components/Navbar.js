import React from 'react'

import { Stack, Link } from '@mui/material';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="center" gap="64px" padding="26px" bgcolor="#FAFAFA">
        <Link href="/home" fontFamily="Inter" color="#000000" underline="none">Home</Link>
        <Link href="/blog" fontFamily="Inter" color="#000000" underline="none">Blog</Link>
        <Link href="/achievements" fontFamily="Inter" color="#000000" underline="none">Achievements</Link>
        <Link href="profile" fontFamily="Inter" color="#000000" underline="none">Profile</Link>
    </Stack>
  )
}

export default Navbar