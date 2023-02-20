import React from 'react'
import github from '../images/Assets/Github.png'
import linkedin from '../images/Assets/Linkedin.png'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { FlexContainer } from './styles'
const LinksTech = () => {
	return (<FlexContainer justify="flex-end">

		<div>

			<FlexContainer justify="flex-start">

				<img src={linkedin} alt="linkedIn Button" />
				<img src={github} alt="Github Button" />

				<Button variant="contained" color="secondary" sx={{ height: "1.5rem", zIndex: 999 }} endIcon={<DownloadIcon />}>Get Resume</Button>

			</FlexContainer>


		</div>

	</FlexContainer>
	)
}

export default LinksTech