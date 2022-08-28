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

const AgeCompare = () => {
	const [results, setResults] = useState()

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		setResults(
			ageDiff(
				data.get('name1'),
				data.get('age1'),
				data.get('name2'),
				data.get('age2')
			)
		)
	}


	// const content = (
	// 	<>
	// 		<Typography align="center" variant="h6">
	// 			Person 1
	// 		</Typography>
	// 		<TextField
	// 			id="standard-basic"
	// 			label="Name"
	// 			name="name1"
	// 			variant="standard"
	// 		/>
	// 		<TextField
	// 			type="number"
	// 			id="standard-basic"
	// 			name="age2"
	// 			label="Birth Year"
	// 			variant="standard"
	// 		/>
	// 		<Typography align="center" variant="h6" sx={{ marginTop: '20px' }}>
	// 			Person 2
	// 		</Typography>
	// 		<TextField
	// 			id="standard-basic"
	// 			label="Name"
	// 			name="name2"
	// 			variant="standard"
	// 		/>
	// 		<TextField
	// 			type="number"
	// 			id="standard-basic"
	// 			label="Birth Year"
	// 			name="age2"
	// 			variant="standard"
	// 		/>
	// 		<Box textAlign="center">
	// 			<Button
	// 				variant="outlined"
	// 				size="medium"
	// 				onClick={() => handleSubmit()}
	// 				sx={{ marginTop: '20px' }}
	// 			>
	// 				Go
	// 			</Button>
	// 		</Box>
	// 	</>
	// )

	return (
		<>
			<AccordionItem title="Age Compare" content="explaination" />
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{ width: 300, marginTop: '0%' }}
			>
				<Card sx={{ minWidth: 275 }} elevation={24}>
					<CardContent>
						<Typography align="center" variant="h6">
							Person 1
						</Typography>
						<TextField
							id="standard-basic"
							label="Name"
							name="name1"
							variant="standard"
						/>
						<TextField
							type="number"
							id="standard-basic"
							name="age2"
							label="Birth Year"
							variant="standard"
						/>
						<Typography align="center" variant="h6" sx={{ marginTop: '20px' }}>
							Person 2
						</Typography>
						<TextField
							id="standard-basic"
							label="Name"
							name="name2"
							variant="standard"
						/>
						<TextField
							type="number"
							id="standard-basic"
							label="Birth Year"
							name="age2"
							variant="standard"
						/>
						<Box textAlign="center">
							<Button
								variant="outlined"
								size="medium"
								// onClick={() => handleSubmit()}
								sx={{ marginTop: '20px' }}
							>
								Go
							</Button>
						</Box>
					</CardContent>
				</Card>
			</Box>
		</>
	)
}

export default AgeCompare
