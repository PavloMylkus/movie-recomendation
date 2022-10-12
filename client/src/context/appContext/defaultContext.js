import { useSearchParams } from "react-router-dom";

import { LOCALES } from "../../i18n/locales";
import { STORAGE_KEY } from "../../const";
import { getFromStorage } from '../../utils/localStorage'

export const useDefaultContext = () => {
	const [searchParams] = useSearchParams();

	return {
		locale: getFromStorage(STORAGE_KEY) || searchParams.get('locale') || LOCALES.ENGLISH,
	}
}