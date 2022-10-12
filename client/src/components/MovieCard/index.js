import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CardMenu from '../CardMenu';
import { Box } from '@mui/system';
import Fade from '@mui/material/Fade';
import { FormattedMessage } from "react-intl";


const CardInfo = styled(CardContent)(({ theme }) => ({
	'&:last-child': {
		paddingBottom: theme.spacing(2),
	}
}));
const AddBtn = styled(AddCircleOutlineOutlinedIcon)(({ theme }) => ({
	color: '#ffffff8f',
	fontSize: 80,
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%,-50%)',
	cursor: 'pointer',

}));




const MovieCard = ({ movie, onCardSelect, isPreviewMode }) => {

	const [checked, setChecked] = useState(false);

	const handleChangeEnter = () => {
		if (!checked) {
			setChecked((prev) => !prev);
		} else setChecked(false)

	};
	const handleChangeLeave = () => {
		if (checked) {
			setChecked(false);
		} else setChecked((prev) => !prev)
	};

	return (
		<Card sx={{ width: { lg: 180, md: 180, sm: 180, xs: 200 }, position: "relative" }}>
			<Box
				onMouseEnter={handleChangeEnter}
				onMouseLeave={handleChangeLeave}
				sx={{ position: "relative" }}>


				<CardMedia
					component="img"
					height="250"
					image={movie.posterPath}
					alt={movie.title}
				/>
				{!isPreviewMode && (
					<Fade in={checked}>
						<AddBtn onClick={() => onCardSelect(movie)} />
					</Fade>)}

			</Box>
			<CardInfo>
				<Typography variant="h6" gutterBottom component="div">
					{movie.title}
				</Typography>

				<Typography mb={0} variant="subtitle1" gutterBottom component="div">
					{movie.releaseDate}
				</Typography>

				{!isPreviewMode && (
					<CardMenu>
						<MenuItem onClick={() => onCardSelect(movie)}>
							<FormattedMessage id='select' />
						</MenuItem>
					</CardMenu>)}

			</CardInfo>
		</Card>
	)
}

MovieCard.propTypes = {
	movie: PropTypes.shape({
		posterPath: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		releaseDate: PropTypes.string
	}).isRequired,
	onCardSelect: PropTypes.func,
	isPreviewMode: PropTypes.bool
}

export default MovieCard;