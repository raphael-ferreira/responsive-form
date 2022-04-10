import React, { ReactElement } from 'react'

import { Container } from './styles'

interface TextboxProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
	icon?: ReactElement
	prefix?: string
}

export const Textbox: React.FC<TextboxProps> = (props) => {
	const { icon, prefix } = props

	return (
		<Container>
			{icon}
			{prefix && <span>{prefix}</span>}
			<input type="text" {...props} />
		</Container>
	)
}
