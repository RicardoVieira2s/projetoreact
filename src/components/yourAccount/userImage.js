import React, { Component } from 'react'
import { COLOR_PLATINIUM } from '../utils/color'
import { Box, Modal, Grid } from '@mui/material'
import { Item } from '@mui-treasury/components/flex'
import { clientApi } from '../../api'
import { withStyles } from '@material-ui/core/styles'
import { dateWithoutTimeZone } from '../utils/date'
import camelCaseKeysToUnderscore from '../utils/api/camelCaseKeysToUnderscore'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const useStyles = theme => ({
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
})

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class UserImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openAlert: false,
            errorMessage: "",
        }
    }

    updateClientAvatar(url) {
        let client = this.props.client
        if (client == null)
            return
        client.picture = url
        client.birthdate = dateWithoutTimeZone(client.birthdate)
        let obj = camelCaseKeysToUnderscore(client)
        clientApi.clientPut(obj, obj.id, (error, data, response) => {
            if (error) {
                this.setState({
                    openAlert: true,
                    errorMessage: JSON.parse(response.text).error
                })
            }
            else { 
                window.location.reload(true)
            }
        })

        this.handleClose()
    }

    handleOpen() {
        this.setState({
            open: true
        });
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    render() {
        const { classes } = this.props;

        const handleCloseAlert = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }
            this.setState({
                openAlert: false,
            })
        };

        return (
            <>
                <img
                    onClick={e => this.handleOpen()}
                    src={this.props.client.picture}
                    alt=""
                    className={classes.imageBox}>
                </img>
                <Modal
                    open={this.state.open}
                    onClose={e => this.handleClose()}
                >
                    <Box className={classes.boxModalStyle}>
                        <Grid container>
                            <Grid item md={6} xs={12}>
                                <Item textAlign={"center"}>
                                    <img
                                        onClick={
                                            e => this.updateClientAvatar("http://localhost:3000/images/avatar/avatar-Man-1.png")
                                        }
                                        src={"http://localhost:3000/images/avatar/avatar-Man-1.png"}
                                        alt=""
                                        className={classes.avatares}>
                                    </img>
                                </Item>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Item textAlign={"center"}>
                                    <img
                                        onClick={
                                            e => this.updateClientAvatar("http://localhost:3000/images/avatar/avatar-Man-2.png")
                                        }
                                        src={"http://localhost:3000/images/avatar/avatar-Man-2.png"}
                                        alt=""
                                        className={classes.avatares}>
                                    </img>
                                </Item>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Item textAlign={"center"}>
                                    <img
                                        onClick={
                                            e => this.updateClientAvatar("http://localhost:3000/images/avatar/avatar-Woman-1.png")
                                        }
                                        src={"http://localhost:3000/images/avatar/avatar-Woman-1.png"}
                                        alt=""
                                        className={classes.avatares}>
                                    </img>
                                </Item>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Item textAlign={"center"}>
                                    <img
                                        onClick={
                                            e => this.updateClientAvatar("http://localhost:3000/images/avatar/avatar-Woman-2.png")
                                        }
                                        src={"http://localhost:3000/images/avatar/avatar-Woman-2.png"}
                                        alt=""
                                        className={classes.avatares}>
                                    </img>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>
                <Snackbar open={this.state.openAlert} autoHideDuration={2500} onClose={handleCloseAlert}>
                    <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%' }}>
                        {this.state.errorMessage}
                    </Alert>
                </Snackbar>
            </>
        )
    }
}

export default withStyles(useStyles)(UserImage)