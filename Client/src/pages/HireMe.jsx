import React from 'react'
import { FlexContainer, SubTitle, Title, Text } from '../components/styles'
const HireMe = () => {
	return (
		<div>
			<FlexContainer direction="column" items="flex-start" w="50%">
				<Title>Why you should hire me?</Title>
				<SubTitle>Hi, I'm Ulises!</SubTitle>
				<Text>A highly motivated web developer with a passion for technology, photography, and books. </Text>
				<Text>My goal is to apply my skills and knowledge to help businesses and individuals improve their lives through innovative and efficient applications.</Text>
				<Text>As a developer, I am committed to staying up to date with the latest technology trends and best practices to provide the most efficient and innovative solutions to my clients. I am dedicated, hardworking, and always strive to deliver the best results possible.</Text>
				<SubTitle>If you are looking for a highly skilled and motivated developer with a strong work ethic, a passion for technology, and a commitment to quality, I would love to speak with you about how I can help your business thrive.</SubTitle>
			</FlexContainer>

		</div>
	)
}

export default HireMe