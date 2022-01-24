import { Button } from '@mui/material'
import { COLOR_BDAZZLED_BLUE, COLOR_PLATINIUM } from './color'
import { BORDER_RADIUS_5PX } from './border'

export default function InvoiceButton({ name }) {

    return (
        <Button
            style={{
                backgroundColor: COLOR_BDAZZLED_BLUE,
                color: COLOR_PLATINIUM,
                borderRadius: BORDER_RADIUS_5PX,
                fontFamily: 'Viga',
                height: '40px',
                margin: '10px',
            }}
        >
            {name}
        </Button>
    )
}