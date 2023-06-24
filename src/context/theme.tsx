import React, {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useState,
} from 'react';

interface ThemeContextData {
	theme: 'light' | 'dark';
	changeTheme(): void;
}

export const ThemeContext = createContext<ThemeContextData>(
	{} as ThemeContextData
);

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<'light' | 'dark'>('dark');

	const changeTheme = useCallback(() => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export function useTheme(): ThemeContextData {
	const context = useContext(ThemeContext);
	return context;
}
