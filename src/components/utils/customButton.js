import { Button } from '@mui/material'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from './color'
import { BORDER_RADIUS_3 } from './border'

export default function CustomButton({ name }) {

    return (
        <Button
            style={{
                backgroundColor: COLOR_BDAZZLED_BLUE,
                color: COLOR_PLATINIUM,
                ':hover': {
                    backgroundColor: COLOR_BDAZZLED_BLUE,
                    color: COLOR_PLATINIUM,
                },
                borderRadius: BORDER_RADIUS_3,
                fontFamily: 'Viga',
                height: '40px',
            }}
        >
            {name}
        </Button>
    )
}