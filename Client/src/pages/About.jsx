import React from 'react'
import { Link } from 'react-router-dom'

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { FlexContainer, Title, SubTitle, Text, TextPrimary, TextSecondary } from '../components/styles'

import LinksTech from '../components/LinksTech'
import avatarIMG from "../images/PROFILE_IMAGE_CODE2.png"
import Image3d from '../components/Image3d'
import Rocket from '../images/Assets/orange-diamond.png'

const About = () => {
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>

					<Grid item xs={5}>
						<FlexContainer justify="flex-start"><LinksTech title="Hello World!" /></FlexContainer>
						<SubTitle lh="1.8rem"><TextSecondary>Full-Stack Developer</TextSecondary> with experience working in <TextPrimary>NodeJS, React, Redux, Express, SQL</TextPrimary> among other technologies in the sector. </SubTitle>

					</Grid>
					<Grid item xs={6}>

						<FlexContainer justify="flex-end">

							<Image3d height="70%" image={Rocket} />

						</FlexContainer>
					</Grid>

				</Grid>
			</Box>
		</div>
	)
}

export default About