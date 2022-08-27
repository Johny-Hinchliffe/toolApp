import { useState, useEffect } from 'react'
import {
	CssBaseline,
	Container,
	Box,
	Typography,
	Card,
	CardContent,
	Button,
	Slider,
} from '@mui/material'

import Accordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'

import { styled } from '@mui/material/styles'

import whichPizza from './functions/whichPizza'
import Modal from './mini-components/Modal'

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
))(({ theme }) => ({
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}))

const PizzaTime = () => {
	const [quan1, setQuan1] = useState()
	const [size1, setSize1] = useState()
	const [quan2, setQuan2] = useState()
	const [size2, setSize2] = useState()
	const [question, setQuestion] = useState('')
	const [answer, setAnswer] = useState()

	useEffect(() => {
		if(quan1 && quan2 && size1 && size2){
			console.log(quan1, quan2, size1, size2)
		setQuestion(
			`${quan1 || '___'} x ${size1 || '___'}" ${
				quan1 > 1 ? 'pizzas' : 'pizza'
			} or ${quan2 || '___'} x ${size2 || '___'}" ${
				quan2 > 1 ? 'pizzas' : 'pizza'
			}?`
		)
		}
	}, [quan1, quan2, size1, size2])

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)

		setAnswer(
			whichPizza(
				data.get('quan1'),
				data.get('size1'),
				data.get('quan2'),
				data.get('size2')
			)
		)
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 2,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography variant="h4"> Pizza Time </Typography>

				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>Info</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							You go to your local pizza place and see that you can get 1 large
							pizza or 2 small pizzas for the same price.<br></br> Which one
							gives you more pizza?
						</Typography>
					</AccordionDetails>
				</Accordion>
				
				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{ width: 300, marginTop: '0%' }}
				>
					<Card sx={{ minWidth: 275 }}>
						<CardContent>
							<Typography align="center" variant="h6">
								Pizza 1
							</Typography>
							<Typography id="input-slider" gutterBottom>
								Quantity
							</Typography>
							<Slider
								aria-label="Temperature"
								defaultValue={1}
								valueLabelDisplay="auto"
								step={1}
								marks
								min={1}
								max={10}
								onChange={(event) => setQuan1(event.target.value)}
								name="quan1"
							/>
							<Typography id="input-slider" gutterBottom>
								Pizza Size
							</Typography>
							<Slider
								aria-label="Temperature"
								defaultValue={1}
								valueLabelDisplay="auto"
								step={1}
								marks
								min={4}
								max={25}
								name="size1"
								onChange={(event) => setSize1(event.target.value)}
							/>

							<Typography align="center" variant="h6">
								Pizza 2
							</Typography>
							<Typography id="input-slider" gutterBottom>
								Quantity
							</Typography>
							<Slider
								aria-label="Temperature"
								defaultValue={1}
								valueLabelDisplay="auto"
								step={1}
								marks
								min={1}
								max={10}
								name="quan2"
								onChange={(event) => setQuan2(event.target.value)}
							/>
							<Typography id="input-slider" gutterBottom>
								Pizza Size
							</Typography>
							<Slider
								aria-label="Temperature"
								defaultValue={1}
								valueLabelDisplay="auto"
								step={1}
								marks
								min={4}
								max={25}
								name="size2"
								onChange={(event) => setSize2(event.target.value)}
							/>
							<Box textAlign="center">
								{/* <Button type="submit" variant="outlined">
									Submit
								</Button> */}
								<Modal answer={answer} content={answer} title={question} button='Calculate' />
							</Box>
						</CardContent>
					</Card>
				</Box>
			</Box>
		</Container>
	)
}

export default PizzaTime
