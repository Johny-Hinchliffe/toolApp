import {useEffect} from 'react'
import { useContext } from 'react'
import MainContext from '../contexts/MainContext'

import { Button, Box, Typography } from '@mui/material/'

const Dummy = () => {
	const { contextState,  onStateChange } = useContext(MainContext)

    useEffect(() => {
        console.log(contextState * contextState)
    },[contextState])

	return (
		<>
        
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
                    justifyContent: 'space-between'
				}}
			>
                <Typography variant="h1">{contextState}</Typography>
				<Button onClick={ () => onStateChange(contextState+1)} type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
					Add
				</Button>
				<Button onClick={ () => onStateChange(contextState-1)} type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
					Minus
				</Button>
			</Box>
		</>
	)
}

export default Dummy
