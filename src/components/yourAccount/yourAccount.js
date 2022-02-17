import React, { Component } from 'react'
import './yourAccount.css'
import Detalhes from '../yourAccount/detalhes'
import Endereco from '../yourAccount/endereco'
import Privacidade from '../yourAccount/privacidade'
import Historico from '../yourAccount/historico'
import Title from '../utils/Title'
import { COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_10PX } from '../utils/border'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import UserImage from './userImage'
import { withStyles } from '@material-ui/core/styles'
import { clientApi, walletApi } from '../../api'
import { Button, TextField } from '@mui/material'
import { BORDER_RADIUS_5PX } from '../utils/border'
import Cookies from 'universal-cookie'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const useStyles = theme => ({
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
	userContentContainer: {
		float: 'right',
		padding: '15px',
	},
	userContent: {
		textOverflow: "ellipsis",
		overflow: "hidden",
		maxWidth: '100%',
	},
	tabs: {
		padding: '20px',
		color: COLOR_BDAZZLED_BLUE,
		'&:hover': {
			color: COLOR_SHADOW_BLUE,
		},
		'&.Mui-selected': {
			color: COLOR_PLATINIUM,
			backgroundColor: COLOR_BDAZZLED_BLUE,
			'&:hover': {
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
	},
	saldo: {
		backgroundColor: COLOR_BDAZZLED_BLUE,
		color: COLOR_PLATINIUM,
		'&:hover': {
			backgroundColor: COLOR_BDAZZLED_BLUE,
			color: COLOR_PLATINIUM,
		},
		borderRadius: BORDER_RADIUS_5PX,
		fontFamily: 'Viga',
		height: '50px',
	}
})

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class YourAccount extends Component {

	constructor(props) {
		super(props);
		this.state = {
			client: null,
			clientWallet: null,
			value: "0",
			isLoaded: false,
			addBalance: 0,
			open: false,
			errorMessage: "",
		}
	}

	componentDidMount() {

		let clientId = new Cookies().get('clientID')

		if (clientId === undefined || clientId === null)
			return

		clientApi.clientGet({ id: clientId }, (error, data) => {

			if (error) {
				console.error(error)
			} else {
				console.log('API called successfully.')
			}
			this.setState({
				client: data[0],
			});
		});

		walletApi.walletGet(clientId, (error, data) => {

			if (error) {
				console.error(error);
			} else {
				console.log('API called successfully.')
			}
			this.setState({
				isLoaded: true,
				clientWallet: data,
			});
		});
	}

	addBalance() {
		let clientId = new Cookies().get('clientID')

		walletApi.addBalanceGet(clientId, this.state.addBalance, (error, data, response) => {
			if (error) {
				this.setState({
					open: true,
					errorMessage: JSON.parse(response.text).error
				})
			} else {
				document.location.href = "/account"
			}
		});
	}

	handleChange(newValue) {
		this.setState({
			value: newValue
		});
	}

	render() {
		const { classes } = this.props
		const { isLoaded, client, clientWallet, addBalance, value } = this.state

		if (!isLoaded) {
			return <div>Loading...</div>
		}

		const handleClose = (event, reason) => {
			if (reason === 'clickaway') {
				return;
			}
			this.setState({
				open: false,
			})
		};

		return (
			<div className={classes.container}>
				<div className={classes.userContainer}>
					<div className="clearfix">
						<Title
							name={client.name + " " + client.surname}
							color={COLOR_BDAZZLED_BLUE}
						/>

						<UserImage client={client} />

						<div className={classes.userContentContainer}>
							<p className={classes.userContent}>Saldo: {clientWallet.coin}{clientWallet.balance.toFixed(2)}</p>
							<Box
								component="form"
								sx={{
									'& .MuiTextField-root': { m: 1, width: '140px' },
								}}
								display="flex"
								flexDirection="row"
								justifyContent="center"
								alignItems="center"
							>
								<TextField
									onChange={e => this.setState({ addBalance: e.target.value })}
									value={addBalance}
									type="number"
									InputProps={{ inputProps: { min: 1, max: 50 } }}
									size="small"
								/>
								<Button
									onClick={e => this.addBalance()}
									className={classes.saldo}
								>
									Adicionar Saldo
								</Button>
							</Box>

						</div>
					</div>
				</div>

				<div className="menu-bar">
					<TabContext value={value}>
						<Box sx={{ borderBottom: 2, marginBottom: 5 }}>
							<TabList
								onChange={(e, newValue) => this.handleChange(newValue)}
								variant="scrollable"
								scrollButtons
								allowScrollButtonsMobile
								TabIndicatorProps={{ className: classes.indicator }}
							>
								<Tab label="Detalhes" value={"0"} className={classes.tabs} />
								<Tab label="Endereço" value={"1"} className={classes.tabs} />
								<Tab label="Privacidade" value={"2"} className={classes.tabs} />
								<Tab label="Histórico de compras" value={"3"} className={classes.tabs} />
							</TabList>
						</Box>
						<TabPanel value={"0"}>
							<Detalhes />
						</TabPanel>
						<TabPanel value={"1"}>
							<Endereco />
						</TabPanel>
						<TabPanel value={"2"}>
							<Privacidade />
						</TabPanel>
						<TabPanel value={"3"}>
							<Historico />
						</TabPanel>
					</TabContext>
				</div>
				<Snackbar open={this.state.open} autoHideDuration={2500} onClose={handleClose}>
					<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
						{this.state.errorMessage}
					</Alert>
				</Snackbar>
			</div >
		)
	}
}

export default withStyles(useStyles)(YourAccount)