import React, { useState } from 'react';
import {
	Box,
	Grid,
	Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
	MovieCard,
	MovieCardSelected,
	SelectedMoviesSection
} from '../../components';
import { useQuery } from '@apollo/client';
import { MOVIES_QUERY } from './queries';
import Pagination from '@mui/material/Pagination';
import LinearProgress from '@mui/material/LinearProgress';
import { useMovies } from '../../hooks/useMovies';



const SelectedMovies = styled(Paper)(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	color: theme.palette.text.secondary,
	height: 'calc(100vh - 140px)',
	position: 'sticky',
	top: theme.spacing(1)
}));

const Home = () => {
	const [page, setPage] = useState(1);
	const { loading, error, data } = useQuery(MOVIES_QUERY, { variables: { page } });
	const { selectedMovies, selectMovie, deleteMovie } = useMovies();

	if (error) {
		return "Error"
	}
	const paginationHandler = (event, page) => {
		setPage(page)
	}


	const pagesCount = data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;
	return (
		<Box sx={{ flexGrow: 1, marginTop: 2 }}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Paper>
						Filter section
					</Paper>
				</Grid>
				<Grid item xs={12} md={8}>
					<Paper>
						<Box sx={{ flexGrow: 1, marginTop: 0, padding: 1 }}>
							{loading && <LinearProgress color="secondary" />}
							{data && (
								<Grid container spacing={2}>
									{data.movies.results.map((movie) => (
										<Grid
											key={movie.id}
											item xs={12}
											sm={6}
											md={4}
											lg={3}

										>
											<MovieCard movie={movie} onCardSelect={selectMovie} />
										</Grid>
									))}

								</Grid>
							)}

						</Box>
						<Box mt={2} pb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
							<Pagination count={pagesCount}
								page={page}
								onChange={paginationHandler} />
						</Box>
					</Paper>

				</Grid>
				<Grid item xs={12} md={4}>

					<SelectedMoviesSection selectedMovies={selectedMovies} deleteMovie={deleteMovie} />
				</Grid>
			</Grid>
		</Box>
	);
}

export default Home;