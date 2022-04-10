import React, { ReactElement } from 'react'

import { Container } from './styles'

interface SelectboxProps extends React.ButtonHTMLAttributes<HTMLSelectElement> {
	icon?: ReactElement
	prefix?: string
	selectAllText?: string
	suggest?: { ID: string; Name: string }[]
}

export const Selectbox: React.FC<SelectboxProps> = (props) => {
	const { icon, prefix, selectAllText, suggest, onChange } = props

	return (
		<>
			<Container>
				{icon}
				{prefix && <span>{prefix}</span>}
				<select onChange={onChange}>
					{selectAllText && (
						<option value={selectAllText} className="default">
							{selectAllText}
						</option>
					)}
					{suggest &&
						suggest.map((item) => (
							<option key={item.ID} value={item.Name}>
								{item.Name}
							</option>
						))}
				</select>
			</Container>
		</>
	)
}
