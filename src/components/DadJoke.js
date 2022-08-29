import React, { useState, useEffect } from 'react'
import {
	Button,
	Box,
	Card,
	CardContent,
	CardActions,
	IconButton,
	Typography,
} from '@mui/material'

import AccordionItem from './mini-components/Accordion'

const DadJoke = () => {
	const [joke, setJoke] = useState('Ready to Laugh?')

	// USING ASYNC/AWAIT
	async function generateJoke() {
		const config = {
			headers: {
				Accept: 'application/json',
			},
		}

		const res = await fetch('https://icanhazdadjoke.com', config)

		const data = await res.json()
		setJoke(data.joke)
	}

	

	return (
		<>
			<AccordionItem
				title="Dad Jokes"
				content="Just hit the button to get a legendary Dad joke"
			/>
			<Card sx={{ minWidth: 275 }} elevation={24}>
				<CardContent>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '50vh',
						}}
						textAlign="center"
					>
						<Typography variant="h5" color="text.secondary">
							{joke}
						</Typography>
					</Box>

					<Box mt={3} position="relative" bottom="0px">
						<CardActions disableSpacing>
							{/* <IconButton aria-label="add to favorites">
								<FavouriteIcon />
							</IconButton> */}

							<Button
								variant="outlined"
								size="large"
								onClick={() => generateJoke()}
							>
								Another One
							</Button>
						</CardActions>
					</Box>
				</CardContent>
			</Card>
		</>
	)
}

export default DadJoke
