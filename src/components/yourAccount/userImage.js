import React, { Component } from 'react'
import { COLOR_PLATINIUM } from '../utils/color'
import { Box, Modal, Grid } from '@mui/material'
import { Item } from '@mui-treasury/components/flex'
import { clientApi } from '../../api'
import { withStyles } from '@material-ui/core/styles'
import { dateWithoutTimeZone } from '../utils/date'
import camelCaseKeysToUnderscore from '../utils/api/camelCaseKeysToUnderscore'

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

class UserImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    updateClientAvatar(url) {
        let client = this.props.client
        if (client == null)
            return
        client.picture = url
        client.birthdate = dateWithoutTimeZone(client.birthdate)
        let obj = camelCaseKeysToUnderscore(client)
        clientApi.clientPut(obj, obj.id, (error, data) => {
            if (error) {
                console.error(error)
            } else {
                console.log('API called successfully.')
            }
        });

        this.handleClose()

        document.location.href = "/account"
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
            </>
        )
    }
}

export default withStyles(useStyles)(UserImage)