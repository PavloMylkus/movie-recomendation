import React, { useState } from 'react';
import {
	Box,
	Grid,
	Paper
} from '@mui/material';
import {
	MovieCard,
	SelectedMoviesSection
} from '../../components';
import { useQuery } from '@apollo/client';
import { MOVIES_QUERY } from './queries';
import Pagination from '@mui/material/Pagination';
import LinearProgress from '@mui/material/LinearProgress';
import { useMovies } from '../../hooks/useMovies';
import Filters from '../../components/Filters';
import { useFilters } from '../../hooks/useFilters';





const Home = () => {
	const { filter, setPage, setFilter } = useFilters();
	const { loading, error, data } = useQuery(MOVIES_QUERY, { variables: { filter } });
	const { selectedMovies, selectMovie, deleteMovie } = useMovies();


	if (error) {
		return "Error"
	}
	const paginationHandler = (event, page) => {
		setPage(page)
	}

	const onSubmit = (data) => {
		setFilter(data)
	}



	const pagesCount = data?.movies?.totalPages <= 499 ? data?.movies?.totalPages : 499;
	return (
		<Box sx={{ flexGrow: 1, marginTop: 2, }}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Paper sx={{ padding: 1 }}>
						<Filters onSubmit={onSubmit} initialValues={filter} />
					</Paper>
				</Grid>
				<Grid item xs={12} md={8}>
					<Paper>
						<Box sx={{
							flexGrow: 1,
							marginTop: 0,
							padding: 1,

						}}>
							{loading && <LinearProgress color="secondary" />}
							{data && (
								<Grid container spacing={2} sx={{
									padding: 1,
									display: { xs: 'flex' },
									flexDirection: { xs: 'column', lg: 'row', md: 'row', sm: 'row' },
									flexWrap: { xs: 'nowrap', lg: 'wrap', md: 'wrap', sm: 'wrap' },
									alignItems: { xs: 'center', md: 'flex-start', sm: 'flex-start', lg: 'flex-start' },
								}}>
									{data.movies.results.map((movie) => (
										<Grid
											key={movie.id}
											item
											xs={12}
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
								page={filter.page}
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