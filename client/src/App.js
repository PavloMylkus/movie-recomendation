import React, { useContext } from 'react';
import {
	Routes,
	Route,
} from "react-router-dom";
import {
	CssBaseline,
	Container,
	Box
} from '@mui/material';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	from,
	ApolloLink
} from '@apollo/client';
import { Navigation } from './components';
import { Home, Settings, Recommend } from './pages';
import { AppContext } from './context/appContext';
import { I18nProvider } from './i18n';

function App() {
	const { state } = useContext(AppContext);
	const httpLink = new HttpLink({ uri: `${window.location.origin}/graphql` });
	const localeMiddleware = new ApolloLink((operation, forward) => {
		const customHeaders = operation.getContext().hasOwnProperty("headers") ? operation.getContext().headers : {};

		operation.setContext({
			headers: {
				...customHeaders,
				locale: state.locale
			}
		});
		return forward(operation);
	});


	const client = new ApolloClient({
		link: from([localeMiddleware, httpLink]),
		cache: new InMemoryCache(),
		connectToDevTools: true
	});

	return (
		<I18nProvider locale={state.locale}>
			<ApolloProvider client={client}>

				<CssBaseline />
				<Navigation />
				<Box
					component="main"
					sx={{
						backgroundColor: (theme) => theme.palette.grey[100]

					}}>
					<Container maxWidth='xl'>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="settings" element={<Settings />} />
							<Route path="recommend" element={<Recommend />} />
						</Routes>
					</Container>
				</Box>



			</ApolloProvider>
		</I18nProvider>
	);
}

export default App;
