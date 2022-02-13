import { COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE } from './color'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { IconButton } from '@mui/material'
import { wishlistApi } from '../../api'
import Cookies from 'universal-cookie'

export default function WishlistButton({ gameId, size="medium" }) {

    function addGameToClientWishlist(gameId) {

        let clientId = new Cookies().get('clientID')
        wishlistApi.wishlistPost(clientId, gameId, (error, data, response) => {
            if (error) {
                alert(JSON.parse(response.text).error);
            } else {
                window.location.reload(true);
            }
        });
    }

    return (
        <IconButton color="inherit"
            onClick={e => addGameToClientWishlist(gameId)}
        >
            <FavoriteIcon
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