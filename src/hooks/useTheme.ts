import { useState } from 'react';
import { dark } from '../style/theme';
import { DefaultTheme } from 'styled-components';

export function useTheme() {
	const [theme, setTheme] = useState<DefaultTheme>(dark);

	const handleTheme = (newTheme: DefaultTheme) => {
		setTheme(newTheme);
	};

	return { theme, handleTheme };
}
