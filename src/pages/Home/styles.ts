import styled from 'styled-components'

export const Container = styled.div`
	min-width: 900px;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-self: flex-start;
	justify-content: center;

	background: -webkit-linear-gradient(
		45deg,
		var(--white-color),
		var(--border-color)
	);
	background-clip: text;
	-webkit-text-fill-color: transparent;

	p {
		font-size: 5.5em;
		font-weight: bold;
		line-height: 90px;

		&.welcome {
			margin-bottom: 40px;
		}
	}

	a {
		text-decoration: underline;

		color: var(--white-color);

		:hover,
		:active,
		:visited,
		:focus {
			color: var(--white-color);

			background-color: transparent;
		}
	}
`
