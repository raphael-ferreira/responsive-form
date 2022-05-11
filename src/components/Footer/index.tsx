import React from 'react'

import { Container } from './styles'

export const Footer: React.FC = () => {
	return (
		<Container>
			<p>Desenvolvido por Raphael Ferreira @ {new Date().getFullYear()}</p>
		</Container>
	)
}
