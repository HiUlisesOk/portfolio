import React from 'react'
import manTechLogo from '../images/Assets/man-technologist-light-skin-tone_svgrepo.com.png'
import github from '../images/Assets/Github.png'
import linkedin from '../images/Assets/Linkedin.png'
import { FlexContainer } from './styles'
const LinksTech = ({ title }) => {
	return (<FlexContainer justify="flex-end">
		<div><img src={manTechLogo} alt="man technologist light skin tone" /></div>
		<div><div>{title}</div><FlexContainer justify="flex-start"><img src={linkedin} alt="man technologist light skin tone" /><img src={github} alt="man technologist light skin tone" /></FlexContainer></div>
	</FlexContainer>
	)
}

export default LinksTech