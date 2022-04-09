import React, { ReactElement } from 'react'

import { Container } from './styles'

interface TextFieldProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
	icon?: ReactElement
	prefix?: string
}

export const TextField: React.FC<TextFieldProps> = (props) => {
	const { icon, prefix } = props

	return (
		<Container>
			{icon}
			{prefix && <span>{prefix}</span>}
			<input type="text" {...props} />
		</Container>
	)
}
