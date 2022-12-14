import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MovieCardSelected, SelectedMoviesForm, ConfirmModal } from '../../components'

import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

const SelectedMovies = styled(Paper)(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	color: theme.palette.text.secondary,
	height: 'calc(100vh - 140px)',
	position: 'sticky',
	top: theme.spacing(2),
	display: 'flex',
	flexDirection: 'column'
}));

const MoviesList = styled(Box)(({ theme }) => ({
	overflowY: 'scroll',
	scrollBehavior: 'smooth',
	height: '100%'
}))

const NoMovies = styled(Box)(({ theme }) => ({
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column'
}))

const SelectedMoviesSection = ({ selectedMovies, deleteMovie }) => {
	const [listName, setListname] = useState('');
	const [link, setLink] = useState('');

	const onSubmit = ({ listName }) => {
		const ids = selectedMovies.map(({ id }) => id);
		const link = `/recommend?title=${listName}&ids=${ids.join()}`;

		setLink(link);
		setListname(listName);
	}

	const onCloseConfirmModal = () => {
		setLink('')
	}
	if (!selectedMovies.length) {
		return (
			<SelectedMovies>
				<NoMovies>
					<VideoLibraryRoundedIcon sx={{ fontSize: 60 }} />
					<Typography variant="h5" mt={2}>
						<FormattedMessage id='no_selected_movies' />
					</Typography>
				</NoMovies>
			</SelectedMovies>
		)
	}

	return (
		<SelectedMovies>
			<MoviesList spacing={2}>
				{selectedMovies.map((movie) => (
					<MovieCardSelected key={movie.id}
						movie={movie}
						onCardDelete={deleteMovie} />
				))}
			</MoviesList>
			<Box pt={2}>
				<SelectedMoviesForm onSubmit={onSubmit} />
			</Box>
			<ConfirmModal
				url={link}
				title={listName}
				open={!!link}
				onClose={onCloseConfirmModal} />
		</SelectedMovies>
	)
};

export default SelectedMoviesSection;