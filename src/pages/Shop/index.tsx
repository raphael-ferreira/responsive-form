import React, { useEffect, useState } from 'react'
import { Checkbox, Selectbox, Tab, Tabs, Textbox } from '../../components'
import {
	getMakes,
	getModels,
	MakeType,
	ModelType,
} from '../../services/ShopServices'

import {
	Container,
	CarIcon,
	MotorcycleIcon,
	LocationIcon,
	Row,
	Col,
} from './styles'

const YEARS = [
	2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
]

export const Shop: React.FC = () => {
	const [active, setActive] = useState<string>('tabCars')
	const [isNew, setNew] = useState<boolean>(true)
	const [isUsed, setUsed] = useState<boolean>(true)
	const [place, setPlace] = useState<string>('')
	const [make, setMake] = useState<string>('')
	const [model, setModel] = useState<string>('')

	const [makesList, setMakesList] = useState<MakeType[]>([])
	const [modelsList, setModelsList] = useState<ModelType[]>([])

	const handlePlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPlace(e.target.value)
	}

	const handleMakeChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
		setMake(e.target.value)

		const response = await getModels(e.target.value)

		setModelsList(response.data)
	}

	const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setModel(e.target.value)
	}

	useEffect(() => {
		const getMakesList = async () => {
			const response = await getMakes()

			setMakesList(response.data)
		}

		getMakesList()
	}, [])

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
					<Col>
						<Textbox
							icon={<LocationIcon />}
							prefix="Onde: "
							value={place}
							onChange={handlePlaceChange}
							placeholder="Digite aqui o nome da cidade"
						/>
					</Col>
					<Col style={{ display: 'flex' }}>
						<Selectbox
							prefix="Marca: "
							value={make}
							onChange={handleMakeChange}
							selectAllText="Todas"
							suggest={makesList}
						/>
						<Selectbox
							prefix="Modelo: "
							value={model}
							onChange={handleModelChange}
							suggest={modelsList}
							disabled={make === ''}
						/>
					</Col>
				</Row>

				<Row>
					<Col>
						<Selectbox
							prefix="Ano: "
							value={make}
							onChange={handleMakeChange}
							suggest={YEARS.map((year) => ({
								ID: String(year),
								Name: String(year),
							}))}
						/>
					</Col>
				</Row>
			</form>
		</Container>
	)
}
