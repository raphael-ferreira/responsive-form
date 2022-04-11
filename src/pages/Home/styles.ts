import styled from 'styled-components'

export const Container = styled.div`
	min-width: 900px;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-self: flex-start;
	justify-content: center;

	color: var(--white-color);

	p {
		font-size: 5.5em;
		font-weight: bold;
		line-height: 90px;

		&.welcome {
			margin-bottom: 40px;

			@media (max-width: 600px) {
				margin-bottom: 30px;
			}
		}

		@media (max-width: 600px) {
			font-size: 1.8em;
			font-weight: bold;
			line-height: 40px;
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

	@media (max-width: 600px) {
		min-width: 100%;
	}
`
