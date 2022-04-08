import React, { ReactElement, ReactNode } from 'react'

import { TabsContainer, TabContainer } from './styles'

interface TabsProps {
	children: ReactNode
}

interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	active: boolean
	icon: ReactElement
	text: string
}

export const Tabs = ({ children }: TabsProps) => {
	return <TabsContainer>{children}</TabsContainer>
}

export const Tab: React.FC<TabProps> = (props) => {
	return (
		<TabContainer {...props} active={props.active}>
			{props.icon}
			<div className="txt">
				{props.text.split(' ').map((txt) => (
					<span key={txt}>{txt}</span>
				))}
			</div>
		</TabContainer>
	)
}
