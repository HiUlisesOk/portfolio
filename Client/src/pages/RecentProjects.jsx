import React from 'react'
import Card from '../components/Card'
import { SubTitle, FlexContainer } from '../components/styles'
import RickAndMorty from '../images/Assets/cards/Rectangle 11.png'
import foods from '../images/Assets/cards/Rectangle 11 (1).png'
import findahome from '../images/Assets/cards/Rectangle 11 (2).png'
import data from "../json/projects-data.json"
const RecentProjects = () => {
	return (
		<FlexContainer direction="column"><SubTitle>Latest Projects</SubTitle>
			<FlexContainer>
				<Card image={RickAndMorty} title={data[0].title} subtitle={data[0].subtitle} text={data[0].subtitle} link={data[0].link} />
				<Card image={foods} title={data[1].title} subtitle={data[1].subtitle} text={data[1].subtitle} link={data[1].link} />
				<Card image={findahome} title={data[2].title} subtitle={data[2].subtitle} text={data[2].subtitle} link={data[2].link} />
			</FlexContainer>
		</FlexContainer>
	)
}

export default RecentProjects