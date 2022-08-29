import { useEffect, useState } from 'react'
import {
	Button,
	Box,
	Card,
	CardContent,
	CardActions,
	Typography,
} from '@mui/material'

import headsImage from '../images/50p-heads.png'
import tailsImage from '../images/50p-tails.png'
import questionImage from '../images/question-mark.png'

import AccordionItem from './mini-components/Accordion'

const CoinFlip = () => {
	const [answerImage, setAnswerImage] = useState(questionImage)
	const [answer, setAnswer] = useState('Time to Flip')

	const flipper = () => {
		const options = ['Heads', 'Tails']
		const choice = Math.round(Math.random() * 1)
		const result = options[choice]

		for (let i = 50; i < 2000; i += 50) {
			setTimeout(() => {
				setAnswerImage(headsImage)
                setAnswer('Heads')
			}, String(i))
			setTimeout(() => {
				setAnswerImage(tailsImage)
                setAnswer('Tails')
			}, String((i += 50)))

			if (i === 2000) {
				setTimeout(() => {
					setAnswerImage(result === 'Heads' ? headsImage : tailsImage)
					setAnswer(result)
				}, String(2000))
			}
		}
	}

	return (
		<>
			<AccordionItem title="Coin Flip" content="Time to flip! Heads or Tails?                                " />
			<Card sx={{ minWidth: 275 }} elevation={24}>
				<CardContent>
					<Box textAlign="center">
						<Typography variant="h5">{answer}</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '50vh',
						}}
						textAlign="center"
					>
						<Typography variant="body2" color="text.secondary">
							<Box
								component="img"
								sx={{
									height: 233,
									width: 233,
									maxHeight: { xs: 233, md: 167 },
									maxWidth: { xs: 233, md: 167 },
								}}
								alt="The house from the offer."
								src={answerImage}
							/>
						</Typography>
					</Box>

					<Box mt={3}  position="relative" bottom="0px" sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<CardActions disableSpacing>
							{/* <IconButton aria-label="add to favorites">
								<FavouriteIcon />
							</IconButton> */}

							<Button variant="outlined" size="large" onClick={() => flipper()}>
								Again?
							</Button>
						</CardActions>
					</Box>
				</CardContent>
			</Card>
		</>
	)
}

export default CoinFlip
