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
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { styled } from '@mui/material/styles'

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '50px' }} />}
		{...props}
	/>
))(({ theme }) => ({
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: '20%',
	},
}))

const AccordionItem = ({ title, content }) => {
	return (
		
<Box
						sx={{
							display: 'absolute',
							justifyContent: 'center',
							alignItems: 'center',
							
						}}
						textAlign="center"
					>
		<Accordion elevation={0} sx={{backgroundColor: 'transparent'}}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon size='large' sx={{fontSize: '50px'}} />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				
				>
				<Typography  variant='h4'>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography >{content}</Typography>
			</AccordionDetails>
		</Accordion>
				</Box>
	)
}

export default AccordionItem
