import React from 'react'
import { Link } from 'react-router-dom'

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { FlexContainer, Title, SubTitle, Text, TextPrimary, TextSecondary } from '../components/styles'


import avatarIMG from "../images/PROFILE_IMAGE_CODE2.png"
import Image3d from '../components/Image3d'
import Rocket from '../images/Assets/Saly/Saly-43.png'

const LandingPage = () => {
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>


				<FlexContainer direction="column" justify="center">

					<Avatar alt="Ulises Esquivel Profile Picture" sx={{ width: 257, height: 257 }} src={avatarIMG} />



					<Title margin="0px">MY NAME IS ULISES</Title>

					<SubTitle margin="0px">I'm a <TextSecondary>Full-Stack</TextSecondary> developer</SubTitle>

					<Text w="35%" align="center" margin="6px">My goal is to<TextPrimary> apply my skills and knowledge to solve problems</TextPrimary> <TextSecondary>and improve people's lives </TextSecondary>through innovative and efficient applications.</Text>

					<FlexContainer justify="flex-start">
						<Link to="/about-me">
							<Button sx={{ bgcolor: 'primary.main' }} variant="contained" size="large">
								🚀 Lets Get Started!
							</Button>
						</Link>
					</FlexContainer>

				</FlexContainer>
			</Box>
		</div>
	)
}

export default LandingPage