import styled from 'styled-components'

export const Container = styled.div`
	width: 100vw;
	height: 50px;

	position: absolute;
	bottom: 0px;

	display: flex;
	justify-content: center;
	align-items: center;

	background: #282828;

	color: var(--white-color);

	@media (max-width: 600px) {
		display: none;
	}
`
