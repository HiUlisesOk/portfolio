import React from 'react'
import { FlexContainer, SubTitle, Title, Text, ImageStyles, TextPrimary, TextSecondary } from '../components/styles'
import BlueImage from '../images/Assets/Ulises/Derecha.png'
const HireMe = () => {
	return (
		<FlexContainer>
			<FlexContainer direction="column" items="flex-start" w="70%">
				<Title>Why I'm the Developer You Need?</Title>
				<SubTitle>Hi, I'm Ulises!</SubTitle>
				<SubTitle>A <TextPrimary>highly</TextPrimary><TextSecondary> motivated</TextSecondary> web developer with a passion for technology, photography, and books. </SubTitle>
				<SubTitle>My goal is to apply my skills and knowledge to help<TextPrimary> businesses and individuals</TextPrimary> improve their lives through <TextSecondary>innovative and efficient applications.</TextSecondary></SubTitle>
				<SubTitle>As a developer, I am <TextPrimary>committed</TextPrimary> to staying up to date with the <TextSecondary> latest technology trends and best practices</TextSecondary> to provide the most efficient and innovative solutions to my clients. I am dedicated, hardworking, and always strive to <TextPrimary>deliver the best results possible.</TextPrimary></SubTitle>
				<Title>If you are looking for a highly skilled and motivated developer with a strong work ethic, a passion for technology, and a commitment to quality, I would love to speak with you about how I can help your business thrive.</Title>
			</FlexContainer>
			<FlexContainer justify="flex-end">

				<ImageStyles src={BlueImage} />

			</FlexContainer>
		</FlexContainer>
	)
}

export default HireMe