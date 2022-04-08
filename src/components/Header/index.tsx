import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Logo } from './styles'

export const Header: React.FC = () => {
	return (
		<Container>
			<Link to="/">
				<Logo />
				<span>trademark</span>
			</Link>
		</Container>
	)
}
