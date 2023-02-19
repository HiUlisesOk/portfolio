import React from 'react'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { FlexContainer, Title, SubTitle, Text, TextPrimary, TextSecondary } from '../components/styles'

import LinksTech from '../components/LinksTech'
import avatarIMG from "../images/PROFILE_IMAGE_CODE2.png"
import Image3d from '../components/Image3d'
import Rocket from '../images/Assets/Saly-43.png'
const LandingPage = () => {
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<FlexContainer justify="flex-start">

							<Avatar alt="Ulises Esquivel" sx={{ width: 250, height: 250 }} src={avatarIMG} />

						</FlexContainer>

						<Title>MY NAME IS ULISES</Title>

						<SubTitle>I'm a <TextSecondary>Full-Stack</TextSecondary> developer</SubTitle>

						<Text>My goal is to<TextPrimary> apply my skills and knowledge to solve problems</TextPrimary> <TextSecondary>and improve people's lives </TextSecondary>through innovative and efficient applications.</Text>

						<FlexContainer justify="flex-start">

							<Button sx={{ bgcolor: 'primary.main' }} variant="contained" size="large">
								🚀 Lets Get Started!
							</Button>

						</FlexContainer>
					</Grid>
					<Grid item xs={6}>
						<LinksTech title="Hello World!" />
						<FlexContainer justify="flex-end">

							<Image3d height="70%" image={Rocket} />

						</FlexContainer>
					</Grid>

				</Grid>
			</Box>
		</div>
	)
}

export default LandingPage