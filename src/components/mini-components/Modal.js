import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '.5px solid #000',
	borderRadius: '20px',
	boxShadow: 15,
	p: 4,
	maxWidth: '70vw'
}

export default function BasicModal({ content, title, button }) {
	const [open, setOpen] = React.useState(false)
	
  const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<div>
			<Button variant="outlined" type="submit" onClick={handleOpen}>
				{button}
			</Button>
      {content ? <Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				elevation={24}
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h5" component="h2" textAlign="center">
						{title}
					</Typography>
					<Typography id="modal-modal-description" textAlign="center" sx={{ mt: 2 }}>
						{content}
					</Typography>
				</Box>
			</Modal> : <div></div>}
			
		</div>
	)
}
