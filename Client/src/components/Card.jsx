import React from 'react'
import { Link } from 'react-router-dom'

import { FlexContainer, Title, SubTitle, Text, ImageStyles } from './styles'
import Button from '@mui/material/Button';

const Card = ({ image, title, subtitle, text, link, demo }) => {
	return (
		<FlexContainer direction="column" mt="0">
			<ImageStyles src={image} />
			<Title align="center">{title}</Title>
			<SubTitle align="center">{subtitle}</SubTitle>
			<Text align="center">{text}</Text>
			<Link to={link}>
				<Button sx={{ bgcolor: 'primary.main' }} variant="contained" size="large">
					{"<CODE/>"}
				</Button>
			</Link>
		</FlexContainer>
	)
}

export default Card