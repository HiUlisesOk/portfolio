import React from 'react'
import MyLogo from '../images/Assets/Logo.png'
import { Title, Text, FlexContainer } from './styles'
const Logo = () => {
	return (
		<FlexContainer gap="6px" justify="flex-start">
			<img height="35px" src={MyLogo} />
			<FlexContainer items="flex-start" justify="flex-start" direction="column" >
				<Title margin="0" lh="0.5rem" size="0.9rem">HiUlisesOk</Title>

				<Text margin="0" lh="0.5rem">Full Stack Developer</Text>
			</FlexContainer>
		</FlexContainer>


	)
}

export default Logo