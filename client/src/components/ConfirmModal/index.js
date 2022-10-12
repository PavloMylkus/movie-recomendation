import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PreviewIcon from '@mui/icons-material/Preview';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import ShareSocial from './ShareSocial';
import { FormattedMessage } from 'react-intl';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxWidth: '100%',
	bgcolor: 'background.paper',
	borderRadius: '12px',
	boxShadow: 24,
	p: 4,
};



const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ConfirmModal = ({ open, url, title, onClose }) => {
	const [openSuccess, setOpenSuccess] = useState(false);

	const handleClick = () => {
		setOpenSuccess(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpenSuccess(false);
	};

	return (<div>
		<Modal

			open={open}
			onClose={onClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style} >
				<Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
					{title}
				</Typography>
				<Paper
					component="form"
					sx={{
						marginTop: '24px',
						p: '2px 4px',
						display: 'flex',
						alignItems: 'center',
						width: '100%'
					}}
				>
					<InputBase
						value={url}
						sx={{ ml: 1, flex: 1 }}
						placeholder="List URL"
						inputProps={{ 'aria-label': 'search google maps' }}
					/>
					<IconButton href={url} target='_blank' sx={{ p: '10px' }} aria-label="preview">
						<PreviewIcon />
					</IconButton>
					<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

					<CopyToClipboard

						text={url}
						onCopy={handleClick}>
						<IconButton color="primary" sx={{ p: '10px' }} aria-label="copy to clipboard">
							<ContentCopyIcon />
						</IconButton>
					</CopyToClipboard>

				</Paper>
				<Snackbar
					open={openSuccess}
					autoHideDuration={2000}
					onClose={handleClose}
					sx={{
						position: 'relative',
						marginTop: 2,
						display: 'block',
						top: 0,

						left: '0px !important',
						bottom: 0
					}}>
					<Alert
						onClose={handleClose}
						severity="success"
						sx={{ left: 0 }} >
						<FormattedMessage id='copied' />
					</Alert>
				</Snackbar>
				<ShareSocial url={url} />
			</Box>

		</Modal>

	</div>
	);
}


ConfirmModal.propTypes = {
	open: PropTypes.bool,
	url: PropTypes.string,
	title: PropTypes.string,
	onClose: PropTypes.func,
	handleClose: PropTypes.func
}

export default ConfirmModal;