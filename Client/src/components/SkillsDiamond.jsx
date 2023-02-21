import React from 'react'
import { Diamond, IconDiamond, FlexContainer } from './styles'
import Mongo from '../images/Assets/Core Skills/icon _mongodb.png'
import ex from '../images/Assets/Core Skills/ex.png'
import css from '../images/Assets/Core Skills/icon _css3_.png'
import html from '../images/Assets/Core Skills/icon _html5_.png'
import react from '../images/Assets/Core Skills/icon _react_.png'
import ts from '../images/Assets/Core Skills/icon _typescript_.png'
import js from '../images/Assets/Core Skills/js.png'
import node from '../images/Assets/Core Skills/node.png'
import postsql from '../images/Assets/Core Skills/postfgresql.png'
import reactnative from '../images/Assets/Core Skills/reactnative.png'
import redux from '../images/Assets/Core Skills/redux.png'
import bluediamond from '../images/Assets/Core Skills/Image.png'

const left = [
	{ icon: Mongo, bg: "linear-gradient(120deg, rgba(241,242,237,1) 0%, #47A248 30%)" },
	{ icon: ex, bg: "linear-gradient(120deg, rgba(241,242,237,1) 0%, #000000 30%)" },
	{ icon: postsql, bg: "linear-gradient(120deg, rgba(241,242,237,1) 0%, #4169E1 30%)" },
	{ icon: node, bg: "linear-gradient(120deg, rgba(241,242,237,1) 0%, #339933 30%)" },
	{ icon: ts, bg: "linear-gradient(120deg, rgba(241,242,237,1) 0%, #3178C6 30%)" },
]
const right = [
	{ icon: html, bg: "linear-gradient(120deg, rgba(241,242,237,1) 0%, #E34F26 30%)" },
	{ icon: css, bg: "linear-gradient(120deg, rgba(241,242,237,1) 0%, #1572B6 30%)" },
	{ icon: react, bg: "linear-gradient(120deg, rgba(241,242,237,1) 0%, #61DAFB 30%)" },
	{ icon: reactnative, bg: "linear-gradient(120deg, rgba(241,242,237,1) 0%, #FF4154 30%)" },
	{ icon: redux, bg: "linear-gradient(120deg, rgba(241,242,237,1) 0%, #764ABC 30%)" },
]

const SkillsDiamond = () => {
	return (
		<div>
			<FlexContainer>
				<FlexContainer mt="-110px" w="200px" gap="0" justify="flex-start" rotate="-45deg" wrap="wrap" padding="0">{left.map((skill, index) => <Diamond key={skill + index} radius="0" bg={skill.bg} scale="1" scaleHov="0.9" mr="0" border="0" margin="0" w="100px" h="100px" ><FlexContainer h="100%"><IconDiamond src={skill.icon} /></FlexContainer></Diamond>)}</FlexContainer>
				<FlexContainer gap="0" w="210px" direction="column" padding="0"><IconDiamond top="0" left="0" rotate="0" src={bluediamond} /><Diamond rotate="45deg" radius="0" bg={"linear-gradient(120deg, rgba(241,242,237,1) 0%, #F7DF1E 30%)"} scale="1" scaleHov="0.9" mr="0" border="0" margin="0" w="100px" h="100px"><FlexContainer h="100%"><IconDiamond top="-2%" left="-2%" rotate="-45deg" src={js} /></FlexContainer></Diamond></FlexContainer>
				<FlexContainer mt="-110px" w="200px" gap="0" justify="flex-end" rotate="45deg" wrap="wrap" padding="0">{right.map((skill, index) => <Diamond key={skill + index} radius="0" bg={skill.bg} scale="1" scaleHov="0.9" mr="0" border="0" margin="0" w="100px" h="100px" ><FlexContainer h="100%"><IconDiamond rotate="-45deg" src={skill.icon} /></FlexContainer></Diamond>)}</FlexContainer>
			</FlexContainer>
		</div>
	)
}

export default SkillsDiamond