import { useState } from 'react'

import { Card, CardContent, Box } from '@mui/material'

import AccordionItem from './Accordion'

const AgeCompare = ({
	setState,
	inputNames,
	title,
	accordionContent,
	cardContent,
    state
}) => {
	

	return (
		<>
			<AccordionItem title={title} content={accordionContent} />
			<Box
				component="form"
				sx={{ width: 300, marginTop: '0%' }}
			>
				<Card sx={{ minWidth: 275 }} elevation={24}>
					<CardContent>{cardContent}</CardContent>
				</Card>
			</Box>
		</>
	)
}

export default AgeCompare
