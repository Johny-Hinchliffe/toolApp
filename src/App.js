import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import theme from './theme'
import { MainStore } from './contexts/MainContext'
import SearchMenu from './components/SearchMenu'
import Drawer from './components/Drawer'
import PizzaTime from './components/PizzaTime'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<MainStore>
					<ThemeProvider theme={theme}>
							<SearchMenu title={'Tool App'} anchor={'left'} />
						<Routes>
							<Route path="/pizza-time" element={<PizzaTime />} />
						</Routes>
					</ThemeProvider>
				</MainStore>
			</BrowserRouter>
		</div>
	)
}

export default App
