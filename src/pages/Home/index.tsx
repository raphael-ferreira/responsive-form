import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

export const Home: React.FC = () => {
	return (
		<Container>
			<p className="welcome">Bem vindo,</p>
			<br />
			<p>
				clique <Link to="/shop">aqui</Link> para
			</p>
			<p>entrar no formulário</p>
		</Container>
	)
}
