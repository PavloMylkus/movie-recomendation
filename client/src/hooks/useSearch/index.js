import React, { useState, useCallback } from 'react';

export const useSearch = () => {
	const [searchingMovies, setSearchingMovies] = useState([]);

	const searchMovie = (data) => {

		setSearchingMovies([data])
	};

	return {
		searchMovie,
		searchingMovies
	}
}
