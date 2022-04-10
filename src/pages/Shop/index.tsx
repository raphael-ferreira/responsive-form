import React, { useEffect, useState } from 'react'
import { Checkbox, Selectbox, Tab, Tabs, Textbox } from '../../components'
import {
	getMakes,
	getModels,
	getVersions,
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

const PRICES = [
	'R$ 25.000 ~ R$ 50.000',
	'R$ 50.000 ~ R$ 100.000',
	'R$ 100.000 ~ R$ 250.000',
	'R$ 250.000 ~ R$ 1.000.000',
	'R$ 1.000.000 ~ R$ 10.000.000',
]

export const Shop: React.FC = () => {
	const [active, setActive] = useState<string>('tabCars')
	const [isNew, setNew] = useState<boolean>(true)
	const [isUsed, setUsed] = useState<boolean>(true)
	const [place, setPlace] = useState<string>('')
	const [make, setMake] = useState<string>('')
	const [model, setModel] = useState<string>('')
	const [year, setYear] = useState<string>('')
	const [price, setPrice] = useState<string>('')
	const [version, setVersion] = useState<string>('')

	const [makesList, setMakesList] = useState<MakeType[]>([])
	const [modelsList, setModelsList] = useState<ModelType[]>([])
	const [versionsList, setVersionsList] = useState<ModelType[]>([])

	const handlePlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPlace(e.target.value)
	}

	const handleMakeChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
		setMake(e.target.value)

		const response = await getModels(e.target.value)

		setModelsList(response.data)
	}

	const handleModelChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
		setModel(e.target.value)

		const response = await getVersions(e.target.value)

		setVersionsList(response.data)
	}

	const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setYear(e.target.value)
	}

	const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setPrice(e.target.value)
	}

	const handleVersionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setVersion(e.target.value)
	}

	const handleClearFilterClick = () => {
		setNew(false)
		setUsed(false)
		setPlace('')
		setMake('')
		setModel('')
		setYear('')
		setPrice('')
		setVersion('')
	}

	const handleSubmitForm = (e: React.FormEvent) => {
		e.preventDefault()
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
					onClick={() => {
						setActive('tabCars')
						handleClearFilterClick()
					}}
					icon={<CarIcon />}
					text="Comprar carros"
				/>
				<Tab
					className="tabMotorcycle"
					active={active === 'tabMotorcycle'}
					onClick={() => {
						setActive('tabMotorcycle')
						handleClearFilterClick()
					}}
					icon={<MotorcycleIcon />}
					text="Comprar motos"
				/>
			</Tabs>

			<form onSubmit={handleSubmitForm}>
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
					<Col flex>
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
					<Col flex>
						<Selectbox
							prefix="Ano: "
							value={year}
							onChange={handleYearChange}
							suggest={YEARS.map((year) => ({
								ID: String(year),
								Name: String(year),
							}))}
						/>
						<Selectbox
							prefix="Preço: "
							value={price}
							onChange={handlePriceChange}
							suggest={PRICES.map((price) => ({
								ID: String(price),
								Name: String(price),
							}))}
						/>
					</Col>

					<Col>
						<Selectbox
							prefix="Versão: "
							value={version}
							onChange={handleVersionChange}
							suggest={versionsList}
							disabled={model === ''}
						/>
					</Col>
				</Row>

				<Row>
					<span id="AdvancedSearchButton" style={{ cursor: 'not-allowed' }}>
						➧ Busca avançada
					</span>
					<div className="ButtonsContainer">
						<span id="ClearButton" onClick={handleClearFilterClick}>
							Limpar filtros
						</span>
						<input type="submit" id="FilterButton" value="VER OFERTAS" />
					</div>
				</Row>
			</form>
		</Container>
	)
}
