import React from "react";
import { useSearchParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useQuery } from "@apollo/client";
import { MOVIES_BY_IDS_QUERY } from './queries';
import { MovieCard } from '../../components'
import LinearProgress from '@mui/material/LinearProgress';

const Recommend = () => {
	const [searchParams] = useSearchParams();

	const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
		variables: {
			ids: searchParams.get('ids')?.split(',').map((id) => +id)
		}
	});





	return (
		<>

			<Typography
				variant="h5"
				component="h1"
				gutterBottom
				sx={{ textAlign: 'center', padding: 1 }}
			>
				~ {searchParams.get('title')} ~
			</Typography>
			{loading && <LinearProgress color="secondary" />}
			{data?.moviesByIds && (
				<Grid container spacing={2}>
					{data.moviesByIds.map((movie) => (
						<Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
							<MovieCard movie={movie} isPreviewMode />
						</Grid>
					))}
				</Grid>
			)}
		</>
	)
}

export default Recommend;