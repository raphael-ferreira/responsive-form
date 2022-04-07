import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cars, Home, Motorcycles, NotFound } from './pages'

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/carros" element={<Cars />} />
					<Route path="/motos" element={<Motorcycles />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
