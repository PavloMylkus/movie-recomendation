import { useState, useCallback } from 'react';
import { SORT_DIRECTION } from '../../const';

export const useFilters = () => {
	const [filter, setFilterFields] = useState({
		year: 0,
		primaryReleaseYear: 2022,
		page: 1,
		sortBy: 'popularity',
		sortDirection: SORT_DIRECTION.DESC,
		includeAdult: true
	});

	const setPage = useCallback((page) => {
		setFilterFields({
			...filter,
			page
		})
	}, [filter])

	const setFilter = useCallback((filterFields) => {
		setFilterFields({
			...filter,
			...filterFields,
			year: +filterFields.year,
			primaryReleaseYear: +filterFields.primaryReleaseYear
		})
	}, [filter])

	return {
		filter,
		setPage,
		setFilter
	}
}