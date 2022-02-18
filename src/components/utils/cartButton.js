import { COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE } from './color'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { IconButton } from '@mui/material'
import { cartApi } from '../../api'
import Cookies from 'universal-cookie'
import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CartButton({ gameId, size = "medium" }) {

    const [open, setOpen] = React.useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    function addGameToClientCart(gameId) {

        let clientId = new Cookies().get('clientID')

        if (clientId === undefined || clientId === null) {
            window.location.href = "/login"
        }

        cartApi.cartPost(clientId, gameId, (error, data, response) => {
            if (error) {
                setAlertMessage(JSON.parse(response.text).error)
                setOpen(true);
            } else {
                window.location.reload(true);
            }
        });
    }

    return (
        <>
            <IconButton
                color="inherit"
                onClick={e => addGameToClientCart(gameId)}
            >
                <ShoppingCartIcon
                    sx={{
                        color: COLOR_BDAZZLED_BLUE,
                        ':hover': {
                            color: COLOR_SHADOW_BLUE,
                        },
                    }}
                    fontSize={size} />
            </IconButton>
            <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </>
    )
}