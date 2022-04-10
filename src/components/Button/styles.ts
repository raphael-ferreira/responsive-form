import styled from 'styled-components'

export const Btn = styled.button`
	padding: 10px 20px;

	border-radius: 20px;
	border: 0;
	outline: none;

	cursor: pointer;

	color: var(--white-color);

	background-image: linear-gradient(
		45deg,
		var(--red-color),
		var(--red-secondary-color)
	);

	:hover {
		background-image: linear-gradient(
			45deg,
			var(--red-color),
			var(--red-hover-color)
		);
	}

	@media (max-width: 600px) {
		background-image: linear-gradient(
			45deg,
			var(--white-color),
			var(--border-color)
		);

		color: var(--red-color);
	}
`
