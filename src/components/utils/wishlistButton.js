import { COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE } from './color'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { IconButton } from '@mui/material'

export default function WishlistButton() {

    return (
        <IconButton color="inherit">
            <FavoriteIcon
                sx={{
                    color: COLOR_BDAZZLED_BLUE,
                    ':hover': {
                        color: COLOR_SHADOW_BLUE,
                    },
                    mt: '6px',
                }}
                fontSize="medium"
            />
        </IconButton>
    )
}