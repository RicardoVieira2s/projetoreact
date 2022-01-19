import * as React from 'react';
import Rating from '@mui/material/Rating';
import { COLOR_BDAZZLED_BLUE } from './color'

export default function StarsReview( { ratingValue }) {
    //const [value, setValue] = React.useState(2);

    return (
        <Rating
            name="simple-controlled"
            value={ratingValue}
            precision={0.5}
            readOnly={true}
            sx={{
                color: COLOR_BDAZZLED_BLUE,
                borderColor: COLOR_BDAZZLED_BLUE,
            }}
        />

    )
}