import React, { useState } from 'react';
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Hidden,
	Button,
	Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link as RouterLink } from "react-router-dom";
import { teal } from '@mui/material/colors';
const primary = teal[900];


const Navigation = () => {
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const list = () => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
		>
			<List>
				<Link
					component={RouterLink}
					to='settings'
					sx={{ textDecoration: 'none', color: 'inherit' }}>
					<ListItem button>
						<ListItemIcon>
							<SettingsIcon />
						</ListItemIcon>
						<ListItemText>Settings</ListItemText>
					</ListItem>
				</Link>

			</List>
		</Box>
	);
	return (

		<Box >
			<AppBar
				position="static"
				sx={{ background: primary }}>
				<Toolbar>
					<Hidden only={['lg', 'xl']}>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={() => setDrawerOpen(true)}
						>
							<MenuIcon />
						</IconButton>
					</Hidden>
					<Link
						component={RouterLink}
						to='/'
						sx={{ textDecoration: 'none' }}>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1, color: '#fff' }}>
							Movies Recomendation
						</Typography>
					</Link>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex', justifyContent: 'flex-end' } }}>

						<Button
							component={RouterLink}
							to="settings"
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							Settings
						</Button>

					</Box>



				</Toolbar>
				<Drawer
					anchor="left"
					open={isDrawerOpen}
					onClose={() => setDrawerOpen(false)}
				>
					{list()}
				</Drawer>
			</AppBar>
		</Box>
	);
}

export default Navigation;
