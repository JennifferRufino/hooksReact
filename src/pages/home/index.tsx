import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../style/global';
import { Container, Title } from './styles';
import { TbLamp, TbLampOff } from 'react-icons/tb';
import { dark, light } from '../../style/theme';
import { useTheme } from '../../hooks/useTheme';

export const Home = () => {
	const { handleTheme, theme } = useTheme();

	function changeTheme() {
		theme.title === 'dark' ? handleTheme(light) : handleTheme(dark);
	}

	const iconProps = {
		size: 100,
		color: theme.colors.icon,

		onClick: changeTheme,
	};
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />

			<Container>
				{theme.title === 'dark' ? (
					<TbLampOff {...iconProps} />
				) : (
					<TbLamp {...iconProps} />
				)}

				<Title>DarkLight</Title>
			</Container>
		</ThemeProvider>
	);
};
