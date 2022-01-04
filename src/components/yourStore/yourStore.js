import * as React from 'react'
import './yourStore.css'
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_3 } from '../utils/border'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

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
		avatar: "images/store.png",
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

	//Acordion const
	const [expanded, setExpanded] = React.useState(false)

	const handleChangeAccordion = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
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
						style={{
							marginTop: "30px"
						}}
					>
						<form
							autoComplete="off"
							noValidate
						>
							<Card>
								<CardHeader
									title="Detalhes"
								/>
								<Divider />
								<CardContent>
									<Grid
										container
										spacing={3}
									>
										<Grid
											item
											md={6}
											xs={12}
										>
											<TextField
												fullWidth
												label="Nome Próprio"
												name="Nome Próprio"
												required
												variant="outlined"
											/>
										</Grid>
										<Grid
											item
											md={6}
											xs={12}
										>
											<TextField
												fullWidth
												label="Apelido"
												name="Apelido"
												required
												variant="outlined"
											/>
										</Grid>
										<Grid
											item
											md={6}
											xs={12}
										>
											<TextField
												fullWidth
												label="E-mail"
												name="E-mail"
												required
												variant="outlined"
											/>
										</Grid>
										<Grid
											item
											md={6}
											xs={12}
										>
											<TextField
												fullWidth
												label="Número de telemóvel"
												name="Número de telemóvel"
												type="number"
												variant="outlined"
												required
											/>
										</Grid>
										<Grid
											item
											md={6}
											xs={12}
										>
											<TextField
												fullWidth
												type="date"
												variant="outlined"
												helperText="Data de nascimento" />
										</Grid>
										<Grid
											item
											md={6}
											xs={12}
										>
											<TextField
												fullWidth
												label="Número de Identificação Fiscal"
												name="Número de Identificação Fiscal"
												type="number"
												variant="outlined"
												required
											/>
										</Grid>
									</Grid>
								</CardContent>
								<Divider />
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-end',
										p: 2
									}}
								>
									<Button
										style={button}
										sx={{ height: '40px' }}
									>
										Save details
									</Button>
								</Box>
							</Card>
						</form>
					</TabPanel>
					<TabPanel
						value={1}
					>
						<form
							autoComplete="off"
							noValidate
						>
							<Card>
								<CardHeader
									title="Endereço"
								/>
								<Divider />
								<CardContent>
									<Grid
										container
										spacing={3}
									>
										<Grid
											item
											md={6}
											xs={12}
										>
											<TextField
												fullWidth
												label="Rua"
												name="Rua"
												required
												variant="outlined"
											/>
										</Grid>
										<Grid
											item
											md={6}
											xs={12}
										>
											<TextField
												fullWidth
												label="Número de porta"
												name="Número de porta"
												type="number"
												required
												variant="outlined"
											/>
										</Grid>
										<Grid
											item
											md={6}
											xs={12}
										>
											<TextField
												fullWidth
												label="Código Postal"
												name="Código Postal"
												required
												variant="outlined"
											/>
										</Grid>
										<Grid
											item
											md={6}
											xs={12}
										>
											<TextField
												fullWidth
												label="Cidade"
												name="Cidade"
												variant="outlined"
												required
											/>
										</Grid>
										<Grid
											item
											md={6}
											xs={12}
										>
											<TextField
												fullWidth
												label="País"
												name="País"
												variant="outlined"
												required
											/>
										</Grid>
									</Grid>
								</CardContent>
								<Divider />
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-end',
										p: 2
									}}
								>
									<Button
										style={button}
										sx={{ height: '40px' }}
									>
										Save details
									</Button>
								</Box>
							</Card>
						</form>
					</TabPanel>
					<TabPanel
						value={2}
					>
						<form
							autoComplete="off"
							noValidate
						>
							<Card>
								<CardHeader
									title="Privacidade"
								/>
								<Divider />
								<CardContent>
									<Grid
										container
										spacing={3}
									>
										<Grid
											item
											md={6}
											xs={12}
										>
											<TextField
												fullWidth
												label="Password"
												name="Password"
												required
												variant="outlined"
											/>
										</Grid>
										<Grid
											item
											md={6}
											xs={12}
										>
											<FormControlLabel
												style={{ padding: '12px' }}
												control={<Switch defaultChecked />}
												label="Subscrição newsletter"
												labelPlacement="start"
											/>
										</Grid>
									</Grid>
								</CardContent>
								<Divider />
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-end',
										p: 2
									}}
								>
									<Button
										style={button}
										sx={{ height: '40px' }}
									>
										Save details
									</Button>
								</Box>
							</Card>
						</form>
					</TabPanel>
					<TabPanel
						value={3}
					>
						<form
							autoComplete="off"
							noValidate
						>
							<Card>
								<CardHeader
									title="Histórico de compras"
								/>
								<Divider />
								<CardContent>
									<Grid
										container
										spacing={3}
									>
										<Grid
											item
											md={12}
											xs={12}
										>
											<Accordion
												expanded={expanded === 'panel1'}
												onChange={handleChangeAccordion('panel1')}
											>
												<AccordionSummary
													expandIcon={<ExpandMoreIcon />}
												>
													<Typography sx={{ width: '33%', flexShrink: 0 }}>
														{user.accordionInfo.title}
													</Typography>
													<Typography sx={{ color: 'text.secondary' }}>
														{user.accordionInfo.caption}
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography>
														{user.accordionInfo.info}
													</Typography>
												</AccordionDetails>
											</Accordion>
											<Accordion expanded={expanded === 'panel2'}
												onChange={handleChangeAccordion('panel2')}>
												<AccordionSummary
													expandIcon={<ExpandMoreIcon />}
												>
													<Typography sx={{ width: '33%', flexShrink: 0 }}>
														{user.accordionInfo.title}
													</Typography>
													<Typography sx={{ color: 'text.secondary' }}>
														{user.accordionInfo.caption}
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography>
														{user.accordionInfo.info}
													</Typography>
												</AccordionDetails>
											</Accordion>
											<Accordion expanded={expanded === 'panel3'}
												onChange={handleChangeAccordion('panel3')}>
												<AccordionSummary
													expandIcon={<ExpandMoreIcon />}
												>
													<Typography sx={{ width: '33%', flexShrink: 0 }}>
														{user.accordionInfo.title}
													</Typography>
													<Typography sx={{ color: 'text.secondary' }}>
														{user.accordionInfo.caption}
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography>
														{user.accordionInfo.info}
													</Typography>
												</AccordionDetails>
											</Accordion>
											<Accordion expanded={expanded === 'panel4'}
												onChange={handleChangeAccordion('panel4')}>
												<AccordionSummary
													expandIcon={<ExpandMoreIcon />}
												>
													<Typography sx={{ width: '33%', flexShrink: 0 }}>
														{user.accordionInfo.title}
													</Typography>
													<Typography sx={{ color: 'text.secondary' }}>
														{user.accordionInfo.caption}
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography>
														{user.accordionInfo.info}
													</Typography>
												</AccordionDetails>
											</Accordion>
										</Grid>
									</Grid>
								</CardContent>
								<Divider />
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-end',
										p: 2
									}}
								>
									<Button
										style={button}
										sx={{ height: '40px' }}
									>
										Save details
									</Button>
								</Box>
							</Card>
						</form>
					</TabPanel>
				</TabContext>
			</div>
		</div>
	)
}