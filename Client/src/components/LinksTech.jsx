import React from 'react'
import manTechLogo from '../images/Assets/man-technologist-light-skin-tone_svgrepo.com.png'
import github from '../images/Assets/Github.png'
import linkedin from '../images/Assets/Linkedin.png'
const LinksTech = ({ title }) => {
	return (<div>
		<div><img src={manTechLogo} alt="man technologist light skin tone" />{title}</div>
		<div><img src={linkedin} alt="man technologist light skin tone" /><img src={github} alt="man technologist light skin tone" /></div>
	</div>
	)
}

export default LinksTech