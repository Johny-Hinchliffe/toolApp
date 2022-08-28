import { useState, useEffect } from 'react'

import {
	Card,
	CardContent,
	Box,
	TextField,
	Typography,
	Button,
} from '@mui/material'

import ageDiff from './functions/ageDiff'
import AccordionItem from './mini-components/Accordion'
import CardLayout from './mini-components/CardLayout'
import Modal from './mini-components/Modal'

const AgeCompare = () => {
	const [question, setQuestion] = useState('')
	const [answer, setAnswer] = useState()

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)

		setAnswer(
			ageDiff(
				data.get('name1'),
				data.get('age1'),
				data.get('name2'),
				data.get('age2')
			)
		)
	}

	return (
		<>
			<AccordionItem
				title="Age Compare"
				content="Easy way to calculate when someone will be double the age of another. "
			/>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{ width: 300, marginTop: '0%' }}
			>
				<Card sx={{ minWidth: 275 }} elevation={24}>
					<CardContent>
						<Typography align="center" variant="h6">
							Name 1
						</Typography>
						<TextField
							id="standard-basic"
							label="Name"
							name="name1"
							variant="standard"
						/>
						<TextField
							id="standard-basic"
							label="Birth Year"
							name="age1"
							variant="standard"
						/>
						<Typography align="center" variant="h6" sx={{ marginTop: '20px' }}>
							Name 2
						</Typography>
						<TextField
							id="standard-basic"
							label="Name"
							name="name2"
							variant="standard"
						/>
						<TextField
							id="standard-basic"
							label="Birth Year"
							name="age2"
							variant="standard"
						/>
						<Box textAlign="center">
							<Modal content={answer} title={question} button="Calculate" />
						</Box>
					</CardContent>
				</Card>
			</Box>
		</>
	)
}

export default AgeCompare
