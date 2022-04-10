import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

import { Container, Logo } from './styles'

export const Header: React.FC = () => {
	return (
		<Container>
			<Link to="/">
				<Logo />
				<span>trademark</span>
			</Link>

			<Link to="/shop">
				<Button text="Comprar" />
			</Link>
		</Container>
	)
}
