import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Shop, Home, NotFound } from './pages'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
