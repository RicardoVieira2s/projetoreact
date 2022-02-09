import React, { Component } from 'react'
import './yourAccount.css'
import Detalhes from '../yourAccount/detalhes'
import Endereco from '../yourAccount/endereco'
import Privacidade from '../yourAccount/privacidade'
import Historico from '../yourAccount/historico'
import CustomButton from '../utils/customButton'
import Title from '../utils/Title'
import { COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import { BORDER_RADIUS_10PX } from '../utils/border'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import UserImage from './userImage'
import { withStyles } from '@material-ui/core/styles'
import { clientApi, walletApi } from '../../api'
import Cookies from 'universal-cookie'

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
});

class YourAccount extends Component {

	constructor(props) {
		super(props);
		this.state = {
			client: null,
			clientWallet: null,
			value: "0",
			isLoaded: false,
		}
	}

	componentDidMount() {

		const cookies = new Cookies().get('clientID');

		clientApi.clientGet({ id: cookies }, (error, data) => {

			if (error) {
				console.error(error);
			} else {
				console.log('API called successfully.');
			}
			this.setState({
				client: data[0],
			});
		});

		walletApi.walletGet({ id: cookies }, (error, data) => {

			if (error) {
				console.error(error);
			} else {
				console.log('API called successfully.');
			}
			this.setState({
				isLoaded: true,
				clientWallet: data,
			});
		});
	}

	handleChange(newValue) {
		this.setState({
			value: newValue
		});
	}

	render() {
		const { classes } = this.props;

		var { isLoaded, client, clientWallet } = this.state;
		if (!isLoaded) {
			return <div>Loading...</div>
		}

		return (

			<div className={classes.container}>
				<div className={classes.userContainer}>
					<div className="clearfix">
						<Title
							name={client.name + " " + client.surname}
							color={COLOR_BDAZZLED_BLUE}
						/>

						<UserImage client={client}/>

						<div className={classes.userContentContainer}>
							<p className={classes.userContent}>Saldo: <br />{clientWallet.coin}{clientWallet.balance}</p>
							<CustomButton
								name={"Adicionar saldo"}
							/>
						</div>
					</div>
				</div>

				<div className="menu-bar">
					<TabContext value={this.state.value}>
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
			</div >
		)
	}
}

export default withStyles(useStyles)(YourAccount)