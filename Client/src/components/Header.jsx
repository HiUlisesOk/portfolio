import React from 'react'

import LinksTech from './LinksTech'
import Logo from './Logo';
import NavBar from './NavBar'
import { FlexContainer, MenuContainer, HeaderContainer } from './styles'

const Header = () => {
	return (
		<div>
			<MenuContainer items="flex-start" justify="space-between">
				<HeaderContainer items="flex-start" justify="space-between">

					<NavBar /><Logo />

				</HeaderContainer>

				<LinksTech />

			</MenuContainer>
		</div>
	)
}

export default Header