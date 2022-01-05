import * as React from 'react'
import './yourStore.css'
import Detalhes from '../yourStore/detalhes'
import Endereco from '../yourStore/endereco'
import Privacidade from '../yourStore/privacidade'
import Historico from '../yourStore/historico'
import { Box, Button} from '@mui/material'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_3 } from '../utils/border'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

export default function YourStore(props) {

	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue);
	}

	const button = {
		backgroundColor: COLOR_BDAZZLED_BLUE,
		color: COLOR_PLATINIUM,
		':hover': {
			backgroundColor: COLOR_BDAZZLED_BLUE,
			color: COLOR_PLATINIUM,
		},
		borderRadius: BORDER_RADIUS_3,
		fontFamily: 'Viga',
	}

	//user infos
	const user = {
		id: '',
		avatar: "images/avatar-Man-2.png",
		name: 'Ricardo',
		balance: { amount: 12, coin: '€' },

		surname: '',
		phoneNumber: '',
		vat: '',
		email: '',
		birthData: '',

		street: '',
		doorNumber: '',
		zipCode: '',
		city: '',
		country: '',

		accordionInfo: {
			title: 'title',
			caption: 'caption',
			info: 'info',
		}
	}

	return (
		<div>
			<div class="container">
				<div class="clearfix">
					<img src={user.avatar} alt="" class="image-box"></img>
					<div class="user-name user-content">
						<p class="user-info">{user.name}</p>
						<p class="user-info">Saldo: {user.balance.coin}{user.balance.amount}</p>
						<Button
							style={button}
							sx={{ height: '30px', float: 'right' }}
						>
							Add balance
						</Button>
					</div>
				</div>
			</div>

			<div class="menu-bar">
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList
							onChange={handleChange}
							variant="scrollable"
							scrollButtons
							allowScrollButtonsMobile
						>
							<Tab label="Detalhes" value={0} />
							<Tab label="Endereço" value={1} />
							<Tab label="Privacidade" value={2} />
							<Tab label="Histórico de compras" value={3} />
						</TabList>
					</Box>
					<TabPanel
						value={0}
					>
						<Detalhes />
					</TabPanel>
					<TabPanel
						value={1}
					>
						<Endereco />
					</TabPanel>
					<TabPanel
						value={2}
					>
						<Privacidade />
					</TabPanel>
					<TabPanel
						value={3}
					>
						<Historico />
					</TabPanel>
				</TabContext>
			</div>
		</div>
	)
}