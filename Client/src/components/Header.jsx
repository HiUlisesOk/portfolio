import React from 'react'

import LinksTech from './LinksTech'
import Logo from './Logo';
import NavBar from './NavBar'
import { FlexContainer } from './styles'
const Header = () => {
	return (
		<div>
			<FlexContainer items="flex-start" justify="space-between">
				<FlexContainer items="flex-start" justify="space-between">

					<NavBar /><Logo />

				</FlexContainer>

				<LinksTech />

			</FlexContainer>
		</div>
	)
}

export default Header