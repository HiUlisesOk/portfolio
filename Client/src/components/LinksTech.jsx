import React from 'react'
import manTechLogo from '../images/Assets/man-technologist-light-skin-tone_svgrepo.com.png'
import github from '../images/Assets/Github.png'
import linkedin from '../images/Assets/Linkedin.png'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { FlexContainer } from './styles'
const LinksTech = ({ title }) => {
	return (<FlexContainer justify="flex-end">


		<div>
			<img src={manTechLogo} alt="man technologist light skin tone" />

		</div>
		<div>

			<FlexContainer justify="flex-start">{title}</FlexContainer>

			<FlexContainer justify="flex-start">

				<img src={linkedin} alt="man technologist light skin tone" />
				<img src={github} alt="man technologist light skin tone" />

				<Button variant="contained" color="secondary" sx={{ height: "1.5rem" }} endIcon={<DownloadIcon />}>Get Resume</Button>

			</FlexContainer>


		</div>

	</FlexContainer>
	)
}

export default LinksTech