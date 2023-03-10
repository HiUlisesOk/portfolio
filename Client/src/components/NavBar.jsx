import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import MenuIcon from '@mui/icons-material/Menu';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DevicesIcon from '@mui/icons-material/Devices';

import { Link } from 'react-router-dom'

export default function TemporaryDrawer() {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{[

					{ text: 'Home', icon: <HomeIcon />, navigate: '/' },
					{ text: 'About Me', icon: <PersonIcon />, navigate: '/about-me' },
					{ text: 'Proyects', icon: <WorkIcon />, navigate: '/projects' },
					{ text: 'Tech Skills', icon: <DeveloperModeIcon />, navigate: '/tech-skills' },
					{ text: 'Why Hire Me', icon: <MenuBookIcon />, navigate: '/hire-me' },
					{ text: 'Contact', icon: <ContactPhoneIcon />, navigate: '/' },


				].map((item, index) => (
					<Link key={item.text} to={item.navigate}>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									{item.icon}
								</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
		</Box>
	);

	return (
		<div>
			{['left'].map((anchor) => (
				<React.Fragment key={anchor}>
					<Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}