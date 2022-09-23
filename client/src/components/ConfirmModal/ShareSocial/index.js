import React from 'react';

import {
	FacebookIcon,
	TwitterIcon,
	TelegramIcon,
	WhatsappIcon,
	ViberIcon,
	FacebookShareButton,
	TwitterShareButton,
	TelegramShareButton,
	WhatsappShareButton,
	ViberShareButton
} from "react-share-rc-18";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SIZE_SOCIAL_ICON } from '../../../const';

const ShareSocial = ({ url }) => {
	return (
		<Box sx={{ marginTop: 1 }}>
			<Typography id="Share" variant="h6" component="h3" sx={{ textAlign: 'center', fontSize: 19 }}>
				Share to friends
			</Typography>
			<Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 1 }}>
				<FacebookShareButton
					url={url}
					hashtag={"#movie"}
				>
					<FacebookIcon size={SIZE_SOCIAL_ICON} round />
				</FacebookShareButton>
				<TwitterShareButton
					url={url}
					hashtags={["#movie", "#movieRec"]}
				>
					<TwitterIcon size={SIZE_SOCIAL_ICON} round />
				</TwitterShareButton>
				<TelegramShareButton
					url={url}
				>
					<TelegramIcon size={SIZE_SOCIAL_ICON} round />
				</TelegramShareButton>
				<WhatsappShareButton
					url={url}
				>
					<WhatsappIcon size={SIZE_SOCIAL_ICON} round />
				</WhatsappShareButton>
				<ViberShareButton
					url={url}
				>
					<ViberIcon size={SIZE_SOCIAL_ICON} round />
				</ViberShareButton>
			</Box>
		</Box>
	);
}

export default ShareSocial;