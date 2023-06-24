import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		cursor: pointer;
	}
`;

export const Title = styled.span`
	font-size: 150px;
	font-family: Montserrat;
	font-weight: 700;

	color: ${props => props.theme.colors.text};
`;
