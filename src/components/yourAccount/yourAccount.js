import * as React from 'react'
import './yourAccount.css'
import Detalhes from '../yourAccount/detalhes'
import Endereco from '../yourAccount/endereco'
import Privacidade from '../yourAccount/privacidade'
import Historico from '../yourAccount/historico'
import CustomButton from '../utils/customButton'
import Title from '../utils/Title'
import { COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_10PX } from '../utils/border'
import { makeStyles } from '@material-ui/core/styles'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab, Modal, Grid } from '@mui/material'
import { Item } from '@mui-treasury/components/flex'
import {client} from '../../index'

const useStyles = makeStyles(() => ({
	container: {
		backgroundColor: COLOR_OXFORD_BLUE,
		color: COLOR_BDAZZLED_BLUE,
		paddingBottom: '40px',
		paddingTop: '40px',
	},
	userContainer: {
		paddingRight: '15px',
		paddingLeft: '15px',
		margin: '0px 30px 30px 30px',
		backgroundColor: COLOR_PLATINIUM,
		borderRadius: BORDER_RADIUS_10PX,
	},
	imageBox: {
		height: '145px',
		width: '145px',
		borderRadius: '100%',
		border: '2px solid #0D1B2A',
		float: 'left',
		padding: '5px',
		margin: '15px',
		cursor: 'pointer',
	},
	userContentContainer: {
		float: 'right',
		padding: '15px',
	},
	userContent: {
		textOverflow: "ellipsis",
		overflow: "hidden",
		maxWidth: '140px',
	},
	tabs: {
		padding: '20px',
		color: COLOR_BDAZZLED_BLUE,
		':hover': {
			color: COLOR_SHADOW_BLUE,
		},
		'&.Mui-selected': {
			color: COLOR_PLATINIUM,
			backgroundColor: COLOR_BDAZZLED_BLUE,
			':hover': {
				color: COLOR_SHADOW_BLUE,
			},
		},
		fontSize: '20px',
		fontFamily: 'inherit',
	},
	indicator: {
		backgroundColor: 'transparent',
	},
	boxModalStyle: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		maxWidth: "450px",
		height: "auto",
		paddingTop: "15px",
		paddingBottom: "10px",
		backgroundColor: COLOR_PLATINIUM,
	},
	avatares: {
		height: '145px',
		width: '145px',
		borderRadius: '100%',
		border: '2px solid #0D1B2A',
		padding: '5px',
		margin: '15px',
		cursor: 'pointer',
	}
}))

function updateClientAvatar(url) {
	
	//call api to update user
}

export default function YourAccount(props) {
	const classes = useStyles()

	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue);
	}

	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const avatars = {
		avatar1: "images/avatar/avatar-Man-1.png",
		avatar2: "images/avatar/avatar-Man-2.png",
		avatar3: "images/avatar/avatar-Woman-1.png",
		avatar4: "images/avatar/avatar-Woman-2.png",
	}

	const user = {
		avatar: "images/avatar/avatar-Man-1.png",
		name: 'Ricardo Vieira',
		balance: {
			amount: 112,
			coin: '€'
		},
	}

	return (
		<div className={classes.container}>
			<div className={classes.userContainer}>
				<div class="clearfix">
					<Title
						name={user.name}
						color={COLOR_BDAZZLED_BLUE}
					/>

					<img onClick={handleOpen} src={user.avatar} alt="" className={classes.imageBox}></img>
					<Modal
						open={open}
						onClose={handleClose}
					>
						<Box className={classes.boxModalStyle}>
							<Grid
								container
							>
								<Grid
									item
									md={6}
									xs={12}
								>
									<Item
										textAlign={"center"}
									>
										<img onClick={updateClientAvatar("http://localhost:3000/images/avatar/avatar-Man-1.png")} src={avatars.avatar1} alt="" className={classes.avatares}></img>
									</Item>
								</Grid>
								<Grid
									item
									md={6}
									xs={12}
								>
									<Item
										textAlign={"center"}
									>
										<img onClick={updateClientAvatar("http://localhost:3000/images/avatar/avatar-Man-2.png")} src={avatars.avatar2} alt="" className={classes.avatares}></img>
									</Item>
								</Grid>
								<Grid
									item
									md={6}
									xs={12}
								>
									<Item
										textAlign={"center"}
									>
										<img onClick={updateClientAvatar("http://localhost:3000/images/avatar/avatar-Woman-1.png")} src={avatars.avatar3} alt="" className={classes.avatares}></img>
									</Item>
								</Grid>
								<Grid
									item
									md={6}
									xs={12}
								>
									<Item
										textAlign={"center"}
									>
										<img onClick={updateClientAvatar("http://localhost:3000/images/avatar/avatar-Woman-2.png")} src={avatars.avatar4} alt="" className={classes.avatares}></img>
									</Item>
								</Grid>
							</Grid>
						</Box>
					</Modal>


					<div className={classes.userContentContainer}>
						<p className={classes.userContent}>Saldo: <br />{user.balance.coin}{user.balance.amount}</p>
						<CustomButton
							name={"Adicionar saldo"}
						/>
					</div>
				</div>
			</div>

			<div class="menu-bar">
				<TabContext value={value}>
					<Box sx={{ borderBottom: 2, marginBottom: 5 }}>
						<TabList
							onChange={handleChange}
							variant="scrollable"
							scrollButtons
							allowScrollButtonsMobile
							TabIndicatorProps={{ className: classes.indicator }}
						>
							<Tab label="Detalhes" value={0} className={classes.tabs} />
							<Tab label="Endereço" value={1} className={classes.tabs} />
							<Tab label="Privacidade" value={2} className={classes.tabs} />
							<Tab label="Histórico de compras" value={3} className={classes.tabs} />
						</TabList>
					</Box>
					<TabPanel value={0}>
						<Detalhes />
					</TabPanel>
					<TabPanel value={1}>
						<Endereco />
					</TabPanel>
					<TabPanel value={2}>
						<Privacidade />
					</TabPanel>
					<TabPanel value={3}>
						<Historico />
					</TabPanel>
				</TabContext>
			</div>
		</div >
	)
}