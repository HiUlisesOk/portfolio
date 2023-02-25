import React from 'react'
import { Link } from 'react-router-dom'

import { FlexContainer, Title, SubTitle, Text, ImageStyles } from './styles'
import Button from '@mui/material/Button';

const Card = ({ image, title, subtitle, text }) => {
	return (
		<FlexContainer direction="column">
			<ImageStyles src={image} />
			<Title align="center">{title}</Title>
			<SubTitle align="center">{subtitle}</SubTitle>
			<Text align="center">{text}</Text>
			<Link to="/about-me">
				<Button sx={{ bgcolor: 'primary.main' }} variant="contained" size="large">
					{"<CODE/>"}
				</Button>
			</Link>
		</FlexContainer>
	)
}

export default Card