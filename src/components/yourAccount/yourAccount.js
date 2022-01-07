import * as React from 'react'
import './yourAccount.css'
import Detalhes from '../yourAccount/detalhes'
import Endereco from '../yourAccount/endereco'
import Privacidade from '../yourAccount/privacidade'
import Historico from '../yourAccount/historico'
import CustomButton1 from './customButton1'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_3 } from '../utils/border'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'


export default function YourAccount(props) {

	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue);
	}

	const user = {
		avatar: "images/avatar-Man-2.png",
		name: 'Ricardo',
		balance: {
			amount: 12,
			coin: '€'
		},
	}

	return (
		<div>
			<div class="container">
				<div class="clearfix">
					<img src={user.avatar} alt="" class="image-box"></img>
					<div class="user-name user-content">
						<p class="user-info">{user.name}</p>
						<p class="user-info">Saldo: {user.balance.coin}{user.balance.amount}</p>
						<CustomButton1 />
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
		</div >
	)
}