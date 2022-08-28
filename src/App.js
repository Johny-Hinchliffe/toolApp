import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import theme from './theme'
import { MainStore } from './contexts/MainContext'
import SearchMenu from './components/SearchMenu'
import Drawer from './components/Drawer'
import PizzaTime from './components/PizzaTime'
import DadJoke from './components/DadJoke'
import Homepage from './components/Homepage'
import ContentLayout from './components/mini-components/ContentLayout'
import AgeCompare from './components/AgeCompare'

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
						</Routes>
					</ThemeProvider>
				</MainStore>
			</BrowserRouter>
		</div>
	)
}

export default App
