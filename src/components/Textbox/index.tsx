import React, { ReactElement } from 'react'

import { Container } from './styles'

interface TextboxProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
	icon?: ReactElement
	prefix?: string
	// suggest?: { ID: string; Name: string }[]
}

export const Textbox: React.FC<TextboxProps> = (props) => {
	const { icon, prefix /*, suggest */ } = props

	return (
		<>
			<Container>
				{icon}
				{prefix && <span>{prefix}</span>}
				<input type="text" {...props} />
			</Container>

			{/* <div>
				<ul>
					{suggest && suggest.map((item) => <li key={item.ID}>{item.Name}</li>)}
				</ul>
			</div> */}
		</>
	)
}
