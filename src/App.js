import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import theme from './theme'
import { MainStore } from './contexts/MainContext'
import SearchMenu from './components/SearchMenu'
import PizzaTime from './components/PizzaTime'
import DadJoke from './components/DadJoke'
import Homepage from './components/Homepage'
import ContentLayout from './components/mini-components/ContentLayout'
import AgeCompare from './components/AgeCompare'
import Settings from './components/Settings'
import CoinFlip from './components/CoinFlip'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<MainStore>
					<ThemeProvider theme={theme}>
						<SearchMenu title={'Tool App'} anchor={'left'} />
						<Routes>
							<Route
								path="/"
								element={<ContentLayout content={<Homepage />} />}
							/>
							<Route
								path="/pizza-time"
								element={<ContentLayout content={<PizzaTime />} />}
							/>
							<Route
								path="/dad-jokes"
								element={<ContentLayout content={<DadJoke />} />}
							/>
							<Route
								path="/age-compare"
								element={<ContentLayout content={<AgeCompare />} />}
							/>
							<Route path="/coin-flip" element={<ContentLayout content={<CoinFlip />}/>} />
							<Route path="/settings" element={<ContentLayout content={<Settings />}/>} />
						</Routes>
					</ThemeProvider>
				</MainStore>
			</BrowserRouter>
		</div>
	)
}

export default App
