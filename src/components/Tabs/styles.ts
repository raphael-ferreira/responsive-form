import styled from 'styled-components'

export const TabsContainer = styled.div`
	overflow: hidden;
	border: 1px solid #ccc;
	background-color: #f1f1f1;

	display: flex;
	flex-direction: row;

	@media (max-width: 600px) {
		justify-content: space-between;

		position: fixed;
		bottom: 0;
		width: 100%;
	}
`

export const TabContainer = styled.button<{ active: boolean }>`
	background-color: inherit;
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

				display: block;
				text-transform: uppercase;
			}
		}
	}

	@media (max-width: 600px) {
		justify-content: center;
		width: 100%;
	}
`
