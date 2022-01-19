import { COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE } from './color'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { IconButton } from '@mui/material'

export default function CartButton() {

    return (
        <IconButton color="inherit" >
            <ShoppingCartIcon
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