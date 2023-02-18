import React from 'react'
import avatarIMG from "../images/PROFILE_IMAGE_CODE2.png"
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import LinksTech from '../components/LinksTech'
import Rocket from '../images/Assets/Saly-43.png'
const LandingPage = () => {
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<Avatar alt="Ulises Esquivel" sx={{ width: 180, height: 180, margin: "auto" }} src={avatarIMG} />
						<h2>MY NAME IS ULISES</h2>
						<h3>	I'm a Full-Stack developer</h3>
						<p>My goal is to apply my skills and knowledge to solve problems and improve people's lives through innovative and efficient applications.</p>

						<Button sx={{ bgcolor: 'primary.main' }} variant="contained" size="large">
							🚀 Lets Get Started!
						</Button>
					</Grid>
					<Grid item xs={8}>
						<LinksTech title="Hello World!" />
						<img src={Rocket} alt="man technologist light skin tone" />
					</Grid>

				</Grid>
			</Box>
		</div>
	)
}

export default LandingPage