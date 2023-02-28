import React from 'react'
import github from '../images/Assets/Github.png'
import linkedin from '../images/Assets/Linkedin.png'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { FlexContainer, LinksContainer } from './styles'
import { Link } from 'react-router-dom';
const LinksTech = () => {
	return (<FlexContainer justify="flex-end">

		<div>

			<LinksContainer justify="flex-start">

				<Link to="https://github.com/HiUlisesOk"><img src={linkedin} alt="linkedIn Button" /></Link>
				<Link to="https://www.linkedin.com/in/ulises-esquivel/"><img src={github} alt="Github Button" /></Link>

				<Link to="https://docs.google.com/document/d/13BTFdcn-H6I5OckC_nNb3JMAh4k_mr4I0CDLu9KiX5I/edit?usp=sharing"><Button variant="contained" color="primary" sx={{ height: "1.5rem", zIndex: 999 }} endIcon={<DownloadIcon />}>Get Resume</Button></Link>

			</LinksContainer>


		</div>

	</FlexContainer>
	)
}

export default LinksTech