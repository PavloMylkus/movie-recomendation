import React, { useState, useContext, useCallback } from 'react';
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	IconButton,
	Drawer,
	List,
	ListItem,
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
import { LOCALES } from '../../i18n';

import ButtonGroup from '@mui/material/ButtonGroup';
import { AppContext } from '../../context/appContext';
import { FormattedMessage } from 'react-intl';
const primary = teal[900];



const Navigation = () => {
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const { state, dispatch } = useContext(AppContext);

	const setLanguage = useCallback((locale) => {
		dispatch({
			type: 'setLocale',
			locale
		})
	}, []);

	const SwitchLanguage = () => (
		<ButtonGroup
			color='info'
			size="small"
			disableElevation
			variant="contained"
			aria-label="Disabled elevation buttons"
		>
			<Button
				disabled={state.locale === LOCALES.UKRAINIAN}
				onClick={() => setLanguage(LOCALES.UKRAINIAN)}>
				UA
			</Button>
			<Button
				disabled={state.locale === LOCALES.ENGLISH}
				onClick={() => setLanguage(LOCALES.ENGLISH)}>
				EN
			</Button>
		</ButtonGroup>
	)

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
						<ListItemText>
							<FormattedMessage id="navigation.settings" />
						</ListItemText>
					</ListItem>
				</Link>
				<ListItem>
					{SwitchLanguage()}
				</ListItem>

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
							<FormattedMessage id='navigation.home' />
						</Typography>
					</Link>
					<Box sx={{
						flexGrow: 2,
						display: { xs: 'none', lg: 'flex', justifyContent: 'flex-end' },
						alignItems: 'center'
					}}>

						<Button
							component={RouterLink}
							to="settings"
							sx={{ width: '131px', my: 2, color: 'white' }}
						>
							<FormattedMessage id="navigation.settings" />
						</Button>
						{SwitchLanguage()}
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
