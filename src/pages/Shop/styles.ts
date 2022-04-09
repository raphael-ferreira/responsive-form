import styled from 'styled-components'

import { FaCar, FaMotorcycle } from 'react-icons/fa'

export const Container = styled.div`
	width: 933px;

	background: #f7f7f7;
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

export const Row = styled.div`
	padding: 20px 10px;
`
