import styled from 'styled-components'

export const TabsContainer = styled.div`
	overflow: hidden;
	border: 1px solid #ccc;
	background-color: #f1f1f1;
`

interface ButtonProps {
	active: boolean
}

export const TabContainer = styled.button<ButtonProps>`
	background-color: inherit;
	float: left;
	border: none;
	outline: none;
	cursor: pointer;
	padding: 14px 16px;
	transition: 0.3s;

	display: flex;
	align-items: flex-end;

	color: var(--gray-color);

	:hover {
		background-color: var(--gray-hover-color);
	}

	${({ active }) => {
		if (active) {
			let css = ''

			css += 'color: var(--red-color);'
			css += 'border-bottom: 1px solid var(--red-color);'

			return css
		}
	}}

	.txt {
		margin-left: 15px;
		text-transform: uppercase;

		display: flex;
		flex-direction: column;
		align-items: flex-start;

		> span {
			font-size: 12px;
			line-height: 20px;

			:nth-child(1) {
				color: var(--gray-color);
			}

			:nth-child(2) {
				font-size: 24px;
				line-height: 20px;

				display: block;
				text-transform: uppercase;
			}
		}
	}
`
