import styled from 'styled-components'

export const Container = styled.div`
	display: inline-block;
	color: var(--gray-color);

	> input {
		opacity: 0;
	}

	> input + label {
		position: relative;
		padding-left: 25px;
		cursor: pointer;

		&:before {
			content: '';
			position: absolute;
			left: 0;
			top: 1px;
			width: 17px;
			height: 17px;
			border: 1px solid var(--border-color);
			border-radius: 3px;
		}
		&:after {
			content: '✔';
			position: absolute;
			top: -1px;
			left: 2px;
			font-size: 16px;
			color: var(--red-color);
			transition: all 0.2s;
		}
	}

	> input:not(:checked) + label {
		&:after {
			opacity: 0;
			transform: scale(0);
		}
	}
`
