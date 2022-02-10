import { Button } from '@mui/material'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from './color'
import { BORDER_RADIUS_5PX } from './border'

export default function CustomButton({ name, onClick }) {

    return (
        <Button
            style={{
                backgroundColor: COLOR_BDAZZLED_BLUE,
                color: COLOR_PLATINIUM,
                ':hover': {
                    backgroundColor: COLOR_BDAZZLED_BLUE,
                    color: COLOR_PLATINIUM,
                },
                borderRadius: BORDER_RADIUS_5PX,
                fontFamily: 'Viga',
                height: '40px',
            }}
            type='submit'
            onClick={onClick}
        >
            {name}
        </Button>
    )
}