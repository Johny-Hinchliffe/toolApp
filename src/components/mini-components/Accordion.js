import {
	Typography,
	Accordion,
	AccordionSummary as MuiAccordionSummary,
	AccordionDetails,
	Box
} from '@mui/material'
import {
	ExpandMore as ExpandMoreIcon,
	ArrowForwardIosSharp as ArrowForwardIosSharpIcon,
} from '@mui/icons-material'

import { styled } from '@mui/material/styles'

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

const AccordionItem = ({ title, content }) => {
	return (
		<Box textAlign='center' sx={{marginBottom: '10px'}}>

		<Accordion elevation={0} sx={{backgroundColor: 'transparent'}}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				>
				<Typography variant='h4'>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>{content}</Typography>
			</AccordionDetails>
		</Accordion>
				</Box>
	)
}

export default AccordionItem
