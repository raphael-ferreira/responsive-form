import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

export const NotFound: React.FC = () => {
	return (
		<Container>
			<p className="title">Página não encontrada</p>
			<p>
				<Link to="/">retornar a página inicial</Link>
			</p>
		</Container>
	)
}
