import React, { useState } from 'react'
import { Tab, Tabs } from '../../components'

import { Container, CarIcon, MotorcycleIcon } from './styles'

export const Shop: React.FC = () => {
	const [active, setActive] = useState('tabCars')

	return (
		<Container>
			<Tabs>
				<Tab
					className="tabCars"
					active={active === 'tabCars'}
					onClick={() => setActive('tabCars')}
					icon={<CarIcon />}
					text="Comprar carros"
				/>
				<Tab
					className="tabMotorcycle"
					active={active === 'tabMotorcycle'}
					onClick={() => setActive('tabMotorcycle')}
					icon={<MotorcycleIcon />}
					text="Comprar motos"
				/>
			</Tabs>
		</Container>
	)
}
