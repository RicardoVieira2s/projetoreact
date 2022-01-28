import * as React from 'react'
import { COLOR_PLATINIUM } from '../utils/color'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Modal, Grid } from '@mui/material'
import { Item } from '@mui-treasury/components/flex'

const useStyles = makeStyles(() => ({
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
}))

function updateClientAvatar(url) {

    //call api to update user
}

const avatars = {
    avatar1: "images/avatar/avatar-Man-1.png",
    avatar2: "images/avatar/avatar-Man-2.png",
    avatar3: "images/avatar/avatar-Woman-1.png",
    avatar4: "images/avatar/avatar-Woman-2.png",
}

const user = {
    avatar: "images/avatar/avatar-Woman-1.png",
}

function UserImage() {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
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
                                <img
                                    onClick={updateClientAvatar("http://localhost:3000/images/avatar/avatar-Man-1.png")}
                                    src={avatars.avatar1} alt="" className={classes.avatares}>
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
                                    onClick={updateClientAvatar("http://localhost:3000/images/avatar/avatar-Man-2.png")}
                                    src={avatars.avatar2} alt="" className={classes.avatares}>
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
                                    onClick={updateClientAvatar("http://localhost:3000/images/avatar/avatar-Woman-1.png")}
                                    src={avatars.avatar3} alt="" className={classes.avatares}>
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
                                    onClick={updateClientAvatar("http://localhost:3000/images/avatar/avatar-Woman-2.png")}
                                    src={avatars.avatar4} alt="" className={classes.avatares}>
                                </img>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}

export default UserImage
