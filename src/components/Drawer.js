import * as React from 'react'
import { Link } from 'react-router-dom'

import {
	Box,
	IconButton,
	Drawer,
	List,
	Divider,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'

import { Menu as MenuIcon } from '@mui/icons-material'

export default function TemporaryDrawer({
	menuList1,
	menuList2,
	anchor,
	item,
}) {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	})

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return
		}

		setState({ ...state, [anchor]: open })
	}

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{menuList1.map((text) => (
					<ListItem key={text[0]} disablePadding>
						<Link
							to={`/${text[0].split(' ').join('-').toLowerCase()}`}
							style={{ textDecoration: 'none' }}
						>
							<ListItemButton>
								<ListItemIcon>{text[1]}</ListItemIcon>
								<ListItemText primary={text[0]} />
							</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{menuList2.map((text) => (
					<ListItem key={text[0]} disablePadding>
						<Link
							to={`/${text[0].split(' ').join('-').toLowerCase()}`}
							style={{ textDecoration: 'none' }}
						>
							<ListItemButton>
								<ListItemIcon>{text[1]}</ListItemIcon>

								<ListItemText primary={text[0]} />
							</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	)

	return (
		<div>
			<React.Fragment key={anchor}>
				<>
					<IconButton
						size="large"
						edge="start"
						color="secondary"
						aria-label="open drawer"
						sx={{ mr: 2 }}
						onClick={toggleDrawer(anchor, true)}
					>
						<MenuIcon />
					</IconButton>
				</>

				<Drawer
					anchor={anchor}
					open={state[anchor]}
					onClose={toggleDrawer(anchor, false)}
				>
					{list(anchor)}
				</Drawer>
			</React.Fragment>
		</div>
	)
}
