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
	justify-content: space-between;
`

export const Col = styled.div<{ flex?: boolean }>`
	width: 50%;

	margin-right: 10px;

	${({ flex }) => flex && 'display: flex;'}
`
