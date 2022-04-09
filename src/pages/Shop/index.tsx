import React, { useState } from 'react'
import { Checkbox, Tab, Tabs, TextField } from '../../components'

import { Container, CarIcon, MotorcycleIcon, LocationIcon, Row } from './styles'

export const Shop: React.FC = () => {
	const [active, setActive] = useState<string>('tabCars')
	const [isNew, setNew] = useState<boolean>(true)
	const [isUsed, setUsed] = useState<boolean>(true)
	const [place, setPlace] = useState<string>('')

	const handlePlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPlace(e.target.value)
	}

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
					<div>
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
					</div>
				</Row>

				<Row>
					<div style={{ width: '50%' }}>
						<TextField
							icon={<LocationIcon />}
							prefix="Onde: "
							value={place}
							onChange={handlePlaceChange}
							placeholder="Digite aqui o nome da cidade"
						/>
					</div>
				</Row>
			</form>
		</Container>
	)
}
