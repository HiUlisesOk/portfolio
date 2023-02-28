import React from 'react'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import { FlexContainer, MenuContainer, SubTitle, Text, TextPrimary, TextSecondary, Diamond, ImageStyles } from '../components/styles'

import LinksTech from '../components/LinksTech'

import Image3d from '../components/Image3d'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DevicesIcon from '@mui/icons-material/Devices';
import Bluedesk from '../images/Assets/Saly/Saly-10.png'
const About = () => {
	return (
		<FlexContainer>
			<FlexContainer w="50%" direction="column">
				<FlexContainer align="left">
					<SubTitle fw="200" align="left" ml="12px">About Me</SubTitle>
				</FlexContainer>
				<SubTitle lh="1.8rem"><TextSecondary>Full-Stack Developer</TextSecondary> with experience working in <TextPrimary>NodeJS, React, Redux, Express, SQL</TextPrimary> among other technologies in the sector. </SubTitle>
				<FlexContainer direction="row" padding="8px" justify="flex-start">
					<Link to="/tech-skills"><Diamond rotate="-45deg"><DeveloperModeIcon style={{ fontSize: "2.5rem", rotate: "45deg", position: "absolute", top: "20%", right: "20%" }} /></Diamond></Link>
					<Link to="/hire-me"><Diamond rotate="-45deg"><MenuBookIcon style={{ fontSize: "2.5rem", rotate: "45deg", position: "absolute", top: "20%", right: "20%" }} /></Diamond></Link>
					<Link to="/projects"><Diamond rotate="-45deg"><DevicesIcon style={{ fontSize: "2.5rem", rotate: "45deg", position: "absolute", top: "20%", right: "20%" }} /></Diamond></Link>
				</FlexContainer>
			</FlexContainer>




			<FlexContainer justify="flex-end">

				<ImageStyles src={Bluedesk} />

			</FlexContainer>

		</FlexContainer>
	)
}

export default About