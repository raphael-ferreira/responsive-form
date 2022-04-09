import React, { useState } from 'react'
import { Checkbox, Tab, Tabs } from '../../components'

import { Container, CarIcon, MotorcycleIcon, Row } from './styles'

export const Shop: React.FC = () => {
	const [active, setActive] = useState<string>('tabCars')
	const [isNew, setNew] = useState<boolean>(true)
	const [isUsed, setUsed] = useState<boolean>(true)

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

			<form>
				<Row>
					<Checkbox
						label="Novos"
						checked={isNew}
						onChange={() => setNew((e) => !e)}
					/>
					<Checkbox
						label="Usados"
						checked={isUsed}
						onChange={() => setUsed((e) => !e)}
					/>
				</Row>
			</form>
		</Container>
	)
}
