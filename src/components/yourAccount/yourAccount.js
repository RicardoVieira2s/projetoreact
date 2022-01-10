import * as React from 'react'
import './yourAccount.css'
import Detalhes from '../yourAccount/detalhes'
import Endereco from '../yourAccount/endereco'
import Privacidade from '../yourAccount/privacidade'
import Historico from '../yourAccount/historico'
import CustomButton from './customButton'
import Title from '../title/Title'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_2 } from '../utils/border'
import { makeStyles } from '@material-ui/core/styles'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'

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
		borderRadius: BORDER_RADIUS_2,
	},
	imageBox: {
		height: '145px',
		width: '145px',
		borderRadius: '100%',
		border: '2px solid #0D1B2A',
		float: 'left',
		padding: '5px',
		margin: '15px',
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
}))

export default function YourAccount(props) {
	const classes = useStyles()

	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue);
	}

	const user = {
		avatar: "images/avatar-Man-2.png",
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
					<img src={user.avatar} alt="" className={classes.imageBox}></img>
					<div className={classes.userContentContainer}>
						<p className={classes.userContent}>Saldo: <br/>{user.balance.coin}{user.balance.amount}</p>
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