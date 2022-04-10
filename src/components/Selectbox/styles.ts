import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;

	border: 1px solid var(--border-color);
	color: var(--gray-color);

	padding: 10px;

	border-radius: 5px;

	display: flex;
	align-items: center;

	> span {
		margin-left: 5px;
	}

	> select {
		width: 100%;

		background-color: transparent;

		color: var(--gray-color);

		font-size: 16px;
		font-weight: bold;

		border: 0;

		margin-left: 5px;

		:focus {
			outline: none;
			outline-width: 0;
		}

		> option {
			font-weight: normal;

			&.default {
				font-weight: bold;
			}
		}
	}

	&.disabled {
		pointer-events: none;

		opacity: 0.4;
	}
`
