import React from 'react'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import { FlexContainer, Title, SubTitle, Text, TextPrimary, TextSecondary, Diamond, ImageStyles } from '../components/styles'

import LinksTech from '../components/LinksTech'

import Image3d from '../components/Image3d'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DevicesIcon from '@mui/icons-material/Devices';
import DiamondOrange from '../images/Assets/orange-diamond.png'
const About = () => {
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>

					<Grid item xs={5}>
						<SubTitle margin="10%" fw="200" ml="12px">About Me</SubTitle>
						<SubTitle lh="1.8rem"><TextSecondary>Full-Stack Developer</TextSecondary> with experience working in <TextPrimary>NodeJS, React, Redux, Express, SQL</TextPrimary> among other technologies in the sector. </SubTitle>
						<FlexContainer padding="8px" justify="flex-start">
							<Link to="/tech-skills"><Diamond rotate="-45deg"><DeveloperModeIcon style={{ fontSize: "2.5rem", rotate: "45deg", position: "absolute", top: "20%", right: "20%" }} /></Diamond></Link>
							<Link to="/hire-me"><Diamond rotate="-45deg"><MenuBookIcon style={{ fontSize: "2.5rem", rotate: "45deg", position: "absolute", top: "20%", right: "20%" }} /></Diamond></Link>
							<Link to="/projects"><Diamond rotate="-45deg"><DevicesIcon style={{ fontSize: "2.5rem", rotate: "45deg", position: "absolute", top: "20%", right: "20%" }} /></Diamond></Link>
						</FlexContainer>
					</Grid>
					<Grid item xs={6}>

						<FlexContainer justify="flex-end">

							<ImageStyles src={DiamondOrange} />

						</FlexContainer>
					</Grid>

				</Grid>
			</Box>
		</div>
	)
}

export default About