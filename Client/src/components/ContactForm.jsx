import React from 'react'
import TextField from '@mui/material/TextField';
import { Title } from './styles'
const ContactForm = () => {
	return (
		<div><Title>Contact</Title>
			<Form>
				<TextField id="standard-basic" label="Name" variant="standard" />
				<TextField id="standard-basic" label="Email" variant="standard" />
				<TextField id="standard-basic" label="Message" variant="standard" />
			</Form>
			<Button sx={{ bgcolor: 'primary.main' }} variant="contained" size="large">
				S E N D
			</Button>
		</div>
	)
}

export default ContactForm