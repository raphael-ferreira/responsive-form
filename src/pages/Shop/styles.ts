import styled from 'styled-components'

import { FaCar, FaMotorcycle } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'

export const Container = styled.div`
	width: 933px;

	background: var(--white-color);

	@media (max-width: 600px) {
		width: 100vw;
		height: 100vh;
	}
`

export const CarIcon = styled(FaCar)`
	width: 25px;
	height: 25px;

	margin-bottom: -3px;
`

export const MotorcycleIcon = styled(FaMotorcycle)`
	width: 25px;
	height: 25px;

	margin-bottom: -4px;
`

export const LocationIcon = styled(GoLocation)`
	color: var(--gray-color);
`

export const Row = styled.div`
	padding: 20px 10px 0px 10px;

	:last-child {
		padding-bottom: 20px;
	}

	display: flex;
	align-items: center;
	justify-content: space-between;

	.advancedSearch {
		font-weight: bold;
		color: var(--red-color);

		cursor: not-allowed;

		@media (max-width: 600px) {
			margin: 10px 0;
		}
	}

	.ButtonsContainer {
		#ClearButton {
			margin-right: 20px;

			color: var(--gray-color);

			cursor: pointer;

			:hover {
				color: var(--black-color);
				text-decoration: underline;
			}

			@media (max-width: 600px) {
				margin: 10px 0 10px;
			}
		}

		#FilterButton {
			width: 300px;

			margin-right: 5px;
			padding: 10px 20px;
			font-size: 18px;

			border-radius: 5px;
			border: 0;
			outline: none;
			cursor: pointer;

			color: var(--white-color);
			background-image: linear-gradient(
				45deg,
				var(--red-color),
				var(--red-hover-color)
			);

			:hover {
				background-image: linear-gradient(
					45deg,
					var(--red-hover-color),
					var(--red-hover-color)
				);
			}
		}

		@media (max-width: 600px) {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}

	@media (max-width: 600px) {
		width: 100%;

		flex-direction: column;

		margin-bottom: 0;
		padding: 0 20px;

		:first-child {
			padding: 20px 20px;
		}

		:nth-child(3) {
			flex-direction: column-reverse;
		}
	}
`

export const Col = styled.div<{ flex?: boolean }>`
	width: 50%;

	margin: 0 5px;

	> * {
		margin-right: 10px;

		@media (max-width: 600px) {
			margin-bottom: 15px;
		}

		&:last-child {
			margin: 0px;

			@media (max-width: 600px) {
			}
		}
	}

	${({ flex }) => flex && 'display: flex;'}

	@media (max-width: 600px) {
		width: 100%;

		flex-direction: column;

		margin-bottom: 15px;
	}
`
