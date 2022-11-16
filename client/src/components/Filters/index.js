import { Form } from 'react-final-form'
import Box from '@mui/material/Box';
import { SortField, SortDirectionField, AdultField, YearField, SubmitField, ReleaseYearField, GenreField } from './components';
import { GENRES_QUERY } from './queries';
import { useQuery } from "@apollo/client";
import { Grid } from '@mui/material';

const Filters = ({ onSubmit, initialValues }) => {
	const { loading, error, data } = useQuery(GENRES_QUERY);

	if (loading) {
		return 'Loading ...'
	}

	return (
		<div>
			<Form

				onSubmit={onSubmit}
				initialValues={initialValues}
				render={({ handleSubmit, form, submitting, pristine, values }) => (
					<form onSubmit={handleSubmit}>
						<Grid>
							<Grid item
								sx={{
									display: 'flex',
									flexDirection: { md: 'row', sm: 'column', xs: 'column' },
									justifyContent: 'space-between'
								}}>
								<Box sx={{
									display: 'flex',
									alignItems: 'center',
									flexDirection: { md: 'row', sm: 'row', xs: 'column' },
									alignItems: { md: 'center', sm: 'center', xs: 'flex-start' }
								}}>
									<Box mr={3}>
										<YearField />
									</Box>

									<Box mr={3}>
										<ReleaseYearField />
									</Box>

									<Box mr={3}>
										<GenreField data={data} />
									</Box>


								</Box>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Box mr={3}>
										<SortField />
									</Box>

									<SortDirectionField />
								</Box>
							</Grid>
							<Grid item>
								<Box sx={{
									display: 'flex',
									maxWidth: '300px',
									justifyContent: 'space-between'
								}}>
									<SubmitField />
									<AdultField />
								</Box>

							</Grid>
						</Grid>
					</form>
				)
				} />
		</div >
	)
}

export default Filters