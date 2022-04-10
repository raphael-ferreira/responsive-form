import styled from 'styled-components'

import { FaCar, FaMotorcycle } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'

export const Container = styled.div`
	width: 933px;

	background: var(--white-color);
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
	}

	#ClearButton {
		margin-right: 20px;

		color: var(--gray-color);

		cursor: pointer;

		:hover {
			color: var(--black-color);
			text-decoration: underline;
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
`

export const Col = styled.div<{ flex?: boolean }>`
	width: 50%;

	margin: 0 5px;

	> * {
		margin-right: 10px;

		&:last-child {
			margin: 0px;
		}
	}

	${({ flex }) => flex && 'display: flex;'}
`
