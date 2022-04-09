import React from 'react'

import { Container } from './styles'

interface CheckboxProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
	label: string
	checked: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({
	label,
	checked,
	onChange,
}) => {
	return (
		<Container onClick={onChange}>
			<input type="checkbox" checked={checked} />
			<label>{label}</label>
		</Container>
	)
}
