import React from 'react'
import { FlexContainer, Title, SubTitle, Text, TextPrimary, TextSecondary } from '../components/styles'
import SkillsColumn from '../components/SkillsColumn'
import SkillsDiamond from '../components/SkillsDiamond'
import SkillsBottom from '../components/SkillsBottom'
const TechSkills = () => {
	return (
		<div>
			<SubTitle justify="space-between" align="center">Tech Skills</SubTitle>

			<FlexContainer justify="space-around">

				<SkillsColumn leftColumn="true" />

				<FlexContainer direction="column">

					<SkillsDiamond />
					<SkillsBottom />

				</FlexContainer>

				<SkillsColumn />

			</FlexContainer>
		</div>
	)
}

export default TechSkills