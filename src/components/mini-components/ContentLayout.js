import { Container, Box, CssBaseline, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
const ContentLayout = ({ content, title }) => {
	return (
		<Container component="main" maxWidth="xs">
			{/* <CssBaseline /> */}
			<Box
				sx={{
					marginTop: 2,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography variant="h4">{title}</Typography>
				{content}
			</Box>
		</Container>
	)
}

export default ContentLayout
