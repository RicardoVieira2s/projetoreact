import React, { Component } from 'react'
import { COLOR_PLATINIUM } from '../utils/color'
import { Box, Modal, Grid } from '@mui/material'
import { Item } from '@mui-treasury/components/flex'
import { clientApi } from '../../api'
import { withStyles } from '@material-ui/core/styles'

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
});

class UserImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            client: null,
            open: false,
            isLoaded: false,
        }
    }

    componentDidMount() {

        clientApi.clientGet({ id: "803fa231-8b7d-4b3c-8aee-a43bd17da8d4" }, (error, data) => {

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.');
            }

            this.setState({
                isLoaded: true,
                client: data[0],
            });
        });
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

    updateClientAvatar(url) {

        clientApi.clientPut('eeae714d-cf5a-419d-bcb6-a1e91a16de67', (error, data) => {

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.');
            }

            this.setState({
                isLoaded: true,
                clientUpdatePhoto: data,
            })
        });

    }

    render() {
        const { classes } = this.props;

        var { isLoaded, client, clientUpdatePhoto } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }

        return (
            <>
                <img onClick={e => this.handleOpen()} src={client.picture} alt="" className={classes.imageBox}></img>
                <Modal
                    open={this.state.open}
                    onClose={e => this.handleClose()}
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
                                    <img
                                        onClick={this.updateClientAvatar("http://localhost:3000/images/avatar/avatar-Man-1.png"), e => this.handleClose()}
                                        src={"http://localhost:3000/images/avatar/avatar-Man-1.png"} alt="" className={classes.avatares}>
                                    </img>
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
                                    <img
                                        onClick={this.updateClientAvatar("http://localhost:3000/images/avatar/avatar-Man-2.png"), e => this.handleClose()}
                                        src={"http://localhost:3000/images/avatar/avatar-Man-2.png"} alt="" className={classes.avatares}>
                                    </img>
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
                                    <img
                                        onClick={this.updateClientAvatar("http://localhost:3000/images/avatar/avatar-Woman-1.png"), e => this.handleClose()}
                                        src={"http://localhost:3000/images/avatar/avatar-Woman-1.png"} alt="" className={classes.avatares}>
                                    </img>
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
                                    <img
                                        onClick={this.updateClientAvatar("http://localhost:3000/images/avatar/avatar-Woman-2.png"), e => this.handleClose()}
                                        src={"http://localhost:3000/images/avatar/avatar-Woman-2.png"} alt="" className={classes.avatares}>
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
