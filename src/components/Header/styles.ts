import styled from 'styled-components'

import { IoIosSpeedometer } from 'react-icons/io'

export const Container = styled.div`
	width: 100vw;
	height: 70px;

	background: var(--white-color);

	display: flex;
	align-items: center;

	justify-content: space-between;

	padding: 20px 10px;

	> a {
		text-decoration: none;

		display: flex;
		align-items: center;

		:hover,
		:active,
		:visited,
		:focus {
			color: black;
		}

		> span {
			margin-left: 10px;
			font-size: 20px;

			color: var(--black-color);

			cursor: pointer;

			@media (max-width: 600px) {
				color: var(--white-color);
			}
		}
	}

	@media (max-width: 600px) {
		background-image: linear-gradient(
			45deg,
			var(--red-color),
			var(--red-secondary-color)
		);

		color: var(--white-color);
	}
`

export const Logo = styled(IoIosSpeedometer)`
	fill: var(--red-color);

	height: 35px;
	width: 35px;

	cursor: pointer;

	@media (max-width: 600px) {
		fill: var(--white-color);
	}
`
