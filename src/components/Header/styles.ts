import styled from 'styled-components'

import { IoIosSpeedometer } from 'react-icons/io'

export const Container = styled.div`
	width: 100vw;
	height: 50px;

	background: var(--white-color);

	display: flex;
	align-items: center;

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

			background: -webkit-linear-gradient(180deg, #333, #000);
			background-clip: text;
			-webkit-text-fill-color: transparent;

			cursor: pointer;
		}
	}
`

export const Logo = styled(IoIosSpeedometer)`
	fill: var(--red-color);

	height: 35px;
	width: 35px;

	cursor: pointer;
`
