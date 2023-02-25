import React from 'react'
import { Link } from 'react-router-dom'

import { CardContainer, Title, SubTitle, Text, ImageStyles, TextPrimary, TextSecondary } from './styles'

import Button from '@mui/material/Button';

const Card = ({ image, title, techBack, techFront, text, link, demo }) => {
	return (
		<CardContainer direction="column" justify="space-evenly" w="30%" gap="5px">
			<ImageStyles src={image} />
			<Title margin="1px" align="center">{title}</Title>
			<SubTitle size="0.8rem" margin="1px" align="center"><TextPrimary>{techFront}</TextPrimary></SubTitle>
			<SubTitle size="0.8rem" margin="1px" align="center"><TextSecondary>{techBack}</TextSecondary></SubTitle>
			<Text margin="10px" align="center">{text}</Text>
			<Link to={link}>
				<Button sx={{ bgcolor: 'primary.main' }} variant="contained" size="large">
					{"<CODE/>"}
				</Button>
			</Link>
		</CardContainer>

	)
}

export default Card