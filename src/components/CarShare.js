import { useState, useEffect } from 'react'

import {
	Card,
	CardContent,
	Box,
	TextField,
	Typography,
	InputAdornment,
} from '@mui/material'

import AccordionItem from './mini-components/Accordion'
import Modal from './mini-components/Modal'

const carShare = (mpg, distance, fuelPrice, people) => {
	
	
	const milesPerLitre = Number(mpg) / 4.546
	const poundPerLitre = Number(fuelPrice/100) / milesPerLitre

	const journeyCost = distance * poundPerLitre
	const round = (el) => Math.ceil(el * 10) / 10
	const bigRound = (el) => Math.ceil(el * 100) / 100

	// console.log('334'.split('.').length)

	const addZeros = (el) => {
		console.log(el)
		el = bigRound(el)
		const splitted = String(el).split('.')
				if (splitted.length === 1) {
			return splitted + '.00'
		}
		if (splitted.length > 1 && splitted[1].length === 1) {
			return splitted.join('.') + '0'
		} else return splitted.join('.')
	}

	return {
		journeyCost: addZeros(round(journeyCost)),
		costPerPerson: addZeros(round(journeyCost) / people),
		costPerPersonPlusDriver: addZeros(
			bigRound(round(journeyCost) / (Number(people) + 1))
		),
		costPerMile: addZeros(bigRound(poundPerLitre)),
	}
}

const CarShare = () => {
	const [answer, setAnswer] = useState({})

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)

		setAnswer(
			carShare(
				data.get('mpg'),
				data.get('distance'),
				data.get('fuelPrice'),
				data.get('people')
			)
		)
	}

	

	const title = (
		<Box textAlign="center">
			<Typography variant="h6">Journey Results</Typography>
		</Box>
	)

	const content = (
		<Box>
			<Typography variant="h6">
				Total Journey Cost:
			</Typography>
			<Typography variant="h6" gutterBottom>
				£{answer.journeyCost}
			</Typography>
			<Typography variant="h6">
				Cost Per Mile:
			</Typography>
			<Typography variant="h6" gutterBottom>
			£{answer.costPerMile}
			</Typography>
			<Typography variant="h6">
				Cost Per Person:
			</Typography >
			<Typography variant="h6">
			£{answer.costPerPerson}
			</Typography >
			
		</Box>
	)

	return (
		<>
			<AccordionItem
				title="Car Share"
				content="The easiest way to calculate fuel costs and split the bill"
			/>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{ width: 300, marginTop: '0%' }}
			>
				<Card sx={{ minWidth: 275 }} elevation={24}>
					<CardContent>
						<TextField
							id="standard-basic"
							label="37 miles"
							name="distance"
							variant="standard"
							helperText="Distance in miles"
						/>
						<TextField
							id="standard-basic"
							label="169.9p"
							name="fuelPrice"
							variant="standard"
							helperText="Fuel Price"
						/>
						<TextField
							id="standard-basic"
							label="35.4 mpg"
							name="mpg"
							variant="standard"
							helperText="Miles per Gallon"
						/>
						<TextField
							id="standard-basic"
							label="3 people"
							name="people"
							variant="standard"
							type="number"
							helperText="Splitting between how many people"
						/>

						<Box sx={{ marginTop: '20px' }} textAlign="center">
							<Modal content={content} title={title} button="Calculate" />
						</Box>
					</CardContent>
				</Card>
			</Box>
		</>
	)
}

export default CarShare
