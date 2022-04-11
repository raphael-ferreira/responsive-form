import styled from 'styled-components'

export const Container = styled.div`
	min-width: 1000px;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	color: var(--white-color);

	p {
		font-size: 2.5em;
		font-weight: bold;
		line-height: 90px;

		&.title {
			margin-bottom: 40px;
			font-size: 4.5em;

			@media (max-width: 600px) {
				margin-bottom: 30px;
				font-size: 4em;
			}
		}

		@media (max-width: 600px) {
			font-size: 1.7em;
			font-weight: bold;
			line-height: 70px;
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
