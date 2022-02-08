import * as React from 'react';
import Rating from '@mui/material/Rating';
import { COLOR_BDAZZLED_BLUE } from './color'

export default function StarsReview( { ratingValue, size } ) {
    //const [value, setValue] = React.useState(2);
    console.log(size)
    return (
        <Rating
            name="simple-controlled"
            value={ratingValue}
            precision={0.5}
            readOnly={true}
            size={size}
            sx={{
                color: COLOR_BDAZZLED_BLUE,
                borderColor: COLOR_BDAZZLED_BLUE,
            }}
        />

    )
}