import { useState, useEffect } from 'react'
import {
	Box,
	Typography,
	Card,
	CardContent,
	Slider,
} from '@mui/material'

import whichPizza from './functions/whichPizza'
import Modal from './mini-components/Modal'
import AccordionItem from './mini-components/Accordion'


const PizzaTime = () => {
	const [quan1, setQuan1] = useState()
	const [size1, setSize1] = useState()
	const [quan2, setQuan2] = useState()
	const [size2, setSize2] = useState()
	const [question, setQuestion] = useState('')
	const [answer, setAnswer] = useState()

	useEffect(() => {
		if (quan1 && quan2 && size1 && size2) {
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
		<>
			<AccordionItem
				title="Pizza Time"
				content="You go to your local pizza place and see that you can get 1 large
						pizza or 2 small pizzas for the same price. Which one gives
						you more pizza?"
			/>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{ width: 300, marginTop: '0%' }}
			>
				<Card sx={{ minWidth: 275 }} elevation={24}>
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
							<Modal
								answer={answer}
								content={answer}
								title={question}
								button="Calculate"
							/>
						</Box>
					</CardContent>
				</Card>
			</Box>
		</>
	)
}

export default PizzaTime
