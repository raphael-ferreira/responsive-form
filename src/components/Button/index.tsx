import React from 'react'

import { Btn } from './styles'

interface ButtonProps {
	text: string
}

export const Button: React.FC<ButtonProps> = (props) => {
	const { text } = props

	return <Btn>{text}</Btn>
}
