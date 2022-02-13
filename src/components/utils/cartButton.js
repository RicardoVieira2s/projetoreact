import { COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE } from './color'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { IconButton } from '@mui/material'
import { cartApi } from '../../api'
import Cookies from 'universal-cookie'

export default function CartButton( { gameId, size="medium" }) {

    function addGameToClientCart(gameId) {

        let clientId = new Cookies().get('clientID')
        cartApi.cartPost(clientId, gameId, (error, data, response) => {
            if (error) {
                alert(JSON.parse(response.text).error);
            } else {
                window.location.reload(true);
            }
        });
    }

    return (
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
                fontSize={size}
            />
        </IconButton>
    )
}