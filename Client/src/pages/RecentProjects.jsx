import React from 'react'
import Card from '../components/Card'
import { SubTitle, FlexContainer } from '../components/styles'
import RickAndMorty from '../images/Assets/cards/Rectangle 11.png'
import foods from '../images/Assets/cards/Rectangle 11 (1).png'
import findahome from '../images/Assets/cards/Rectangle 11 (2).png'
import data from "../json/projects-data.json"
const RecentProjects = () => {
	return (
		<FlexContainer items="stretch" direction="column"><SubTitle>Latest Projects</SubTitle>
			<FlexContainer items="stretch">
				<Card image={RickAndMorty} title={data[0].title} techFront={data[0].techFront} techBack={data[0].techBack} text={data[0].subtitle} link={data[0].link} />
				<Card image={foods} title={data[1].title} techFront={data[1].techFront} techBack={data[1].techBack} text={data[1].subtitle} link={data[1].link} />
				<Card image={findahome} title={data[2].title} techFront={data[2].techFront} techBack={data[2].techBack} text={data[2].subtitle} link={data[2].link} />
			</FlexContainer>
		</FlexContainer>
	)
}

export default RecentProjects