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
	padding: 20px 20px 20px 10px;

	:first-child {
		padding-bottom: 0px;
	}

	display: flex;
	justify-content: space-between;
`

export const Col = styled.div`
	width: 50%;

	margin-right: 10px;
`
